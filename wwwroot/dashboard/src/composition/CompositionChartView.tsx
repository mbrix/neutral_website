import * as React from 'react';
import * as d3 from 'd3';
import { ethers } from 'ethers';
import CompositionChartWedgeView from './CompositionChartWedgeView';
import './Styles.css';

type BasketComponentStat = any;

interface Props {
  lines: BasketComponentStat[]
}

interface State {
  activeToken: BasketComponentStat
}

type PieDatum = {
  name: string,
  value: number,
};

type SVGFillData = {
  data: number | { valueOf(): number; },
  startAngle: number,
  endAngle: number,
  index: number,
  padAngle: number,
  value: number,
};

const CHART_SIZE = 230;
const CHART_THICKNESS = 24;
const CHART_RADIUS = CHART_SIZE / 2;
const colorFn = d3.scaleOrdinal(d3.schemeCategory10);
const getTokenColor = (token: string) => {
  switch(token) {
    case 'TUSD':
      return '#56cabd';
    case 'USDC':
      return '#2775CA';
    case 'DAI':
      return '#fdb134';
    case 'PAX':
      return '#00805a';
  }
};

class CompositionChartView extends React.Component<Props, State> {
  state: State = { activeToken: undefined };

  onHoverWedge = (activeToken: BasketComponentStat) => {
    this.setState({ activeToken });
  }

  onHoverOut = () => {
    this.setState({ activeToken: undefined });
  }

  renderLoader() {
    const { lines } = this.props;
    if (lines.length) {
      return null;
    }

    return (
      <div className="chart-loader" />
    );
  }

  renderTokenInfo() {
    const { activeToken } = this.state;
    if (!activeToken || !activeToken.token) {
      return null;
    }

    /*&nbsp;({activeToken.percent.toFixed(2)}%)*/
    return (
      <div className="chart-token-info">
        <div className="chart-token-symbol">
          {activeToken.token.symbol.toUpperCase()}
        </div>
        <div className="chart-token-balance">
          {ethers.utils.commify(activeToken.balance.toString())}
        </div>
      </div>
    );
  }

  // Generates a d3 chart in a placeholder div, then copies the
  // svg path values over to new elements. This can be improved, but
  // it's an easy way of avoiding dangerouslySetInnerHTML.
  renderCompositionDonut() {
    const { lines } = this.props;
    if (!lines.length) {
      return null;
    }

    const data: PieDatum[] = lines.map(line => ({
      name: line.tokenSymbol,
      value: line.balance || 0,
    }));

    const svg = d3.create('div')
      .append('svg')
      .attr('width', CHART_SIZE)
      .attr('height', CHART_SIZE);

    const g = svg.append('g')
      .attr('transform', `translate(${CHART_RADIUS},${CHART_RADIUS})`);

    const arc = d3.arc()
      .innerRadius(CHART_RADIUS - CHART_THICKNESS)
      .outerRadius(CHART_RADIUS);

    const pie = d3.pie().value((d: any) => d.value).sort(null);

    const path = g.selectAll('path')
      .data(pie(data as any))
      .enter()
      .append('g')
        .append('path')
        .attr('d', arc as any)
        .attr('fill', (_: SVGFillData, i: number) => getTokenColor(lines[i].token.symbol))
        .each(function (_: any, i: number) { (this as any)._current = i; });

    const wedges = path.nodes().map((path: any, index: number) => (
      <CompositionChartWedgeView
        key={`chart-wedge-${index}`}
        d={path.attributes.d.value}
        fill={path.attributes.fill.value}
        token={lines[index]}
        onHover={this.onHoverWedge}
      />
    ));

    return (
      <svg
        width={CHART_SIZE}
        height={CHART_SIZE}
        onMouseOut={this.onHoverOut}
      >
        <g transform={g.attr('transform')}>
          {wedges}
        </g>
      </svg>
    );
  }

  render() {
    return (
      <div className="composition-chart">
        {this.renderCompositionDonut()}
        {this.renderLoader()}
        {this.renderTokenInfo()}
      </div>
    );
  }
}

export default CompositionChartView;
