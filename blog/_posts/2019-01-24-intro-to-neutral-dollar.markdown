---
layout: post
title:  "Intro to Neutral Dollar"
date:   2019-01-24 12:00:00 -0400
categories: jekyll update
---

# Intro to Neutral Dollar

![](https://cdn-images-1.medium.com/max/2400/1*s8W2B7R8KpylRzu_IBYJOA.png)

**Introduction**

The crypto industry is experiencing a strong proliferation of stablecoins, which
serve as an tangible, applicable use case for wider blockchain adoption. In a
high-level overview of these tokens in an article, [located
here](https://medium.com/@neutralproject/an-introduction-to-stablecoins-6a2a6c67d447),
we discuss the current landscape and different models a stablecoin can express.
In light of analyzing the outlook for stablecoins, we realized several
vulnerabilities that other products exhibit and sought to create something more
appropriate in the spirit of expanding an open, decentralized financial system.

With that, our company is excited to announce our first product — the Neutral
Dollar. We blend a combination of interdisciplinary topics such as economics,
finance, and statistics to offer a token that has lower volatility along with
on-chain transparency, thereby being able to provide the best utility purposes
out of any other stablecoin in the market.

![](https://cdn-images-1.medium.com/max/1600/0*pcVJ_MoKsx-Mzar8)

**The Neutral Dollar**

On the surface, the Neutral Dollar is an aggregate basket that represents a
collection of several stablecoins. By design, the Neutral Dollar is intended to
be equal quantity weighted. For example, 5 DAI, TUSD, PAX, and USDC in total
would comprise 20 Neutral Dollar (NUSD) tokens. One benefit of having a basket
built with these tokens is that the amount of the underlying components to the
total supply of Neutral Dollar is verifiable on the blockchain.

A natural question is to wonder why creating another stablecoin with underlying
stablecoins is a good idea. Aggregation seems like a simple concept, but doing
so can surprisingly demonstrate key advantages.

**Proving the Benefits of Aggregation**

There are many different stablecoin models, and it’s impossible to fully assess
the solvency or credit risk of an individual stablecoin whether it’s
fiat-backed, crypto-backed, or algorithmic. A common way to assess the potential
uncertainties with a stablecoin is to observe its price fluctuations, also known
as an asset’s volatility or standard deviation. By aggregating several different
stablecoins together into a basket (can also be referred to as a portfolio), one
can actually limit the amount of counterparty exposure and thus the overall
price movements. This benefit from aggregating several different assets can be
measured by a concept called diversification.

![](https://cdn-images-1.medium.com/max/1600/0*zXRIHCTZmJqcMyu6)
<span class="figcaption_hack">The formula to calculate the variance of a portfolio</span>

The diversification benefits from an aggregated basket is dependent to the
individual weights and volatilities of the underlying components. The beauty of
this calculation shows that the overall portfolio volatility will never be
greater than that of its most volatile constituent, but *can and will likely*
possess a lower risk profile not achievable by any individual component. We can
show this by demonstrating the diversification effect through a range of
[possible covariance
values](https://en.wikipedia.org/wiki/CauchyâSchwarz_inequality). In this
didactic, equal-weighted portfolio example below, we calculate the possible
range of portfolio standard deviations from two assets whose volatilities are
both 20% respectively. Included in this comparison is also the correlation
between the two assets, which is simply a grounded measure between -1 and 1 of
the covariance values.

![](https://cdn-images-1.medium.com/max/1600/1*V0OIFxlfwxs3FDtNTiMHkw.png)

The table above shows that the range of portfolio volatility values in this
example can range from 0–20%. This specific case demonstrates that the portfolio
is more stable than the underlying assets when the correlation is less than 1.
In simpler terms, one asset in your portfolio may *zig* while another may *zag*,
which helps your aggregate instrument maintain consistency. This is what governs
our proposition for the Neutral Dollar as a better behaving stablecoin.

For our purposes we found this diversification benefit to take into effect
positively even despite most cryptocurrencies being fairly correlated with one
another — our Neutral Dollar product experienced less price fluctuations than
any individual constituent when we aggregated them together. Below is an
empirical analysis of the price fluctuations of underlying stablecoins compared
to our basket.

![](https://cdn-images-1.medium.com/max/1600/0*x_dKVwErYJEBYlHk)

This chart shows that from our analysis a basket of stablecoins possesses a
lower volatility than any of the individual constituents under our protocol.
When the Neutral Dollar’s stability is compared to any of the other stablecoins,
it possesses at least 28% less volatility — indicating a meaningful improvement.

Our team was also concerned how our aggregate product would behave in events
where the constitution of the Neutral Dollar was not equal quantity weighted. We
tried to address our question with simulation to assess the stability of the
basket, and the results were promising.

![](https://cdn-images-1.medium.com/max/1600/0*rOxawhxtO8RKULM-)

Above is a graphic of a volatility surface that depicts the % of volatility
increase relative to the weighting of our basket in extreme conditions. Even in
an extreme weighting situation, the requirement for the volatility of a Neutral
Dollar token to increase 28% would have to be quite large. Our team has
concluded that even large imbalances to the composition of the Neutral Dollar
still make it less volatile than any single stablecoin in the market today. If
any newly traded stablecoin exhibits low volatility and isn’t strongly
correlated to the rest of the constituents, we can simply add this as a
constituent into our Neutral Dollar basket and likely create a even more stable
stablecoin. *The reconstitution of the basket gives us the ability to lessen any
price fluctuations, and gives our product a constant, competitive advantage no
matter what new competition arises.*

**Roadblocks and the Need for a Better Solution**

To be clear, the concept of aggregating assets into a basket is not a novel
idea. The qualities of diversification is conventional wisdom for those
knowledgeable in investing. The difficulty lies in maintaining and rebalancing
the product in response to supply and demand. A traditional example to highlight
is with an exchange-traded fund (ETF). An ETF is an aggregated, diversified
product that can be traded intraday. However, to create new shares of an ETF
represents a large barrier in that somebody (a market maker) would have to seek
and purchase the underlying components, possibly through various exchanges, to
construct an additional share. This delivery of assets makes the creation and
redemption process of an ETF difficult to interact with given the sophistication
required to source components in response to individual underlying price
fluctuations of assets.

In addition, there lacks infrastructure to provide an opportunity to exchange
assets. For example, say Alice likes to invest and currently holds a position in
Apple stock. She now wants to sell out of her position and enter a trade to buy
Microsoft stock. In this scenario, Alice must liquidate her position in Apple
into cash only to convert it into Microsoft stock. Now if Alice also has a large
position in Apple, she may find it difficult to exit her position because
certain exchanges may not be liquid enough for her to give a reasonable
execution price. These real world limitations of fees, fragmented liquidity,
unnecessary conversions, and slippage are all issues that prevent Alice from
properly managing her investments. The use case for a better solution to
swapping is left much to be desired.

**An Innovative Design**

What distinguishes our construction from any currently existing framework is
that our team has cleverly devised a mechanism to effectively rebalance,
aggregate liquidity, and allow token swaps in our basket without bearing large
costs. The design was intended to overcome and address problems seen in the
traditional markets, and empower users to participate on our platform so long as
they hold any stablecoin that the Neutral Dollar supports. This removes a large
barrier in which anybody can go between positions interchangeably with less
friction. A participant no longer has to go into the market and purchase
underlying components to construct a basket, but can mint new supply by
delivering only a single constituent. He or she also has the ability to swap
stablecoin tokens for one another. The Neutral Dollar system is built to be
liquidity- and exchange- neutral, which results in a much larger liquidity
source for people to interact on.

![](https://cdn-images-1.medium.com/max/1600/0*GQRB9ZB5M-EkiY06)

The rebalancing of the Neutral Dollar product is done via a continuous pricing
mechanism that adjusts to ensure consistent weighting for each component
relative to our overall basket, as a result from activity on our platform over
time. Not only have we shown that the Neutral Dollar can endure a great deal of
imbalance while still maintaining stability in extreme situations, but we’ve
also determined that underlying components of the Neutral Dollar will lean
towards appropriate weighting due to profit-seeking behavior from participants
that aid in driving the underlying liquidity.

![](https://cdn-images-1.medium.com/max/1600/1*g1xsdhNaA8U3H_qe-GhPhw.png)

Our team simulated behavior in response to historical price fluctuations,
backtesting the system design. We found that the weights of each stablecoin in
the Neutral Dollar basket are range-bound over time based on our continuous
pricing methodology, and that the aggregate volatility is still less than any
individual component. In addition there are controls in place to make sure that
behavior to provide this underlying liquidity for the Neutral Dollar basket is
not adverse, and that the resulting product is delivering on its value
proposition.

**Conclusion**

The Neutral Dollar structure solves many core problems observed with
stablecoins. Many exchanges’ stablecoin reserves have a huge liquidity imbalance
problem from a lack of natural market forces, being too exposed to one
stablecoin versus another. As a result, users may find it difficult to trade
into other stablecoins due to this fragmented liquidity. The Neutral Dollar
construction process and equal quantity design provides a rational incentive to
balance collateral, provide liquidity, and mitigate counterparty risk. Our
basket has been tested to be robust under various market conditions to address
the needs from supplies and demands. In addition, we have shown that our
aggregate product can also tolerate scenarios where collaterals of stablecoins
are imbalanced. Lastly, we’ve simulated that the weighting of the Neutral Dollar
components will converge towards stability by liquidity providers in response to
our pricing mechanism. Our team intends to launch a better product for
end-consumers, a service for users to interchange stablecoins for one another
efficiently, and a solution for exchanges to balance their reserves.

We believe that a lower volatility instrument is the main driving point for a
stablecoin. This aspect will make the Neutral Dollar a stronger case for a store
of value, medium of exchange, and digital trading instrument. Our stablecoin has
the ability to scale while maintaining lower volatility and full
collateralization on-chain, which no other stablecoin can properly do today.
Because of its low volatile nature, we hope to also broaden dApp usage related
to remittance or lending services. Our protocol aims to ensure value
preservation, interchangeability, and transparency through the system.

The Neutral Dollar exhibits all the traits that make a stablecoin effective,
making it the standard that other stablecoins have to rival against. Our team
hopes to educate and inspire others to utilize our product, progress crypto
adoption, and participate in our ecosystem.

— — — —

If you’re interested in learning more about our team and products, [check out
our website](http://www.neutralproject.com/) or start a conversation with us on
[Telegram](https://t.me/neutralproject) or
[Twitter](http://www.twitter.com/neutral_project).

* [Blockchain](https://medium.com/tag/blockchain?source=post)
* [Bitcoin](https://medium.com/tag/bitcoin?source=post)
* [Stable Coin](https://medium.com/tag/stable-coin?source=post)
* [Cryptocurrency](https://medium.com/tag/cryptocurrency?source=post)
* [Fintech](https://medium.com/tag/fintech?source=post)

### [Neutral](https://medium.com/@neutralproject)

Neutral Dollar is a metastable basket of stablecoins. The result is a digital
dollar which has lower volatility and combines fragmented pools of liquidity

