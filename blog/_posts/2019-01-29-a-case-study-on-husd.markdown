---
layout: post
title:  "Case Study of Huobi’s HUSD Solution"
date:   2019-01-29 12:00:00 -0400
categories: jekyll update
---

# Case Study of Huobi’s HUSD Solution

![](https://cdn-images-1.medium.com/max/1600/1*LkpHYcWPum_xd6o2643vpg.png)

Huobi recently announced a trial upgrade to their stablecoin service, now titled
[HUSD Solution
V2.0](https://huobiglobal.zendesk.com/hc/en-us/articles/360000210661-Huobi-Global-Upgraded-HUSD-Solution-V2-0-Trial-Operation-).
The intent is for Huobi to help meet user demands when it comes to stablecoins
by offering support for interchangeability between Paxos Standard (PAX), True
USD (TUSD), USD Coin (USDC) and Gemini Dollars (GUSD). Users can use these
stablecoins on their exchange, where these four tokens are represented under one
quote currency titled HUSD.

Interestingly enough, this rollout was revealed only *3 months *after the launch
of the [first
version](https://huobiglobal.zendesk.com/hc/en-us/articles/360000170601-Announcement-on-the-Launch-of-HUSD-solution-on-Huobi-Global).
What went wrong? The purpose of this article is to highlight HUSD’s design flaws
and outline the events which occurred because of it. Detailing these episodes is
important because it provides insight on how the ecosystem of the crypto market
works and how the players respond accordingly.

![](https://cdn-images-1.medium.com/max/1600/0*SfpugAG0jDogWR9_)
<span class="figcaption_hack">Snippet from the announcement of the HUSD solution</span>

The first launch of HUSD allowed for 1:1 interchangeability between PAX, TUSD,
USDC, and GUSD. This is a seemingly intuitive rational, as all of these are
fiat-backed stablecoins — which means all of them can be exchanged for 1 USD.
The intent was to make it easier for people to trade against different,
supported stablecoin pairs. What was overlooked in this service is that
*stablecoins are not interchangeable on a 1:1 basis even though they are
equivalent in redeemable value. *There are many reasons why they aren’t the
same, and all of these contributed to the events that unrolled.

These stablecoins all have different:

* perceived counter party risk
* price fluctuations
* redemption schedules
* KYC/AML procedures
* discounts offered to market makers

What we eventually saw was a situation where various stablecoins [issued tokens
to people at a certain rebate to improve
liquidity](https://www.ccn.com/paxos-standard-hassling-ethereum-traders-trying-to-redeem-stablecoin-pax-for-dollars/).
Traders then took advantage of of the situation, using the HUSD solution to
redeem and arbitrage for full price. In this situation, the 1:1 ratio between
stablecoins offered by HUSD did not hold, and market makers took advantage to
earn quick profit. Huobi overlooked this design flaw and it resulted in the
proverbial “free lunch” for these traders. If a trading desk were to[ acquire
any sort of stablecoin less than a
dollar](https://www.theblockcrypto.com/2019/01/04/gemini-gave-trading-firms-a-stablecoin-discount-and-it-caused-big-headaches-for-one-of-its-rivals/),
they can lock in profit without going directly into the market, which is what
they did when these stablecoins were moved around through HUSD on a 1:1 basis.
This was discovered and quickly exploited — the longer the HUSD solution was in
place, the more this strategy would be utilized. Arbitrage would continue to
persist so long as the opportunity is there.

What happened next could have happened to any of the four fiat-backed stablecoin
companies, but unfortunately Paxos Standard was the preferred vehicle to convert
to fiat for some traders. Paxos Standard does have more lenient standards for
redemptions, but they also have regulatory backing from the state of New York.
When these traders were looking to move risk off their balance sheet and redeem
to fiat through the stablecoin, the company saw huge redemption requests —
nearing, at times, almost $20 million in a day. Paxos Standard found this
behavior to have serious implications. To manage their requests and uphold
compliance standards, they began to inquiry into these activities, which was not
looking upon favorably in the crypto trading community. At one point, traders’
Paxos Standard accounts were frozen or closed indefinitely — with some amounts
in the millions.

![](https://cdn-images-1.medium.com/max/1600/0*fcAIdull4CdBmuIy)
<span class="figcaption_hack">Mildly invasive questions asked by Paxos Standard</span>

Making matters worse was the fact that traders were also [circumventing the
light KYC/AMC restrictions on
Huobi](https://www.paxos.com/uncategorized/regulation-in-crypto-world-stablecoin-pax/).
To work around the $10,000 withdrawal limit imposed by the company, people
created many accounts to move more funds than typically allowed.

![](https://cdn-images-1.medium.com/max/1600/0*vW9vnrnHHelYvRvq)
<span class="figcaption_hack">One of Huobi’s wallets showing PAX outflow under the 10,000 limit. Src:
[etherscan](https://etherscan.io/token/0x8e870d67f660d95d5be530380d0ec0bd388289e1?a=0x6748f50f686bfbca6fe8ad62b22228b87f31ff2b)</span>

In response to all of this activity, Huobi needed to go back to the drawing
board to conceptualize a new design for the solution because the original was
being taken advantage of. In addition to primarily trading on the Huobi
exchange, HUSD was intended to convert between stablecoins. Since Huobi did not
account for price differences directly from the market or from the rebates, the
exchange itself had to take a loss to maintain their service. Below is an
analysis on the total inflows and outflows from Huobi wallets for these
stablecoins during the duration of v1.0.

![](https://cdn-images-1.medium.com/max/1600/1*N0i7N3U8qzuBcM51ZA1RaA.png)
<span class="figcaption_hack">Huobi wallet activities, Src:
[etherscan](https://etherscan.io/accounts?l=Exchange)</span>

With this view, it’s hard to fully assess what flow activity can be attributed
directly towards arbitrage or for HUSD’s intended solution. We can get a clearer
depiction of these transfers by breaking down inflows and outflows to reserves
owned by Huobi and to wallets not in their control. We can also assume internal
transfers are for operational usage while external transfers are derived from
activity to arbitrage.

![](https://cdn-images-1.medium.com/max/1600/1*x5Fxu-ghFqX00AO5ktIHAA.png)
<span class="figcaption_hack">The inflow and outflow numbers for in-between transfers are shown as a sanity
check and to avoid double counting</span>

![](https://cdn-images-1.medium.com/max/1600/0*FL64Ee3eUAr55sbM)

Above is a chart of Huobi’s stablecoin reserves during this time period. As you
can see, a majority of the activity occurred with PAX and GUSD. Gemini was
bootstrapping their stablecoin and offering discounts to traders to provide
liquidity on exchanges. However, these traders simply bypassed the market and
swapped GUSD for PAX to lock in quick profits. So instead of having GUSD
properly distributed, Huobi actually owns more than **70%** of the tokens that
are minted. Traders seized the presented opportunity and left Gemini, as well as
Huobi, in a less ideal situation to clean up.

After examining the nature of the transactions, we determined that the HUSD
solution was abused beyond its intended purpose. The total amount of stablecoins
that were sent between Huobi wallets was very minor in comparison to the total
amount that was actually moved out. The amount transferred out of Huobi was also
larger than the current reserves for each stablecoin, indicating that the
primary use case was for arbitrage rather than to keep user funds on the
exchange to trade Huobi’s stablecoin markets.

We can estimate that from these breakdowns that, within this short time frame,
roughly ~$234 million worth of stablecoins were arbitraged without considering
price deviations (possibly up to 3 cents difference based on price discrepancies
and rebates), so it’s not a stretch to say that Huobi was on track to lose
several million dollars. In addition, from looking at the first table, we see
that the Huobi reserves heavily lean towards certain stablecoins as an aftermath
which could result in a liquidity imbalance concern.

HUSD is now launching a trial version 2.0 to remove the fixed 1:1 exchange rate,
adjusting values between stablecoins based on pricing and various other factors
in hopes to provide a meaningful solution. A few key observations arose from the
announcement:

* HUSD price is bound based on fiat-crypto markets
* The methodology to price underlying stablecoins is determined by data from
mainstream exchanges
* Users have to designate time and amount independently to interchange
stablecoins, going from an automatic exchange to a manual one
* The quotes provided by HUSD also account for an extra premium based on the
available withdrawal amount on stablecoin positions, and is floored/capped to
Huobi’s advantage to prevent possible losses
* Version 2.0 is set to run for one month, where possible improvements can be
iterated on

It will be interesting to see how the new version affects trading behavior,
activity, and the resulting stablecoin exchange rates on the platform during the
trial period. Though we can still make a few comments about v2.0’s design:

* HUSD is not a product that can be transferred out of Huobi, as it only serves as
a quote currency specifically for this exchange. Therefore, the product itself
has limited utility and benefits when extended to broader markets
* PAX/GUSD/TUSD/USDC are still the only viable options to redeem out of your
account. Because there are two offsets (to and from HUSD), one has to compensate
when wanting to go from different underlyings. This, coupled with the fact that
HUSD’s proposed exchange rate is floored/capped, means that interchanging
between two stablecoins with largely different offsets in HUSD may not provide
favorable rates on the platform
* The HUSD price itself is explicitly bound to fiat-crypto markets while the
underlying stablecoin exchange rates are not; this can be viewed as a way for
the company to hedge itself in case of a credit-risk from the supported
stablecoins. This can be a negative for users, as there is a premium baked into
the use of the platform when depositing or withdrawing stablecoins
* One purpose of HUSD is to access Huobi-specific stablecoin markets, which is not
a unique advantage as there are other exchanges with similar pairs and more
liquidity. This creates unnecessary time and cost for a trader when other
options exist
* Another purpose of the HUSD solution is to interchange stablecoins, though
benefits may not be advantageous because the rates are tied to the centralized
risk, collateral, and liquidity of Huobi’s reserves. If another alternative is
available in the market which can provide better quotes and ease of use, HUSD
lacks a competitive use case and could fail in managing both collateral and
liquidity without the activity to support it.
* The actual collateral targets for HUSD are unknown to a user, so it’s unclear
how Huobi would want to service users in regards to this aspect
* During periods of large volatility, aggregate products have to prove their
worth. Managing liquidity risk may present an issue during turbulent markets due
to the way pricing is bound under the new design

We can only conjecture how HUSD’s trial version will fare even with these
criticisms, and only time will indicate whether the service will be useful
without being exploited. Still, there are more open questions in light of this
three month time span: What is the structure of the business model for
fiat-backed stablecoins and the impact on market participants?; Are there
regulatory implications associated with building a more open financial system;
What are the pitfalls to providing a service that does not fully consider market
implications?; What is the role of liquidity for the markets between seemingly
valued instruments?

Over here at Neutral, we’ve noticed issues with stablecoin models/services, and
we’re seeking to create something better. [The Neutral
Dollar](https://medium.com/@neutralproject/intro-to-neutral-dollar-98f95d1ff9f4)
is a tradeable stablecoin demonstrating transparency and lower volatility. The
token is powered by underlying stablecoin swaps that are liquidity- and
exchange-neutral for more efficiency, which means that our solution is more
marketable and beneficial to all participants. The Neutral Dollar also benefits
from more dynamic liquidity due to its nature of being an aggregated,
non-centralized basket. The mechanics of our platform align trading behavior and
incentivize collateral to balance, resulting in stability of the product through
all market cycles. We view the Neutral Dollar as a more fair and transparent
solution for all stablecoin use cases, hoping to popularize the use of these
tokens and cryptocurrencies altogether.

— — — —

If you’re interested in learning more about our team and products, [check out
our website](http://www.neutralproject.com/) or start a conversation with us on
[Telegram](https://t.me/neutralproject) or
[Twitter](http://www.twitter.com/neutral_project).

* [Bitcoin](https://hackernoon.com/tagged/bitcoin?source=post)
* [Cryptocurrency](https://hackernoon.com/tagged/cryptocurrency?source=post)
* [Fintech](https://hackernoon.com/tagged/fintech?source=post)
* [Blockchain](https://hackernoon.com/tagged/blockchain?source=post)
* [Stable Coin](https://hackernoon.com/tagged/stable-coin?source=post)

### [Neutral](https://hackernoon.com/@neutralproject)

Neutral Dollar is a metastable basket of stablecoins. The result is a digital
dollar which has lower volatility and combines fragmented pools of liquidity
