---
layout: post
title:  "Visualizing Metastability"
date:   2019-03-05 12:00:00 -0400
image: "https://cdn-images-1.medium.com/max/1600/1*JhqxoaQpR1fMFKjr0GV5sA.png"
categories: posts
---

# Visualizing Metastability

![](https://cdn-images-1.medium.com/max/1600/1*JhqxoaQpR1fMFKjr0GV5sA.png)

**Visualizing Metastability for Neutral Dollar (NUSD)**

**Key Takeaways**

* Neutral Dollar is a basket of stablecoins which inherits attractive properties
due to its metastable design. Our aggregate product allows for portfolio
diversification benefits and the construction of an efficient rebalancing
mechanism to closely track collateralized stablecoins. We can make generalized
assessments about its superiority after measuring its simulated behavior over
multiple time periods.
* Neutral Dollar can track the U.S. Dollar and generally has less price movements,
proving its worthiness as a better stablecoin than any underlying constituent.
* Potential downside risk is mitigated due to diversification, indicating that a
Neutral Dollar can serve as a hedge against idiosyncratic capital loss and a
solution for stablecoin portfolio management.
* In order for Neutral Dollar to become more volatile than any stablecoin
alternative, a great deal of imbalance would need to occur, the probability of
which is unlikely. This is due to market activity forcing a balanced composition
in the open-end structure.
* By diversifying exposure and introducing new stablecoins into the Neutral Dollar
basket, we’re able to be competitive in the marketplace. The process of coin
additions does not detract value from the basket itself.

**Analysis, Interpretation, and Summaries**

At Neutral, we are designing an [aggregate basket of
stablecoins](https://medium.com/@neutralproject/intro-to-neutral-dollar-98f95d1ff9f4)
which has a more subdued risk profile than any single stablecoin project today,
and can expect this to hold for the foreseeable future. Financial theory
highlights that an aggregate product can have lower volatility than any
individual constituent, and we can showcase this visually in the context of
Neutral Dollar. We can assess the stability of our token in comparison to
underlying stablecoins across various metrics surrounding price and risk.

Furthermore, our innovative product construction is designed to be liquidity-
and exchange- neutral, meaning it is possible to create new Neutral Dollar
tokens by collateralizing supported stablecoins. While Neutral Dollar is
equal-quantity weighted, trading-based activity can drive slight imbalances due
to market behavior. To address potential concerns, we utilized optimization
techniques to identify weighting compositions of the underlying assets that
would result in higher volatility of the basket. Then, rigorous simulation was
conducted to see how the basket effectively balances in response to market
pricing. Lastly, we blended these analyses to account for the addition of
another stablecoin to the basket, taking into the account how it would affect
the behavior of the newly constituted Neutral Dollar. Our findings across many
dimensions show how Neutral Dollar is a superior and better digital dollar to
use for any stablecoin-related purposes.

To start, the composition of Neutral Dollar (NUSD) will initially comprise four
stablecoins: *USDC*, *PAX*, *TUSD*, and *DAI*. The proposition of these
stablecoins imply that each is valued at 1 U.S. Dollar. However, the price of
each stablecoin won’t be reflective of this: trading activity can force
deviations from this reference. There are idiosyncrasies such as credit risk,
inflows/outflows, redemption qualities, and counterparty behavior that
distinguish stablecoins from one another. By combining these stablecoins
together, we reduce the overall exposure to these idiosyncrasies and can produce
a more stable token that fluctuates more closely to the intended value.

Shown below are the historical prices of the underlying constituents along with
Neutral Dollar. We expect these stablecoin prices to hover around 1 U.S. Dollar.

![](https://cdn-images-1.medium.com/max/1600/0*SAy7piEt0NdZsfwR)

Based on this chart, we see that these stablecoins are actually not priced at
exactly $1. In fact, these stablecoins can trade from to $.98 to $1.08. The
prices will tend to roughly float around $1, but fluctuate depending on the
market’s perception of the quality of the specific stablecoins. When we want to
identify which stablecoin would be the best, we could visually try to interpret
which stablecoin would have the less movements. Understandably, it’s hard to
tell exactly which stablecoin is better when all of them are overlaid in a
graph, so we generate analytics to assess the stability of each within this time
period. The first measure we can interpret this price behavior with is **price
volatility**, which is a general measure of the movement of asset prices in a
period of time. Additionally for our purposes, we also calculate the volatility
of each stablecoin relative to Neutral Dollar, to demonstrate the power of a
metastable basket.

![](https://cdn-images-1.medium.com/max/1600/0*t8wIUiOuL4C9-r-d)

We can see from this table that the PAX has 29% more volatility than NUSD, the
second most robust stablecoin in this time period. Similarly, we can also
interpret that DAI possesses more than *twice* the volatility of our stablecoin.
Based on this table, we can conclude that Neutral Dollar is clearly a more
compelling product than the rest.

Now, we would be doing a huge disservice to stop our analyses here, as it is
quite incomplete. First, the time period during which all underlying
stablecoin-price data was available in October 2018. At the moment of this
writing, not even 6 months of historical data can be used for testing which can
make our claim less meaningful if we don’t know if our statements can hold over
time. Second, substantiated evidence in finance cannot be based on a single time
period, but must be assessed over several. This is the same concept as finding
out a strategy that would do well in crypto markets in 2017 vs. applying the
same strategy in 2018 — there will be wildly different results which could
potentially multiply your wealth or obliterate it. Given the scarcity in
available historical data, we need a way to assess if Neutral Dollar can be
robust throughout time. Fortunately, we can do this by calculating metrics on a
*rolling period*.

A rolling period is a method to eliminate biases towards any specific range of
time. It’s a more methodical way to assess whether future performance is
reliable on past performance or not. While there are still other associated
risks when implementing this (just as any approach will never ‘guarantee’ a
certain return), we can effectively remove this time bias. In the first graph
and table, we only sampled a single time period and made a claim that Neutral
Dollar is superior. Now for rolling periods, we sample every 5 minutes a 12-hour
window of historical data — effectively creating over **30,000** time periods to
assess against. The findings from this experiment setup can better reinforce or
dispute our statements.

In addition, we introduce two metrics we can evaluate along with volatility in
order to get a better sense of overall price stability:

* **Deviation**: as in, how much that stablecoin strayed away from the reference
of 1 U.S. Dollar.
* **Fluctuation**: meaning the total movement of price.

We evaluated across these rolling time periods which stablecoin had the maximum
and minimum statistic as these measures all consider both upwards and downwards
price directions.

![](https://cdn-images-1.medium.com/max/1600/1*CUOCr7B7gla8GlBIWkTUsQ.png)

The left chart shows Neutral Dollar rarely has the most deviation from one
dollar — only happening in 0.3% of all the time periods we evaluated. The next
best stablecoin is PAX, having maximum deviation occurring 2.5% of the time. DAI
often has the most deviation as 40% of the time it is the least stable token
within the basket. On the right pie chart, Neutral Dollar shines in that
majority of the time the aggregate basket has the lowest deviation value from 1
U.S. Dollar. Interestingly, DAI has the minimum amount of deviation 14.2% of the
time, possibly indicating that there are time periods where DAI is very stable
and time periods where DAI is very volatile, indicating that it has different
exposure risks than the fiat-backed stablecoins.

![](https://cdn-images-1.medium.com/max/1600/1*nWwcWMlhtmHnDOuY3Bqhkg.png)

A very similar story can be told here: Neutral Dollar actually never had the
most fluctuation in a 12-hour window, and 39.8% of the time had the least amount
of fluctuations.

![](https://cdn-images-1.medium.com/max/1600/1*CB7_tvyHVx80soFJyYL-xg.png)

When assessing volatility, Neutral Dollar never had the maximum volatility, and
it had the lowest volatility of any underlying stablecoin 44.1% of the time.

To conclude our findings when it comes to price stability, we see that Neutral
Dollar is *very* robust across the multiple time periods we tested in comparison
to other stablecoins. This gives us assurance that Neutral Dollar is stable in
terms of price, resulting in a better stablecoin which is both less volatile and
more closely references a U.S. dollar value than any individual stablecoin can.

We can further extend our analyses even more by focusing on metrics that can
assuage users, particularly downside movements. All the metrics prior showcased
how Neutral Dollar is more stable in terms of price, considering movements both
up and down. When we want to detail what potential risks are, we are far more
concerned about downside movements that associate with a loss of capital.
Selected are two metrics to analyze this potential, the first being **Value at
Risk **(VaR). VaR is a method to contextualize with a certain level of
confidence, what could be the potential loss in a given time period. There are
many methods to evaluate the distribution of losses by estimating the
probability density function, but the general idea is similar in that VaR always
looks at potential drawdowns in one’s holdings.

![](https://cdn-images-1.medium.com/max/1600/0*tPZhwADVFVnheHzY)
*Source: [Wikipedia](https://en.wikipedia.org/wiki/Value_at_risk)*

For our experiment, we computed a historical daily 95% VaR metric across the
available data we have. Not much assessment can be made from the graph below
because the overlaid data can get messy, though we can see brief moments where
the potential capital loss on these stablecoins can range between 2 and 6 cents.

![](https://cdn-images-1.medium.com/max/1600/0*-0LbUwBct4Xig5vT)

We can also conduct a similar analysis of using rolling periods that we applied
for the price metrics. Because this metric is focused on the left tail
distribution of returns, we are most concerned about the most potential loss
amongst each stablecoin. Below is a pie chart of the amount of times each
stablecoin had the largest value at risk, on average, across the windows we
sampled.

![](https://cdn-images-1.medium.com/max/1600/0*7BOokAZ1d9b7QbCL)

Across the time periods we sampled, it seemed that Neutral Dollar never would
have the largest tail risk. PAX would be the next most assuring stablecoin,
having the maximum 95% VaR 9.9% of the time. DAI poses the most risk for capital
loss in this basket, which is supported by the line graph above with its
periodic spikes. The power of aggregation shows that a basket can remove some
possibility of large drawdowns in your portfolio based on individual stablecoin
risk.

A limitation to VaR is that while it is widely adopted as a proper risk measure,
at times VaR may not appropriately quantify the *expected* loss during an
adverse effect. Mainly if the distribution of returns are not normal
(fat-tailed), then VaR may not be the best description of the potential capital
loss at the time.

![](https://cdn-images-1.medium.com/max/1600/0*SQYJ4GUFDJFVfOSX)
<span class="figcaption_hack">Outlining a complication with VaR. Sub-additivity is not accounted for.
[Source](https://www.risk.net/risk-magazine/technical-paper/1506669/var-versus-expected-shortfall)</span>

Stablecoins tend not to follow behaviors similar to other assets, mainly because
arbitrage will typically force prices to converge towards a redeemable value. We
now introduce the second risk measure, which is **expected shortfall**, or
conditional Value at Risk (cVaR). cVaR is a measure that describes how bad
things could get in such an adverse event. Specifically, the conditional loss is
considered so that there’s a more appropriate understanding of what could be the
potential, expected drawdown. For our purposes, we use the same parameters as we
did with VaR to compute a rolling cVaR calculation.

![](https://cdn-images-1.medium.com/max/1600/0*9dzUXTJnhZA5Bogv)

On a rolling basis, cVaR looks to be quite similar to VaR — typically, arbitrage
will occur before a stablecoin price drops too far by someone willing to bear
the implied credit risk.

![](https://cdn-images-1.medium.com/max/1600/0*a8uQhbfDDicu7AG3)

Comparing across rolling time periods, we see that Neutral Dollar never has the
highest cVaR metric across all the stablecoins. When looking at the pie graph
between VaR and cVaR, USDC and DAI increase their maximum counts a bit more,
indicating a larger expected loss and larger distribution tails in their trading
behavior.

The intention of the analysis so far is to show how an aggregate product can be
superior in price stability and risk exposure when compared to underlying assets
across many measures of time. The idiosyncrasies of individual constituents are
mitigated in a basket, showcasing how Neutral Dollar serves as a better unit of
account and medium of exchange than any other stablecoin.

If Neutral Dollar is better than the underlying due to diversification
properties from aggregation, how can we show that our construction process is
robust? Our process is unique in that creation of a new token does not require
all the components, but only requires a single constituent. Thus, any activity
can drive imbalance to the weighting of the basket. One might believe that if
there is too much imbalance in the basket, then aggregation may fail to procure
any meaningful benefits. To address these concerns we compute, using
optimization algorithms, how incremental misweightings would affect volatility.
We can also show that such events are also very unlikely due to arbitrage
behavior.

The intention for Neutral Dollar is to be equal-quantity weighted, which means
an ideal Neutral Dollar token consists of 25% DAI, PAX, USDC, and TUSD each.
When new Neutral Dollar tokens are minted, this weighting can deviate. To look
at these potential effects, we evaluated several different composition
weightings of Neutral Dollar and the volatility compared to an equal basket.
Below are the *worst* volatiles you can expect relative to an ideal composition.

![](https://cdn-images-1.medium.com/max/1600/0*B529ckwXMXqzb0Jl)

On the x-axis are the max-min weights, which highlights the degree of imbalance.
Starting at a 5% difference, a sample composition might be 27.5% DAI, 22.5% PAX,
22.5% TUSD and 27.5% USDC. The incremental volatility of Neutral Dollar as a
result would increase roughly 10%. The behavior of the basket is that the
volatility monotonically increases as the misweighting increases. From the first
table we showed that the PAX has 29% more volatility than NUSD, so this also
shows that there has to be some meaningful deviation in the basket (roughly
between ~35% of a difference between max and min weights) for Neutral Dollar to
be worse than an underlying stablecoin in its current composition.

To show that the higher-volatility basket compositions are unlikely to happen,
we need to provide context about arbitrage and how a basket can provide a more
meaningful environment. Typically (ignoring fiat off-ramping or other complex
strategies), arbitrage on stablecoins can happen across exchanges where prices
are different or when prices deviate from $1. The former is hindered, especially
due to fragmented pools of liquidity. The latter is more risky because, as we
have seen, pricing can differ greatly due to perceived market risks. Neutral
Dollar allows for price discovery mechanisms, both on the fair market price of
the basket, as well as the underlying constituents. Conceptually, liquidity
becomes pooled since it is now combined under one product (addressing the first)
and arbitrage can take place between the fair market price of the basket to the
fair price of an individual stablecoin, rather than an implied value based on
redeemability (addressing the second).

Our pricing mechanism ensures that the fair price of the basket doesn’t deviate
from the aggregate value, and that arbitrage should remove any meaningful
deviation of weights in the basket. We simulated the effect of creation and
redemptions on Neutral Dollar to see what the weights would look like based on
rational and incentivized market activity.

![](https://cdn-images-1.medium.com/max/1600/0*z_7Q7iV6-nOV34ki)

From this chart, we see that weights of individual constituents to Neutral
Dollar should float around 25%, with the max-min weight difference only being
roughly 2% across this time frame. There will be some deviation especially due
to price volatility of the underlying, but over time should float around their
intended weightings. As Neutral Dollar is popularized, we can expect relative
misweightings to become smaller in proportion to the collateral. Because the
weights should be range-bound due to arbitrage, we can expect imbalanced baskets
to be highly unlikely. From these findings, we can conclude that Neutral Dollar
is not only robust but can also form a more dynamic structure to foster
liquidity.

The last aspect we want to cover demonstrates how Neutral Dollar might be
affected if there were another coin added to the basket. It’s essential our
product can maintain competitive edge and more stablecoins in our basket equals
increased diversification. For now, reconstitution of our Neutral Dollar is
based on a rigorous process which ensures the aggregate product is based on a
lower volatility and risk profile without sacrificing the benefits of liquidity.

We can assess viable stablecoin candidates to be added into Neutral Dollar
design by evaluating different basket compositions. One of the metrics we
evaluate on is whether the diversification effect can be procured. We can
ascertain this using pairwise correlations — a coin can be a likely candidate to
be added to the basket if it has negative or low correlation relative to other
constituents. Below is a sample correlation coefficient map that identifies
which stablecoins behave similarly to others amongst USDT, USDC, TUSD, PAX,
GUSD, and DAI. Some of these stablecoins may be potential additions to our
basket in the future so long as they procure more attractive properties.

![](https://cdn-images-1.medium.com/max/1600/0*GfPMVA6sVSD-xhu8)

As an example of this evaluation, we see on this chart that DAI has low
correlation to the price movements of the rest of the stablecoins. In addition,
we have shown above that DAI actually is less stable than fiat-backed
stablecoins in our testing. However, further internal analysis has shown that a
Neutral Dollar basket consisting of PAX, TUSD, USDC actually has **more**
volatility than a 4-coin basket with DAI included (in fact, a 5% increase based
on our results). This may seem counterintuitive to some as DAI has less
stability, but the correlation of market movements on DAI is weak which
indicates that exposure risks on DAI are much different. Combining all these
idiosyncrasies together across supported assets actually lowers these
concentrated risks in the context of a portfolio. This finding also highlights
the power of diversification — aggregating together volatile constituents can
actually procure an attractive risk profile that is better than any standalone
component.

We also wanted to mention briefly the governance regarding coin additions. Down
the road we could resort to a more open system, but we also want to be
considerate of other factors beyond volatility such as liquidity and volume.
More on this to come as we want to be transparent on our reconstitution
methodology for people to sense our desire to create quality products.

Once we have figured out a quality candidate token, we need to integrate it into
the Neutral Dollar. Stablecoin additions into our basket will take place over a
period of time, and are expected not to cause any issues. The high-level
rationale is that our pricing mechanism will favor underrepresented weightings
of stablecoins. Market participants will collateralize the new stablecoin into
our system until prices reach to equilibrium.

Below is a graph detailing an event where we want to include USDT into our
product — turning Neutral Dollar from a 4-coin to a 5-coin basket.

![](https://cdn-images-1.medium.com/max/1600/0*Srh2p0YAczEnR9lh)

Over time, the USDT collateral will ramp towards equal quantity weighting, and
the other existing collateral will converge as well to 20% weights. Neutral
Dollar provides an additional, secondary liquidity layer and allows for a more
robust process to skew/lean pricing for managing asset exposures while
simultaneously avoiding balance loss.The pricing mechanism serves as an
incentive for traders to maintain equilibrium between the fair value basket and
the underlying constituents without draining the supported collateral. The
beauty of these constructs allow Neutral Dollar to add newly supported
stablecoins into the basket to create better products for consumers and obtain
competitive advantages in the market against any upcoming stablecoins in the
future.

We hope that we have shown enough evidence to demonstrate that Neutral Dollar
can be a new stablecoin standard based on qualities of being a better
instrument. We showcased how Neutral Dollar beats out other stablecoins across
many dimensions across price and risk. We also addressed that a large
misweighting in the basket is required for it to be a concern, and how this is
not expected to be a problem due to market behavior. Lastly, we outlined how a
coin would be added in the Neutral Dollar basket to improve it even further.
We’re quite excited to see our product play out and promote growth in the crypto
ecosystem.

— — — —

If you’re interested in learning more about our team and products, [check out
our website](http://www.neutralproject.com/) or start a conversation with us on
[Telegram](https://t.me/neutralproject) or
[Twitter](http://www.twitter.com/neutral_project).
