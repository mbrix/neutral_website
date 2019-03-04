import React, { Component } from 'react';

interface Props {
  lines: any[]
}

class CompositionTableView extends Component<Props> {
  render() {
    const { lines } = this.props;
    const rows = lines.map(line => (
      <tr key={`line-comp-${line.token.address}`}>
        <td>{line.token.symbol}</td>
        <td>{line.balance.toString()}</td>
      </tr>
    ));

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Balance</th>
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
