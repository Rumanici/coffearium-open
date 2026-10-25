---
title: Price fixation
summary: How the open futures part of a price-to-be-fixed green coffee contract is fixed – who holds the call, fixing orders, exchange for physicals, deadlines before first notice day, rolling, and the risks of lots left unfixed.
domain: trade
kind: Concept
stage: trade
topics: []
status: verified
lastVerified: 2026-10-24
reviewer: Coffearium verification pass
updated: 2026-10-24
added: 2026-10-24
corrections:
  - date: 2026-10-24
    change: "The statement that one Coffee “C” lot was used in practice to fix 300 bags of 60 kg was removed; the lot is now given in kilograms (our calculation)."
    reason: "The number rested only on the 2017 textbook, which may not carry a number alone; the exchange specification gives 37,500 lb only."
  - date: 2026-10-24
    change: "The Fairtrade deadline sentence now says the guidance speaks of fixed-price contracts agreed before a deadline; legend item 7 no longer cites it for the latest fixation date."
    reason: "The guidance passage concerns agreeing fixed-price contracts, not the fixation deadline of a PTBF contract."
  - date: 2026-10-24
    change: "The GCA rolling letter is now described as applying a differential that may differ from the contract differential, not as recording a new differential; “often” was removed from the EFP statements."
    reason: "Wording was stronger than the GCA form, the CFTC Glossary and the ICE FAQ state."
  - date: 2026-10-24
    change: "Added the Coffee “C” rulebook notice that the contract is being phased out and is not listed beyond March 2028; the IISD statement on buyer's call is now attributed with its 2003 ITC source."
    reason: "Rulebook header notice (consulted 24 Oct 2026); attribution rule for single Tier B statements."
brief:
  - "In a price-to-be-fixed (PTBF) contract, the differential is agreed at signing; the futures part of the price is fixed later against a named futures month.<sup><a href=\"#src-s1\">1</a>,<a href=\"#src-s11\">11</a></sup>"
  - "The contract names who may fix: at seller's call the seller chooses the moment, at buyer's call the buyer.<sup><a href=\"#src-s1\">1</a>,<a href=\"#src-s10\">10</a></sup>"
  - "The Green Coffee Association (GCA) form requires the earliest and latest fixation dates to be set when the contract is made.<sup><a href=\"#src-s1\">1</a></sup>"
  - "Fixing can run through an exchange for physicals (EFP): a privately negotiated, simultaneous swap of a futures position for the related physical position.<sup><a href=\"#src-s6\">6</a>,<a href=\"#src-s7\">7</a></sup>"
  - "For New York arabica (Coffee “C”), first notice day is seven business days before the first business day of the delivery month (October 2026).<sup><a href=\"#src-s3\">3</a></sup>"
quickFacts:
  - label: Price formula
    value: Futures price of the named month on the fixing day + agreed differential
  - label: Who fixes
    value: Seller's call or buyer's call, as stated in the contract
  - label: Fixing unit
    value: Futures lots (Coffee “C” 37,500 lb; ICE Robusta 10 t)
  - label: Fixation dates (GCA)
    value: Earliest and latest fixation date set at contract
  - label: First notice day (as of Oct 2026)
    value: Coffee “C” 7 business days, ICE Robusta 4 business days before the first business day of the delivery month
  - label: Not advice
    value: Describes how contracts work; all prices in the example are invented
aka:
  - Fixation
  - Price fixing
  - Fixing a PTBF contract
linkTerms:
  - price fixation
  - fixation
  - price fixing
  - seller's call
  - buyer's call
  - fixing order
  - fixation date
  - unfixed contract
  - rolling a fixation
related:
  - how-a-coffee-price-is-made
  - green-coffee-contracts
  - differentials
  - coffee-futures
  - hedging
  - incoterms-for-coffee
  - harvest-calendars
contested: []
sources:
  - id: s1
    title: "Contract Terms and Conditions (effective May 1, 2002, as amended to September 27, 2021)"
    authors: Green Coffee Association
    publisher: Green Coffee Association, Inc., New York
    year: 2021
    url: https://greencoffeeassociation.org/wp-content/uploads/2021/09/GCA-Contract-eff-9-27-21.pdf
    tier: A/B
    tierNote: "The contract form itself; A for what its terms state (section 2, Price and Differential price; Appendix A data fields for the Price Fix Letter and Price Fix Rolling Letter), B otherwise. Later amendments, if any, were not checked."
    quote: "earliest fixation date and latest fixation date shall be specified at time of contract."
    accessed: 2026-10-24
  - id: s2
    title: "European Standard Contract for Coffee (ESCC), 2018 Edition"
    authors: European Coffee Federation
    publisher: "European Coffee Federation, Brussels (copy hosted by the Comitato Associazioni Italiane Caffè, CAIC)"
    year: 2018
    url: https://www.caic1933.it/wp-content/uploads/2019/09/EUROPEAN-STANDARD-CONTRACT-FOR-COFFEE.-FINAL-VERSION-2018.pdf
    tier: A/B
    tierNote: "The contract form itself; A for what its clauses state, B otherwise. Searched for price fixation, futures and differential clauses on 24 Oct 2026: none found. Later editions not consulted."
    quote: "the contract shall be deemed to be discharged at the market price and any damages shall be paid immediately."
    accessed: 2026-10-24
  - id: s3
    title: "Coffee C® Futures: contract specifications"
    publisher: "ICE Futures U.S."
    year: 2026
    url: https://www.ice.com/api/productguide/spec/15/pdf
    tier: A
    tierNote: "Exchange product specification; page dated 24 October 2026"
    quote: "Seven business days prior to first business day of delivery month."
    accessed: 2026-10-24
  - id: s4
    title: "ICE Futures U.S. Rules, Chapter 8: Coffee “C” Rules"
    publisher: "ICE Futures U.S."
    year: 2025
    url: https://status.ice.com/publicdocs/rulebooks/futures_us/8_Coffee.pdf
    tier: A
    tierNote: "Exchange rulebook; Rules 8.01 (definitions, amended effective 19 Oct 2020) and 8.11 (delivery notices, amended effective 13 Apr 2016); header notice on the phasing-out of Coffee “C”"
    quote: "shall be issued no earlier than seven (7) Business Days prior to the first (1st) Business Day of the delivery month"
    accessed: 2026-10-24
  - id: s5
    title: "Robusta Coffee Futures: contract specifications"
    publisher: "ICE Futures Europe"
    year: 2026
    url: https://www.ice.com/api/productguide/spec/37089079/pdf
    tier: A
    tierNote: "Exchange product specification; page dated 24 October 2026"
    quote: "Fourth business day preceding the first business day of the delivery month."
    accessed: 2026-10-24
  - id: s6
    title: "EFRP FAQ"
    authors: ICE Futures U.S.
    publisher: "ICE Futures U.S."
    year: 2026
    url: https://www.ice.com/publicdocs/futures_us/EFRP_FAQ.pdf
    tier: A
    tierNote: "Exchange guidance, dated 9 February 2026; A for what the exchange requires of an EFRP. It does not mention coffee specifically; it applies to all ICE Futures U.S. contracts."
    quote: "A privately negotiated and simultaneous exchange of an Exchange futures position"
    accessed: 2026-10-24
  - id: s7
    title: "CFTC Glossary"
    publisher: "U.S. Commodity Futures Trading Commission"
    url: https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/CFTCGlossary/index.htm
    tier: A
    tierNote: "Government regulator; definitions of buyer's call, exchange for physicals, first notice day, last notice day and forward contract. Its Buyer's Call entry refers to a Seller's Call entry, which could not be read (the web page consulted on 24 Oct 2026 was truncated before the letter S)."
    quote: "A purchase of a specified quantity of a specific grade of a commodity at a fixed number of points above or below a"
    accessed: 2026-10-24
  - id: s8
    title: "The Coffee Guide, 4th edition"
    authors: International Trade Centre
    publisher: International Trade Centre, Geneva
    year: 2021
    url: https://intracen.org/es/media/5718
    tier: A
    tierNote: "ITC Coffee Guide; only the front matter, table of contents and chapter 1 could be read (the extracted text ends in chapter 1). Cited for the section headings of chapter 6 only."
    quote: "Fixing price-to-be-fixed contracts"
    accessed: 2026-10-24
  - id: s9
    title: "Guidance document on Price Risk Management of the Fairtrade Coffee Standard"
    authors: Fairtrade International, Standards Unit and Global Product Management
    publisher: Fairtrade International, Bonn
    year: 2022
    url: https://fairtrade.net/content/dam/fairtrade/fairtrade-international/Guidance-document_PRM-Strategy_EN.pdf
    tier: B
    tierNote: "Guidance of a standard-setting NGO (October 2022); describes requirements of the Fairtrade Coffee Standard but is not the standard itself."
    quote: "With a PTBF clause the risk is limited, but with fixed prices before the harvest (a short position)"
    accessed: 2026-10-24
  - id: s10
    title: "Sustainable Coffee Trade: The Role of Coffee Contracts"
    authors: May, P. H.; Mascarenhas, G. C. C.; Potts, J.
    publisher: International Institute for Sustainable Development (IISD), Winnipeg
    year: 2004
    url: https://iisd.org/system/files/publications/sci_coffee_contracts.pdf
    tier: B
    tierNote: "NGO research report (May 2004) of the Sustainable Commodity Initiative of UNCTAD and IISD, section 4.1.5; its statement on how common buyer's call is cites an ITC source of 2003 that was not consulted."
    quote: "depending upon which party is delegated this right in the contract."
    accessed: 2026-10-24
  - id: s11
    title: "Trading and Transaction – Market and Finance Dynamics"
    authors: Nadelberg, E.; Polit, J. R.; Orjuela, J. P.; Ranitzsch, K.
    publisher: "In: Folmer, B. (ed.), The Craft and Science of Coffee, Academic Press, ch. 9, pp. 205–223"
    year: 2017
    doi: 10.1016/B978-0-12-803520-7.00009-8
    url: https://doi.org/10.1016/B978-0-12-803520-7.00009-8
    tier: B
    tierNote: Recognised textbook chapter; read in the local full text supplied by the editor. Counts as one source together with source 12.
    quote: "The final contract price remains open except for the differential of the"
    accessed: 2026-10-24
  - id: s12
    title: "Economic Sustainability – Price, Cost, and Value"
    authors: Perez, J.; Kilian, B.; Pratt, L.; Ardila, J. C.; Lamb, H.; Byers, L.; Sanders, D.
    publisher: "In: Folmer, B. (ed.), The Craft and Science of Coffee, Academic Press, ch. 6, from p. 133"
    year: 2017
    doi: 10.1016/B978-0-12-803520-7.00006-2
    url: https://doi.org/10.1016/B978-0-12-803520-7.00006-2
    tier: B
    tierNote: Recognised textbook chapter; read in the local full text supplied by the editor. Counts as one source together with source 11.
    quote: "These open price contracts can be fixed against the coffee futures market price"
    accessed: 2026-10-24
  - id: s13
    title: "Risk management for coffee price fluctuations (EB 3839/03)"
    publisher: International Coffee Organization, Executive Board
    year: 2003
    url: https://ico.org/documents/eb3839e.pdf
    tier: B
    tierNote: "ICO Executive Board paper of 15 January 2003; English version of the French document cited in Coffee futures."
    quote: "fixed price contracts, non fixed-price contracts, minimum price contracts"
    accessed: 2026-10-24
---

## Fixed now or fixed later

A green coffee contract can carry its price in two ways. In an outright contract, buyer and seller agree one complete price at signing.<sup><a href="#src-s1">1</a></sup> In a price-to-be-fixed (PTBF) contract, they agree a differential and fix the futures part later.<sup><a href="#src-s1">1</a>,<a href="#src-s11">11</a></sup> The differential is the premium or discount for one lot against the futures price.<sup><a href="#src-s11">11</a></sup> A lot is a batch of coffee from one origin and process, traded as a unit.

The GCA contract form calls PTBF contracts “very common”.<sup><a href="#src-s1">1</a></sup> An International Coffee Organization (ICO) paper of 2003 lists fixed-price and non-fixed-price contracts among the forms of forward sale.<sup><a href="#src-s13">13</a></sup> How the two parts of a price add up is explained in How a coffee price is made. This entry follows the second part: how and when the open futures part is fixed.

Coffearium describes how these contracts work. This is not trading or investment advice, and every price in the example below is invented.

## Who decides when: seller's call and buyer's call

A PTBF contract states which party has the right to fix the price.<sup><a href="#src-s1">1</a></sup> This right is called the call. If the seller holds it, the contract is “at seller's call”; if the buyer holds it, “at buyer's call”.<sup><a href="#src-s10">10</a></sup>

The US futures regulator is the Commodity Futures Trading Commission (CFTC). It defines a buyer's call as a purchase at a set number of points above or below a named futures month.<sup><a href="#src-s7">7</a></sup> The buyer then has a set period to fix the price. The buyer does so by buying futures for the seller's account, or by telling the seller when to fix.<sup><a href="#src-s7">7</a></sup>

Seller's call works the other way round.<sup><a href="#src-s10">10</a></sup> Fairtrade's coffee rules make an open contract with a price-to-be-fixed clause the general rule for producer organisations.<sup><a href="#src-s9">9</a></sup> According to Fairtrade's 2022 guidance, seller's call lets them fix the price when their members deliver the coffee.<sup><a href="#src-s9">9</a></sup> A 2004 report of the International Institute for Sustainable Development (IISD) states, citing a 2003 International Trade Centre (ITC) source, that in most cases PTBF contracts were buyer's call and used in favour of roasters.<sup><a href="#src-s10">10</a></sup>

## How a fixation works

The contract names the futures month to fix against, for example New York arabica, March.<sup><a href="#src-s1">1</a></sup> Fixing happens in futures lots, so the GCA form asks for the number of lots to be stated where futures are used.<sup><a href="#src-s1">1</a></sup> One lot of Coffee “C” is 37,500 lb of arabica, quoted in US cents per lb.<sup><a href="#src-s3">3</a></sup> In metric units that is about 17,010 kg (our calculation).

The party with the call gives a fixing order. Each order fixes one or more lots at the futures price of that moment.<sup><a href="#src-s1">1</a>,<a href="#src-s7">7</a></sup> The lots can be fixed on different days, so one contract can end up with several fixed prices. The GCA's rolling document applies the differential to the “future average” to reach the outright price.<sup><a href="#src-s1">1</a></sup>

The futures can change hands in an exchange for physicals (EFP). The exchange ICE describes an EFP as a privately negotiated, simultaneous exchange of a futures position for the related physical position.<sup><a href="#src-s6">6</a></sup> The CFTC gives the plain case: the buyer of the physical coffee hands the seller a matching amount of long futures.<sup><a href="#src-s7">7</a></sup> In a 2017 textbook example, such an EFP at shipment closed the hedges of a roaster and a cooperative and fixed the price.<sup><a href="#src-s11">11</a></sup> How such hedges are opened and managed is explained in Hedging.

## Deadlines and first notice day

Fixing cannot wait for ever. The GCA form requires the earliest and the latest fixation date to be set when the contract is made.<sup><a href="#src-s1">1</a></sup> Changes to these terms need mutual agreement in writing.<sup><a href="#src-s1">1</a></sup>

The named futures month sets its own limit. From first notice day, sellers of futures can give notice that they will deliver coffee against the contract.<sup><a href="#src-s4">4</a>,<a href="#src-s7">7</a></sup> For Coffee “C” that day is seven business days before the first business day of the delivery month.<sup><a href="#src-s3">3</a></sup> For London robusta it is the fourth business day before it.<sup><a href="#src-s5">5</a></sup> For fixed-price contracts, Fairtrade's guidance describes buyer and producer organisation agreeing prices for coming shipments before a set deadline. That deadline can fall even before the first notice day or the bill of lading date.<sup><a href="#src-s9">9</a></sup>

If a lot is not fixed in time, the parties can move it to a later futures month. The trade calls this rolling. The GCA form has a separate “Price Fix Rolling Letter” that records the lots rolled from one futures month to another.<sup><a href="#src-s1">1</a></sup>

## The life of a PTBF contract

The figure follows one PTBF contract from signing to shipment. The physical contract runs in the upper lane, the futures position in the lower lane.

<figure class="iso-fig">
<div data-figure="price-fixation-ptbf-timeline"></div>
<ol class="fig-legend">
<li data-n="1"><span><b>Contract.</b> Differential, futures month, number of lots, who holds the call and the fixation dates are agreed.<sup><a href="#src-s1">1</a></sup></span></li>
<li data-n="2"><span><b>Futures position.</b> Futures in the named month stand in for the open part of the price until it is fixed.<sup><a href="#src-s11">11</a></sup></span></li>
<li data-n="3"><span><b>Fixation window.</b> From the earliest to the latest fixation date in the contract.<sup><a href="#src-s1">1</a></sup></span></li>
<li data-n="4"><span><b>Fixing orders.</b> The party with the call fixes lot by lot; each lot takes the futures price of that moment plus the differential.<sup><a href="#src-s1">1</a>,<a href="#src-s7">7</a></sup></span></li>
<li data-n="5"><span><b>Exchange for physicals.</b> Futures pass between buyer and seller against the physical coffee, privately and off the exchange.<sup><a href="#src-s6">6</a>,<a href="#src-s7">7</a></sup></span></li>
<li data-n="6"><span><b>Roll.</b> An unfixed lot is moved to a later futures month, by agreement and in writing.<sup><a href="#src-s1">1</a></sup></span></li>
<li data-n="7"><span><b>Latest fixation date.</b> Set at contract.<sup><a href="#src-s1">1</a></sup> Here it lies before first notice day (our reading of why: see First notice day and rolling).</span></li>
<li data-n="8"><span><b>First notice day.</b> From this day, delivery notices can be issued in the named month.<sup><a href="#src-s3">3</a>,<a href="#src-s4">4</a></sup></span></li>
<li data-n="9"><span><b>Shipment.</b> The coffee ships and is invoiced at the fixed price.<sup><a href="#src-s11">11</a></sup></span></li>
</ol>
<figcaption>The main steps of a price-to-be-fixed contract, in time order. Schematic, not to scale.</figcaption>
</figure>

<!-- deep-dive -->

## Reference values: what a PTBF contract states

| Parameter | What the sources say |
|---|---|
| Price basis | A price or “an industry recognized price formula” is mandatory in every GCA contract<sup><a href="#src-s1">1</a></sup> |
| Differential | A number added to or subtracted from an agreed price basis<sup><a href="#src-s1">1</a></sup> |
| Futures reference | Market, month and year (the GCA “Future ID”, e.g. KC for New York coffee)<sup><a href="#src-s1">1</a></sup> |
| Number of lots | To be specified where futures are used<sup><a href="#src-s1">1</a></sup> |
| Right to fix | Whether buyer or seller may execute the fixation<sup><a href="#src-s1">1</a></sup> |
| Fixation dates | Earliest and latest fixation date set at contract<sup><a href="#src-s1">1</a></sup> |
| Margin | Whether margin is payable between fixation and shipment or delivery, set at contract<sup><a href="#src-s1">1</a></sup> |
| Changes | Only by mutual agreement, confirmed in writing<sup><a href="#src-s1">1</a></sup> |
| Coffee “C” lot | 37,500 lb, US cents and hundredths of a cent per lb<sup><a href="#src-s3">3</a></sup> |
| Coffee “C” months | March, May, July, September, December<sup><a href="#src-s3">3</a></sup> |
| Coffee “C” first notice day | Seven business days before the first business day of the delivery month<sup><a href="#src-s3">3</a></sup> |
| Coffee “C” last trading day | One business day before the last notice day<sup><a href="#src-s3">3</a>,<a href="#src-s4">4</a></sup> |
| ICE Robusta lot | 10 t, USD per t<sup><a href="#src-s5">5</a></sup> |
| ICE Robusta first notice day | Fourth business day before the first business day of the delivery month<sup><a href="#src-s5">5</a></sup> |

Contract terms from the GCA form as amended to 27 September 2021; exchange values from the ICE specification pages consulted on 24 October 2026. Exchanges change their rules; their pages are the authority. The Coffee “C” rulebook consulted on 24 October 2026 states that the exchange is phasing out Coffee “C”, will replace it with a new arabica futures contract and has stopped listing Coffee “C” futures beyond the March 2028 month.<sup><a href="#src-s4">4</a></sup> Coffee “C” lot in metric units (our calculation, 1 lb = 0.45359237 kg): about 17,010 kg, or about 283.5 bags of 60 kg.

## What the standard forms say

The GCA form treats the PTBF price as a formula against a futures market recognised by the trade.<sup><a href="#src-s1">1</a></sup> Its data standard has separate documents for the fixation: a Price Fix Letter and a Price Fix Rolling Letter.<sup><a href="#src-s1">1</a></sup> In the rolling letter, the number of lots is the number rolled from one futures month to another. The differential is the number applied to the futures average to reach the outright price.<sup><a href="#src-s1">1</a></sup>

The 2018 European Standard Contract for Coffee (ESCC) has no clause on price fixation, futures or differentials in the text consulted for this entry.<sup><a href="#src-s2">2</a></sup> European PTBF terms must therefore come from the parties' own contract (our reading); the ESCC supplies quality, weights, documents and arbitration (see Green coffee contracts). Its insolvency clause deems the contract “discharged at the market price”.<sup><a href="#src-s2">2</a></sup>

The International Trade Centre's 2021 Coffee Guide has sections titled “Trading at price to be fixed”, “Fixing price-to-be-fixed contracts”, “Why sell PTBF?” and “Avoiding the fixation trap”.<sup><a href="#src-s8">8</a></sup> Only its table of contents could be read for this entry, so their content is not reported here.

## Exchange for physicals as ICE defines it

ICE Futures U.S. treats the EFP as one kind of exchange for related position (EFRP).<sup><a href="#src-s6">6</a></sup> The FAQ of February 2026 sets these conditions:<sup><a href="#src-s6">6</a></sup>

| Condition | ICE Futures U.S. (EFRP FAQ, 2026) |
|---|---|
| Nature | Off-exchange, bilaterally and privately negotiated; futures and the related position are exchanged simultaneously<sup><a href="#src-s6">6</a></sup> |
| Sides | The buyer of the cash commodity is the seller of the futures, and the other way round<sup><a href="#src-s6">6</a></sup> |
| Related position | The product underlying the futures contract, or a related product with a reasonable price correlation<sup><a href="#src-s6">6</a></sup> |
| Price | Any commercially reasonable price agreed by both parties, in the contract's minimum tick<sup><a href="#src-s6">6</a></sup> |
| Evidence | A bona fide transfer of ownership of the cash commodity, or a legally binding contract between the parties<sup><a href="#src-s6">6</a></sup> |
| Reporting (non-energy contracts) | No later than 30 minutes after the end of the trading session<sup><a href="#src-s6">6</a></sup> |

The CFTC also calls the EFP an exchange of futures for cash, “AA” or “ex-pit”; the price difference is agreed by the two parties.<sup><a href="#src-s7">7</a></sup> The FAQ does not mention coffee; it applies to all ICE Futures U.S. contracts.<sup><a href="#src-s6">6</a></sup>

For a PTBF contract, the EFP lets the fixation and the closing of both futures positions happen in one step. In the 2017 textbook example, the roaster was long one lot and the cooperative short one lot. At shipment the roaster passed its long futures to the cooperative by EFP at that day's market level. Both positions closed, and the coffee was invoiced at that level plus the differential.<sup><a href="#src-s11">11</a></sup> The full arithmetic of that example is in How a coffee price is made.

## First notice day and rolling

A contract month ends in delivery. For Coffee “C”, a member with an open short position may issue delivery notices from seven business days before the first business day of the delivery month.<sup><a href="#src-s4">4</a></sup> Last notice day is the seventh business day before the last business day of the month; last trading day is one business day earlier.<sup><a href="#src-s4">4</a></sup> A holder of long futures after first notice day can therefore receive a delivery notice for exchange-grade coffee.<sup><a href="#src-s4">4</a>,<a href="#src-s7">7</a></sup> Our reading: this is why fixing deadlines are set before first notice day, so that hedges against a PTBF contract can be closed or rolled first.

Rolling replaces the named month with a later one. The hedger buys back the expiring month and sells the next (or the other way round), and gains or loses the spread between the two months (our description; see Coffee futures). In the GCA rolling letter, the differential is the number applied to the futures average after the roll, and it may differ from the contract differential.<sup><a href="#src-s1">1</a></sup> The worked example shows one way to set it. No source consulted for this entry states a standard rule for adjusting the differential on a roll.

## Worked example (hypothetical)

All prices below are invented for illustration. They are not market quotes, forecasts or advice. Prices in US cents per lb against New York arabica (Coffee “C”); nominal.

An exporter sells washed arabica equal to two Coffee “C” lots to an importer, PTBF at seller's call, at “March + 30.00”. On the day of signing, March futures trade at 300.00. An outright contract that day might have been agreed at 330.00 for both lots.

| Step | March futures | May futures | Differential | Price of the lot |
|---|---|---|---|---|
| Signing | 300.00 | – | +30.00 vs March | Open |
| Seller fixes lot 1 | 312.00 | – | +30.00 vs March | 342.00 |
| **Path A:** seller fixes lot 2 before the deadline in a falling market | 280.00 | – | +30.00 vs March | 310.00 |
| Average, path A | | | | 326.00 |
| **Path B:** lot 2 rolled to May instead (March 280.00, May 276.00) | 280.00 | 276.00 | +34.00 vs May | Open |
| Seller fixes lot 2 against May | – | 295.00 | +34.00 vs May | 329.00 |
| Average, path B | | | | 335.50 |

Our arithmetic: 312.00 + 30.00 = 342.00; 280.00 + 30.00 = 310.00; (342.00 + 310.00) / 2 = 326.00. In path B, the differential is raised by the March–May spread (4.00), so the price level at the roll stays 310.00 (276.00 + 34.00). Then 295.00 + 34.00 = 329.00 and (342.00 + 329.00) / 2 = 335.50. The spread adjustment is our illustration only.

Conversions (our calculation): 326.00 US cents per lb is about USD 7,187 per tonne (× 22.046). On one Coffee “C” lot of 37,500 lb, each 1 cent per lb is USD 375.<sup><a href="#src-s3">3</a></sup>

Path B ends higher only because the invented May price rose after the roll. Had it fallen further, path B would have ended lower than path A. The example shows mechanics, not a better choice.

## Risks of fixing and of unfixed lots

**Unfixed lots.** Until a lot is fixed, its final price moves with the futures market.<sup><a href="#src-s11">11</a>,<a href="#src-s12">12</a></sup> How a futures hedge covers the open part, and what it leaves uncovered, is explained in Hedging and Differentials.

**Deadlines in a falling market.** A seller with the call who waits for a recovery must still fix by the latest fixation date.<sup><a href="#src-s1">1</a></sup> If prices keep falling, the fixed price is the lower one (path A in the example; our reading of the contract terms).

**Deadlines in a rising market.** At buyer's call the risk is mirrored: a buyer who waits for a fall must fix by the deadline, at a higher level if prices rise (our reading).<sup><a href="#src-s1">1</a>,<a href="#src-s7">7</a></sup>

**Fixing too early.** According to Fairtrade's guidance, a producer organisation that fixes prices before the harvest is short. If the market rises, its margin shrinks and can turn into a loss.<sup><a href="#src-s9">9</a></sup> The guidance calls selling at a loss after many fixed-price contracts in sudden volatility “the number one cause of contract default”.<sup><a href="#src-s9">9</a></sup> A 2017 textbook chapter describes the same case: members sell to other buyers when prices rise, and the cooperative may default on its contracts.<sup><a href="#src-s12">12</a></sup> The Fairtrade Coffee Standard limits fixed prices to one crop period and asks for buyer approval and a risk management strategy before fixing ahead of harvest.<sup><a href="#src-s9">9</a></sup>

**Margin.** Futures positions need margin until they are closed (see Coffee futures). The GCA form asks the parties to state whether margin is payable between fixation and shipment.<sup><a href="#src-s1">1</a></sup>

## Open questions

- **How common each call is.** The only statement found, that most PTBF contracts are buyer's call, comes from a 2004 report citing an ITC source of 2003.<sup><a href="#src-s10">10</a></sup> No source consulted for this entry measures the share of outright, seller's-call and buyer's-call contracts as of 2026.
- **Missed deadlines.** The GCA form requires a latest fixation date but, in the parts consulted, does not say what happens to a lot left unfixed after it.<sup><a href="#src-s1">1</a></sup> No source consulted describes a standard default rule.
- **Peer-reviewed evidence.** No peer-reviewed study consulted for this entry measured how fixation timing affects the prices producers receive.

## Key documents

<div class="study">
<p><strong>Green Coffee Association, 2021 – Contract Terms and Conditions.</strong> The New York contract form. Its price section defines outright and differential (PTBF) prices and lists what a PTBF contract must state: differential, lots, who fixes, margin, and earliest and latest fixation dates.</p>
<p class="meta">GCA, effective 1 May 2002, amended 27 September 2021 · <a href="https://greencoffeeassociation.org/wp-content/uploads/2021/09/GCA-Contract-eff-9-27-21.pdf">PDF</a></p>
</div>

<div class="study">
<p><strong>ICE Futures U.S., 2026 – EFRP FAQ.</strong> The exchange's answers on exchanges for related positions, including the EFP: what counts as a related position, how the price is set, what evidence is needed and when the trade must be reported.</p>
<p class="meta">ICE Futures U.S., 9 February 2026 · <a href="https://www.ice.com/publicdocs/futures_us/EFRP_FAQ.pdf">PDF</a></p>
</div>

<div class="study">
<p><strong>Fairtrade International, 2022 – Guidance on price risk management.</strong> Explains why the Fairtrade Coffee Standard makes PTBF at seller's call the general rule for producer organisations, and when fixed prices are allowed.</p>
<p class="meta">Fairtrade International, October 2022 · <a href="https://fairtrade.net/content/dam/fairtrade/fairtrade-international/Guidance-document_PRM-Strategy_EN.pdf">PDF</a></p>
</div>

<div class="study">
<p><strong>May, Mascarenhas and Potts, 2004 – Sustainable coffee trade: the role of coffee contracts.</strong> Reviews standard and alternative coffee contracts. It defines seller's call and buyer's call and discusses PTBF at seller's call as a tool to lower producers' market risk.</p>
<p class="meta">IISD, Winnipeg, May 2004 · <a href="https://iisd.org/system/files/publications/sci_coffee_contracts.pdf">PDF</a></p>
</div>
