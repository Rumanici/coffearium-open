---
title: Rate of rise
summary: How fast the bean-probe temperature climbs during a roast – how software calculates it, why it usually falls, why it describes the probe as much as the beans, and what studies have measured.
domain: roasting
kind: Concept
stage: roast
topics: [science]
status: verified
lastVerified: 2026-10-19
reviewer: Coffearium verification pass
updated: 2026-10-19
added: 2026-10-19
corrections:
  - date: 2026-10-19
    change: Removed the statement that software shows the RoR per 60 s and the paragraph on a flick-prediction feature; claims on lag and terms now rest on framed practitioner sources with peer-reviewed support beside them.
    reason: Verification – Tier C sources may not carry a number or stand alone.
  - date: 2026-10-19
    change: The 2022 controller is described as controlling the temperature read by a probe in the roasting chamber, not chamber temperature.
    reason: Verification against Miskon et al. 2022, which describes the probe in the roast chamber and the bean pile as the controlled object.
brief:
  - The rate of rise (RoR) is the change in bean-probe temperature per unit of time, the slope of the roast curve, given for example in °C per 30 s.<sup><a href="#src-s1">1</a>,<a href="#src-s12">12</a></sup>
  - Across 13 drum roasts in one study, the mean RoR was 4.72–8.76 °C per 30 s before colour change and 1.58–6.02 °C per 30 s after second crack.<sup><a href="#src-s1">1</a></sup>
  - It usually falls because heat flow into the bean shrinks as the bean nears the roasting temperature, and evaporating water takes up heat early on.<sup><a href="#src-s4">4</a>,<a href="#src-s5">5</a></sup>
  - Differentiating a noisy signal amplifies the noise; smoothing calms the trace but can bias it and makes it respond later.<sup><a href="#src-s8">8</a>,<a href="#src-s12">12</a></sup>
  - “Crash” and “flick” are practitioner names for RoR shapes around first crack; no peer-reviewed sensory test of either was found.<sup><a href="#src-s14">14</a>,<a href="#src-s15">15</a>,<a href="#src-s1">1</a></sup>
quickFacts:
  - label: Definition
    value: Change in bean-probe temperature per unit of time (first derivative)
  - label: Units
    value: °C per 30 s in one study; the time unit scales the number, not the shape
  - label: Typical course
    value: Highest just after the turning point, lower at the end
  - label: Measured range, one study
    value: Initial 5.07–10.37, final 0.01–5.43 °C per 30 s (13 roasts, 5 kg drum)
  - label: Depends on
    value: Probe, its position and lag, and the software's interval and smoothing
  - label: Crash and flick
    value: Practitioner terms; flavour effects not tested in peer-reviewed work
aka:
  - RoR
linkTerms:
  - rate of rise
  - RoR
  - rate-of-rise curve
  - RoR interval
  - delta span
related:
  - roast-profile
  - turning-point
  - drying-phase
  - browning-phase
  - first-crack
  - development-time
  - second-crack
  - heat-transfer
  - endothermic-and-exothermic-phases
  - water-in-roasting
  - airflow
  - drum-roaster
  - preheating-and-charge
  - roast-defects
contested:
  - 'Exothermic reactions and a late rise in RoR: a 2024 drum study describes a flick as typically associated with the onset of exothermic reactions<sup><a href="#src-s1">1</a></sup>, and a 2025 model attributes a varying rate of temperature change at high thermal loads to endothermic and/or exothermic reactions<sup><a href="#src-s3">3</a></sup>; a 2000 doctoral thesis found that the few bean-temperature curves in the literature showed no late increase clearly attributable to exothermic reactions.<sup><a href="#src-s11">11</a></sup>'
sources:
  - id: s1
    title: "The effect of roast profiles on the dynamics of titratable acidity during coffee roasting"
    authors: Anokye-Bempah, L.; Styczynski, T.; de Andrade Teixeira Fernandes, N.; Gervay-Hague, J.; Ristenpart, W. D.; Donis-González, I. R.
    publisher: Scientific Reports 14, 8237
    year: 2024
    doi: 10.1038/s41598-024-57256-y
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11002029/
    tier: A
    quote: "The final RoR indicates the RoR during the last minute of the roast."
    accessed: 2026-10-19
  - id: s2
    title: "The Roast – Creating the Beans' Signature"
    authors: Schenker, S.; Rothgeb, T.
    publisher: "In: Folmer, B. (ed.), The Craft and Science of Coffee, Academic Press, ch. 11, pp. 245–271"
    year: 2017
    doi: 10.1016/B978-0-12-803520-7.00011-6
    url: https://doi.org/10.1016/B978-0-12-803520-7.00011-6
    tier: B
    quote: "By contrast, more advanced process control systems are guided by the actual development of product temperature rather than hot air temperature (real or true profile roasting)."
    accessed: 2026-10-19
  - id: s3
    title: "Batch-Scale Simulation of Heat and Mass Transfer of Coffee Roasting in Spouted Bed Roasters"
    authors: Al-Shemmeri, M.; Fryer, P. J.; Farr, R.; Lopez-Quiroga, E.
    publisher: Beverages 11(6), 162
    year: 2025
    doi: 10.3390/beverages11060162
    url: https://www.mdpi.com/2306-5710/11/6/162
    tier: A
    quote: "the rate of change of product temperature varies due to the initiation of endothermic and/or exothermic reactions"
    accessed: 2026-10-19
  - id: s4
    title: "A heat and mass transfer study of coffee bean roasting"
    authors: Fadai, N. T.; Melrose, J.; Please, C. P.; Schulman, A.; Van Gorder, R. A.
    publisher: International Journal of Heat and Mass Transfer 104, 787–799
    year: 2017
    doi: 10.1016/j.ijheatmasstransfer.2016.08.083
    url: https://ora.ox.ac.uk/objects/uuid:c2433f0b-fc40-4d7c-a207-5453349f6f91/files/m2e0c0e8fb121aa744f0a35396a18ff60
    tier: A
    quote: "After the first minute, the bean's temperature and moisture content become nearly spatially uniform."
    accessed: 2026-10-19
  - id: s5
    title: "Modeling and simulation of coffee bean heating during roasting: effect of heat generation"
    authors: Bustos-Vanegas, J. D.; Martins, M. A.; Corrêa, P. C.; Baptestini, F. M.; de Oliveira, G. H. H.
    publisher: Frontiers in Food Science and Technology 5, 1603783
    year: 2025
    doi: 10.3389/frfst.2025.1603783
    url: https://www.frontiersin.org/journals/food-science-and-technology/articles/10.3389/frfst.2025.1603783/full
    tier: A
    quote: "the model underestimates the temperature of the bean due to evaporative cooling, which starts at 100°C"
    accessed: 2026-10-19
  - id: s6
    title: "Roasting Conditions and Coffee Flavor: A Multi-Study Empirical Investigation"
    authors: Münchow, M.; Alstrup, J.; Steen, I.; Giacalone, D.
    publisher: Beverages 6(2), 29
    year: 2020
    doi: 10.3390/beverages6020029
    url: https://www.mdpi.com/2306-5710/6/2/29
    tier: A
    quote: "Conversely, at the end of the coffee roasting process, there is a much lower need for heat input, as the process itself becomes progressively more exothermic."
    accessed: 2026-10-19
  - id: s7
    title: "The Effect of Roast Development Time Modulations on the Sensory Profile and Chemical Composition of the Coffee Brew as Measured by NMR and DHS-GC–MS"
    authors: Alstrup, J.; Petersen, M. A.; Larsen, F. H.; Münchow, M.
    publisher: Beverages 6(4), 70
    year: 2020
    doi: 10.3390/beverages6040070
    url: https://www.mdpi.com/2306-5710/6/4/70
    tier: A
    quote: "Typically, the roast master starts the roast with close to maximum power output from the burner (heat source), and later performs stepwise reductions in the power output to slow down the speed of browning reactions as the roast progresses."
    accessed: 2026-10-19
  - id: s8
    title: "Numerical Differentiation of Noisy Data: A Unifying Multi-Objective Optimization Framework"
    authors: van Breugel, F.; Kutz, J. N.; Brunton, B. W.
    publisher: IEEE Access 8, 196865–196877
    year: 2020
    doi: 10.1109/ACCESS.2020.3034077
    url: https://arxiv.org/pdf/2009.01911
    tier: A
    quote: "Although smoothing mitigates the errors, it can also introduce biases."
    accessed: 2026-10-19
  - id: s9
    title: "Implementation of Adaptive-PID Based Temperature Trajectory Tracking Control to Improve Repeatability in Coffee Roasting"
    authors: Inovan, T.; Cahyadi, A. I.; Wahyunggoro, O.
    publisher: "2023 IEEE International Conference on Industry 4.0, Artificial Intelligence, and Communications Technology (IAICT), pp. 162–167"
    year: 2023
    doi: 10.1109/IAICT59002.2023.10205885
    url: https://ir.lib.ugm.ac.id/id/eprint/181
    tier: A
    quote: "with the goal of eliminating over-reliance on an operator's skill to manage the repetitive roasting process"
    abstractOnly: true
    accessed: 2026-10-19
  - id: s10
    title: "Self-Tuned Fuzzy PID Temperature Controller Implementation in Hot-Air Coffee Roasting Process"
    authors: Miskon, M. T.; Rahiman, M. H. F.; Taib, M. N.
    publisher: Journal of Electrical and Electronic Systems Research 21(1), 132–138
    year: 2022
    doi: 10.24191/jeesr.v21i1.018
    url: https://jeesr.uitm.edu.my/v1/JEESR/Vol.21/article18.pdf
    tier: A
    quote: "The sampling time used to collect temperature data and update the plant's control signal was three seconds"
    accessed: 2026-10-19
  - id: s11
    title: "Investigations on the Hot Air Roasting of Coffee Beans (Diss. ETH No. 13620)"
    authors: Schenker, S.
    publisher: ETH Zürich (doctoral thesis)
    year: 2000
    url: https://library.sweetmarias.com/wp-content/uploads/2020/08/roasting_hot_air_doctorate.pdf
    tier: B
    quote: "do not show an increase in the final roasting stages that can be clearly attributed to exothermic reactions"
    accessed: 2026-10-19
  - id: s12
    title: "About Rate of Rise (RoR) (Cropster help centre)"
    authors: Cropster
    publisher: Cropster (roasting software company)
    url: https://help.cropster.com/using-roasting-intelligence/about-rate-of-rise-ror
    tier: C
    quote: "Mathematically, it is the derivative of the temperature curve."
    accessed: 2026-10-19
  - id: s13
    title: "Idle noise, ROR intervals, and analyzing roast curves"
    authors: Rao, S.
    publisher: scottrao.com (consultant's blog)
    year: 2019
    url: https://www.scottrao.com/blog/2019/7/3/how-to-manage-roast-software-settings
    tier: C
    quote: "Longer delta spans make curves look smoother."
    accessed: 2026-10-19
  - id: s14
    title: "HTR 3.04 Fixing Crashes (How to Roast course)"
    authors: Barista Hustle
    publisher: Barista Hustle (online coffee education)
    url: https://www.baristahustle.com/lesson/htr-3-04-fixing-crashes/
    tier: C
    quote: "The ‘crash’ refers to the moment during first crack when the bean-temperature rate of rise (RoR) nosedives."
    accessed: 2026-10-19
  - id: s15
    title: "Cropster Adds Flick Prediction To AI Features (press release)"
    authors: Cropster
    publisher: Sprudge
    year: 2021
    url: https://sprudge.com/cropster-adds-flick-prediction-to-ai-features-179286.html
    tier: C
    quote: "The flick is a quick rise in the RoR at the end of a roast"
    accessed: 2026-10-19
---

## What the rate of rise is

The rate of rise (RoR) says how fast the bean-probe temperature is climbing at a given moment of the roast. It is the slope of the roast curve.<sup><a href="#src-s1">1</a>,<a href="#src-s12">12</a></sup> One drum study defined it as the temperature increase per 30 s.<sup><a href="#src-s1">1</a></sup> The time unit only scales the number; the shape of the curve stays the same (our note).

A reading of 5 °C per 30 s is the same as 10 °C per minute (our conversion). Mathematically, the RoR is the first derivative of temperature over time, as a roasting-software help page also states.<sup><a href="#src-s12">12</a></sup> The roast profile entry shows where the RoR sits on the whole curve. This entry goes into how the number is made and what it can and cannot tell.

The RoR inherits everything about the reading it comes from. The bean probe sits among the beans but also in hot air, so it reads a mix of bean surface and air temperature. That mix depends on the machine.<sup><a href="#src-s2">2</a></sup> A thermocouple also responds slowly, so its reading trails the true temperature.<sup><a href="#src-s3">3</a></sup>

## How software calculates it

Roasters log the probe reading at set time intervals, often on a computer.<sup><a href="#src-s2">2</a></sup> One research controller on a hot-air roaster read its thermocouple every 3 s.<sup><a href="#src-s10">10</a></sup> The software then takes the temperature change over a chosen time span and divides it by that span.<sup><a href="#src-s1">1</a>,<a href="#src-s12">12</a>,<a href="#src-s13">13</a></sup> Practitioner writing calls this span the RoR interval or delta span.<sup><a href="#src-s13">13</a></sup>

<figure class="iso-fig">
<div data-figure="rate-of-rise-window"></div>
<p class="fig-legend-head">How probe readings become a rate of rise (made-up series)</p>
<ol class="fig-legend">
<li data-n="1"><span><b>Logged readings.</b> The probe is read at set intervals; the reading mixes bean surface and air.<sup><a href="#src-s2">2</a>,<a href="#src-s10">10</a></sup></span></li>
<li data-n="2"><span><b>Interval (Δt).</b> The time span over which the change is taken, set in the software.<sup><a href="#src-s1">1</a>,<a href="#src-s12">12</a>,<a href="#src-s13">13</a></sup></span></li>
<li data-n="3"><span><b>Temperature change (ΔT).</b> Divided by Δt, it gives the RoR: the slope of the line through the two readings.<sup><a href="#src-s1">1</a>,<a href="#src-s12">12</a></sup></span></li>
<li data-n="4"><span><b>Short interval.</b> Follows a change quickly, but small jumps in the reading show up as a jagged trace.<sup><a href="#src-s8">8</a>,<a href="#src-s12">12</a></sup></span></li>
<li data-n="5"><span><b>Long interval or more smoothing.</b> A smoother trace that responds later and flattens short dips.<sup><a href="#src-s8">8</a>,<a href="#src-s12">12</a>,<a href="#src-s13">13</a></sup></span></li>
</ol>
<figcaption>How logging software turns probe readings into a rate of rise, and how the interval changes the trace. Schematic, drawn from a made-up series, not data; not to scale.</figcaption>
</figure>

The interval is a trade-off. Differentiating noisy measurements amplifies the noise; smoothing reduces it but can bias the result.<sup><a href="#src-s8">8</a></sup> Smoothing also tends to flatten sharp peaks.<sup><a href="#src-s8">8</a></sup> Roasting-software guidance describes the same trade-off: longer spans and smoothing settings give a calmer trace that reacts less quickly to changes in bean temperature.<sup><a href="#src-s12">12</a>,<a href="#src-s13">13</a></sup>

A value computed over a trailing interval is the average slope over that interval. It therefore describes the recent past, not this instant (our note on the arithmetic). Two roasters with different interval and smoothing settings can log the same roast and see different RoR curves.<sup><a href="#src-s8">8</a>,<a href="#src-s12">12</a>,<a href="#src-s13">13</a></sup>

## Why it usually falls

Heat flows from the hot roaster into the cooler beans. In heat-transfer models, the heat flux at the bean surface is proportional to the difference between the roasting temperature and the surface temperature.<sup><a href="#src-s4">4</a></sup> Right after the turning point this difference is large, and the reading rises rapidly.<sup><a href="#src-s3">3</a></sup>

As the beans warm, the difference shrinks, and so does the heat flow.<sup><a href="#src-s4">4</a></sup> Water adds a second brake: evaporation cools the bean from about 100 °C in one single-bean model.<sup><a href="#src-s5">5</a></sup> In a spouted-bed model at low thermal load, the rate of temperature change tended towards zero.<sup><a href="#src-s3">3</a></sup>

A falling RoR is common, not a law. Specialty roasters typically start near full burner power and reduce it in steps, which slows the rise on purpose.<sup><a href="#src-s7">7</a></sup> In one 2024 drum study, the RoR was lower in the last minute than just after the turning point in every one of 13 roasts.<sup><a href="#src-s1">1</a></sup> Between those points, some profiles rose again.<sup><a href="#src-s1">1</a></sup>

## Reading it and acting on it

Roasters act on how fast the temperature rises. At first crack, for example, a roaster may adjust the flame to fine-tune the rate at which heat rises.<sup><a href="#src-s2">2</a></sup> The burner cuts that slow the browning reactions also show up as a lower RoR.<sup><a href="#src-s7">7</a></sup>

Two RoR shapes have practitioner names. In roasting practice, a sudden plunge in RoR during first crack is called a **crash**.<sup><a href="#src-s14">14</a></sup> One 2024 study produced such a drop on purpose by stopping the roast energy during first crack.<sup><a href="#src-s1">1</a></sup> A quick rise in RoR at the end of a roast is called a **flick**.<sup><a href="#src-s15">15</a></sup> The same study describes a flick as a sudden increase sometime after first crack.<sup><a href="#src-s1">1</a></sup> No peer-reviewed study consulted for this entry tested how either shape changes flavour.

Because the RoR comes from a machine-specific probe reading, numbers cannot simply be moved from one roaster to another.<sup><a href="#src-s2">2</a></sup> They are most useful for comparing batches on the same machine<sup><a href="#src-s2">2</a></sup>, with the same software settings (our note).

<!-- deep-dive -->

## Reference values

Values reported in the sources. They describe particular coffees, machines, probes and software settings; they are not targets. Per-minute values are our conversion (×2).

| Parameter | Value reported | Source |
|---|---|---|
| Definition used in a drum study | Temperature increase per 30 s, logged with commercial roasting software | Anokye-Bempah et al.<sup><a href="#src-s1">1</a></sup> |
| Initial RoR (highest just after the turning point), 13 roasts of three coffees, 5 kg drum, 4 kg batches, 16 min | 5.07–10.37 °C per 30 s (≈10.1–20.7 °C per min) | Anokye-Bempah et al.<sup><a href="#src-s1">1</a></sup> |
| Final RoR (last minute), same roasts | 0.01–5.43 °C per 30 s | Anokye-Bempah et al.<sup><a href="#src-s1">1</a></sup> |
| Mean RoR, before colour change, same roasts | 4.72–8.76 °C per 30 s | Anokye-Bempah et al.<sup><a href="#src-s1">1</a></sup> |
| Mean RoR, colour change to first crack | 2.79–7.72 °C per 30 s | Anokye-Bempah et al.<sup><a href="#src-s1">1</a></sup> |
| Mean RoR, first to second crack | 2.13–5.52 °C per 30 s | Anokye-Bempah et al.<sup><a href="#src-s1">1</a></sup> |
| Mean RoR, after second crack | 1.58–6.02 °C per 30 s | Anokye-Bempah et al.<sup><a href="#src-s1">1</a></sup> |
| Roasts in which the phase mean fell at every step | 5 of 13 (all three fast start, medium, negative rate of rise; our reading of Table 1) | from Anokye-Bempah et al.<sup><a href="#src-s1">1</a></sup> |
| Roasts in which the mean RoR rose after second crack | 5 of 13 (production, exaggerated flick, all three extended Maillard; our reading of Table 1) | from Anokye-Bempah et al.<sup><a href="#src-s1">1</a></sup> |
| Thermocouple response coefficient, spouted-bed model | Fitted, bounded to 0.01–1.00 s⁻¹ | Al-Shemmeri et al.<sup><a href="#src-s3">3</a></sup> |
| Evaporative cooling in a single-bean model | Starts at 100 °C | Bustos-Vanegas et al.<sup><a href="#src-s5">5</a></sup> |
| Sampling time, research controller on a hot-air roaster | 3 s; K-type thermocouple in the roasting chamber | Miskon et al.<sup><a href="#src-s10">10</a></sup> |
| Profile tracking by an adaptive controller vs human operators | Mean square error 4.56 vs 21.7 (unit as printed: °C) | Inovan et al.<sup><a href="#src-s9">9</a></sup> |

In the 2024 table, the four phase durations of the slow-start roast of the African coffee add up to 17 min (8.5 + 4.0 + 3.5 + 1.0), although all roasts are described as 16 min long; those of the other twelve roasts add up to 16 min (our check).<sup><a href="#src-s1">1</a></sup>

## The heat balance behind the curve

Single-bean models balance three terms. Heat enters through the surface in proportion to the gap between roasting and surface temperature.<sup><a href="#src-s4">4</a></sup> Evaporating water takes heat away from about 100 °C.<sup><a href="#src-s5">5</a></sup> Later, reactions inside the bean add heat; one 2025 model assumed heat generation above 150 °C, taken from earlier literature.<sup><a href="#src-s5">5</a></sup> The RoR is the net of these terms divided by the heat capacity of the bean (our summary of the models).

Early in the roast much of the energy goes into heating water; towards the end, the process becomes progressively more exothermic and needs much less heat input.<sup><a href="#src-s6">6</a></sup> The simpler of two models in a 2017 study predicted nearly uniform temperature inside the bean after the first minute<sup><a href="#src-s4">4</a></sup>; the authors consider their second model, with a slower drying front, more realistic (see the roast profile entry). In extreme fast roasting, a steep gradient can leave the surface over-roasted and the core under-roasted.<sup><a href="#src-s2">2</a></sup> A probe in the bean mass cannot see such gradients.

**What the probe adds.** The probe reads a mix of bean surface and hot air.<sup><a href="#src-s2">2</a></sup> A 2025 spouted-bed model converted the modelled bean temperature into a thermocouple temperature to account for the slow thermocouple response.<sup><a href="#src-s3">3</a></sup> In that model, at low thermal load the rate of change of product temperature tended to zero; at high load it varied, which the authors attribute to endothermic and/or exothermic reactions.<sup><a href="#src-s3">3</a></sup> A lagging probe delays and flattens fast changes before any software smoothing is applied (our note).

## Rate of rise by roast phase

The 2024 drum study reports the mean RoR for each phase of each roast. The phases were before colour change, colour change to first crack, first to second crack, and after second crack.<sup><a href="#src-s1">1</a></sup>

<figure>
<div data-figure="rate-of-rise-phase-means"></div>
<figcaption>Mean rate of rise in each of four roast phases for five of the seven profiles of one washed African coffee (5 kg drum, 4 kg batch, 16 min roasts). Lines only join the phase means; they are not measured curves.<sup><a href="#src-s1">1</a></sup></figcaption>
</figure>

In the fast-start profile, the mean fell at every step, from 7.97 to 1.58 °C per 30 s.<sup><a href="#src-s1">1</a></sup> The slow-start profile peaked between colour change and first crack (5.79) and ended at 4.83.<sup><a href="#src-s1">1</a></sup> The extended Maillard profile, which replicates a “baked” roast, dropped to 2.80 before first crack and then climbed to 5.83 after second crack.<sup><a href="#src-s1">1</a></sup>

Across all 13 roasts, the ranges of the phase means overlap widely.<sup><a href="#src-s1">1</a></sup> The phase alone did not set the RoR; the profile mattered at least as much (our reading of the table).

<figure>
<div data-figure="rate-of-rise-phase-ranges"></div>
<figcaption>Lowest and highest rate of rise reported for each phase across 13 roasts of three coffees (seven profiles of a washed African coffee; three each of a honey-processed Central American and a washed Indonesian coffee), 5 kg drum.<sup><a href="#src-s1">1</a></sup></figcaption>
</figure>

**What the RoR changed in the beans.** The same study measured titratable acidity every minute. Acidity peaked at first crack in every profile, and the authors conclude that the peak is insensitive to how quickly those temperatures are reached.<sup><a href="#src-s1">1</a></sup> No study consulted for this entry varied the RoR alone while holding colour and total time constant and measured flavour.

## Noise, lag and smoothing

**Why derivatives are noisy.** A derivative computed directly from noisy measurements is far too noisy to be useful, so some smoothing is needed; the choice of method and settings is often made ad hoc.<sup><a href="#src-s8">8</a></sup> Smoothing reduces the noise but can bias the estimate.<sup><a href="#src-s8">8</a></sup> The general method literature frames this as a balance between faithfulness to the data and smoothness of the derivative.<sup><a href="#src-s8">8</a></sup>

**How roasting software exposes it.** One roasting-software help page describes settings from sensitive to noise-smoothing, the smoother one being less responsive to changes in bean temperature.<sup><a href="#src-s12">12</a></sup> This mirrors the general trade-off between noise and fidelity in the method literature.<sup><a href="#src-s8">8</a></sup> Practitioners advise matching the settings to the probe's responsiveness and the background noise.<sup><a href="#src-s13">13</a></sup> No peer-reviewed study consulted for this entry compared RoR settings in roasting software.

**Two lags in series.** The thermocouple's own response time delays the reading.<sup><a href="#src-s3">3</a></sup> A trailing interval then reports an average over the recent past (our note on the arithmetic). A short dip, such as a crash, can therefore look shallower, wider and later than it was in the beans.

## Crash and flick: the evidence

**Definitions.** Practitioner sources describe a crash as the RoR nose-diving during first crack<sup><a href="#src-s14">14</a></sup> and a flick as a quick rise in RoR at the end of a roast.<sup><a href="#src-s15">15</a></sup> A 2024 study describes a flick as a sudden increase in RoR sometime after first crack, typically associated with the onset of exothermic reactions.<sup><a href="#src-s1">1</a></sup>

**What was tested.** That study built an “exaggerated flick” profile with a very large increase in RoR around minute 13.<sup><a href="#src-s1">1</a></sup> It also built a “negative rate of rise” profile by stopping the roast energy during first crack, mimicking an unwanted loss of gas flow.<sup><a href="#src-s1">1</a></sup> Both gave titratable-acidity curves almost indistinguishable from the medium profile.<sup><a href="#src-s1">1</a></sup> The authors note that some roasters believe a negative RoR seriously degrades quality, but that no published data support this.<sup><a href="#src-s1">1</a></sup>

**What is not known.** No sensory or aroma study of crashes or flicks was found. Whether a late upturn reflects heat from reactions is disputed (see contested). How much of a crash is the beans and how much is the probe and software has not been measured.<sup><a href="#src-s3">3</a>,<a href="#src-s8">8</a></sup>

## Control systems and the rate of rise

**Air temperature versus product temperature.** Traditional automation holds a set hot-air temperature.<sup><a href="#src-s2">2</a></sup> More advanced systems follow a product-temperature master curve stored in the recipe and adjust the energy input continuously.<sup><a href="#src-s2">2</a></sup> A system that reproduces the temperature curve also reproduces its slope, the RoR (our note).

**Research controllers.** A 2023 adaptive controller tracked a stored temperature profile with a smaller deviation than human operators.<sup><a href="#src-s9">9</a></sup> A 2022 fuzzy controller on a hot-air roaster controlled the temperature read by a probe in the roasting chamber, sampled every 3 s.<sup><a href="#src-s10">10</a></sup> Neither used the RoR itself as the controlled variable in the parts consulted for this entry.<sup><a href="#src-s9">9</a>,<a href="#src-s10">10</a></sup>

## Risks and misreadings

- **Reading the software, not the roast.** Interval and smoothing settings change the trace<sup><a href="#src-s8">8</a>,<a href="#src-s12">12</a>,<a href="#src-s13">13</a></sup>, so RoR curves are comparable only at the same settings (our note).
- **Copying numbers between machines.** The reading is specific to the machine design.<sup><a href="#src-s2">2</a></sup>
- **Taking the probe for the bean.** The probe reads a bean–air mix and responds slowly.<sup><a href="#src-s2">2</a>,<a href="#src-s3">3</a></sup>
- **Stalling.** A baked roast stretches the time after first crack with little or no rise in temperature<sup><a href="#src-s7">7</a></sup>; on the curve, the RoR sits near zero (our note).
- **Treating a falling RoR as a rule.** Several research profiles rose again after second crack.<sup><a href="#src-s1">1</a></sup>

## Open questions

- **RoR shape and flavour.** No sensory test of a declining RoR, a crash or a flick was found.<sup><a href="#src-s1">1</a></sup>
- **Software settings.** How interval and smoothing choices change roasters' decisions has not been studied in the sources found.<sup><a href="#src-s8">8</a>,<a href="#src-s12">12</a></sup>
- **Probe and bean.** Models can correct for thermocouple lag<sup><a href="#src-s3">3</a></sup>, but production roasters log an uncorrected, machine-specific reading.<sup><a href="#src-s2">2</a></sup>
- **Exothermic heat.** Whether reaction heat shows up as a late rise in the curve is disputed.<sup><a href="#src-s1">1</a>,<a href="#src-s11">11</a></sup>
- **Range of machines.** The phase-by-phase RoR data come from one 5 kg drum.<sup><a href="#src-s1">1</a></sup>

## Key studies

<div class="study">
<p><strong>Anokye-Bempah et al., 2024 – RoR by phase.</strong> Thirteen 16 min roasts of three coffees on a 5 kg drum, logged with roasting software, with initial, final and phase-mean RoR reported for each. The study tested named profiles including an exaggerated flick and a negative RoR; titratable acidity peaked at first crack in all of them.</p>
<p class="meta">Scientific Reports 14, 8237 · <a href="https://doi.org/10.1038/s41598-024-57256-y">doi:10.1038/s41598-024-57256-y</a></p>
</div>

<div class="study">
<p><strong>Al-Shemmeri et al., 2025 – Modelled heating and probe response.</strong> A heat and mass transfer model of a spouted-bed roaster, fitted to logged temperatures. It explains the fast rise after the turning point, adds a correction for the slow thermocouple, and links changes in the rate of temperature change to reactions.</p>
<p class="meta">Beverages 11(6), 162 · <a href="https://doi.org/10.3390/beverages11060162">doi:10.3390/beverages11060162</a></p>
</div>

<div class="study">
<p><strong>Bustos-Vanegas et al., 2025 – Heat generation in the bean.</strong> A single-bean model of roasting that includes evaporative cooling and heat generated inside the bean. Without the heat from exothermic reactions, the model underestimated bean temperature.</p>
<p class="meta">Frontiers in Food Science and Technology 5, 1603783 · <a href="https://doi.org/10.3389/frfst.2025.1603783">doi:10.3389/frfst.2025.1603783</a></p>
</div>

<div class="study">
<p><strong>van Breugel et al., 2020 – Derivatives of noisy data.</strong> A general methods paper, not about coffee. It shows why differentiating noisy measurements needs smoothing and frames the choice as a balance between faithfulness and smoothness, set by one parameter.</p>
<p class="meta">IEEE Access 8, 196865–196877 · <a href="https://doi.org/10.1109/ACCESS.2020.3034077">doi:10.1109/ACCESS.2020.3034077</a></p>
</div>

<div class="study">
<p><strong>Inovan et al., 2023 – Tracking a temperature profile.</strong> An embedded adaptive controller that makes a roaster follow a stored time–temperature profile. In the abstract, it reproduced the profile with a much smaller mean square error than human operators.</p>
<p class="meta">IEEE IAICT 2023, 162–167 · <a href="https://doi.org/10.1109/IAICT59002.2023.10205885">doi:10.1109/IAICT59002.2023.10205885</a></p>
</div>
