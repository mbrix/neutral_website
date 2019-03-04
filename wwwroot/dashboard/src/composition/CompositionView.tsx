import React, { Component } from 'react';
import CompositionChartView from './CompositionChartView';
import CompositionTableView from './CompositionTableView';

interface Props {
  lines: any[]
}

class CompositionView extends Component<Props> {
  render() {
    const { lines } = this.props;

    return (
      <div>
        <div className="composition-header">
          Basket Composition
        </div>
        <div className="chart-column">
          <CompositionChartView
            lines={lines}
          />
        </div>
        <div className="table-column">
          <CompositionTableView
            lines={lines}
          />
        </div>
      </div>
    );
  }
}

export default CompositionView;
