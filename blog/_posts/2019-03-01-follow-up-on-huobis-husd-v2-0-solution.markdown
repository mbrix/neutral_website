---
layout: post
title:  "Follow Up on Huobi’s HUSD v2.0 Solution"
date:   2019-03-01 12:00:00 -0400
categories: jekyll update
---

# Follow Up on Huobi’s HUSD v2.0 Solution

![](https://cdn-images-1.medium.com/max/1600/1*ImQZ2ubOcChaiEUwKSJF2w.png)

*We want to give special thanks to *[TRM](https://medium.com/trm-perspectives)*
for helping co-review and co-research this analysis. TRM is rolling out
analytical solutions to monitor blockchain activity for the purpose of
identifying what channels and user groups drive growth.*

**Context**

Given the multitude of available stablecoins, it’s becoming more apparent that a
basket of stablecoins serves an important use case for facilitating
crypto-market activity. In our perspective, a successful stablecoin basket needs
to have the following interrelated properties:

⬜ Incentivized pricing to properly balance reserves

⬜ Evenly distributed flows amongst supported assets

⬜ Balance sheet preservation and avoidance of capital losses

⬜ Promoting liquidity onto broader exchange pairs in the market

Huobi’s stablecoin solution,
[HUSD](https://huobiglobal.zendesk.com/hc/en-us/articles/360000171561-Introduction-of-HUSD),
advertised that it would become a unique service for users’ needs by
interchanging supported stablecoins — an announcement [which was
well-received](https://medium.com/swlh/huobi-introduces-husd-the-universal-stablecoin-providing-maximum-stability-272c9bf24831).
However, overlooked design flaws prevented a beneficial situation, and in less
than 4 months Huobi was losing millions of dollars, as we pointed out [in our
analysis](https://hackernoon.com/a-case-study-on-husd-752b16a2d1f8). As a
result, Huobi needed to go back to the proverbial drawing board in order to
design and figure out what a meaningful stablecoin solution would look like.

Since then, several recent events occured:

* Gemini’s original strategy was to
[bootstrap](https://medium.com/trm-perspectives/the-million-dollar-growth-hack-2b3278407869)
their new token by offering discounts to traders, who would then disseminate
their token onto various exchanges in order to drive liquidity. Unfortunately,
these desks merely arbitraged profits through the HUSD solution and left Gemini
Dollar illiquid and locked up in Huobi’s balances. We expect an emerging
conflict looming in the future when reported news surfaced that Gemini [shut
down](https://www.chepicap.com/en/news/7197/gemini-exchange-shuts-down-otc-accounts-over-gusd-redemptions.html)
several accounts attempting to redeem their stablecoin. This in mind, Huobi is
unlikely to lower their GUSD reserves by exiting to fiat because Gemini is
pushing back, which means their only way to lower exposure is to figure out a
way to distribute GUSD effectively into the markets while promoting the adoption
of other stablecoins onto their platform.
* Huobi upgraded HUSD to
“[v2.0](https://huobiglobal.zendesk.com/hc/en-us/articles/360000210661-Huobi-Global-Upgraded-HUSD-Solution-V2-0-Trial-Operation-)”
where the supported stablecoin exchange rates were considered based on an
internal pricing methodology. This trial period recently ended so we were
curious to see whether or not certain issues were resolved. While we didn’t
expect this to be the case, based on our initial analysis, we can now take a
more granular look since this phase of the operation has ended.
* Huobi also announced [ERC20 support for
Tether](https://huobiglobal.zendesk.com/hc/en-us/articles/360000216861-Withdrawal-and-Deposit-of-USDT-Support-ERC20-Protocol).
Whether this will be supported in HUSD on interchangeability is an open question
at this time. We will touch lightly on the implications near the end of this
article.

We were quick to realize that **not all aggregate stablecoin basket products are
created equal — and each unique design can carry implications if overlooked**.
In order to service the needs of participants in a constructive fashion, we need
a [solution](https://neutralproject.com/) which can lead to less friction and
complication in the markets — all while providing traceable price discovery
mechanics. By digging deeper and acknowledging the pitfalls of HUSD’s
implementations, we hope to prove the need for a product like the [Neutral
Dollar](https://medium.com/@neutralproject/intro-to-neutral-dollar-98f95d1ff9f4).

**Investigation**

Based on Huobi’s announcement, the purpose of the HUSD solution was to “better
meet users’ demand for stablecoins”. It’s unknown whether this is to promote
stablecoin trading on their exchange platform or to serve as a use case for
traders utilizing stablecoin strategies. Ideally, Huobi would want to bring more
inflows and drive trading activity on their exchange (as that is their main
revenue driver), but we can interpret their success on this through our
research. *Author’s opinion: we don’t think it’s working effectively due to some
short-sightedness.*

The data we used was sourced directly from
[etherscan](https://etherscan.io/accounts?l=Exchange), where name tags were used
to identify Huobi wallets. We queried all TUSD, USDC, PAX, and GUSD transactions
sent and received from these wallets since the start of Huobi’s HUSD solution.

Below is the aggregated activity of inflows and outflows of HUSD thus far, which
gives us a current snapshot of what stablecoins are in their reserves.

![](https://cdn-images-1.medium.com/max/1600/0*PzMCMHiB2dRb4g5b)

From the table, most of HUSD consists majorly of GUSD, some PAX, TUSD, and a bit
of USDC. Across their wallets, Huobi currently holds roughly 66 million tokens
of these stablecoins.

We also would like to break down further the total amount of flows between the
two operations conducted by Huobi, the first being the 1:1 exchange rate (v1.0)
and the second with the modified methodology (v2.0).

![](https://cdn-images-1.medium.com/max/1600/0*w7HjgcAymo74y02Y)

During version 1.0 we saw huge arbitrage plays that lead large inflows into
Huobi, primarily from GUSD. Traders exploited the exchange rate and diverted
their profits to cash out through PAX due to its easier redeemability into fiat.
From our initial case study, we found that the overall use case for HUSD at this
time was to exploit and profit off of design flaws. At the time of our initial
case study, over 70% of GUSD was in Huobi reserves due to this arbitrage play.
We feel that a few of the version 2.0 goals were to 1) not be taken advantage of
and 2) lower GUSD exposure while facilitating more transactions from other
stablecoins.

![](https://cdn-images-1.medium.com/max/1600/0*CVvn2GI02Og3xdRO)

During version 2.0, Huobi experienced net outflows and lowered their supported
stablecoin balance by ~13 million. The amount of inflows during this entire
month was roughly 20 million, and most of the stablecoin flows were around GUSD.
It’s still an open question as to how much Huobi wants to actually lower their
exposure to GUSD; while they did experience almost ~29 million tokens of GUSD
outflows, they still saw more inflows comparatively. It’s reasonable to assume
that the pricing methodology they used to establish exchange rates may still not
be completely representative of all market activity.

It’s unknown what Huobi’s intentions are with this service and it’s difficult to
define what their actual goals are for their product. **While we do not have
substantial evidence, this is our guess as to what has been going on recently
**(and we are happy to be wrong, so long as there is proof):

* Huobi cannot directly liquidate their GUSD exposure because of rumored Gemini
pushback, so they need to figure out how to lean down their exposure through
pricing. Their offset used to calculate the premium/discount is unknown so we
are unsure either if Huobi is taking a loss or if they are succeeding in
facilitating an organic outflow of GUSD. We think the latter is unlikely to
happen quickly, as several OTC desks find GUSD to be difficult to work with.
* GUSD, like all other stablecoins, can still issue rebates or discounts to
traders. Because GUSD is already illiquid and locked up in Huobi reserves,
traders may not feel that distributing GUSD onto other exchanges is a worthwhile
operation. They can still see some form of profits by transferring into Huobi
after acquiring it somehow, which is why you see more inflows into Huobi from
GUSD.
* PAX, TUSD, and USDC should see more favorable exchange rates offered by HUSD
because of the lower balance. This theory is supported by less outflows on each
of these stablecoins, meaning that the offset on these stablecoin pricings are
at least working in the right direction. Why there aren’t as much inflows into
HUSD is the bigger question.
* Less stablecoin balances on HUSD means there is likely less stablecoin trading
activity taking place on Huobi. If the intention is to work as a clearing house,
then we can argue that version 2.0 may be working better than version 1.0. If
it’s to promote more stablecoin trading activity on their platform to access
BTC, ETH, amongst others — it’s a harder sell. Huobi’s trading using HUSD as a
quote currency does not procure any distinctive advantage over any exchange, so
there’s no natural incentive for people to want to deposit funds into Huobi,
which can snowball into a liquidity problem.

Additionally, we can break down our findings by seeing which transactions were
in-between Huobi wallets and which weren’t. The former likely being organic
behavior to promote activity on Huobi’s platform, while the latter conveys only
using HUSD as a service to exchange amongst stablecoins for arbitrage or
liquidity purposes to avoid slippage elsewhere.

![](https://cdn-images-1.medium.com/max/1600/0*byESwsI7Z-_WLKqy)

To date, it looks like much of the activity was utilized by traders to avoid
using Huobi’s exchange platform directly since most of the sending and receiving
was not directly between Huobi-owned wallets.

When we look at the activity during version 1.0’s duration, we notice the
arbitrage taking place — a ton of activity is seen, especially between GUSD and
PAX, with Huobi eating whatever loss to prop up the 1:1 exchange rate.

![](https://cdn-images-1.medium.com/max/1600/0*e7Xa9i7RjrNJIuNp)

Under version 2.0, we do see some operational transfers on PAX and USDC.
However, this total amount of ~1.3 million pales in comparison to the ~$32
million that was moved outside of Huobi wallets. As a clearing house service
Huobi does seem to be making slight progress on improving exposure, but to the
net outflows show that there isn’t much promotion for activity on their exchange
platform.

We can also show Huobi’s reserves over time with respect to each stablecoin.
Below is a visual below, with the red line marking when version 2.0 was taken
into effect.

![](https://cdn-images-1.medium.com/max/1600/0*ou93Q3j8B6NiXwfc)

A quick inspection shows that when version 2.0 became online, HUSD slowly
started decreasing their GUSD exposure and increasing a bit of PAX and USDC.

![](https://cdn-images-1.medium.com/max/1600/0*h41nvkp6EInmhyx7)

We can observe this taking effect when we look at the weighting composition of
HUSD — while still predominantly consisting of GUSD, Huobi does seem to be
lowering their exposure in favor of other stablecoins. Still, there is a lot of
work to be done to actually balance out their stablecoins reserves. The offset
from their stablecoin positions are unknown, so we don’t know the ideal
weighting. If it’s even possible, it will definitely take time for Huobi to
reach their targets.

Next, we want to take another perspective on Huobi’s reserves by extending their
balances in proportion to the circulating supply of each supported stablecoin
through version 2.0. We can measure HUSD’s success if they see more flows to
balance their asset exposures properly. The purpose of doing so is to see how
much of the stablecoin market Huobi gets to interact with in a relative sense,
and if there are any concerns to identify.

![](https://cdn-images-1.medium.com/max/1600/0*kfQna1RxLyQo6YeO)

This chart indicates that Huobi has begun to acquire a larger proportion of PAX
relative to the circulating supply. We view this positively in Huobi’s attempt
to balance collateral as a first step but need to reason why this is
specifically only happening on PAX at this degree.

![](https://cdn-images-1.medium.com/max/1600/0*4IH6644dVcJssHJQ)

There’s a similar trend on TUSD, though to a lesser degree. Interestingly, PAX
currently has less presence than TUSD, which we believe could also explain why
there would be more deposits from PAX into HUSD. There’s less opportunity to
work through various exchanges compared to TUSD.

![](https://cdn-images-1.medium.com/max/1600/0*6OjvxarRTY29Sy06)

Huobi owns the least amount of USDC (at the time of writing, the largest market
cap of all the supported stablecoins) and doesn’t seem to be acquiring more at
scale in a relative measure. It’s interesting to note that USDC experienced the
most drawdown in circulating supply than all supported stablecoins. Likely,
pricing is not attractive enough for traders to use the HUSD service, despite
already being favorable (given the current reserve amounts on Huobi). Since we
don’t see any complementary flows on HUSD, we can conclude most activity on USDC
is happening outside of Huobi’s reach which presents an opportunity for
improvement.

![](https://cdn-images-1.medium.com/max/1600/0*pCfWg_7S4RVhW7tK)

Looking at the outstanding tokens owned by Huobi relative to the circulating
supply, we observe that Huobi still owns ~70% of GUSD. While exposure is slowly
getting lower, this is currently as a very prevalent liquidity issue which means
that other GUSD markets are likely to be less favorable than other stablecoins
pairs. The idea that ‘liquidity begets liquidity’ makes this a troubling issue
to resolve naturally.

In its present state, the HUSD solution as a clearing house seems to be more
beneficial for the traders. For us to view HUSD as a successful endeavor, we
would like to see more growth in activity and total reserves their various
supported stablecoins. While Huobi is making slight progress on lowering GUSD
exposure, they aren’t exactly doing the best in relative terms. During version
1.0, PAX was the primary choice for traders to redeem because it was easier.
Since that opportunity has elapsed, the likely situation unfolding sees PAX
become less attractive for traders to hold on their balance sheet. Therefore,
instead of the traders moving PAX off their balance sheet through trading
activities, they clear transactions through Huobi. This would explain why there
is less proportion of TUSD and USDC in Huobi despite being larger stablecoins:
because traders have more options.

It seems Huobi is also finding trouble in growing their reserves on these
stablecoins with their methodology on pricing. However, we can’t say for sure if
Huobi is taking a loss for leaning or skewing their quotes to manage their
balance sheet. This shows that Huobi is paling in comparison to the growth of
the supported stablecoins while managing their own internal complications, which
is something they will need to figure out in the longer term.

We also want to make note of Huobi’s announcement of ERC20 Tether support. It’s
currently unclear if this is going to be included on HUSD. Despite Tether being
supposedly fiat-backed, there can be some implications. ERC20 Tether support is
not very widespread at the moment and can result in liquidity or operational
issues, as many other exchanges only support the Omni version. It will be
interesting to see if Huobi wants to integrate the other variant and if they can
do so without friction. Because HUSD is not directly transparent about it’s
positioning or collateral, incorporating Tether needs to be justified by
strategic reasoning. We hope that people acquire healthy skepticism based on
version 1.0’s failure and can avoid missteps in the future. Whether Huobi also
wants to be more open about their goals for the HUSD solution, is an open
question to raise.

**Takeaways**

2018 was coined the ‘[Year of the
Stablecoin](https://hackernoon.com/2018-the-year-of-the-stablecoin-6a6ca5d3637b)’,
which is materializing even more in 2019. Even J.P. Morgan[
announced](https://www.jpmorgan.com/global/news/digital-coin-payments) their
stablecoin for cross border payments, and
[Facebook](https://www.bloomberg.com/news/articles/2018-12-21/facebook-is-said-to-develop-stablecoin-for-whatsapp-transfers)
is also entering the ring. We view the stablecoin competition heating up with no
signs of slowing down. However, we feel strongly about the opacity with many
current stablecoin models. Many stablecoin projects (despite broadcasting that
they are transparent) employ several opaque practices such as fractional
reserves and rebates to special partners. Holder of such stablecoins really see
no benefit outside of convenience, and it’s hard to outline preferences of one
versus the other. Simply put, owning a stablecoin allows for their originating
business to profit off of your standing balances. We [expect
](https://medium.com/@hasufly/interest-rates-are-the-next-battleground-in-the-stablecoin-wars-47ea954118d3)changes
to occur to distinguish and actually benefit users in the nearing months. Still,
the impact of offline agreements for discounts can be argued on who actually
benefits the most (probably not the retail users). With this all occurring in
the backdrop, many projects are looking to provide services on top of the
existing industry activity to address different stablecoin needs such as Huobi,
[XBTO](https://www.financemagnates.com/cryptocurrency/innovation/xbto-and-former-tether-exec-to-launch-stablecoin-clearinghouse/),**
**and ourselves.

We believe that Huobi’s version 2.0 of HUSD is avoiding large losses like what
we saw in version 1.0, but it’s hard to estimate success on whether it’s
profitable as the overall change has been marginal. In light of servicing
Huobi’s exchange platform, we do not see this as beneficial for the company
itself with the net outflows seen in version 2.0’s trial operation and less
operational usage on other pairs. The HUSD service could be an avenue for
traders to deposit less attractive stablecoins which, at times, simple pricing
methodologies cannot fully reveal. There is more to estimating a stablecoin’s
worth than from its redeemable value, which can be a difficult problem to
assess. From our investigation, we’ve found that inventory management can be
hard to implement in practice, and diversifying asset exposure can be tricky to
navigate while avoiding losses. For a stablecoin basket to be effective, there
must be *careful review of the collective position targets and pricing mechanics
*in order to rebalance stablecoin reserves effectively.** **Going back to our
criteria on what makes a successful basket, we can see whether HUSD v2.0 did
match all these requirements:

✘ Incentivized pricing to properly balance reserves

✘ Evenly distributed flows amongst supported assets

**?** Balance sheet preservation and avoidance of capital losses

✘ Promoting liquidity onto broader exchange pairs in the market

Upon review, we do not find that Huobi is popularizing the stablecoin basket
concept. In fact, HUSD as an endeavor is a struggling one. We can only wait and
see how Huobi plans to iterate on their solution in the future, as we feel that
their operation is not functioning appropriately.

With more stablecoins on the horizon, it’s become more apparent to us that a
[metastable
solution](https://medium.com/@neutralproject/the-need-for-many-stablecoins-and-a-metastable-basket-e38adff6c8f4)
is necessary. HUSD’s closed-form service is being viewed more as a clearing
house and not a direct, tradable instrument to foster liquidity and growth
directly in the markets for all types of users. The current design causes
limitations on its offerings, and major alterations might be required for more
successes to materialize on Huobi’s businesses. *We believe an open-end
construct by design can align incentives and offer better transparency along
with liquidity. *We also conclude that **not all metastable solutions are
equal**, and design flaws can limit the ability to have meaningful impact.
Neutral believes wholeheartedly that our [metastable
basket](https://medium.com/@neutralproject/intro-to-neutral-dollar-98f95d1ff9f4)
can match all these checkpoints. Having options available is one part of helping
consumers, but enabling people to use them in beneficial ways is really the
solution that the Neutral Dollar is going to hopefully become.

— — — —

If you’re interested in learning more about our team and products, [check out
our website](http://www.neutralproject.com/) or start a conversation with us on
[Telegram](https://t.me/neutralproject) or
[Twitter](http://www.twitter.com/neutral_project).

* [Stable Coin](https://medium.com/tag/stable-coin?source=post)
* [Blockchain](https://medium.com/tag/blockchain?source=post)
* [Fintech](https://medium.com/tag/fintech?source=post)
* [Cryptocurrency](https://medium.com/tag/cryptocurrency?source=post)
* [Decentralization](https://medium.com/tag/decentralization?source=post)

### [Neutral](https://medium.com/@neutralproject)

Neutral Dollar is a metastable basket of stablecoins. The result is a digital
dollar which has lower volatility and combines fragmented pools of liquidity

