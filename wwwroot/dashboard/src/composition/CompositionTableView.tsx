import React, { Component } from 'react';

interface Props {
  lines: any[]
}

class CompositionTableView extends Component<Props> {
  render() {
    const { lines } = this.props;
    const rows = lines.map(line => (
      <tr key={`line-comp-${line.token.address}`}>
        <td className="align-left">{line.token.symbol}</td>
        <td className="align-right">{line.percent.toFixed(2)}%</td>
        <td className="align-right">{line.balance.toString()}</td>
      </tr>
    ));

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th className="align-left">Token</th>
              <th className="align-right">Allocation</th>
              <th className="align-right">Volume</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CompositionTableView;
