import React, { Component } from 'react';
import { ethers } from 'ethers';
import logo from './logo.svg';
import './App.css';
import NeutralVault from './services/vault/NeutralVault';
import QuoteService from './services/quotes/QuoteService';
import CompositionView from './composition/CompositionView';
import PriceFeedView from './pricefeed/PriceFeedView';
import config from './config';

interface State {
  lines: any
  lastQuote?: any
  environment: string
}

class App extends Component<{}, State> {
  vault?: any = undefined;
  state: State = { environment: 'Homestead', lines: {} };
  updateInterval?: any = undefined;

  async componentDidMount() {
    await this.init();
  }

  init = async () => {
    const { environment } = this.state;
    this.vault = new NeutralVault(
      config.get(environment, 'vaultAddress'),
      config.get(environment, 'providerUrl'),
    );
    QuoteService.init(
      config.get(environment, 'gatewayUrl'),
      config.get(environment, 'nusd').address,
    );
    QuoteService.setQuoteStreamListener(this.onReceiveQuote);
    QuoteService.connect();
    await this.updateLineBalances();
    clearInterval(this.updateInterval);
    this.updateInterval = setInterval(this.updateLineBalances.bind(this), 10000);
  }

  onChangeEnvironment = (e) => {
    this.setState({
      lines: {},
      lastQuote: undefined,
      environment: e.target.value,
    }, this.init);
  }

  onReceiveQuote = (lastQuote) => {
    this.setState({ lastQuote });
  }

  async updateLineBalances() {
    const { environment } = this.state;
    const tokens = config.get(environment, 'tokens');
    let balanceSum = 0;
    const balances = await Promise.all(tokens.map(async token => {
      const balance = await this.vault.getLineBalance(
        config.get(environment, 'nusd').address,
        token.address,
      );

      balanceSum += parseFloat(ethers.utils.formatUnits(balance, token.decimals));
      return ({
        token,
        balance: parseFloat(ethers.utils.formatUnits(balance, token.decimals)),
      });
    }));

    this.setState({
      lines: balances.map((balance: any) => ({
        ...balance,
        percent: balance.balance / (balanceSum || 1) * 100,
      })),
    });
  }

  renderEnvironmentControl() {
    const { environment } = this.state;

    // Disable for public view
    return null;

    return (
      <div className="environment-control">
        <select
          value={environment}
          onChange={this.onChangeEnvironment}
        >
          <option value="AWS">Staging (AWS)</option>
          <option value="Ropsten">Staging (Ropsten)</option>
          <option value="Homestead">Homestead</option>
        </select>
      </div>
    );
  }

  render() {
    const { lines, lastQuote, environment } = this.state;
    const components = Object.keys(lines).map(line => lines[line]);
    const address = config.get(environment, 'nusd').address;

    return (
      <div className="App">
        {this.renderEnvironmentControl()}
        <div className="address-info">
          NUSD Contract Address:
          <span className="address-mono">
            <a href={`https://etherscan.io/token/${address}`} target="_blank">
              {address}
            </a>
          </span>
        </div>
        <CompositionView
          lines={components}
        />
        <PriceFeedView
          quote={lastQuote}
        />
      </div>
    );
  }
}

export default App;
