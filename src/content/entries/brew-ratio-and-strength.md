---
title: Brew ratio and strength
summary: How much coffee is used for how much water, how that ratio is written, and how it sets the strength of the cup – with the published specifications and what sensory studies say about strength and liking.
domain: extraction
kind: Concept
stage: brew
topics: [science]
status: verified
lastVerified: 2026-10-20
reviewer: Coffearium verification pass
updated: 2026-10-20
added: 2026-10-20
corrections:
  - date: 2026-10-20
    change: "Deep dive: the measured immersion points at ratios 15 and 25 lie near the 18% drip line; the point at ratio 5 does not (it was wrongly included). Golden Cup paragraph: 55 g/kg now described as a ratio that reaches the strong, high-yield corner at 22% yield, not as corresponding to that corner."
    reason: Recalculation with the drip formula (R_abs = 2.1) gives 5.8% TDS at ratio 5 and 18% yield, far from the measured 4.07%; at 55 g/kg the box is crossed by a line of yield/TDS pairs, not a single corner.
  - date: 2026-10-20
    change: "Published ratios chart: full-immersion range corrected from 5–25 to 2–25; slope between ratios 16 and 20 corrected from 0.06–0.09 to 0.07–0.09 points; threshold section adds the authors’ note that the true threshold may be lower."
    reason: Liang et al. 2021 (Table 1) brewed 1-L equilibrium brews from ratio 2 to 25; recalculated slopes are 0.065–0.094; Frost et al. 2019 state the threshold estimate may be an overestimate.
brief:
  - 'The brewing ratio compares the dry coffee dose with the water used; the beverage ratio compares it with the beverage collected.<sup><a href="#src-s4">4</a>,<a href="#src-s12">12</a></sup>'
  - 'The two differ because spent grounds hold liquid back: about 2.1 g per gram of coffee in drip, 2.48 ± 0.19 g in one immersion study.<sup><a href="#src-s5">5</a>,<a href="#src-s4">4</a></sup>'
  - 'The Specialty Coffee Association (SCA) tests home brewers at 55 g of coffee per 1.000 kg of water, and recommends 55–60 g per litre for batch-brewed descriptive assessment.<sup><a href="#src-s1">1</a>,<a href="#src-s3">3</a></sup>'
  - In full immersion at equilibrium, total dissolved solids (TDS) is approximately inversely proportional to the water-to-coffee ratio.<sup><a href="#src-s4">4</a></sup>
  - In drip-coffee studies, TDS shaped the sensory profile more than extraction yield, and two consumer segments differed most strongly in the TDS they liked.<sup><a href="#src-s6">6</a>,<a href="#src-s8">8</a></sup>
quickFacts:
  - label: Brewing ratio
    value: Dry coffee dose to water used (e.g. 55 g per 1,000 g, or 1:18.2)
  - label: Beverage ratio
    value: Dry coffee dose to beverage collected (e.g. 20 g to 40 g, 1:2)
  - label: Strength
    value: TDS, % of the beverage mass that is dissolved coffee
  - label: SCA home-brewer test (SCA 310-2021)
    value: 55 g coffee per 1.000 kg water; 1.15–1.55% TDS
  - label: SCA cupping (SCA 102-2024)
    value: 8.25 g per 150 mL of cup capacity; batch brews 55–60 g/L
  - label: Liquid kept by spent grounds
    value: ≈2.1 g/g (drip); 2.48 ± 0.19 g/g (immersion study)
  - label: Smallest TDS difference tasted
    value: 0.24% TDS (estimate, one drip study)
aka:
  - Coffee-to-water ratio
  - Brewing ratio
linkTerms:
  - brew ratio
  - brewing ratio
  - coffee-to-water ratio
  - water-to-coffee ratio
  - coffee to water ratio
  - beverage ratio
related:
  - extraction-yield-and-tds
  - brewing-control-chart
  - espresso-recipes-and-ratios
  - brew-methods
  - pour-over-technique
  - cupping
  - cold-brew
  - water-for-coffee
  - extraction-variables
  - what-extraction-is
  - brew-temperature
contested:
  - 'Bitterness at higher strength: a coffee science textbook states that, at the same yield, a stronger brew made with more coffee per litre is not more bitter but simply has more solids<sup><a href="#src-s11">11</a></sup>; an SCA magazine article by the UC Davis research group reports that, in general, bitterness increased with both TDS and extraction yield in its drip-coffee studies.<sup><a href="#src-s14">14</a></sup>'
  - 'Which strength is “ideal”: the SCA Golden Cup Standard sits at 1.15–1.35% TDS<sup><a href="#src-s6">6</a></sup>, the SCA home-brewer standard tests for 1.15–1.55%<sup><a href="#src-s1">1</a></sup>, while in a 2023 synthesis the larger of two consumer segments (57%) liked low-TDS coffees best.<sup><a href="#src-s5">5</a></sup> The 2021 consumer study behind it concludes that the chart’s “ideal” should be reconsidered to reflect consumer segments.<sup><a href="#src-s8">8</a></sup>'
sources:
  - id: s1
    title: "SCA Standard 310-2021 Home Coffee Brewers: Specifications and Test Methods"
    authors: Specialty Coffee Association
    publisher: Specialty Coffee Association (document © 2022)
    year: 2021
    url: https://sca.coffee/s/SCA_Standard_310-2021.pdf
    tier: A/B
    tierNote: A for what the standard itself specifies (test ratio, target brew strength, slurry temperature, test grinds); B otherwise. It covers electrical home brewers and excludes manual pour-over devices.
    quote: "The brew ratio used for testing in this standard is 55 g of coffee per 1.000 kg of fresh water unless stated otherwise."
    accessed: 2026-10-20
  - id: s2
    title: "SCA Standard 102-2024 Coffee Value Assessment: Sample Preparation and Tasting Mechanics"
    authors: Specialty Coffee Association
    publisher: Specialty Coffee Association
    year: 2024
    url: https://sca.coffee/s/AW_SCA-102_Sample-Preparation_281024_Secured.pdf
    tier: A/B
    tierNote: A for what the standard specifies; B for its explanations
    quote: "Once the cupping vessel volume is measured, the mass of coffee per cup is calculated at a ratio of 8.25 g of coffee per 150 mL of vessel capacity."
    accessed: 2026-10-20
  - id: s3
    title: "A System to Assess Coffee Value: Understanding the Specialty Coffee Association’s Coffee Value Assessment (June 2024)"
    authors: Specialty Coffee Association (writing team Fernández-Alduenda, M.; Ionescu, K. E.; Giuliano, P.; Rugolo, J.; Delrue, R.)
    publisher: Specialty Coffee Association
    year: 2024
    url: https://static1.squarespace.com/static/584f6bbef5e23149e5522201/t/667182ffdde8a5081afc2d8c/1718715138872/SCA+-+A+System+to+Asssess+Coffee+Value+-+June+2024+(Secured).pdf
    tier: A/B
    tierNote: A for what the CVA itself specifies (scales, procedure); B for its explanations of sensory science and its account of the SCA's own research
    quote: "In that case, a brew ratio of 55–60 g of coffee per liter of water is recommended, unless the descriptive assessment is used for specific brewing applications outside of this range."
    accessed: 2026-10-20
  - id: s4
    title: "An equilibrium desorption model for the strength and extraction yield of full immersion brewed coffee"
    authors: Liang, J.; Chan, K. C.; Ristenpart, W. D.
    publisher: Scientific Reports 11, 6904
    year: 2021
    doi: 10.1038/s41598-021-85787-1
    url: https://www.nature.com/articles/s41598-021-85787-1
    tier: A
    quote: "is approximately inversely proportional to the water/coffee mass brew ratio"
    accessed: 2026-10-20
  - id: s5
    title: "A new Coffee Brewing Control Chart relating sensory properties and consumer liking to brew strength, extraction yield, and brew ratio"
    authors: Guinard, J.-X.; Frost, S.; Batali, M.; Cotter, A.; Lim, L. X.; Ristenpart, W. D.
    publisher: Journal of Food Science 88(5), 2168–2177
    year: 2023
    doi: 10.1111/1750-3841.16531
    url: https://ift.onlinelibrary.wiley.com/doi/10.1111/1750-3841.16531
    tier: A
    quote: "we propose that this new Sensory and Consumer BCC replace the classic BCC."
    accessed: 2026-10-20
  - id: s6
    title: "Brew temperature, at fixed brew strength and extraction, has little impact on the sensory profile of drip brew coffee"
    authors: Batali, M. E.; Ristenpart, W. D.; Guinard, J.-X.
    publisher: Scientific Reports 10, 16450
    year: 2020
    doi: 10.1038/s41598-020-73341-4
    url: https://www.nature.com/articles/s41598-020-73341-4
    tier: A
    quote: "The TDS had the greatest impact on the sensory properties, with PE yielding a lesser but noticeable impact."
    accessed: 2026-10-20
  - id: s7
    title: "Effects of brew strength, brew yield, and roast on the sensory quality of drip brewed coffee"
    authors: Frost, S. C.; Ristenpart, W. D.; Guinard, J.-X.
    publisher: Journal of Food Science 85(8), 2530–2543
    year: 2020
    doi: 10.1111/1750-3841.15326
    url: https://pubmed.ncbi.nlm.nih.gov/32652586/
    tier: A
    quote: "sweetness exhibited an inverse correlation with TDS irrespective of roast"
    abstractOnly: true
    accessed: 2026-10-20
  - id: s8
    title: "Consumer preferences for black coffee are spread over a wide range of brew strengths and extraction yields"
    authors: Cotter, A. R.; Batali, M. E.; Ristenpart, W. D.; Guinard, J.-X.
    publisher: Journal of Food Science 86(1), 194–205
    year: 2021
    doi: 10.1111/1750-3841.15561
    url: https://doi.org/10.1111/1750-3841.15561
    tier: A
    quote: "Cluster analysis revealed two consumer segments whose preferences varied most strongly with TDS."
    abstractOnly: true
    accessed: 2026-10-20
  - id: s9
    title: "Effect of basket geometry on the sensory quality and consumer acceptance of drip brewed coffee"
    authors: Frost, S. C.; Ristenpart, W. D.; Guinard, J.-X.
    publisher: Journal of Food Science (early-view version, accepted 17 May 2019)
    year: 2019
    doi: 10.1111/1750-3841.14696
    url: https://pages.uoregon.edu/chendon/coffee_literature/old_literature/2019%20J.%20Food%20Sci.,%20%20Basket%20geometry%20from%20sensory%20--%20no%20control%20for%20concentration.pdf
    tier: A
    quote: "Coffee brewed in the semi-conical basket had significantly higher %TDS, and we estimated a sensory difference threshold of 0.24 %TDS."
    accessed: 2026-10-20
  - id: s10
    title: "Comparison of nine common coffee extraction methods: instrumental and sensory analysis"
    authors: Gloess, A. N.; Schönbächler, B.; Klopprogge, B.; D’Ambrosio, L.; Chatelain, K.; Bongartz, A.; Strittmatter, A.; Rast, M.; Yeretzian, C.
    publisher: European Food Research and Technology 236, 607–627
    year: 2013
    doi: 10.1007/s00217-013-1917-x
    url: https://digitalcollection.zhaw.ch/bitstream/11475/4251/2/2013_Gloess-etal_Comparison-of-nine-common-coffee-extraction-methods.pdf
    tier: A
    quote: "The maximum extraction yield was given by Bia extraction (31.2 %), followed by Bo (26 %)."
    accessed: 2026-10-20
  - id: s11
    title: "The Brew – Extracting for Excellence"
    authors: Mestdagh, F.; Glabasnia, A.; Giuliano, P.
    publisher: "In: Folmer, B. (ed.), The Craft and Science of Coffee, Academic Press, ch. 15, pp. 355–380"
    year: 2017
    doi: 10.1016/B978-0-12-803520-7.00015-3
    url: https://doi.org/10.1016/B978-0-12-803520-7.00015-3
    tier: B
    quote: "This beverage is not more bitter than weaker coffee, but simply has more solids."
    accessed: 2026-10-20
  - id: s12
    title: "The SCA Water Quality Handbook, edition 2 (ISBN 978-0-9995807-3-8)"
    authors: Wellinger, M.; Smrke, S.; Yeretzian, C.
    publisher: Specialty Coffee Association
    year: 2018
    url: https://digitalcollection.zhaw.ch/handle/11475/12365
    tier: A/B
    tierNote: A for its water targets and the brew ratios it assumes for them; B for its glossary definitions and explanations
    quote: "In an effort to establish a common ground for coffee brewing preparations, we anticipate a ratio of 1:2 for espresso and a 1:15 ratio for filter as a starting point that will affect optimal water characteristics."
    accessed: 2026-10-20
  - id: s13
    title: "Influence of Flow Rate, Particle Size, and Temperature on Espresso Extraction Kinetics"
    authors: Schmieder, B. K. L.; Pannusch, V. B.; Vannieuwenhuyse, L.; Briesen, H.; Minceva, M.
    publisher: Foods 12(15), 2871
    year: 2023
    doi: 10.3390/foods12152871
    url: https://mdpi-res.com/d_attachment/foods/foods-12-02871/article_deploy/foods-12-02871.pdf
    tier: A
    quote: "The ratio between the ground coffee mass in the puck and the extracted EC mass in the cup is called the brew ratio (BR)."
    accessed: 2026-10-20
  - id: s14
    title: "Towards a New Brewing Chart"
    authors: Frost, S.; Batali, M.; Guinard, J.-X.; Ristenpart, W. D.
    publisher: Specialty Coffee Association, 25 Magazine, Issue 13
    url: https://sca.coffee/sca-news/25/issue-13/towards-a-new-brewing-chart-xpj8t
    tier: B
    quote: "Here we can see more clearly that in general the trend is that bitterness increases with both TDS and PE."
    accessed: 2026-10-20
---

## What the ratio describes

A brew starts with two weighed ingredients: a dose of dry ground coffee and an amount of water. The ratio between them is the **brewing ratio**. One immersion study defines it as the mass of water divided by the mass of coffee grounds.<sup><a href="#src-s4">4</a></sup> The SCA home-brewer standard defines it the other way round, as coffee to water, in grams of coffee per kilogram of water.<sup><a href="#src-s1">1</a></sup>

The ratio matters because it sets the **strength** of the cup. Strength is measured as total dissolved solids (TDS): the share of the beverage mass that is dissolved coffee.<sup><a href="#src-s1">1</a></sup> According to a coffee science textbook, more coffee for the same water, at the same extraction yield, gives a stronger brew.<sup><a href="#src-s11">11</a></sup> In the textbook’s account, that brew is darker and has a thicker mouthfeel.<sup><a href="#src-s11">11</a></sup>

Extraction yield is the other half of the picture: the share of the dose that has dissolved. The extraction yield entry explains how TDS, yield and ratio are linked by one equation. This entry looks at the ratio itself and at strength.

## Writing a ratio

The same recipe can be written in several ways. A filter brew of 55 g of coffee with 1,000 g of water can appear as:

- **55 g/kg** – grams of coffee per kilogram of water, as in the SCA home-brewer standard.<sup><a href="#src-s1">1</a></sup>
- **55 g/L** – grams per litre of water, as in the SCA sample-preparation standard for batch brews.<sup><a href="#src-s2">2</a></sup> A litre of water weighs close to 1 kg; the same standard uses a density of 1 g/mL to find the volume of a cupping bowl.<sup><a href="#src-s2">2</a></sup>
- **1:18.2** or **18.2:1** – coffee to water, or water to coffee (our arithmetic: 1,000 ÷ 55). The same standard writes 55–60 g/L as “approximately 17:1 to 18:1 water-to-coffee”.<sup><a href="#src-s2">2</a></sup>
- **18.2** – a single number, water mass ÷ coffee mass, as research papers write it.<sup><a href="#src-s4">4</a>,<a href="#src-s5">5</a></sup>

“1:16” on its own is therefore ambiguous: it can mean coffee to water or coffee to beverage. In espresso, a 2023 study calls the ratio of puck mass to cup mass the brew ratio.<sup><a href="#src-s13">13</a></sup> The SCA water handbook also defines brew ratio by the beverage weight, not the water.<sup><a href="#src-s12">12</a></sup> In this entry, as in the extraction yield entry, the **brewing ratio** uses the water and the **beverage ratio** uses the beverage. In both, the first number is the dose.

## How the ratio sets strength

The dissolved coffee in a brew comes from the dose. So, at a fixed extraction yield, more coffee per gram of water means more dissolved coffee per gram of beverage. In a 2021 immersion study, TDS at equilibrium was approximately inversely proportional to the water-to-coffee ratio.<sup><a href="#src-s4">4</a></sup> Measured examples from that study: 4.07% TDS at a ratio of 5, 1.36% at 15 and 0.75% at 25.<sup><a href="#src-s4">4</a></sup>

The authors conclude that full immersion gives precise control of TDS at equilibrium.<sup><a href="#src-s4">4</a></sup> In drip brewing, grind and contact time also move the yield, so the ratio alone does not fix the TDS. For drip, we calculated TDS from the ratio at three fixed yields, using the formula of a 2023 study (details in Deep dive).<sup><a href="#src-s5">5</a></sup>

<figure>
<div data-figure="brew-ratio-and-strength-tds-vs-ratio"></div>
<figcaption>TDS against brewing ratio. Circles and squares: our calculation for drip brews at 18, 20 and 22% extraction yield. It assumes 2.1 g of liquid kept per gram of coffee.<sup><a href="#src-s5">5</a></sup> Triangles: measured full-immersion brews at equilibrium.<sup><a href="#src-s4">4</a></sup> Drip and immersion values are not directly comparable.</figcaption>
</figure>

The curve is steep at low ratios and flat at high ones. Between ratios of 16 and 20, each extra gram of water per gram lowers the TDS by 0.07–0.09 points at 20% yield (our calculation).<sup><a href="#src-s5">5</a></sup>

## Why the cup holds less than the water poured

Spent grounds stay wet. The liquid they hold never reaches the cup. In a 2023 drip-coffee study, the grounds kept about 2.1 g of liquid per gram of coffee.<sup><a href="#src-s5">5</a></sup> In one set of immersion brews, the grounds kept 2.48 ± 0.19 g per gram.<sup><a href="#src-s4">4</a></sup>

So the beverage ratio is always smaller than the brewing ratio. Take 55 g of coffee and 1,000 g of water. With 2.1 g kept per gram, about 115 g of liquid stays in the grounds. Roughly 896 g of beverage reaches the cup (our calculation, at 1.25% TDS).<sup><a href="#src-s5">5</a></sup> The brewing ratio is 1:18.2; the beverage ratio is about 1:16.3.

Espresso recipes are written the other way. The beverage is weighed in the cup, as in a 20 g dose for 40 g of beverage (1:2).<sup><a href="#src-s13">13</a></sup> The espresso recipes entry covers these ratios.

## Strength and flavour

A group at the University of California, Davis (UC Davis) brewed drip coffee to fixed strengths and yields. Trained panels and consumers then tasted it.<sup><a href="#src-s6">6</a>,<a href="#src-s7">7</a>,<a href="#src-s8">8</a></sup> The findings that concern strength:

- TDS had the greatest effect on the sensory profile; extraction yield had a lesser but noticeable one.<sup><a href="#src-s6">6</a></sup>
- Sweetness fell as TDS rose, at all three roast degrees tested.<sup><a href="#src-s7">7</a></sup>
- According to the group’s SCA magazine article, sourness rose with TDS but fell with extraction yield, and bitterness rose with both.<sup><a href="#src-s14">14</a></sup>
- In a consumer study of 118 coffee drinkers, two segments emerged. Their preferences differed most strongly with TDS.<sup><a href="#src-s8">8</a></sup>
- Overall flavour intensity and acidity influenced how much consumers liked a coffee.<sup><a href="#src-s8">8</a></sup>

In other words, in these drip studies strength – which the ratio helps to set – mattered more for flavour and liking than the yield did. A coffee science textbook draws a different line on bitterness (see Contested).<sup><a href="#src-s11">11</a></sup>

## Published ratios

Few documents specify a ratio. Those consulted for this entry come from the SCA:

- **Home brewers.** SCA 310-2021 tests electrical home brewers at 55 g of coffee per 1.000 kg of fresh water.<sup><a href="#src-s1">1</a></sup> At that ratio, the brew must reach 1.15–1.55% TDS.<sup><a href="#src-s1">1</a></sup>
- **Cupping.** SCA 102-2024 sets 8.25 g of coffee per 150 mL of cup capacity.<sup><a href="#src-s2">2</a></sup> The water is poured to the rim and not weighed, so this is a ratio of coffee to vessel volume, not to water.<sup><a href="#src-s3">3</a></sup>
- **Batch brews for descriptive assessment.** The same system recommends 55–60 g of coffee per litre of water.<sup><a href="#src-s2">2</a>,<a href="#src-s3">3</a></sup>
- **Water recommendations.** The SCA water handbook takes 1:2 for espresso and 1:15 for filter, dose to beverage, as a starting point.<sup><a href="#src-s12">12</a></sup>

Research recipes cluster at the same point. A drip study used 66 g of coffee with 1,200 g of water.<sup><a href="#src-s9">9</a></sup> A nine-method comparison used 100 g for 1,800 mL of filter coffee and 27.5 g for 500 mL in the French press.<sup><a href="#src-s10">10</a></sup> All of these work out at about 18 g of water per gram of coffee (our arithmetic, taking 1 mL of water as 1 g).

<figure>
<div data-figure="brew-ratio-and-strength-published-ratios"></div>
<figcaption>Water-to-coffee ratios specified by the SCA<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a></sup> and used in studies,<sup><a href="#src-s4">4</a>,<a href="#src-s9">9</a>,<a href="#src-s10">10</a></sup> converted to grams of water per gram of coffee (our arithmetic). The cupping value is cup capacity, not water poured.</figcaption>
</figure>

No SCA document consulted for this entry attaches a brewing ratio to the Golden Cup Standard of 1.15–1.35% TDS.<sup><a href="#src-s6">6</a></sup>

<!-- deep-dive -->

## The arithmetic

For drip brewing, the 2023 chart paper relates extraction yield (PE) to TDS and the brewing ratio:<sup><a href="#src-s5">5</a></sup>

**PE = TDS ÷ (1 − TDS) × (R<sub>brew</sub> − R<sub>abs</sub>)**

Here R<sub>brew</sub> is water mass ÷ coffee mass and R<sub>abs</sub> ≈ 2.1 is the liquid retained per gram of coffee.<sup><a href="#src-s5">5</a></sup> For full immersion at equilibrium, the 2021 model uses the same form without retention, E = TDS ÷ (1 − TDS) × R<sub>brew</sub>, because it counts the liquid held in the grounds as extracted.<sup><a href="#src-s4">4</a></sup> The extraction yield entry compares these formulas in detail.

Rearranged (our algebra), the two practical questions become:

- **Strength from ratio:** TDS = PE ÷ (R<sub>brew</sub> − R<sub>abs</sub> + PE).
- **Ratio for a target strength:** R<sub>brew</sub> = R<sub>abs</sub> + PE × (1 − TDS) ÷ TDS.

**Worked examples (our calculation, R<sub>abs</sub> = 2.1<sup><a href="#src-s5">5</a></sup>).** For 1.30% TDS at 20% yield, R<sub>brew</sub> = 2.1 + 0.20 × 0.987 ÷ 0.013 = 17.3, or 57.9 g of coffee per kg of water. For 1.25% at 20%, it is 17.9, or 55.9 g/kg.

The corners of the Golden Cup box (1.15–1.35% TDS, 18–22% yield<sup><a href="#src-s6">6</a></sup>) translate into a range of drip ratios (our calculation):

| Target | TDS | Extraction yield | R<sub>brew</sub> (g water per g coffee) | g coffee per kg water |
|---|---|---|---|---|
| Weakest corner, high yield | 1.15% | 22% | 21.0 | 47.6 |
| Weak, low yield | 1.15% | 18% | 17.6 | 56.9 |
| Strong, high yield | 1.35% | 22% | 18.2 | 55.0 |
| Strongest corner, low yield | 1.35% | 18% | 15.3 | 65.6 |

The SCA test ratio of 55 g/kg<sup><a href="#src-s1">1</a></sup> sits inside this range. At that ratio, a drip brew reaches the strong, high-yield corner of the box at 22% yield; at 20% yield it gives 1.23% TDS (our calculation).

## TDS at a given ratio and yield

The values behind the first figure (our calculation, drip formula, R<sub>abs</sub> = 2.1<sup><a href="#src-s5">5</a></sup>):

| R<sub>brew</sub> (g/g) | g coffee per kg water | TDS at 18% yield | TDS at 20% yield | TDS at 22% yield |
|---|---|---|---|---|
| 8 | 125 | 2.96% | 3.28% | 3.59% |
| 10 | 100 | 2.23% | 2.47% | 2.71% |
| 12 | 83.3 | 1.79% | 1.98% | 2.17% |
| 14 | 71.4 | 1.49% | 1.65% | 1.82% |
| 16 | 62.5 | 1.28% | 1.42% | 1.56% |
| 18 | 55.6 | 1.12% | 1.24% | 1.36% |
| 20 | 50.0 | 1.00% | 1.10% | 1.21% |
| 22 | 45.5 | 0.90% | 1.00% | 1.09% |
| 24 | 41.7 | 0.82% | 0.90% | 0.99% |

The measured immersion values in the same figure are 4.07 ± 0.15% at a ratio of 5, 1.36 ± 0.09% at 15 (99 °C) and 0.75 ± 0.04% at 25.<sup><a href="#src-s4">4</a></sup> The points at ratios 15 and 25 lie near the 18% drip line (1.38% and 0.78% by our calculation), although the immersion study puts their yield at about 21%: the two formulas count the retained liquid differently. At a ratio of 5 the drip formula no longer fits: it gives 5.8% at 18% yield, against the measured 4.07%.<sup><a href="#src-s4">4</a>,<a href="#src-s5">5</a></sup>

## Retained liquid and the beverage ratio

Retained liquid links the two ratios. The 2021 immersion study calculated its retention ratio from the measured TDS and the masses of water, grounds and filtered beverage.<sup><a href="#src-s4">4</a></sup> Its mean was 2.48 ± 0.19.<sup><a href="#src-s4">4</a></sup> The 2023 drip synthesis uses about 2.1.<sup><a href="#src-s5">5</a></sup> No study consulted for this entry measured how retention changes with grind, roast degree or filter type.

From mass balance (our derivation), the beverage mass is (R<sub>brew</sub> − R<sub>abs</sub>) × dose ÷ (1 − TDS). The beverage ratio is therefore about R<sub>brew</sub> − R<sub>abs</sub>, slightly enlarged by the dissolved coffee. At 55 g/kg and 1.25% TDS this gives 16.3 instead of 18.2. A recipe written as “1:16” might mean either ratio: the difference is about two units at filter strength.

A drip study at UC Davis kept the water fixed at 3,075 g and varied the ratio by changing the coffee mass.<sup><a href="#src-s6">6</a></sup> Its brews averaged 2,830.4 g.<sup><a href="#src-s6">6</a></sup> The difference, about 245 g, did not reach the carafe (our arithmetic).

## Strength by method

One 2013 comparison measured the total solids (oven-dried) of nine methods, each with one recipe.<sup><a href="#src-s10">10</a></sup>

| Method | Recipe | Total solids | Source |
|---|---|---|---|
| Espresso (three machines) | 16 g for 2 × 30 mL; capsule 5.5 g for 30 mL | above 4% | Gloess et al.<sup><a href="#src-s10">10</a></sup> |
| Moka pot | 7.5 g for 110 mL | 2.13% | Gloess et al.<sup><a href="#src-s10">10</a></sup> |
| French press | 27.5 g for 500 mL | 1.43% | Gloess et al.<sup><a href="#src-s10">10</a></sup> |
| Lungo | 16 g for 2 × 120 mL | about 1.3% | Gloess et al.<sup><a href="#src-s10">10</a></sup> |
| Filter | 100 g for 1,800 mL | 1.03% | Gloess et al.<sup><a href="#src-s10">10</a></sup> |

The samples were dried at 105 °C to constant weight, so the values count everything that is not water and are not refractometer TDS.<sup><a href="#src-s10">10</a></sup> French press and filter used nearly the same ratio, yet differed by 0.4 points (our arithmetic). The French press also reached the higher yield in that study, 26% against 19% for filter.<sup><a href="#src-s10">10</a></sup>

## Dilution and bypass

Water can be added after brewing. A coffee science textbook describes stopping a filter brew after a planned time and adding hot water, instead of passing all the water through the grounds, to avoid over-extraction.<sup><a href="#src-s11">11</a></sup>

Adding water changes the strength but not the extraction yield, because the dissolved coffee stays the same (our mass balance). Example: 15 g of coffee brewed to 200 g of beverage at 1.50% TDS holds 3.0 g of dissolved coffee, a yield of 20%. Adding 50 g of water gives 250 g at 1.20% TDS; the yield is still 20%. On a brewing control chart, bypass moves a brew straight down the TDS axis.

## How small a change can be tasted

A 2019 drip study estimated a sensory difference threshold of 0.24% TDS, from triangle tests between brews of different strengths.<sup><a href="#src-s9">9</a></sup> The authors note that the estimate may be affected by brew-to-brew variability and that the true threshold may be lower.<sup><a href="#src-s9">9</a></sup>

Set against the ratio table (our calculation): going from 55 to 60 g of coffee per kg of water at 20% yield raises TDS from 1.23% to 1.35%. That is about half the estimated threshold. Going from 50 to 62.5 g/kg (ratios 20 to 16) raises it by about 0.31 points, above the threshold.

According to a coffee science textbook, strength acts on flavour through each compound’s perception threshold and dose–response curve.<sup><a href="#src-s11">11</a></sup> A change in strength can therefore raise one note and leave another unchanged.<sup><a href="#src-s11">11</a></sup>

## Reference values

| Parameter | Value | Context | Source |
|---|---|---|---|
| Brewing ratio, home-brewer test | 55 g coffee per 1.000 kg water | SCA 310-2021, electrical home brewers | SCA<sup><a href="#src-s1">1</a></sup> |
| Target strength, home-brewer test | 1.15–1.55% TDS | At the test ratio | SCA<sup><a href="#src-s1">1</a></sup> |
| Cupping dose | 8.25 g per 150 mL of cup capacity | Water to the rim, not weighed | SCA 102-2024; CVA<sup><a href="#src-s2">2</a>,<a href="#src-s3">3</a></sup> |
| Batch brew, descriptive assessment | 55–60 g per litre (≈17:1 to 18:1 water to coffee) | Filter or French press | SCA 102-2024; CVA<sup><a href="#src-s2">2</a>,<a href="#src-s3">3</a></sup> |
| Ratios assumed for water targets | 1:2 espresso; 1:15 filter (dose to beverage) | Starting point for water recommendations | SCA water handbook<sup><a href="#src-s12">12</a></sup> |
| Golden Cup Standard | 1.15–1.35% TDS; 18–22% yield | Classic control chart | Batali et al.<sup><a href="#src-s6">6</a></sup> |
| Liquid retained, drip | ≈2.1 g per g coffee | Drip synthesis | Guinard et al.<sup><a href="#src-s5">5</a></sup> |
| Liquid retained, immersion | 2.48 ± 0.19 g per g coffee | Immersion study | Liang et al.<sup><a href="#src-s4">4</a></sup> |
| TDS at equilibrium, immersion | 4.07 ± 0.15% (ratio 5); 1.36 ± 0.09% (ratio 15, 99 °C); 0.75 ± 0.04% (ratio 25) | Full immersion | Liang et al.<sup><a href="#src-s4">4</a></sup> |
| Espresso recipes | 20 g dose for 20, 40 and 60 g (1:1, 1:2, 1:3) | Coffee to beverage | Schmieder et al.<sup><a href="#src-s13">13</a></sup> |
| Sensory difference threshold | 0.24% TDS (estimate) | Drip coffee, triangle tests | Frost et al. 2019<sup><a href="#src-s9">9</a></sup> |
| Consumer segments | 57% preferred low TDS; 43% two optima | Drip coffee | Guinard et al.<sup><a href="#src-s5">5</a></sup> |
| Consumers tested | 118, mostly college age | Drip coffee | Cotter et al.<sup><a href="#src-s8">8</a></sup> |
| Drip study recipe | 66 g coffee, 1,200 g water | Drip brewer | Frost et al. 2019<sup><a href="#src-s9">9</a></sup> |
| Drip study water | 3,075 g fixed; brews averaged 2,830.4 g | Ratio varied by coffee mass | Batali et al.<sup><a href="#src-s6">6</a></sup> |

## Open questions

- **Golden Cup brewing ratio.** No SCA document consulted for this entry states a brewing ratio as part of the Golden Cup Standard; only the TDS and yield box was found.<sup><a href="#src-s6">6</a></sup>
- **Retention under real conditions.** The two retention values come from one drip synthesis and one immersion study.<sup><a href="#src-s4">4</a>,<a href="#src-s5">5</a></sup> How grind, roast degree, filter and dripper change them was not measured in the sources consulted.
- **Preferred strength beyond one population.** The consumers in the 2021 study were mostly college-age drinkers of black coffee.<sup><a href="#src-s8">8</a></sup> No study consulted for this entry tested whether the two segments exist in other countries.
- **Strength and flavour outside drip.** The sensory studies here cover drip coffee.<sup><a href="#src-s5">5</a>,<a href="#src-s6">6</a></sup> No comparable strength map for immersion or espresso was found among the sources consulted.
- **Thresholds.** The 0.24% TDS threshold is one estimate from one study.<sup><a href="#src-s9">9</a></sup> No study consulted for this entry measured how the threshold changes with roast degree or overall strength.

## Key studies

<div class="study">
<p><strong>Liang et al., 2021 – Immersion at equilibrium.</strong> Derives a desorption model for full immersion and tests it across brew ratios. TDS at equilibrium falls roughly in inverse proportion to the water-to-coffee ratio while the yield stays near 21%, so in immersion the ratio controls strength precisely.</p>
<p class="meta">Scientific Reports 11, 6904 · <a href="https://doi.org/10.1038/s41598-021-85787-1">doi:10.1038/s41598-021-85787-1</a></p>
</div>

<div class="study">
<p><strong>Frost et al., 2020 – Strength, yield and roast.</strong> Brews one washed arabica coffee at three roast degrees to nine combinations of TDS and extraction yield. A trained panel found 21 of 30 attributes changed; sweetness fell as TDS rose at every roast degree.</p>
<p class="meta">Journal of Food Science 85(8), 2530–2543 · <a href="https://doi.org/10.1111/1750-3841.15326">doi:10.1111/1750-3841.15326</a></p>
</div>

<div class="study">
<p><strong>Cotter et al., 2021 – Consumer preferences.</strong> Asks 118 black-coffee drinkers to rate drip coffees that vary in TDS, yield and serving temperature. Two consumer segments emerge whose liking differs most with TDS, and flavour intensity and acidity drive liking.</p>
<p class="meta">Journal of Food Science 86(1), 194–205 · <a href="https://doi.org/10.1111/1750-3841.15561">doi:10.1111/1750-3841.15561</a></p>
</div>

<div class="study">
<p><strong>Batali et al., 2020 – Temperature at fixed strength.</strong> Keeps the water mass fixed and varies the coffee mass to brew drip coffee across the control chart at three temperatures. TDS shapes the sensory profile most, yield less, and temperature hardly at all.</p>
<p class="meta">Scientific Reports 10, 16450 · <a href="https://doi.org/10.1038/s41598-020-73341-4">doi:10.1038/s41598-020-73341-4</a></p>
</div>

<div class="study">
<p><strong>Frost et al., 2019 – Basket geometry.</strong> Brews 66 g of coffee with 1,200 g of water in flat and semi-conical baskets. The semi-conical basket gives stronger coffee, and triangle tests put the smallest detectable difference at about 0.24% TDS.</p>
<p class="meta">Journal of Food Science · <a href="https://doi.org/10.1111/1750-3841.14696">doi:10.1111/1750-3841.14696</a></p>
</div>
