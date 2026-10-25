---
title: Extraction variables
summary: The settings a brewer controls – grind, contact time, flow, temperature, ratio, pressure, the coffee and the water – what each does to extraction yield and strength, and how they interact.
domain: extraction
kind: Concept
stage: brew
topics: [science]
status: verified
lastVerified: 2026-10-20
reviewer: Coffearium verification pass
updated: 2026-10-20
added: 2026-10-20
brief:
  - 'The brewer’s levers are dose, water quantity and temperature, grind fineness, agitation and brew time; pressure and flow follow from them and from the coffee bed.<sup><a href="#src-s1">1</a></sup>'
  - 'A finer grind speeds extraction and slows the flow, so the two effects multiply.<sup><a href="#src-s1">1</a></sup> In espresso, too fine a grind lowered the yield again.<sup><a href="#src-s4">4</a></sup>'
  - In full immersion at equilibrium, extraction yield stayed at about 21% across brew ratios; the ratio set the strength.<sup><a href="#src-s3">3</a></sup>
  - 'In a 2023 espresso study, flow rate had the strongest effect of flow, grind and temperature, but a small miss in beverage mass mattered as much.<sup><a href="#src-s7">7</a></sup>'
  - In a 2020 drip study, brew temperatures of 87–93 °C made no appreciable sensory difference once strength and extraction yield were matched.<sup><a href="#src-s2">2</a></sup>
quickFacts:
  - label: What is measured
    value: Extraction yield (how much dissolved) and TDS (how strong)
  - label: Main levers
    value: Grind, contact time, flow and agitation, temperature, ratio, pressure (espresso), roast and freshness, water
  - label: Interaction
    value: Finer grind = faster extraction × longer flow time
  - label: Immersion at equilibrium
    value: Yield ≈21% across brew ratios; ratio sets strength
  - label: Espresso, one study
    value: 17–18% yield within 15 s; 19–20% at about 30 s
aka:
  - Brewing variables
  - Brewing parameters
  - Extraction parameters
linkTerms:
  - extraction variables
  - brewing variables
  - brewing parameters
  - extraction parameters
  - contact time
related:
  - extraction-yield-and-tds
  - what-extraction-is
  - brew-temperature
  - brew-ratio-and-strength
  - co2-and-the-bloom
  - brewing-control-chart
  - hardness-and-alkalinity
  - water-minerals-and-flavour
  - water-for-coffee
  - particle-size-and-fines
  - grinding
  - brew-methods
  - pour-over-technique
  - espresso
  - puck-preparation
  - roast-degree-and-colour
corrections:
  - date: 2026-10-20
    change: 'Temperature in the 2023 espresso study: "no measurable effect when changed alone" now also reports the slight rise across the whole design (contested, table, figure, study card).'
    reason: The study found nearly identical extraction curves when temperature alone changed, but its response surfaces showed that higher temperatures generally raised the cup values.
  - date: 2026-10-20
    change: 'Roast degree: the AeroPress result now says yield peaked at about 12–14% roast loss with a fixed ratio and sieved grounds (not a fixed recipe), the capsule finding says "not directly", and porosity is also cited to the 2024 study.'
    reason: Brew time was a variable in the 2024 study; wording matched to each study's own findings.
  - date: 2026-10-20
    change: Agitation paragraph now says the barista study suggested, but did not measure, the role of pouring turbulence.
    reason: The study inferred the turbulence effect from reproducibility data.
  - date: 2026-10-20
    change: 'Pressure: flow is linear only below about 5 bar and levels off in the usual brewing range; the puck sentence now cites the textbook.'
    reason: Matched to the 2026 study; uncited sentence.
contested:
  - 'Brew temperature and extraction: a coffee science textbook states that solubility generally rises with temperature and that high temperatures favour less polar, bitter compounds<sup><a href="#src-s1">1</a></sup>; yet in full immersion the equilibrium constant did not change between 80 and 99 °C<sup><a href="#src-s3">3</a></sup>, and in a 2023 espresso study the extraction curves at 80 and 98 °C were nearly identical when temperature alone was changed, although across the whole design higher temperatures generally raised the mass of the measured compounds in the cup slightly.<sup><a href="#src-s7">7</a></sup> In a 2020 drip study, 87–93 °C made no appreciable sensory difference at matched strength and yield.<sup><a href="#src-s2">2</a></sup> The textbook describes solubility and the balance of compounds; the studies measured an equilibrium constant, sensory profiles at matched strength and yield, and four components of espresso.'
  - 'Roast degree and extraction: in a 2024 AeroPress study at a fixed ratio with sieved grounds, extraction yield peaked for roasts that had lost about 12–14% of their mass and generally fell for darker ones<sup><a href="#src-s11">11</a></sup>; in a 2021 immersion study the equilibrium constant was insensitive to roast level<sup><a href="#src-s3">3</a></sup>; and in a 2020 study of 43 capsules, a weak link between roast level and TDS could not be attributed directly to better extractability.<sup><a href="#src-s6">6</a></sup> Darker roasts are more porous.<sup><a href="#src-s11">11</a>,<a href="#src-s18">18</a></sup> The three studies differ in design: brews of 1 to 10 min, brews near equilibrium, and commercial capsules of different coffees.<sup><a href="#src-s3">3</a>,<a href="#src-s6">6</a>,<a href="#src-s11">11</a></sup>'
sources:
  - id: s1
    title: "The Brew – Extracting for Excellence"
    authors: Mestdagh, F.; Glabasnia, A.; Giuliano, P.
    publisher: "In: Folmer, B. (ed.), The Craft and Science of Coffee, Academic Press, ch. 15, pp. 355–380"
    year: 2017
    doi: 10.1016/B978-0-12-803520-7.00015-3
    url: https://doi.org/10.1016/B978-0-12-803520-7.00015-3
    tier: B
    quote: "for example, increasing the fineness of grind will often increase the efficiency of extraction and extend the flow time, having a multiplying effect on total extraction."
    accessed: 2026-10-20
  - id: s2
    title: "Brew temperature, at fixed brew strength and extraction, has little impact on the sensory profile of drip brew coffee"
    authors: Batali, M. E.; Ristenpart, W. D.; Guinard, J.-X.
    publisher: Scientific Reports 10, 16450
    year: 2020
    doi: 10.1038/s41598-020-73341-4
    url: https://www.nature.com/articles/s41598-020-73341-4
    tier: A
    quote: "Three separate brew temperatures of 87 °C, 90 °C, or 93 °C were tested, adjusting the grind size and overall brew time as necessary to achieve the target TDS and PE."
    accessed: 2026-10-20
  - id: s3
    title: "An equilibrium desorption model for the strength and extraction yield of full immersion brewed coffee"
    authors: Liang, J.; Chan, K. C.; Ristenpart, W. D.
    publisher: Scientific Reports 11, 6904
    year: 2021
    doi: 10.1038/s41598-021-85787-1
    url: https://www.nature.com/articles/s41598-021-85787-1
    tier: A
    quote: "E is approximately 21% over a wide range of brew ratios"
    abstractOnly: true
    accessed: 2026-10-20
  - id: s4
    title: "Systematically Improving Espresso: Insights from Mathematical Modeling and Experiment"
    authors: Cameron, M. I.; Morisco, D.; Hofstetter, D.; Uman, E.; Wilkinson, J.; Kennedy, Z. C.; Fontenot, S. A.; Lee, W. T.; Hendon, C. H.; Foster, J. M.
    publisher: Matter 2(3), 631–648
    year: 2020
    doi: 10.1016/j.matt.2019.12.019
    url: https://pure.hud.ac.uk/en/publications/systematically-improving-espresso-insights-from-mathematical-mode/
    tier: A
    quote: "experimental measurements show a peak in the extraction yield versus grind setting relationship, with lower extraction yields at both very coarse and fine settings."
    abstractOnly: true
    accessed: 2026-10-20
  - id: s5
    title: "The role of fines in espresso extraction dynamics"
    authors: Smrke, S.; Eiermann, A.; Yeretzian, C.
    publisher: Scientific Reports 14, 5612
    year: 2024
    doi: 10.1038/s41598-024-55831-x
    url: https://www.nature.com/articles/s41598-024-55831-x
    tier: A
    quote: "An increase of share of fines decreases coffee bed permeability, leads to reduced flow rates and longer extraction times."
    accessed: 2026-10-20
  - id: s6
    title: "Extraction of single serve coffee capsules: linking properties of ground coffee to extraction dynamics and cup quality"
    authors: Eiermann, A.; Smrke, S.; Guélat, L.-M.; Wellinger, M.; Rahn, A.; Yeretzian, C.
    publisher: Scientific Reports 10, 17079
    year: 2020
    doi: 10.1038/s41598-020-74138-1
    url: https://www.nature.com/articles/s41598-020-74138-1
    tier: A
    quote: "It was demonstrated that the most efficient way to increase total dissolved solids in the brew is to use more coffee for extraction, and/or to grind the coffee more finely."
    accessed: 2026-10-20
  - id: s7
    title: "Influence of Flow Rate, Particle Size, and Temperature on Espresso Extraction Kinetics"
    authors: Schmieder, B. K. L.; Pannusch, V. B.; Vannieuwenhuyse, L.; Briesen, H.; Minceva, M.
    publisher: Foods 12(15), 2871
    year: 2023
    doi: 10.3390/foods12152871
    url: https://mdpi-res.com/d_attachment/foods/foods-12-02871/article_deploy/foods-12-02871.pdf
    tier: A
    quote: "The analysis of the studied parameters revealed that flow rate had the strongest effect on the component mass in the cup."
    accessed: 2026-10-20
  - id: s8
    title: "Coffee extraction kinetics in a well mixed system"
    authors: Moroney, K. M.; Lee, W. T.; O’Brien, S. B. G.; Suijver, F.; Marra, J.
    publisher: Journal of Mathematics in Industry 7, 3
    year: 2017
    doi: 10.1186/s13362-016-0024-6
    url: https://researchrepository.ul.ie/server/api/core/bitstreams/344ae298-782e-464e-a62f-5236c8fd1486/content
    tier: A
    quote: "Coffee extraction for an individual grain is controlled by two processes: a rapid dissolution of coffee from the grain surfaces in conjunction with a much slower diffusion of coffee through the tortuous intragranular pore network to the grain surfaces."
    accessed: 2026-10-20
  - id: s9
    title: "Analysing extraction uniformity from porous coffee beds using mathematical modelling and computational fluid dynamics approaches"
    authors: Moroney, K. M.; O’Connell, K.; Meikle-Janney, P.; O’Brien, S. B. G.; Walker, G. M.; Lee, W. T.
    publisher: PLOS ONE 14(7), e0219906
    year: 2019
    doi: 10.1371/journal.pone.0219906
    url: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0219906
    tier: A
    quote: "Non-uniform flow in the truncated cone causes significant variation in the local extraction level."
    accessed: 2026-10-20
  - id: s10
    title: "Effect of basket geometry on the sensory quality and consumer acceptance of drip brewed coffee"
    authors: Frost, S. C.; Ristenpart, W. D.; Guinard, J.-X.
    publisher: Journal of Food Science (early-view version, accepted 17 May 2019)
    year: 2019
    doi: 10.1111/1750-3841.14696
    url: https://pages.uoregon.edu/chendon/coffee_literature/old_literature/2019%20J.%20Food%20Sci.,%20%20Basket%20geometry%20from%20sensory%20--%20no%20control%20for%20concentration.pdf
    tier: A
    quote: "Additionally, coffee brewed in the semi-conical basket had significantly higher %TDS, and we estimated a sensory difference threshold of 0.24 %TDS."
    accessed: 2026-10-20
  - id: s11
    title: "Caffeine content in filter coffee brews as a function of degree of roast and extraction yield"
    authors: Lindsey, Z. R.; Williams, J. R.; Burgess, J. S.; Moore, N. T.; Splichal, P. M.
    publisher: Scientific Reports 14, 29126
    year: 2024
    doi: 10.1038/s41598-024-80385-3
    url: https://doaj.org/article/4e0bbfc37b6b41c285199934d52c4eae
    tier: A
    quote: "It is likely that the volatilization or decomposition of soluble compounds and increased porosity due to roasting act as competing mechanisms that determine compound concentrations in resulting brews."
    abstractOnly: true
    accessed: 2026-10-20
  - id: s12
    title: "Effect of grinding, extraction time and type of coffee on the physicochemical and flavour characteristics of cold brew coffee"
    authors: Cordoba, N.; Pataquiva, L.; Osorio, C.; Moreno, F. L. M.; Ruiz, R. Y.
    publisher: Scientific Reports 9, 8440
    year: 2019
    doi: 10.1038/s41598-019-44886-w
    url: https://www.nature.com/articles/s41598-019-44886-w
    tier: A
    quote: "These counter-intuitive results can be explained because the indirect immersion method was used in the cold extraction trials."
    accessed: 2026-10-20
  - id: s13
    title: "Under pressure: Poroelastic regulation of flow in espresso brewing"
    authors: Waszkiewicz, R.; Myck, F.; Białas, Ł.; Puciata-Mroczyńska, M.; Dzikowski, M.; Szymczak, P.; Lisicki, M.
    publisher: Physics of Fluids 38(6), 063113
    year: 2026
    doi: 10.1063/5.0319611
    url: https://users.fuw.edu.pl/~mklis/publications/046.pdf
    tier: A
    quote: "the flow saturates as a function of pressure in the standard brewing regime."
    accessed: 2026-10-20
  - id: s14
    title: "Impact of the human factor on the reproducibility of different coffee brewing methods"
    authors: Santanatoglia, A.; Cespi, M.; Perinelli, D. R.; Fioretti, L.; Sagratini, G.; Vittori, S.; Caprioli, G.
    publisher: Journal of Food Composition and Analysis 124, 105698
    year: 2023
    doi: 10.1016/j.jfca.2023.105698
    url: https://pubblicazioni.unicam.it/retrieve/2d1b12b5-9f36-4b04-8fef-a0cc4caa7ae3/Impact%20of%20the%20human%20factor%20on%20the%20reproducibility.pdf
    tier: A
    quote: "the turbulence generated by baristas during the water pouring was a relevant variable affecting the coffee preparation"
    accessed: 2026-10-20
  - id: s15
    title: "Sensory and monosaccharide analysis of drip brew coffee fractions versus brewing time"
    authors: Batali, M. E.; Frost, S. C.; Lebrilla, C. B.; Ristenpart, W. D.; Guinard, J.-X.
    publisher: Journal of the Science of Food and Agriculture 100(7), 2953–2962
    year: 2020
    doi: 10.1002/jsfa.10323
    url: https://pherobase.com/literature/data/details/B/36396
    tier: A
    quote: "it is known that the total dissolved solids (TDS) systematically decreases with each fraction during the brew."
    abstractOnly: true
    accessed: 2026-10-20
  - id: s16
    title: "The SCA Water Quality Handbook, edition 2 (ISBN 978-0-9995807-3-8)"
    authors: Wellinger, M.; Smrke, S.; Yeretzian, C.
    publisher: Specialty Coffee Association
    year: 2018
    url: https://digitalcollection.zhaw.ch/handle/11475/12365
    tier: A/B
    tierNote: A for the SCA’s water targets; B for the explanations and laboratory observations used in this entry.
    quote: "In laboratory tests, this effect could not be verified by means of a coffee refractometer, although a clear impact on flavor balance and aroma was detected."
    accessed: 2026-10-20
  - id: s17
    title: Time-Resolved Gravimetric Method To Assess Degassing of Roasted Coffee
    authors: Smrke, S.; Wellinger, M.; Suzuki, T.; Balsiger, F.; Opitz, S. E. W.; Yeretzian, C.
    publisher: Journal of Agricultural and Food Chemistry 66(21), 5293–5300
    year: 2018
    doi: 10.1021/acs.jafc.7b03310
    url: https://digitalcollection.zhaw.ch/bitstream/11475/12175/2/2017_Smrke-etal_Roasted-coffe-degassing-time-resolved-gravimetry.pdf
    tier: A
    quote: "It is an indicator for freshness, plays an important role in shelf life and in packaging, impacts the extraction process, is involved in crema formation, and may affect the sensory profile in the cup."
    accessed: 2026-10-20
  - id: s18
    title: "The Grind – Particles and Particularities"
    authors: von Blittersdorff, M.; Klatt, C.
    publisher: "In: Folmer, B. (ed.), The Craft and Science of Coffee, Academic Press, ch. 13, pp. 311–328"
    year: 2017
    doi: 10.1016/B978-0-12-803520-7.00013-X
    url: https://eld.bl.uk/catalog/018161895
    tier: B
    tierNote: Same textbook as source 1; counted as one Tier B source with it.
    quote: "With increasing roast degree, especially when obtained in a short roasting time, the porosity and brittleness of the coffee beans increase."
    accessed: 2026-10-20
---

## What a brewer can change

Every brew method moves soluble material from ground coffee into water. Two numbers describe the result: extraction yield, how much of the dose dissolved, and TDS (total dissolved solids), how strong the brew is. The extraction yield entry explains both. This entry covers the settings that move them.

A coffee science textbook names the adjustments a barista makes after tasting: coffee dose, water quantity, water temperature, agitation, grind fineness and brew time.<sup><a href="#src-s1">1</a></sup> It sorts the parameters into three groups:<sup><a href="#src-s1">1</a></sup>

- **Water:** quality, quantity and temperature.
- **Coffee:** weight, particle size and shape, particle size distribution, compaction and the shape of the coffee bed.
- **Resulting variables:** water-to-coffee ratio, pressure, flow time and flow rate.

The third group is not set directly. It follows from the first two and from the brewer.<sup><a href="#src-s1">1</a></sup> The coffee itself also matters: both its roast degree and its freshness affect extraction.<sup><a href="#src-s11">11</a>,<a href="#src-s17">17</a></sup>

## Grind: surface and path length

Grinding sets two things at once. It decides how much surface the water can reach and how far dissolved coffee must travel to get out of a particle.

A 2017 model describes extraction from a single grain as two processes. Coffee dissolves quickly from the broken cells on the grain surface. Coffee inside the intact cells must diffuse slowly through a winding network of pores to reach the surface.<sup><a href="#src-s8">8</a></sup> Finer grinds have more surface, and more of their coffee sits in fines and broken surface cells.<sup><a href="#src-s8">8</a></sup> According to a coffee science textbook, smaller particles therefore extract more efficiently.<sup><a href="#src-s1">1</a></sup> A 2023 espresso study summarises earlier work the same way: finer grinding exposes more surface and allows higher yields of caffeine and other compounds.<sup><a href="#src-s7">7</a></sup>

Grinding also changes how water flows through a bed. Fines are the smallest particles, in espresso research those under 100 µm.<sup><a href="#src-s5">5</a></sup> In a 2024 espresso study, a larger share of fines lowered the bed’s permeability, slowed the flow and lengthened the shot.<sup><a href="#src-s5">5</a></sup> The same study found that the extra surface of the fines changed the extraction itself only marginally.<sup><a href="#src-s5">5</a></sup> Particle size and fines are covered in their own entry.

<figure>
<div data-figure="extraction-variables-grind-paths"></div>
<figcaption>How grind acts through two routes: a finer grind speeds extraction and slows the flow, and the two effects multiply; at the finest espresso settings, yield fell again, which the authors of one study attribute to uneven flow.<sup><a href="#src-s1">1</a>,<a href="#src-s4">4</a>,<a href="#src-s5">5</a>,<a href="#src-s8">8</a></sup> Schematic, not to scale.</figcaption>
</figure>

There is a limit. According to the textbook, too fine a grind can hinder the even spread of water through the bed.<sup><a href="#src-s1">1</a></sup> In a 2020 espresso study, extraction yield peaked at an intermediate grind setting. It was lower at both very coarse and fine settings.<sup><a href="#src-s4">4</a></sup> The authors read the drop at fine settings as a sign of uneven flow.<sup><a href="#src-s4">4</a></sup>

## Contact time, flow and agitation

**Contact time** is how long water and coffee are together. In drip brewing, a 2020 study notes that higher extraction yields generally need a longer residence time.<sup><a href="#src-s2">2</a></sup> Each later portion of a drip brew is weaker than the one before.<sup><a href="#src-s15">15</a></sup> Espresso extracts much faster. In a 2024 study, shots of under 10 s and of 15 s already reached 17–18% extraction, and shots of about 30 s reached 19–20%.<sup><a href="#src-s5">5</a></sup>

**Flow rate** sets contact time in percolation, where water passes through a bed of grounds. In a 2023 espresso study, flow rate had the strongest effect on the solids in the cup of the three settings tested.<sup><a href="#src-s7">7</a></sup> Raising the flow from 1.0 to 3.0 mL/s lowered the mass of the measured compounds in the cup.<sup><a href="#src-s7">7</a></sup>

**Agitation** is the stirring or turbulence that moves grounds and water. In a 2023 study, six expert baristas prepared four brew methods from the same written procedures, and the brews varied between baristas.<sup><a href="#src-s14">14</a></sup> The authors suggest that the turbulence each barista created while pouring was a relevant variable; they did not measure turbulence itself.<sup><a href="#src-s14">14</a></sup> No study consulted for this entry measured the effect of agitation on extraction yield directly. Pouring technique is covered in the pour-over entry.

**Cold brew** shows how time can stand in for heat. According to the textbook, cold water extracts fewer solids, which a much longer extraction time can partly make up.<sup><a href="#src-s1">1</a></sup> A 2019 cold-brew study steeped coffee at 20 °C for 14 and 22 h.<sup><a href="#src-s12">12</a></sup>

## Ratio, temperature and pressure

**Ratio and dose.** The brew ratio relates water to coffee. In full immersion, all the water stays with all the coffee. In a 2021 immersion study, the extraction yield at equilibrium stayed at about 21% over a wide range of ratios.<sup><a href="#src-s3">3</a></sup> The strength followed the ratio.<sup><a href="#src-s3">3</a></sup> In a study of 43 espresso capsules, more coffee raised the strength but showed no relation with the extraction yield.<sup><a href="#src-s6">6</a></sup> The entry on brew ratio and strength covers this lever.

**Temperature.** According to the textbook, hotter water dissolves most coffee compounds better and favours less polar, bitter ones.<sup><a href="#src-s1">1</a></sup> Three studies measured little or no effect in their settings (see Contested). In a 2020 drip study, brews at 87, 90 and 93 °C did not differ appreciably in flavour once strength and yield were matched.<sup><a href="#src-s2">2</a></sup> The entry on brew temperature goes into the evidence.

**Pressure.** According to the textbook, pressure drives espresso and moka pot brewing but plays no part in immersion.<sup><a href="#src-s1">1</a></sup> In its account, pressure is not an independent variable: it results from the force applied above the bed and the bed’s resistance to flow.<sup><a href="#src-s1">1</a></sup> In a 2026 espresso study, flow rose in proportion to pressure only below about 5 bar and levelled off in the usual brewing range, commonly around 9 bar.<sup><a href="#src-s13">13</a></sup> According to the textbook, tamping and the evenness and shape of the bed shape that resistance.<sup><a href="#src-s1">1</a></sup>

## The coffee bed and the brewer

The shape of the bed changes how water moves through it. In a 2019 drip study with the same coffee and recipe, a semi-conical basket gave significantly stronger coffee than a flat-bottomed one.<sup><a href="#src-s10">10</a></sup> Tasters could tell the two apart.<sup><a href="#src-s10">10</a></sup> A 2019 model of a cone-shaped bed found that uneven flow made some parts of the bed extract much more than others.<sup><a href="#src-s9">9</a></sup>

## The coffee and the water

**Roast degree.** According to a grinding chapter, darker roasts are more porous and brittle.<sup><a href="#src-s18">18</a></sup> A 2024 study measured rising porosity with roast degree by electron microscopy.<sup><a href="#src-s11">11</a></sup> That does not mean darker roasts always extract more. In the same study, at a fixed AeroPress ratio with sieved grounds, extraction yield peaked for roasts that had lost about 12–14% of their mass and generally fell for darker ones.<sup><a href="#src-s11">11</a></sup> The authors propose two competing effects: roasting opens the bean’s structure but also drives off or breaks down soluble compounds.<sup><a href="#src-s11">11</a></sup> The evidence is mixed (see Contested).

**Freshness.** Roasted coffee holds carbon dioxide. According to a 2018 degassing study, this gas affects the extraction process and is involved in forming crema.<sup><a href="#src-s17">17</a></sup> The entry on CO₂ and the bloom explains how.

**Water.** Its composition changes what the water extracts and how the cup tastes. A water handbook of the Specialty Coffee Association (SCA) reports laboratory tests on hardness.<sup><a href="#src-s16">16</a></sup> Harder water did not change extraction measurably by refractometer, but it changed flavour balance and aroma.<sup><a href="#src-s16">16</a></sup> At high alkalinity, bicarbonate in the water reacts with coffee acids and releases carbon dioxide.<sup><a href="#src-s16">16</a></sup> According to the handbook, this can lengthen extraction time and lead to over-extraction.<sup><a href="#src-s16">16</a></sup> The entries on hardness and alkalinity and on water minerals and flavour cover the details.

## How the variables interact

The variables do not act alone. According to the textbook, a finer grind often speeds extraction and extends the flow time at once, which multiplies the effect on total extraction.<sup><a href="#src-s1">1</a></sup> It advises small adjustments and frequent tasting for this reason.<sup><a href="#src-s1">1</a></sup>

Researchers use the trade-offs on purpose. To hold strength and extraction yield fixed while testing temperature, a 2020 drip study adjusted grind size and brew time at each temperature.<sup><a href="#src-s2">2</a></sup> The brew method decides which lever matters most. In full immersion, the authors of the 2021 study call the brew ratio the most important parameter.<sup><a href="#src-s3">3</a></sup> In espresso, the authors of the 2023 study advise controlling the brew ratio accurately before adjusting flow, grind and temperature.<sup><a href="#src-s7">7</a></sup>

The outcome can also run against the usual rule. In the 2019 cold-brew study, the coarse grind gave higher yields than the medium one.<sup><a href="#src-s12">12</a></sup> The authors call this counter-intuitive and link it to the filter bags used: the medium grind caked more inside them.<sup><a href="#src-s12">12</a></sup>

<figure>
<div data-figure="extraction-variables-what-changes-what"></div>
<figcaption>What changing one variable did to extraction yield and strength in the studies cited here. Each cell holds what the cited studies reported, under their own conditions; “≈” means no measurable change in that study, a dash means not reported.<sup><a href="#src-s1">1</a>,<a href="#src-s3">3</a>,<a href="#src-s4">4</a>,<a href="#src-s5">5</a>,<a href="#src-s6">6</a>,<a href="#src-s7">7</a>,<a href="#src-s11">11</a>,<a href="#src-s15">15</a>,<a href="#src-s16">16</a></sup> Qualitative summary, not a model.</figcaption>
</figure>

The brewing control chart plots strength against extraction yield. Each change above moves a brew to a different point on it.

<!-- deep-dive -->

## Two rates inside a particle

The 2017 well-mixed model treats each grain as holding two kinds of soluble coffee. Coffee in fines and in the broken cells on grain surfaces meets a low mass-transfer resistance and dissolves quickly. Coffee in the intact cells of grain kernels meets a much higher resistance and leaves by slow diffusion through the pore network.<sup><a href="#src-s8">8</a></sup> The model was built on experiments in which extraction ran in two stages: a rapid start over a short period, then a much slower extraction for the rest of the brew.<sup><a href="#src-s8">8</a></sup> The ratio of the two timescales is small, which lets the authors solve the model with matched asymptotic expansions.<sup><a href="#src-s8">8</a></sup>

This picture links grind to time. Fines are broken cell fragments, and they can make up a large share of the grind, particularly for finer grinds.<sup><a href="#src-s8">8</a></sup> More of the coffee then sits in the fast pool. The authors add that the share of coffee that cannot dissolve may itself depend on grind and water temperature.<sup><a href="#src-s8">8</a></sup> The textbook adds the sensory side: very soluble, polar compounds come out first and less soluble bitter ones keep coming, so time shifts the balance of the cup as well as the yield.<sup><a href="#src-s1">1</a></sup>

## Flow through the bed

In percolation, the bed is both the source of solubles and the path for water. According to the textbook, too low a bed permeability can raise pressure, lower the flow rate and lengthen extraction, possibly to over-extraction.<sup><a href="#src-s1">1</a></sup> It describes the bed consolidating during an espresso: particles swell and rearrange, porosity falls and the pressure drop rises, more so for finer grinds.<sup><a href="#src-s1">1</a></sup>

Measured studies give sizes for these effects:

- **Fines and time.** Across 43 capsules extracted on one machine, extraction times ranged from 10 to 41 s.<sup><a href="#src-s6">6</a></sup> A rise in the share of fines from 10 to 15% went with about 10 s more extraction time.<sup><a href="#src-s6">6</a></sup> The median particle size was not correlated with extraction time.<sup><a href="#src-s6">6</a></sup>
- **Flow and ratio.** In the 2023 espresso study, halving the flow rate from 2.0 to 1.0 mL/s changed the cup concentration of one chlorogenic acid about as much as collecting 38 g instead of 40 g of beverage.<sup><a href="#src-s7">7</a></sup> The flow effect was stronger at finer grinds and higher temperatures.<sup><a href="#src-s7">7</a></sup>
- **Pressure and flow.** In the 2026 study, flow deviated from Darcy’s law, the linear relation between pressure and flow, at higher pressures.<sup><a href="#src-s13">13</a></sup> The authors attribute this to the interplay of the bed’s elasticity and porosity.<sup><a href="#src-s13">13</a></sup>
- **Uneven flow.** In the 2019 bed model, flow in a cylindrical bed was close to one-dimensional, but a truncated cone produced marked differences in local extraction.<sup><a href="#src-s9">9</a></sup> The authors conclude that any point on a control chart is an average of a range of local extraction levels in the bed.<sup><a href="#src-s9">9</a></sup>

The 2020 espresso study is the clearest case of an average misleading. Its model, which assumes even flow, predicts that yield falls steadily as the grind gets coarser. Its measurements showed a peak instead, with lower yields at fine settings too.<sup><a href="#src-s4">4</a></sup> The authors conclude that uneven flow operates at fine settings and lowers reproducibility.<sup><a href="#src-s4">4</a></sup>

## What changes what

Each row reports one change and what the cited study measured. Conditions matter: an effect found for espresso need not hold for a drip brew.

| Variable changed | Extraction yield | Strength (TDS) | Conditions | Source |
|---|---|---|---|---|
| Finer grind | Rises: more surface, faster extraction | Rises | Textbook; 43 capsules on one machine | Mestdagh et al.<sup><a href="#src-s1">1</a></sup>; Eiermann et al.<sup><a href="#src-s6">6</a></sup> |
| Finest espresso settings | Falls again after a peak | – | Espresso; attributed to uneven flow | Cameron et al.<sup><a href="#src-s4">4</a></sup> |
| More fines, same median size | Marginal change in efficiency | – | Espresso, 20 g to 40 g, 9 bar; flow slower, time longer | Smrke et al.<sup><a href="#src-s5">5</a></sup> |
| Longer contact time | Rises: 17–18% within 15 s; 19–20% at about 30 s | – | Espresso, 20 g to 40 g | Smrke et al.<sup><a href="#src-s5">5</a></sup> |
| Later portion of a drip brew | – | Each 30 s fraction weaker than the last | Drip brewer | Batali et al.<sup><a href="#src-s15">15</a></sup> |
| Faster flow (1.0 → 3.0 mL/s) | Less of each measured compound in the cup | Falls | Espresso; strongest of flow, grind, temperature | Schmieder et al.<sup><a href="#src-s7">7</a></sup> |
| Higher temperature (80–98 °C) | Nearly identical extraction curves when changed alone; slight rise across the whole design | Slight rise across the whole design | Espresso; changed alone at the study’s central settings | Schmieder et al.<sup><a href="#src-s7">7</a></sup> |
| Higher temperature (80–99 °C) | Equilibrium constant unchanged; final yield insensitive | Final TDS insensitive | Full immersion, near equilibrium | Liang et al.<sup><a href="#src-s3">3</a></sup> |
| Less water per gram of coffee | About 21% at equilibrium, independent of ratio | Rises; roughly inversely proportional to ratio | Full immersion | Liang et al.<sup><a href="#src-s3">3</a></sup> |
| More coffee in the capsule | No relation found | Rises | 43 capsules | Eiermann et al.<sup><a href="#src-s6">6</a></sup> |
| Semi-conical instead of flat basket | – | Significantly higher | Drip, 66 g coffee, 1,200 g water, 95 °C | Frost et al.<sup><a href="#src-s10">10</a></sup> |
| Darker roast | Peaks at about 12–14% roast loss, then generally falls | – | AeroPress, 15:1, sieved grounds, 1–10 min | Lindsey et al.<sup><a href="#src-s11">11</a></sup> |
| Darker roast | Equilibrium constant unchanged | Equilibrium TDS indistinguishable, light to extra dark | Full immersion | Liang et al.<sup><a href="#src-s3">3</a></sup> |
| Harder water | No change measured by refractometer | – | Laboratory tests; flavour balance and aroma changed | SCA handbook<sup><a href="#src-s16">16</a></sup> |
| High alkalinity | Risk of over-extraction through longer extraction time | – | Carbon dioxide from bicarbonate | SCA handbook<sup><a href="#src-s16">16</a></sup> |
| Grind for cold brew (coarse vs medium) | Higher for coarse | Higher for coarse | 20 °C, filter bags, 14–22 h; medium grind caked more | Cordoba et al.<sup><a href="#src-s12">12</a></sup> |

## Studies that hold variables fixed

Single-variable claims need a design that holds the others still. Three studies show how this is done.

**Matching strength and yield.** The 2020 temperature study brewed nine targets on the control chart at three temperatures in commercial drip brewers.<sup><a href="#src-s2">2</a></sup> Water was fixed at 3,075 g, the ratio was set through the dose, and grind and the pulsing of the water were adjusted to reach each target.<sup><a href="#src-s2">2</a></sup> Its grind settings gave average particle sizes of 770 ± 10, 928 ± 3 and 1,115 ± 74 µm.<sup><a href="#src-s2">2</a></sup> At matched strength and yield, temperature had no appreciable sensory effect.<sup><a href="#src-s2">2</a></sup>

**Response surfaces.** The 2023 espresso study varied flow (1.0–3.0 mL/s), grind (one grinder’s settings 1.4–2.0) and temperature (80–98 °C) in a central composite design.<sup><a href="#src-s7">7</a></sup> Low coefficients of variation allowed only qualitative conclusions.<sup><a href="#src-s7">7</a></sup> The authors found all three effects small compared with changes in total beverage mass.<sup><a href="#src-s7">7</a></sup>

**Equilibrium.** The 2021 immersion study compared brews that had approached equilibrium.<sup><a href="#src-s3">3</a></sup> Its equilibrium constant was insensitive to grind size, roast level and temperature over 80–99 °C.<sup><a href="#src-s3">3</a></sup> These results describe the end state of a steeped brew; they say less about how quickly a percolation brew gets there.

## Open questions

- **Agitation.** No study consulted for this entry measured extraction yield against a controlled amount of stirring or pouring turbulence; the evidence found concerns reproducibility.<sup><a href="#src-s14">14</a></sup>
- **Roast degree.** The 2024 AeroPress study, the 2021 immersion study and the 2020 capsule study point in different directions (see Contested).<sup><a href="#src-s3">3</a>,<a href="#src-s6">6</a>,<a href="#src-s11">11</a></sup> A design that holds grind distribution and time fixed across roasts would separate porosity from loss of solubles.
- **Averages and flavour.** Studies show that a single yield hides how unevenly a bed extracted.<sup><a href="#src-s4">4</a>,<a href="#src-s9">9</a></sup> No study consulted for this entry linked a measure of that spread to sensory results.
- **Capsules and the cup.** In the capsule study, sensory quality in the cup was not correlated with the technical variables of the grounds.<sup><a href="#src-s6">6</a></sup> How far the levers above predict flavour, rather than yield, remains open.

## Key studies

<div class="study">
<p><strong>Cameron et al., 2020 – Grind and espresso yield.</strong> Combines a model of espresso extraction with shots at a range of grind settings. The model, assuming even flow, predicts higher yield with every finer setting; the experiments showed a peak, with lower yields at the finest settings, which the authors attribute to uneven flow.</p>
<p class="meta">Matter 2(3), 631–648 · <a href="https://doi.org/10.1016/j.matt.2019.12.019">doi:10.1016/j.matt.2019.12.019</a></p>
</div>

<div class="study">
<p><strong>Batali et al., 2020 – Temperature at fixed strength and yield.</strong> Drip-brews coffee to nine points on the control chart at 87, 90 and 93 °C, changing grind and brew time to hit each target. Trained panellists found strength and yield shaped the flavour, while temperature had no appreciable effect at matched targets.</p>
<p class="meta">Scientific Reports 10, 16450 · <a href="https://doi.org/10.1038/s41598-020-73341-4">doi:10.1038/s41598-020-73341-4</a></p>
</div>

<div class="study">
<p><strong>Liang et al., 2021 – Immersion at equilibrium.</strong> Models full immersion as an equilibrium between grounds and liquid and tests it experimentally. Yield settled at about 21% across brew ratios, strength followed the ratio, and the equilibrium constant did not depend on grind, roast level or temperature over 80–99 °C.</p>
<p class="meta">Scientific Reports 11, 6904 · <a href="https://doi.org/10.1038/s41598-021-85787-1">doi:10.1038/s41598-021-85787-1</a></p>
</div>

<div class="study">
<p><strong>Eiermann et al., 2020 – What governs capsule extraction.</strong> Extracts 43 capsules of the same geometry on one machine and relates the grounds to the brew. More coffee or a finer grind raised strength most efficiently, the share of fines governed extraction time, and sensory quality was not correlated with the technical variables.</p>
<p class="meta">Scientific Reports 10, 17079 · <a href="https://doi.org/10.1038/s41598-020-74138-1">doi:10.1038/s41598-020-74138-1</a></p>
</div>

<div class="study">
<p><strong>Schmieder et al., 2023 – Flow, grind and temperature in espresso.</strong> Collects ten fractions per shot across a designed range of flow rates, grind settings and temperatures. Flow rate had the strongest effect on solids in the cup; changing temperature alone left the extraction curves nearly identical, though higher temperatures generally raised the cup values slightly across the design; all three mattered less than hitting the target beverage mass.</p>
<p class="meta">Foods 12(15), 2871 · <a href="https://doi.org/10.3390/foods12152871">doi:10.3390/foods12152871</a></p>
</div>
