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
    const balances = await Promise.all(config.tokens.map(async token => {
      const balance = await this.vault.getLineBalance(
        config.nusd.address,
        token.address,
      );

      return ({ balance, token });
    }));

    this.setState({ lines: balances });
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
