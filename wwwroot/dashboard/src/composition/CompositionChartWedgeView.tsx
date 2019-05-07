import * as React from 'react';
import './Styles.css';

type BasketComponentStat = any;

interface Props {
  token: BasketComponentStat
  d: string
  fill: string
  onHover: (token: BasketComponentStat) => void
}

class CompositionChartWedgeView extends React.Component<Props> {
  onHover = () => {
    const { token, onHover } = this.props;
    onHover(token);
  }

  render() {
    const { d, fill } = this.props;

    return (
      <g
        className="chart-wedge"
        onMouseOver={this.onHover}
      >
        <path
          d={d}
          fill={fill}
        />
      </g>
    );
  }
}

export default CompositionChartWedgeView;
