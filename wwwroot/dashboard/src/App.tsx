import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NeutralVault from './services/vault/NeutralVault';
import CompositionView from './composition/CompositionView';
import config from './config';

interface State {
  lines: any
}

class App extends Component<{}, State> {
  vault?: any = undefined;
  state: State = { lines: {} };

  async componentDidMount() {
    this.vault = new NeutralVault(config.vaultAddress);
    await this.updateLineBalances();
  }

  async updateLineBalances() {
    let balanceSum = 0;
    const balances = await Promise.all(config.tokens.map(async token => {
      const balance = await this.vault.getLineBalance(
        config.nusd.address,
        token.address,
      );

      balanceSum += balance.toNumber();
      return ({ balance, token });
    }));

    this.setState({
      lines: balances.map(balance => ({
        ...balance,
        percent: balance.balance.toNumber() / balanceSum * 100,
      })),
    });
  }

  render() {
    const { lines } = this.state;
    const components = Object.keys(lines).map(line => lines[line]);

    return (
      <div className="App">
        <CompositionView
          lines={components}
        />
      </div>
    );
  }
}

export default App;
