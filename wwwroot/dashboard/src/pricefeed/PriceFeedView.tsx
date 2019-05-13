import React, { Component } from 'react';

interface Props {
  quote: any
}

class PriceFeedView extends Component<Props> {
  renderTable() {
    const { quote } = this.props;
    if (!quote) {
      return (
        <tr>
          <td colSpan={5} className="align-left">Loading...</td>
        </tr>
      );
    }

    const q = ['TUSD', 'USDC', 'DAI', 'PAX'];
    const unsorted = quote.getWrapped().getSignedbasequote().getWrapped().getSubquotesList();
    const quotes = unsorted.sort((q1, q2) => {
      const s1 = q1.getQuote().getPair().getQuotecurrency().getSymbol();
      const s2 = q2.getQuote().getPair().getQuotecurrency().getSymbol();
      return q.indexOf(s1) - q.indexOf(s2);
    });

    return quotes.map(quote => {
      const tokenSymbol = quote.getQuote().getPair().getQuotecurrency().getSymbol();
      const minBid = quote.getQuote().getMinbidquantity();
      const maxBid = quote.getQuote().getMaxbidquantity();
      const minAsk = quote.getQuote().getMinaskquantity();
      const maxAsk = quote.getQuote().getMaxaskquantity();
      return (
        <tr key={`quote-row-${tokenSymbol}`}>
          <td className="align-left">{tokenSymbol}</td>
          <td className="align-right">
            {quote.getNav().getValue()}
          </td>
          <td className="align-right">
            {quote.getQuote().getBid().getValue()}
          </td>
          <td className="align-right">
            [{minBid}, {maxBid}]
          </td>
          <td className="align-right">
            {quote.getQuote().getAsk().getValue()}
          </td>
          <td className="align-right">
            [{minAsk}, {maxAsk}]
          </td>
        </tr>
      );
    });
  }

  renderQuoteMeta() {
    const { quote } = this.props;
    if (!quote) {
      return null;
    }

    const wrapped = quote.getWrapped().getSignedbasequote().getWrapped();
    const blockNumber = wrapped.getAtblockno();
    const createdAt = wrapped.getCreatedat().getUtcmicrotime();
    const flags = wrapped.getFlagsList();
    const flagsText = flags && flags.length ? flags.join(', ') : 'None';

    return (
      <div className="quote-meta">
        <div>Block #: {blockNumber}</div>
        <div>Timestamp: {(new Date(createdAt / 1000)).toISOString()}</div>
        <div>Flags: {flagsText}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="quote-wrapper">
        <div className="quote-header">
          Most Recent Quote
        </div>
        <table>
          <thead>
            <tr>
              <th className="align-left">Token</th>
              <th className="align-right">NAV</th>
              <th className="align-right">Bid</th>
              <th className="align-right">Bid Range</th>
              <th className="align-right">Ask</th>
              <th className="align-right">Ask Range</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>
        {this.renderQuoteMeta()}
      </div>
    );
  }
}

export default PriceFeedView;
