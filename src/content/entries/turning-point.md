---
title: Turning point
summary: The lowest bean-probe reading after the charge, where the curve stops falling and starts to climb. Why it is a feature of the probe rather than the beans, what moves it, and what it can and cannot tell a roaster.
domain: roasting
kind: Concept
stage: roast
topics: [science, equipment]
status: verified
lastVerified: 2026-10-19
reviewer: Coffearium verification pass
updated: 2026-10-19
added: 2026-10-19
corrections:
  - date: 2026-10-19
    change: The extra reasoning on air in the probe reading is corrected. If heat exchange with the air is added to the lag equation, the reading at its minimum lies between bean and air temperature, so above the beans. The contested item now says this too.
    reason: The earlier text said that air and lag pull in opposite directions at the turning point. At the minimum, the lag term cannot pull the reading below the beans (our derivation from Al-Shemmeri et al. 2025, Eq. 20).
  - date: 2026-10-19
    change: Thermocouples are now described as first-order only in the simplest description (NASA step tests). Sarnes & Schrüfer is cited for its second-order model and for its finding that thicker probes respond more slowly.
    reason: Sarnes & Schrüfer 2007 model sheathed thermocouples as second-order sensors, not first-order ones.
  - date: 2026-10-19
    change: The turning point is no longer called a "repeatable marker" on the textbook's authority. The practitioner claims from Daily Coffee News no longer stand alone, and the 500 g roaster size from the conference paper is removed.
    reason: The textbook chapter does not discuss the turning point. A Tier C source must not stand alone, and one Tier B source cannot carry a number.
brief:
  - The turning point is the lowest bean-probe reading after the charge; after it the reading rises quickly.<sup><a href="#src-s2">2</a></sup>
  - The dip belongs to the probe, not the beans; the beans enter cold and only warm up, while the probe moves from hot air into cool beans.<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a>,<a href="#src-s5">5</a></sup>
  - A 2025 roaster model treats the probe as lagging behind the beans; in that model, the reading at its minimum equals the modelled bean temperature (our derivation).<sup><a href="#src-s2">2</a></sup>
  - In 13 roasts on a 200 g gas sample drum charged at about 180 °C, the turning point came at 60–82 s and 76.5–86.8 °C.<sup><a href="#src-s4">4</a></sup>
  - The reading is specific to probe, position and machine, so the turning point compares batches on one roaster, not different roasters.<sup><a href="#src-s1">1</a></sup>
quickFacts:
  - label: What it is
    value: Lowest bean-probe reading after charge
  - label: What it measures
    value: The probe in its machine, not the beans' lowest temperature
  - label: Reported, 200 g sample drum
    value: Mean 73 s and 81 °C at a charge of about 180 °C
  - label: Moved by
    value: Charge temperature, batch size, airflow, probe size and position
  - label: Useful for
    value: Comparing batches on one roaster with one probe
  - label: Not useful for
    value: Comparing roasters, or as a bean temperature
aka:
  - Turnaround
  - TP
linkTerms:
  - turning point
  - turnaround point
related:
  - preheating-and-charge
  - roast-profile
  - rate-of-rise
  - drying-phase
  - airflow
  - heat-transfer
  - drum-roaster
  - fluid-bed-roaster
  - roasting
contested:
  - 'What the reading at the turning point stands for: a roasting textbook chapter says the bean probe always reads a mix of bean surface and hot air<sup><a href="#src-s1">1</a></sup>, which would put it above the beans; a 2025 roaster model lets the probe lag behind the bean temperature alone, so that at the minimum the two are equal (our derivation), though its authors note that the real reading also depends on the air and on probe position<sup><a href="#src-s2">2</a></sup>; if heat exchange with the air is added to the same equation, the reading at the minimum lies between bean and air temperature (our derivation); a 2024 drum study describes the turning point as the moment when beans and roaster temperature "equilibrate".<sup><a href="#src-s3">3</a></sup> No study consulted for this entry measured probe and bean temperature side by side through the turning point.'
sources:
  - id: s1
    title: "The Roast – Creating the Beans' Signature"
    authors: Schenker, S.; Rothgeb, T.
    publisher: "In: Folmer, B. (ed.), The Craft and Science of Coffee, Academic Press, ch. 11, pp. 245–271"
    year: 2017
    doi: 10.1016/B978-0-12-803520-7.00011-6
    url: https://doi.org/10.1016/B978-0-12-803520-7.00011-6
    tier: B
    quote: "Therefore, this temperature reading always represents a mix temperature of bean surface and hot air."
    accessed: 2026-10-19
  - id: s2
    title: "Batch-Scale Simulation of Heat and Mass Transfer of Coffee Roasting in Spouted Bed Roasters"
    authors: Al-Shemmeri, M.; Fryer, P. J.; Farr, R.; Lopez-Quiroga, E.
    publisher: Beverages 11(6), 162
    year: 2025
    doi: 10.3390/beverages11060162
    url: https://www.mdpi.com/2306-5710/11/6/162
    tier: A
    quote: "The thermal response coefficient was introduced to correct for the response time of the thermocouple in the roasting chamber."
    accessed: 2026-10-19
  - id: s3
    title: "The effect of roast profiles on the dynamics of titratable acidity during coffee roasting"
    authors: Anokye-Bempah, L.; Styczynski, T.; de Andrade Teixeira Fernandes, N.; Gervay-Hague, J.; Ristenpart, W. D.; Donis-González, I. R.
    publisher: Scientific Reports 14, 8237
    year: 2024
    doi: 10.1038/s41598-024-57256-y
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11002029/
    tier: A
    quote: "The initial RoR reflects the highest positive RoR immediately after the turning point."
    accessed: 2026-10-19
  - id: s4
    title: "Optimising consumer acceptability of Cauca specialty coffee through roasting profiles on acidity and body sensory attributes"
    authors: Campo-Ceballos, D. A.; Gaviria-López, C. A.
    publisher: Czech Journal of Food Sciences 41(1), 64–72
    year: 2023
    doi: 10.17221/181/2022-CJFS
    url: https://cjfs.agriculturejournals.cz/pdfs/cjf/2023/01/08.pdf
    tier: A
    quote: "The turning point was achieved on average for all roasting profiles in 73 s and at a temperature of 81 °C."
    accessed: 2026-10-19
  - id: s5
    title: "A heat and mass transfer study of coffee bean roasting"
    authors: Fadai, N. T.; Melrose, J.; Please, C. P.; Schulman, A.; Van Gorder, R. A.
    publisher: International Journal of Heat and Mass Transfer 104, 787–799
    year: 2017
    doi: 10.1016/j.ijheatmasstransfer.2016.08.083
    url: https://ora.ox.ac.uk/objects/uuid:c2433f0b-fc40-4d7c-a207-5453349f6f91/files/m2e0c0e8fb121aa744f0a35396a18ff60
    tier: A
    quote: "After the first minute, the bean's temperature and moisture content become nearly spatially uniform."
    accessed: 2026-10-19
  - id: s6
    title: "Carbon Dioxide Evolution and Moisture Evaporation During Roasting of Coffee Beans"
    authors: Geiger, R.; Perren, R.; Kuenzli, R.; Escher, F.
    publisher: Journal of Food Science 70(2), E124–E130
    year: 2005
    doi: 10.1111/j.1365-2621.2005.tb07084.x
    url: https://ift.onlinelibrary.wiley.com/doi/10.1111/j.1365-2621.2005.tb07084.x
    tier: A
    quote: "A thermocouple type K with a 0.25-mm dia (Thermocoax, Ltd., Surèsnes, France) was inserted into the holes."
    accessed: 2026-10-19
  - id: s7
    title: "Determination of the time behaviour of thermocouples for sensor speedup and medium supervision"
    authors: Sarnes, B.; Schrüfer, E.
    publisher: Proceedings of the Estonian Academy of Sciences, Engineering 13(4), 295–309
    year: 2007
    doi: 10.3176/eng.2007.4.04
    url: https://kirj.ee/wp-content/plugins/kirj/pub/eng-4-2007-295-309_20230511160831.pdf
    tier: A
    quote: "The heat transfer coefficient depends strongly on the medium and on the diameter of the thermocouple."
    accessed: 2026-10-19
  - id: s8
    title: "Recovery and Radiation Corrections and Time Constants of Several Sizes of Shielded and Unshielded Thermocouple Probes for Measuring Gas Temperature (NASA Technical Paper 1099)"
    authors: Glawe, G. E.; Holanda, R.; Krause, L. N.
    publisher: National Aeronautics and Space Administration (NASA), Lewis Research Center
    year: 1978
    url: https://corpora.tika.apache.org/base/docs/govdocs1/897/897528.pdf
    tier: A
    quote: "Measured time constants ranged from 0.03 to 1.7 seconds."
    accessed: 2026-10-19
  - id: s9
    title: "Pengaruh Suhu Awal dan Lama Waktu Roasting terhadap Karakteristik Fisik Hasil Roasting Kopi Robusta (Coffea canephora Pierre ex Froehner)"
    authors: Saputra, D. S.; Setyoko, U.; Pratita, D. G.; Kusumaningtyas, R. N.
    publisher: Agropross National Conference Proceedings of Agriculture, Politeknik Negeri Jember
    year: 2024
    url: https://proceedings.polije.ac.id/index.php/agropross/article/download/787/674/1096
    tier: B
    quote: "semakin tinggi suhu mesin ketika kopi dimasukkan maka suhu Turning Point juga semakin tinggi"
    accessed: 2026-10-19
  - id: s10
    title: "Our World Through a Keyhole: Understanding the Limitations of Thermocouple Readings"
    authors: Hoos, R.
    publisher: Daily Coffee News (from Roast Magazine, Sep/Oct 2017)
    year: 2019
    url: https://dailycoffeenews.com/2019/07/09/our-world-through-a-keyhole-understanding-the-limitations-of-thermocouple-readings
    tier: C
    quote: "thicker thermocouples have greater thermal inertia and tend to respond more slowly"
    accessed: 2026-10-19
---

## What the turning point is

A roaster logs the reading of the bean probe, a temperature probe that sits in the bean mass.<sup><a href="#src-s1">1</a></sup> When the green coffee is charged, that reading drops.<sup><a href="#src-s2">2</a></sup> It reaches a lowest value and then climbs again. That lowest value is the turning point.<sup><a href="#src-s2">2</a>,<a href="#src-s3">3</a></sup>

After the turning point the reading rises quickly, because hot air and cool beans are far apart in temperature.<sup><a href="#src-s2">2</a></sup> A 2024 drum study took the highest rate of rise just after it as the initial rate of rise.<sup><a href="#src-s3">3</a></sup> One study logged its time and temperature, alongside the charge, colour change, first crack and drop.<sup><a href="#src-s4">4</a></sup>

The preheating and charge entry explains what happens at the charge. The roast profile entry shows where the turning point sits on the whole curve. This entry looks at the turning point itself: what makes it, what moves it and how far it can be trusted.

## A dip in the probe, not in the beans

The beans themselves do not cool after the charge. In a heat-transfer model of a single bean, they start at room temperature and take up heat from the hotter air from then on.<sup><a href="#src-s5">5</a></sup> The dip happens in the probe.

Before the charge, the probe sits in the empty, preheated roaster and reads hot air.<sup><a href="#src-s1">1</a></sup> At the charge, beans and air at room temperature reach it, and its reading falls.<sup><a href="#src-s2">2</a></sup> A probe also takes time to follow any change. A 2025 roaster model adds a correction for exactly this slow response.<sup><a href="#src-s2">2</a></sup>

So the reading falls while the beans warm. The two meet, and from then on the reading climbs with the beans. The figure shows this as a schematic.

<figure>
<div data-figure="turning-point-lag"></div>
<figcaption>The first minutes after the charge, drawn from a model in which the probe lags behind the bean temperature. The beans warm without a dip; the probe reading falls, turns and rises. A slower probe turns later and higher.<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a>,<a href="#src-s5">5</a></sup> Schematic, no measured values.</figcaption>
</figure>

## What moves the turning point

The turning point depends on the roaster, the batch and the probe. The sources consulted for this entry show these levers:

- **Charge temperature.** According to a 2024 conference paper on robusta, a hotter charge gave a higher turning-point temperature.<sup><a href="#src-s9">9</a></sup>
- **Batch size and airflow.** In a 2025 study on a 0.5 kg air roaster, batches of 200–500 g at different airflows gave more varied early profiles than changes in inlet air temperature did.<sup><a href="#src-s2">2</a></sup>
- **Probe position.** A probe's reading depends on heat from both air and beans, and on where it sits in the roasting chamber.<sup><a href="#src-s2">2</a></sup>
- **Probe size.** In simulations of thermocouples outside coffee, thicker probes responded more slowly; heat transfer at the probe surface depends strongly on its diameter.<sup><a href="#src-s7">7</a></sup> Practitioners report the same for roaster probes.<sup><a href="#src-s10">10</a></sup>
- **The machine.** A bean probe reads a mix of bean surface and hot air, and that mix depends on the machine design.<sup><a href="#src-s1">1</a></sup>

No study consulted for this entry varied one of these levers alone and recorded the turning point in a production drum.

## What the turning point is good for

According to a roasting textbook chapter, the bean-probe reading is sufficient for process control, although it is specific to machine design.<sup><a href="#src-s1">1</a></sup> On one roaster, with one probe in one place, the turning point can therefore serve as a marker from batch to batch (our reasoning). A shift can point to a change in charge, batch size or machine state.<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a>,<a href="#src-s9">9</a></sup>

It is not a bean temperature, and it does not travel. Readings from one roaster cannot simply be compared with another.<sup><a href="#src-s1">1</a></sup> A turning point of about 81 °C was reported on a 200 g sample drum.<sup><a href="#src-s4">4</a></sup> That number belongs to that roaster and its probe.

<!-- deep-dive -->

## Reference values

Values reported in the sources. They describe particular coffees, machines and probes; they are not targets.

| Parameter | Value reported | Source |
|---|---|---|
| Turning point, 200 g batches, gas sample drum, 13 roasts | Mean 73 s and 81 °C; per roast 60–82 s and 76.5–86.8 °C | Campo-Ceballos & Gaviria-López<sup><a href="#src-s4">4</a></sup> |
| Charge temperature, same roasts | 177.9–181.1 °C per roast (mean 180 °C); the methods also state 170 ± 1 °C | Campo-Ceballos & Gaviria-López<sup><a href="#src-s4">4</a></sup> |
| Logging, same study | Sample roaster stated with ±1 °C precision; time–temperature logging with Artisan software | Campo-Ceballos & Gaviria-López<sup><a href="#src-s4">4</a></sup> |
| Turning point, definition in a drum study | Highest rate of rise "immediately after the turning point" | Anokye-Bempah et al.<sup><a href="#src-s3">3</a></sup> |
| Cause of the dip, air-roaster model | Beans and air at ambient temperature (about 20 °C) reach the probe | Al-Shemmeri et al.<sup><a href="#src-s2">2</a></sup> |
| Probe response model | dT<sub>probe</sub>/dt = K (T<sub>bean</sub> − T<sub>probe</sub>); K fitted within 0.01–1.00 s⁻¹ | Al-Shemmeri et al.<sup><a href="#src-s2">2</a></sup> |
| Bean-core thermocouple, laboratory fluid bed | Type K, 0.25 mm, in a 0.3 mm hole drilled into the bean | Geiger et al.<sup><a href="#src-s6">6</a></sup> |
| Time constants of gas-temperature thermocouple probes, NASA tests | 0.03–1.7 s | Glawe et al.<sup><a href="#src-s8">8</a></sup> |

<figure>
<div data-figure="turning-point-values"></div>
<figcaption>Charge temperature and turning point in 13 roasts of one Colombian coffee, 200 g batches on a gas sample drum roaster. The turning point sat about 100 °C below the charge temperature (our calculation from the means).<sup><a href="#src-s4">4</a></sup></figcaption>
</figure>

## The physics of the probe

**A probe is a sensor with a lag.** In the simplest description, a thermocouple is a first-order element: after a sudden change it approaches the new temperature along an exponential curve, as in NASA step tests.<sup><a href="#src-s8">8</a></sup> A more detailed study of sheathed thermocouples found a second-order model sufficient for many uses.<sup><a href="#src-s7">7</a></sup> How fast depends on the heat-transfer coefficient at its surface, which depends strongly on the medium and on the probe's diameter.<sup><a href="#src-s7">7</a></sup> In NASA tests on probes in gas flows, measured time constants ranged from 0.03 to 1.7 s; shields slowed the response, and variation in junction bead size explained some of the scatter.<sup><a href="#src-s8">8</a></sup>

**What the 2025 model implies.** The spouted-bed model writes the probe reading as dT<sub>probe</sub>/dt = K (T<sub>bean</sub> − T<sub>probe</sub>), with K a fitted thermal response coefficient.<sup><a href="#src-s2">2</a></sup> At the turning point the reading stops changing, so the left side is zero. In this model the reading at the turning point therefore equals the modelled bean temperature (our derivation). Before it the probe reads above the beans; after it, the probe trails below the rising bean temperature (our derivation). The reciprocal of K is the probe's time constant. The fitting bounds of 0.01–1.00 s⁻¹ correspond to 1–100 s (our calculation).<sup><a href="#src-s2">2</a></sup>

**Why a slower probe turns later and higher.** In the same equation, a smaller K makes the falling reading meet the rising bean curve later, when the beans are already warmer (our derivation).<sup><a href="#src-s2">2</a></sup> Thicker thermocouples respond more slowly in simulations,<sup><a href="#src-s7">7</a></sup> and practitioners report the same for roaster probes.<sup><a href="#src-s10">10</a></sup> No study consulted for this entry measured it in a roaster.

**Air in the reading.** The model is a simplification. Its authors state that the reading depends on heat from both the hot air and the beans, and on probe position.<sup><a href="#src-s2">2</a></sup> According to a roasting textbook chapter, a production bean probe always reads a mix of bean surface and hot air.<sup><a href="#src-s1">1</a></sup> If a term for heat exchange with the air is added to the lag equation, the reading at its minimum is a weighted mean of bean and air temperature, so it sits above the beans (our derivation). How far above is not known for any production roaster in the sources found.

**What it takes to measure the beans.** In a laboratory fluid bed, bean-core temperature was measured with a type K thermocouple of 0.25 mm diameter pushed into a 0.3 mm hole in the bean.<sup><a href="#src-s6">6</a></sup> According to the textbook chapter, core measurement works in small-scale experiments but is usually not possible in industrial roasting.<sup><a href="#src-s1">1</a></sup>

## What studies report

**One sample roaster.** In a 2023 Colombian study, 13 batches of 200 g were roasted on a gas sample drum and logged with Artisan software.<sup><a href="#src-s4">4</a></sup> The turning point came on average at 73 s and 81 °C.<sup><a href="#src-s4">4</a></sup> Across the roasts it ranged from 60 to 82 s and from 76.5 to 86.8 °C, while the charge temperature varied by only about 3 °C.<sup><a href="#src-s4">4</a></sup> The paper does not define the turning point or name the probe, and its stated charge temperature (170 ± 1 °C) differs from the 178–181 °C in its own table.<sup><a href="#src-s4">4</a></sup>

**Charge temperature.** According to a 2024 conference paper from Indonesia, robusta charged hotter into a small roaster gave a higher turning-point temperature.<sup><a href="#src-s9">9</a></sup> The paper also states that the turning point comes earlier at a lower charge temperature, but calls the turning-point times themselves inconsistent.<sup><a href="#src-s9">9</a></sup> The paper does not state peer review.

**After the turning point.** In a 5 kg drum study, the initial rate of rise was defined as the highest positive rate of rise immediately after the turning point.<sup><a href="#src-s3">3</a></sup> The authors describe the turning point as the moment when the coffee beans and the roaster temperature equilibrate.<sup><a href="#src-s3">3</a></sup>

**Batch size and airflow.** In the 2025 spouted-bed study, the case study with batches of 200–500 g at different airflows showed more varied early time–temperature profiles than the one that varied inlet air temperature.<sup><a href="#src-s2">2</a></sup> The study does not report the turning point by batch size.<sup><a href="#src-s2">2</a></sup>

## Reading the turning point with care

- **Treating it as a bean temperature.** The reading is a probe value, shaped by air, beans, position and lag.<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a></sup>
- **Comparing roasters.** Values are specific to the machine design, which makes comparison between roasting systems problematic.<sup><a href="#src-s1">1</a></sup>
- **Changing the probe.** A thicker probe responds more slowly,<sup><a href="#src-s7">7</a></sup> and a relocated one reads a different mix of heat from air and beans.<sup><a href="#src-s2">2</a></sup> A logged history of turning points is then no longer comparable.
- **A drifting probe.** Probes may fail or fall out of calibration, according to the textbook chapter.<sup><a href="#src-s1">1</a></sup>

## Open questions

- **Probe and bean side by side.** No study consulted for this entry logged a production bean probe and the bean temperature together through the turning point.
- **Single levers in a drum.** How charge temperature, batch size or airflow alone shift the turning point in a production drum was not measured in the sources found.
- **Response time of roaster probes.** No study consulted for this entry measured the time constant of a bean probe inside a moving bean mass.
- **Turning point and flavour.** No study consulted for this entry tested whether the turning point itself predicts anything in the cup.

## Key studies

<div class="study">
<p><strong>Campo-Ceballos & Gaviria-López, 2023 – Turning points logged on a sample roaster.</strong> Thirteen 200 g batches of one Cauca coffee were roasted on a gas sample drum in a response-surface design and tasted by consumers. The paper reports the charge temperature and the turning point of every roast, on average 73 s and 81 °C.</p>
<p class="meta">Czech Journal of Food Sciences 41(1), 64–72 · <a href="https://doi.org/10.17221/181/2022-CJFS">doi:10.17221/181/2022-CJFS</a></p>
</div>

<div class="study">
<p><strong>Al-Shemmeri et al., 2025 – What the thermocouple sees.</strong> Models heat and mass transfer in a 0.5 kg spouted-bed roaster from logged inlet, outlet and product temperatures. It explains the dip after the charge by beans and air at ambient temperature, and writes the probe as a first-order lag on the bean temperature with a fitted response coefficient.</p>
<p class="meta">Beverages 11(6), 162 · <a href="https://doi.org/10.3390/beverages11060162">doi:10.3390/beverages11060162</a></p>
</div>

<div class="study">
<p><strong>Anokye-Bempah et al., 2024 – The rate of rise after the turning point.</strong> Roasted up to seven profiles on a 5 kg gas drum and logged the rate of rise per 30 s. It defines the initial rate of rise as the highest value just after the turning point, where beans and roaster temperature equilibrate.</p>
<p class="meta">Scientific Reports 14, 8237 · <a href="https://doi.org/10.1038/s41598-024-57256-y">doi:10.1038/s41598-024-57256-y</a></p>
</div>

<div class="study">
<p><strong>Sarnes & Schrüfer, 2007 – How fast a thermocouple follows.</strong> Modelled and measured the time behaviour of sheathed thermocouples. The heat-transfer coefficient at the probe surface, set by the medium and the probe diameter, mattered more for the response than the material data, and thicker probes responded more slowly.</p>
<p class="meta">Proceedings of the Estonian Academy of Sciences, Engineering 13(4), 295–309 · <a href="https://doi.org/10.3176/eng.2007.4.04">doi:10.3176/eng.2007.4.04</a></p>
</div>
