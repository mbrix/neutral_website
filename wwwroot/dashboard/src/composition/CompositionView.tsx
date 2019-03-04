import React, { Component } from 'react';
import CompositionTableView from './CompositionTableView';

interface Props {
  lines: any[]
}

class CompositionView extends Component<Props> {
  render() {
    const { lines } = this.props;

    return (
      <div>
        Collateral lines
        <CompositionTableView
          lines={lines}
        />
      </div>
    );
  }
}

export default CompositionView;
