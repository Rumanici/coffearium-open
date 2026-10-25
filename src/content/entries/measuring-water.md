---
title: Measuring water
summary: How to find out what is in your brewing water – drop tests for hardness and alkalinity, conductivity meters, chlorine tests, water reports and bottle labels – and what each method can and cannot tell you.
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
  - 'For coffee, most tap waters in central Europe and the USA are described well enough by three measurements: total hardness, alkalinity and electrical conductivity.<sup><a href="#src-s1">1</a></sup>'
  - Outside a laboratory, hardness and alkalinity are measured with drop-titration kits – EDTA for hardness, a strong acid for alkalinity.<sup><a href="#src-s1">1</a></sup>
  - The SCA recommends a kit resolution of at least 20 ppm as CaCO₃; doubling the sample volume halves the value of each drop.<sup><a href="#src-s1">1</a></sup>
  - A “TDS meter” is a conductivity meter with a built-in conversion factor, which differs between meters; the reading says nothing about hardness or alkalinity.<sup><a href="#src-s1">1</a></sup>
  - Bottle labels and water reports list calcium, magnesium and hydrogen carbonate in mg/L; factors convert them to hardness and alkalinity as CaCO₃.<sup><a href="#src-s1">1</a>,<a href="#src-s12">12</a></sup>
quickFacts:
  - label: Measure first
    value: Total hardness, alkalinity, conductivity
  - label: Hardness test
    value: EDTA titration (ISO 6059)
  - label: Alkalinity test
    value: Acid titration to a low pH end point (ISO 9963-1)
  - label: Kit resolution (SCA)
    value: 20 ppm as CaCO₃ or better
  - label: Conductivity reference
    value: 25 °C (US EPA); 20 °C (SCA)
  - label: Temperature effect
    value: About 2% of the reading per °C
  - label: Chlorine test
    value: DPD colour method (ISO 7393-2)
  - label: Label factors
    value: Ca × 2.497; Mg × 4.118; HCO₃⁻ × 0.8202 → ppm as CaCO₃
aka:
  - Water testing for coffee
  - Testing brewing water
linkTerms:
  - water test kit
  - water testing
  - drop test
  - titration kit
  - TDS meter
  - conductivity meter
  - water analysis
  - water report
related:
  - water-for-coffee
  - hardness-and-alkalinity
  - water-treatment
  - water-minerals-and-flavour
  - extraction-yield-and-tds
  - espresso-machine
contested:
  - 'Conductivity reference temperature: the SCA handbook asks for samples close to 20 °C,<sup><a href="#src-s1">1</a></sup> and the Zürich water report gives conductivity at 20 °C;<sup><a href="#src-s10">10</a></sup> US EPA Method 120.1 reports specific conductance at 25 °C,<sup><a href="#src-s6">6</a></sup> which a USGS study also calls the typical reference.<sup><a href="#src-s7">7</a></sup> At about 2% per °C, the two references differ by about 10% (our calculation).'
  - 'The factor of a heritage TDS meter: the SCA handbook says the heritage SCAA standard refers to a meter with a factor of 0.7, and in the same sentence equates 1 µS/cm with 1 mg/L, which would be a factor of 1.<sup><a href="#src-s1">1</a></sup> Elsewhere it calls 0.7 the commonly used standard.<sup><a href="#src-s1">1</a></sup> The SCAA handbook gives 0.5 or 0.6, most commonly 0.5.<sup><a href="#src-s2">2</a></sup>'
  - 'Colour at the end point: in the SCA handbook’s step-by-step text a hardness kit turns from red to fully green at the end point; the caption of its own photograph series says the solution has turned completely red, and its overview gives “from green to red” as the example.<sup><a href="#src-s1">1</a></sup> Kits differ in their indicators, so the kit’s own instructions decide.'
  - 'Direction of the temperature effect: the SCA handbook states that the lower the temperature, the higher the conductivity, and that a sample at 10 °C reads 20% too high.<sup><a href="#src-s1">1</a></sup> EPA Method 120.1 instead adds 2% of the reading per degree below 25 °C,<sup><a href="#src-s6">6</a></sup> and a USGS study reports that conductivity increases by about 1–3% per °C.<sup><a href="#src-s7">7</a></sup> This entry follows the EPA method and the USGS study.'
corrections:
  - date: 2026-10-20
    change: Swiss mineral-water labelling rule updated to the Getränkeverordnung as in force since 1 July 2020 (amounts of the characteristic constituents only; the alternative of an officially recognised analysis with its date no longer exists).
    reason: The cited 2017 version is out of date.
  - date: 2026-10-20
    change: The SCA advice to measure pH now reads alkalinity above 300 ppm or hardness below 50 ppm (extremely soft water), not alkalinity below 50 ppm.
    reason: Misreading of the SCA handbook.
  - date: 2026-10-20
    change: The test-strip study is described correctly (each reader was consistent, readers differed in reading colours) and the Singh & Kalra card now reports the paper’s own result; the SCA handbook’s statement that conductivity falls with temperature is listed as contested.
    reason: Summaries did not match the sources.
sources:
  - id: s1
    title: "The SCA Water Quality Handbook, edition 2 (ISBN 978-0-9995807-3-8)"
    authors: Wellinger, M.; Smrke, S.; Yeretzian, C.
    publisher: Specialty Coffee Association
    year: 2018
    url: https://digitalcollection.zhaw.ch/handle/11475/12365
    tier: A/B
    tierNote: A for its recommendations and measuring procedures (kit resolution, sample volume, which parameters to measure); B for general chemistry and explanations.
    quote: "The minimum recommended resolution is 20 ppm CaCO3 (or 1°d)."
    accessed: 2026-10-20
  - id: s2
    title: "The Water Quality Handbook (ISBN 978-1-882552-08-5)"
    authors: Beeman, D.; Songer, P.; Lingle, T. (ed. Everage, L.)
    publisher: Specialty Coffee Association of America
    year: 2011
    tier: A/B
    tierNote: A for the SCAA standards it reproduces; B for practical advice and explanations.
    quote: "When obtaining water samples for testing, collect water from the same location each time."
    accessed: 2026-10-20
  - id: s3
    title: "ISO 6059:1984 Water quality – Determination of the sum of calcium and magnesium – EDTA titrimetric method (abstract)"
    authors: International Organization for Standardization
    publisher: ISO (abstract as listed by the Association Sénégalaise de Normalisation)
    year: 1984
    url: https://www.asn.sn/en/node/51314
    tier: A
    quote: "The lowest concentration that can be determined is 0,05 mmol/l."
    abstractOnly: true
    accessed: 2026-10-20
  - id: s4
    title: "ISO 9963-1:1994 Water quality – Determination of alkalinity – Part 1: Determination of total and composite alkalinity (abstract)"
    authors: International Organization for Standardization
    publisher: ISO (abstract as listed by the Association Sénégalaise de Normalisation)
    year: 1994
    url: https://asn.sn/en/node/48974
    tier: A
    quote: "The recommended lower limit is 0,4 mmol/l."
    abstractOnly: true
    accessed: 2026-10-20
  - id: s5
    title: "NFM 6.6.4.B: Alkalinity and ANC field determination by Inflection Point Titration (method summary)"
    authors: U.S. Geological Survey, Office of Water Quality
    publisher: U.S. Geological Survey National Field Manual, via the National Environmental Methods Index (NEMI)
    url: https://www.nemi.gov/methods/method_summary/9212/
    tier: A
    quote: "titrated incrementally to a pH of between approximately 4.5 and 4.0"
    accessed: 2026-10-20
  - id: s6
    title: "Method 120.1: Conductance (Specific Conductance, umhos at 25°C) by Conductivity Meter"
    authors: U.S. Environmental Protection Agency
    publisher: U.S. Environmental Protection Agency (archived copy)
    year: 1982
    url: https://19january2021snapshot.epa.gov/sites/static/files/2015-08/documents/method_120-1_1982.pdf
    tier: A
    quote: "If the temperature of the sample is below 25°C, add 2% of the reading per degree."
    accessed: 2026-10-20
  - id: s7
    title: New Method for Electrical Conductivity Temperature Compensation
    authors: McCleskey, R. B.
    publisher: Environmental Science & Technology 47(17), 9874–9881
    year: 2013
    doi: 10.1021/es402188r
    url: "https://literature.wolkersdorfer.info/literature/New Method for Electrical Conductivity Temperature Compensation.pdf"
    tier: A
    quote: "is a substantial improvement for acidic waters and performs as well as or better than the standard methods for circumneutral waters."
    accessed: 2026-10-20
  - id: s8
    title: Specific Conductance Method for In Situ Estimation of Total Dissolved Solids
    authors: Singh, T.; Kalra, Y. P.
    publisher: Journal American Water Works Association 67(1), 99–100
    year: 1975
    url: "https://literature.wolkersdorfer.info/literature/Specific Conductance Method for in situ estimation of total dissolved solids.pdf"
    tier: A
    quote: "the value was found to be from 0.54 to 0.96."
    accessed: 2026-10-20
  - id: s9
    title: "ISO 7393-2:2017 Water quality – Determination of free chlorine and total chlorine – Part 2: Colorimetric method using N,N-dialkyl-1,4-phenylenediamine, for routine control purposes (abstract)"
    authors: International Organization for Standardization
    publisher: ISO
    year: 2017
    url: https://www.iso.org/standard/65560.html
    tier: A
    quote: "from, for example, 0,000 4 mmol/l to 0,07 mmol/l (e.g. 0,03 mg/l to 5 mg/l) total chlorine"
    abstractOnly: true
    accessed: 2026-10-20
  - id: s10
    title: Die Qualität des Zürcher Trinkwassers 2025
    authors: Stadt Zürich, Wasserversorgung, Qualitätsüberwachung
    publisher: Stadt Zürich
    year: 2025
    url: https://www.stadt-zuerich.ch/content/dam/web/de/umwelt-energie/wasser/dokumente/2025_Trinkwasserqualitaet.pdf
    tier: A
    quote: "Die Werte beziehen sich auf die Wasserqualität am Werkausgang."
    accessed: 2026-10-20
  - id: s11
    title: Abridged Standard Atomic Weights 2024
    authors: IUPAC Commission on Isotopic Abundances and Atomic Weights (CIAAW)
    publisher: CIAAW
    year: 2024
    url: https://ciaaw.org/abridged-atomic-weights.htm
    tier: A
    quote: "40.078 ± 0.004"
    accessed: 2026-10-20
  - id: s12
    title: Directive 2009/54/EC of the European Parliament and of the Council of 18 June 2009 on the exploitation and marketing of natural mineral waters
    authors: European Parliament; Council of the European Union
    publisher: Official Journal of the European Union (text as published by legislation.gov.uk)
    year: 2009
    url: https://www.legislation.gov.uk/eudr/2009/54/data.htm
    tier: A
    quote: "a statement of the analytical composition, giving its characteristic constituents;"
    accessed: 2026-10-20
  - id: s13
    title: Verordnung des EDI über Getränke (SR 817.022.12), Stand am 1. Juli 2020
    authors: Eidgenössisches Departement des Innern (EDI)
    publisher: Swiss Confederation (text as published by LexFind)
    year: 2020
    url: https://www.lexfind.ch/tolv/211066/de
    tier: A
    quote: "Das Verzeichnis der Zutaten ist durch die Angabe der Menge der charakteristischen Bestandteile des natürlichen Mineralwassers zu ersetzen."
    accessed: 2026-10-20
  - id: s14
    title: Informationspflicht Trinkwasser (Merkblatt)
    authors: Kanton Aargau, Departement Gesundheit und Soziales, Amt für Verbraucherschutz
    publisher: Kanton Aargau
    year: 2020
    url: https://www.ag.ch/media/kanton-aargau/dgs/dokumente/verbraucherschutz/lebensmittelkontrolle/trinkwasser/20-merkblatt-informationspflicht-trinkwasser.pdf
    tier: A
    quote: "mindestens einmal jährlich umfassend über die Qualität des Trinkwassers zu informieren"
    accessed: 2026-10-20
  - id: s15
    title: "Trinkwasser-Installation: Auf die letzten Meter kommt es an"
    authors: Umweltbundesamt
    publisher: Umweltbundesamt (German Environment Agency)
    year: 2020
    url: https://www.umweltbundesamt.de/themen/trinkwasser-installation-auf-die-letzten-meter
    tier: A
    quote: "Lassen Sie Trinkwasser, das vier Stunden oder länger in der Leitung gestanden hat, kurz ablaufen"
    accessed: 2026-10-20
  - id: s16
    title: Assessment of the Precision and Accuracy of At-Home Multi-Test Water Quality Test Strips
    authors: Swinney, G. G.; Mullins, S. A.; Martin, J.; Kinsey, J. B.; King, D. A.
    publisher: Journal of Undergraduate Chemistry Research 23(4), 54–58
    year: 2024
    url: https://www.westmont.edu/sites/default/files/2024-11/Daniel%20A.%20King_final.pdf
    tier: B
    tierNote: Undergraduate research journal; peer review not stated in the article. Used without numbers and not as the only support for a general claim.
    quote: "The highest standard deviation from the color identification survey was 0.71 (hardness)."
    accessed: 2026-10-20
---

## What to measure

Brewing water is described mainly by two numbers. Total hardness is the amount of calcium and magnesium; alkalinity is the water’s capacity to neutralise acid.<sup><a href="#src-s1">1</a></sup> Why they matter for flavour and machines is explained under Water for coffee and Hardness and alkalinity.

According to the SCA handbook, most tap waters in central Europe and the USA are described well enough by three measurements.<sup><a href="#src-s1">1</a></sup> They are total hardness, alkalinity and electrical conductivity.<sup><a href="#src-s1">1</a></sup> The handbook advises a pH measurement only for very soft or very alkaline water, to protect equipment.<sup><a href="#src-s1">1</a></sup> The SCAA handbook adds a check of smell, taste and appearance, and a chlorine test.<sup><a href="#src-s2">2</a></sup>

This is a different measurement from coffee strength. The strength of a brew is measured with a coffee refractometer and is explained under Extraction yield and TDS.

## Drop tests for hardness and alkalinity

Outside a laboratory, hardness and alkalinity are measured by titration.<sup><a href="#src-s1">1</a></sup> A reagent is added drop by drop to a measured water sample until its colour changes, and the drops are counted.<sup><a href="#src-s1">1</a></sup> Hardness and alkalinity need two different reagents and two separate tests.<sup><a href="#src-s1">1</a></sup>

- The **hardness test** uses EDTA, a reagent that binds calcium and magnesium.<sup><a href="#src-s1">1</a>,<a href="#src-s3">3</a></sup>
- The **alkalinity test** uses a strong acid such as hydrochloric acid.<sup><a href="#src-s1">1</a></sup>

Kits are sold by water-treatment suppliers and aquarium shops.<sup><a href="#src-s1">1</a></sup> Many kits labelled “carbonate hardness” in fact measure alkalinity.<sup><a href="#src-s1">1</a></sup> The difference between the two terms is explained under Water for coffee.

Each drop stands for a fixed amount, for example 20 ppm as calcium carbonate (CaCO₃) in a 5 mL sample.<sup><a href="#src-s1">1</a></sup> The SCA recommends a resolution of at least 20 ppm.<sup><a href="#src-s1">1</a></sup> Treated waters below 100 ppm are read less precisely, because the result is uncertain by about one drop.<sup><a href="#src-s1">1</a></sup> A larger sample helps: twice the water means each drop counts half as much.<sup><a href="#src-s1">1</a></sup>

<figure>
<div data-figure="measuring-water-drop-resolution"></div>
<figcaption>What one drop is worth when the sample volume grows, for a kit in which one drop equals 20 ppm as CaCO₃ in 5 mL.<sup><a href="#src-s1">1</a></sup></figcaption>
</figure>

## Conductivity and “TDS” meters

A conductivity meter measures how well the water carries an electric current. Dissolved salts carry the current, so more salts give a higher reading.<sup><a href="#src-s2">2</a></sup> The unit is microsiemens per centimetre (µS/cm).<sup><a href="#src-s2">2</a></sup>

A “TDS meter” is a conductivity meter with a built-in conversion to total dissolved solids (TDS) in mg/L.<sup><a href="#src-s1">1</a></sup> Meters use different conversion factors, so check the manual or specifications of your meter.<sup><a href="#src-s1">1</a></sup> The right factor depends on which salts are dissolved.<sup><a href="#src-s1">1</a></sup> The reading does not show what those salts are.<sup><a href="#src-s1">1</a></sup> It therefore cannot replace a hardness or alkalinity test.

Temperature matters too. Conductivity rises by about 2% for every degree Celsius, so readings are corrected to a reference temperature.<sup><a href="#src-s6">6</a>,<a href="#src-s7">7</a></sup> According to the SCA handbook, many cheaper meters do not correct for temperature.<sup><a href="#src-s1">1</a></sup>

A conductivity meter is still useful. It shows quickly whether a tap water or a treated water stays stable from day to day.<sup><a href="#src-s1">1</a></sup>

## Water reports and bottle labels

Often the numbers are already published. Water suppliers publish analyses of their water, and mineral water bottles carry a label with its composition.<sup><a href="#src-s2">2</a>,<a href="#src-s12">12</a>,<a href="#src-s13">13</a></sup> These list calcium, magnesium and hydrogen carbonate (bicarbonate) in mg/L.<sup><a href="#src-s1">1</a></sup> Milligrams of different ions cannot simply be added up.<sup><a href="#src-s1">1</a></sup> Each is first multiplied by a factor that expresses it as CaCO₃.

<figure>
<div data-figure="measuring-water-worked-example"></div>
<figcaption>Worked example from a published water analysis: Zürich’s 2025 drinking water, mean of all works.<sup><a href="#src-s10">10</a></sup> Calcium and magnesium give total hardness; hydrogen carbonate gives alkalinity. Our results match the hardness and “Karbonathärte” printed in the report.<sup><a href="#src-s10">10</a></sup> Factors are our calculation from atomic weights;<sup><a href="#src-s11">11</a></sup> targets from the SCA.<sup><a href="#src-s1">1</a></sup></figcaption>
</figure>

In this example the hardness lies inside the SCA range, but the alkalinity is about twice its upper limit.<sup><a href="#src-s1">1</a>,<a href="#src-s10">10</a></sup> Such water is a case for treatment before brewing filter coffee. The options are covered under Water treatment.

**In Switzerland**, every water supplier must inform its customers about drinking-water quality at least once a year.<sup><a href="#src-s14">14</a></sup> The information must include the hardness band and the nitrate content.<sup><a href="#src-s14">14</a></sup> Cantonal guidance recommends publishing it on the supplier’s website and on the national site wasserqualitaet.ch.<sup><a href="#src-s14">14</a></sup> Alkalinity is not among the required items.<sup><a href="#src-s14">14</a></sup> For it, ask the supplier for the full analysis, as Zürich publishes it.<sup><a href="#src-s10">10</a></sup>

## How to measure your water

1. **Start with the published data.** Look up your supplier’s water information or the full analysis.<sup><a href="#src-s2">2</a>,<a href="#src-s14">14</a></sup> For bottled water, read the label.<sup><a href="#src-s12">12</a>,<a href="#src-s13">13</a></sup>
2. **Take a fresh sample.** If the water has stood in the pipes for four hours or more, let it run until it feels cooler, as the German Environment Agency advises for drinking water.<sup><a href="#src-s15">15</a></sup> Sample from the same tap each time.<sup><a href="#src-s2">2</a></sup>
3. **Test chlorine at once.** Chlorine escapes quickly, so a late test gives inaccurate results.<sup><a href="#src-s2">2</a></sup>
4. **Titrate hardness and alkalinity separately.** Fill the tube to the stated volume, often 5 mL.<sup><a href="#src-s1">1</a></sup> Add the reagent drop by drop and shake after each drop.<sup><a href="#src-s1">1</a></sup> Hold the tube over white paper and count until the colour has changed completely.<sup><a href="#src-s1">1</a></sup>
5. **Use more water for soft or treated water.** Below about 100 ppm, double or triple the sample volume and divide the value per drop by two or three.<sup><a href="#src-s1">1</a></sup> If the tube has no marks, weigh the water: 1 g is 1 mL.<sup><a href="#src-s1">1</a></sup>
6. **Check the reagent.** If the sample turns yellow-brown instead of the stated colour, the kit may be too old or stored too warm or in light.<sup><a href="#src-s1">1</a></sup>
7. **Measure conductivity near the reference temperature.** Bring the sample close to 20 °C, or use a meter that corrects for temperature.<sup><a href="#src-s1">1</a></sup> Note which conversion factor a TDS meter uses.<sup><a href="#src-s1">1</a></sup>
8. **Repeat.** Water fed from several sources can change during the day and with the seasons, so measure more than once.<sup><a href="#src-s1">1</a></sup>

<!-- deep-dive -->

## The two titrations

**Hardness by EDTA.** Total hardness is determined by complexometric titration with ethylenediaminetetraacetic acid (EDTA).<sup><a href="#src-s1">1</a></sup> ISO 6059 standardises this method for the sum of calcium and magnesium in ground, surface and drinking waters.<sup><a href="#src-s3">3</a></sup> Its lowest determinable concentration is 0.05 mmol/L, and it is not intended for waters high in salts.<sup><a href="#src-s3">3</a></sup> By our calculation, 0.05 mmol/L of hardness is about 5 ppm as CaCO₃ (molar mass 100.09 g/mol from standard atomic weights).<sup><a href="#src-s11">11</a></sup> A laboratory titration thus resolves far finer than a drop kit.

**Alkalinity by acid.** Alkalinity is the amount of strong acid needed to bring a sample down to a low end point.<sup><a href="#src-s1">1</a>,<a href="#src-s5">5</a></sup> The USGS field method titrates to between about pH 4.5 and 4.0; the SCA handbook uses pH 4.3.<sup><a href="#src-s1">1</a>,<a href="#src-s5">5</a></sup> ISO 9963-1 specifies a titrimetric method for natural, treated and waste water.<sup><a href="#src-s4">4</a></sup> It applies directly up to 20 mmol/L, with a recommended lower limit of 0.4 mmol/L; more alkaline samples are analysed with a smaller test portion.<sup><a href="#src-s4">4</a></sup>

Drop kits apply the same chemistry with an indicator dye instead of a pH electrode. The SCA handbook describes the procedure but names no standard for the kits.<sup><a href="#src-s1">1</a></sup> No study consulted for this entry compared drop kits with ISO laboratory methods.

## Resolution and uncertainty

A drop kit counts whole drops, so its result moves in steps. The SCA handbook puts the uncertainty at about one drop, or 20 ppm as CaCO₃ in its example.<sup><a href="#src-s1">1</a></sup> Our arithmetic: for a water of 60 ppm, a one-drop uncertainty is about a third of the value. At the SCA’s alkalinity range of 40–75 ppm, a 20 ppm step cannot reliably separate the lower from the upper limit.<sup><a href="#src-s1">1</a></sup>

Larger samples shrink the step: 10 mL gives 10 ppm per drop, 15 mL gives 6.7 ppm.<sup><a href="#src-s1">1</a></sup> The costs are more reagent and harder mixing.<sup><a href="#src-s1">1</a></sup> Weighing the sample instead of reading a scale on the tube adds a deviation of less than 0.5% below 30 °C, according to the handbook.<sup><a href="#src-s1">1</a></sup>

**Test strips.** No study consulted for this entry tested hardness or alkalinity strips against titration. A 2024 undergraduate study of home multi-test strips found that each reader got consistent results, but readers differed in how they read the same colours, most of all on the hardness pad.<sup><a href="#src-s16">16</a></sup> The authors judged that the colour charts overstated the range the strips can measure; they tested accuracy only for pH, copper, lead and iron.<sup><a href="#src-s16">16</a></sup>

## Conductivity in detail

**Temperature compensation.** US EPA Method 120.1 reports specific conductance at 25 °C.<sup><a href="#src-s6">6</a></sup> Below 25 °C it adds 2% of the reading per degree; above, it subtracts 2%.<sup><a href="#src-s6">6</a></sup> The method names temperature variation and correction as the largest source of potential deviation.<sup><a href="#src-s6">6</a></sup> Depending on the electrolytes, conductivity rises by about 1–3% per °C, and field meters often use a fixed coefficient of 0.019–0.020 per °C.<sup><a href="#src-s7">7</a></sup> A 2013 study found that a fixed coefficient gives large deviations in acidic waters and proposed a factor that varies with pH and temperature.<sup><a href="#src-s7">7</a></sup>

The SCA handbook uses 20 °C instead (see Contested).<sup><a href="#src-s1">1</a></sup> Our arithmetic at 2% per °C: an uncompensated reading taken at 10 °C is about 20% below its 20 °C value (the SCA handbook states the opposite direction; see Contested). Water straight from a cold tap can easily be that cold.

**From conductivity to TDS.** For natural waters studied by J. D. Hem of the US Geological Survey, a 1975 paper reports that the ratio of dissolved solids (mg/L) to conductivity (µS/cm) ranged from 0.54 to 0.96.<sup><a href="#src-s8">8</a></sup> The SCAA handbook gives 0.5 or 0.6 as usual factors, most commonly 0.5;<sup><a href="#src-s2">2</a></sup> the SCA handbook says many meters use 0.5 or a variable factor, and that the heritage SCAA standard referred to a meter with 0.7.<sup><a href="#src-s1">1</a></sup> The SCA handbook treats a TDS estimate as rough, with large deviations possible.<sup><a href="#src-s1">1</a></sup> The same water can therefore show quite different “TDS” values.

<figure>
<div data-figure="measuring-water-tds-factors"></div>
<figcaption>One water, several “TDS” readings: the mean conductivity of Zürich drinking water in 2025 (306 µS/cm at 20 °C)<sup><a href="#src-s10">10</a></sup> multiplied by the factors in common use<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a></sup> and by the ratios measured in natural waters.<sup><a href="#src-s8">8</a></sup> Our calculation.</figcaption>
</figure>

**Why conductivity is not hardness or alkalinity.** Conductivity counts all ions together; it cannot tell calcium from sodium or hydrogen carbonate from chloride.<sup><a href="#src-s1">1</a></sup> A softener swaps calcium and magnesium for sodium and barely changes conductivity, so conductivity cannot track it.<sup><a href="#src-s1">1</a></sup> A decarboniser removes ions and turns hydrogen carbonate into carbon dioxide, which adds almost nothing to conductivity; here conductivity falls with alkalinity and can track the cartridge.<sup><a href="#src-s1">1</a></sup> The SCA confirmed this on medium-hard Swiss tap waters.<sup><a href="#src-s1">1</a></sup>

## pH and chlorine

**pH.** The pH of most tap waters is set largely by excess dissolved carbon dioxide.<sup><a href="#src-s1">1</a></sup> Left standing in an open container for a day, such water loses carbon dioxide and its pH rises markedly.<sup><a href="#src-s1">1</a></sup> A pH reading therefore depends on how and when the sample was taken, and it does not measure how much acid the water can buffer. The SCA handbook advises measuring pH only for waters above 300 ppm alkalinity or extremely soft waters below 50 ppm, to avoid damage to equipment.<sup><a href="#src-s1">1</a></sup>

**Chlorine and chloramine.** ISO 7393-2 describes a colour test for free and total chlorine with DPD (an N,N-dialkyl-1,4-phenylenediamine), for laboratory or field use.<sup><a href="#src-s9">9</a></sup> The red colour is read with a photometer or against colour standards.<sup><a href="#src-s9">9</a></sup> It covers total chlorine from about 0.03 mg/L to 5 mg/L; higher levels need dilution.<sup><a href="#src-s9">9</a></sup> Total chlorine includes combined forms such as chloramines, which an annex of the standard separates.<sup><a href="#src-s9">9</a></sup> The SCAA handbook warns that chlorine escapes quickly from a sample, so the test must be done at once.<sup><a href="#src-s2">2</a></sup>

## Labels, rules and conversions

**What labels must show.** In the European Union, a natural mineral water label must state the analytical composition, giving its characteristic constituents.<sup><a href="#src-s12">12</a></sup> Swiss law replaces the list of ingredients with the amounts of the characteristic constituents.<sup><a href="#src-s13">13</a></sup> Both set thresholds for claims: “contains calcium” above 150 mg/L calcium, “contains magnesium” above 50 mg/L, “contains bicarbonate” above 600 mg/L.<sup><a href="#src-s12">12</a>,<a href="#src-s13">13</a></sup> No rule consulted for this entry requires hardness or alkalinity on the label.

**The factors.** Hardness and alkalinity as CaCO₃ count ions in equivalents, not their mass.<sup><a href="#src-s1">1</a></sup> Our calculation from the 2024 standard atomic weights (Ca 40.078, Mg 24.305, C 12.011, O 15.999, H 1.0080):<sup><a href="#src-s11">11</a></sup>

| Ion on the label | Molar mass (g/mol) | Factor to ppm as CaCO₃ | Basis |
|---|---|---|---|
| Calcium, Ca²⁺ | 40.078 | 2.497 | 100.09 ÷ 40.078; matches the SCA factor<sup><a href="#src-s1">1</a>,<a href="#src-s11">11</a></sup> |
| Magnesium, Mg²⁺ | 24.305 | 4.118 | 100.09 ÷ 24.305; matches the SCA factor<sup><a href="#src-s1">1</a>,<a href="#src-s11">11</a></sup> |
| Hydrogen carbonate, HCO₃⁻ | 61.02 | 0.8202 | 50.04 ÷ 61.02: one HCO₃⁻ neutralises one H⁺, half as much as one CO₃²⁻; matches the SCA factor<sup><a href="#src-s1">1</a>,<a href="#src-s11">11</a></sup> |

**Reading a report.** Reports use their own labels. The Zürich report lists calcium and magnesium as “Calciumhärte” and “Magnesiumhärte” in mg/L.<sup><a href="#src-s10">10</a></sup> By our calculation these are ion concentrations: 50.9 mg/L calcium and 7.4 mg/L magnesium give 157.6 ppm, the reported 15.8 °fH.<sup><a href="#src-s10">10</a></sup> Its “Karbonathärte” of 14.8 °fH equals the alkalinity from 180.4 mg/L hydrogen carbonate (148.0 ppm).<sup><a href="#src-s10">10</a></sup> That fits the SCA definition: carbonate hardness equals the lower of total hardness and alkalinity.<sup><a href="#src-s1">1</a></sup> In softened water, where alkalinity exceeds hardness, the two would differ.<sup><a href="#src-s1">1</a></sup>

Report values are averages at a given point, often at the waterworks outlet, as in Zürich.<sup><a href="#src-s10">10</a></sup> The same report shows hydrogen carbonate ranging from 154.3 to 222.1 mg/L at one works.<sup><a href="#src-s10">10</a></sup> Where several works feed a network, water at a single tap can vary.<sup><a href="#src-s1">1</a>,<a href="#src-s10">10</a></sup>

## Reference values

| Parameter | Value reported | Source |
|---|---|---|
| Parameters to measure for coffee | Total hardness, alkalinity, conductivity | SCA 2018<sup><a href="#src-s1">1</a></sup> |
| Minimum kit resolution | 20 ppm as CaCO₃ (about 1 °dH) | SCA 2018<sup><a href="#src-s1">1</a></sup> |
| Typical kit sample | 5 mL | SCA 2018<sup><a href="#src-s1">1</a></sup> |
| Value per drop at 10 and 15 mL | 10 and 6.7 ppm (kit with 20 ppm at 5 mL) | SCA 2018<sup><a href="#src-s1">1</a></sup> |
| ISO 6059 lowest determinable hardness | 0.05 mmol/L (≈5 ppm as CaCO₃, our calculation) | ISO 6059<sup><a href="#src-s3">3</a></sup> |
| ISO 9963-1 alkalinity range | Up to 20 mmol/L directly; lower limit 0.4 mmol/L | ISO 9963-1<sup><a href="#src-s4">4</a></sup> |
| Alkalinity end point | About pH 4.5–4.0 (USGS); pH 4.3 (SCA) | USGS<sup><a href="#src-s5">5</a></sup>, SCA 2018<sup><a href="#src-s1">1</a></sup> |
| Conductivity reference temperature | 25 °C (EPA 120.1); 20 °C (SCA) | EPA<sup><a href="#src-s6">6</a></sup>, SCA 2018<sup><a href="#src-s1">1</a></sup> |
| Temperature correction | 2% of reading per °C (EPA); about 1–3% per °C by electrolyte | EPA<sup><a href="#src-s6">6</a></sup>, McCleskey<sup><a href="#src-s7">7</a></sup> |
| TDS/conductivity ratio, natural waters | 0.54–0.96 | Singh & Kalra<sup><a href="#src-s8">8</a></sup> |
| Conductivity-to-TDS factors in use | 0.5 most common, 0.6 (SCAA); 0.5 or variable, 0.7 (heritage SCAA meter) (SCA) | SCAA 2011<sup><a href="#src-s2">2</a></sup>, SCA 2018<sup><a href="#src-s1">1</a></sup> |
| pH measurement advised | Alkalinity above 300 ppm, or extremely soft water below 50 ppm | SCA 2018<sup><a href="#src-s1">1</a></sup> |
| DPD total chlorine range | About 0.03–5 mg/L | ISO 7393-2<sup><a href="#src-s9">9</a></sup> |
| Label claims (EU, Switzerland) | Calcium > 150 mg/L; magnesium > 50 mg/L; bicarbonate > 600 mg/L | EU 2009/54<sup><a href="#src-s12">12</a></sup>, EDI<sup><a href="#src-s13">13</a></sup> |
| Swiss supplier information | At least once a year; hardness band and nitrate included | Kanton Aargau<sup><a href="#src-s14">14</a></sup> |
| Stagnant tap water | Run if it stood four hours or more | Umweltbundesamt<sup><a href="#src-s15">15</a></sup> |

## Open questions

- **Accuracy of home kits.** No study consulted for this entry compared drop kits or test strips for hardness and alkalinity with laboratory methods. The SCA handbook’s resolution advice rests on the size of one drop, not on a validation study.<sup><a href="#src-s1">1</a></sup>
- **Which TDS factor suits coffee water.** Ratios in natural waters span almost a factor of two,<sup><a href="#src-s8">8</a></sup> and meters do not state which water they assume. No study consulted for this entry calibrated meters against brewing waters.
- **How much a tap varies.** Published reports give averages and ranges per works;<sup><a href="#src-s10">10</a></sup> how far a single café tap varies across a day is not covered by them.

## Key studies

<div class="study">
<p><strong>McCleskey, 2013 – Conductivity temperature compensation.</strong> Measured conductivity and pH of natural waters – stream, geothermal, mine and sea waters – at temperatures from 5 to 90 °C. Proposes a compensation factor that varies with pH and temperature; it improves markedly on a fixed coefficient for acidic waters and does as well or better for near-neutral ones.</p>
<p class="meta">Environmental Science & Technology 47(17), 9874–9881 · <a href="https://doi.org/10.1021/es402188r">doi:10.1021/es402188r</a></p>
</div>

<div class="study">
<p><strong>Singh & Kalra, 1975 – Conductance and dissolved solids.</strong> Compared specific conductance with dissolved solids in mountain streams of the Marmot basin, Alberta, and found a close linear relation with nearly the same ratio in every stream (0.54–0.55). Cites a range of 0.54 to 0.96 for the natural waters studied by Hem, because the ratio depends on the ions present.</p>
<p class="meta">Journal American Water Works Association 67(1), 99–100</p>
</div>

<div class="study">
<p><strong>Swinney et al., 2024 – Home water test strips.</strong> Tested several brands of multi-parameter test strips with student readers and solutions of known content. Each reader was consistent, but readers differed in reading the same colours, most of all on the hardness pad; the colour charts claimed a wider range than the strips could detect.</p>
<p class="meta">Journal of Undergraduate Chemistry Research 23(4), 54–58</p>
</div>
