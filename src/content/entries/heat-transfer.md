---
title: Heat transfer
summary: How heat moves from the burner to the bean and into it – conduction, convection and radiation in a roaster, how roaster designs shift the balance, and why the slow flow of heat inside the bean matters for even roasting.
domain: roasting
kind: Concept
stage: roast
topics: [science]
status: verified
lastVerified: 2026-10-19
reviewer: Coffearium verification pass
updated: 2026-10-19
accessed: 2026-10-19
added: 2026-10-19
corrections:
  - date: 2026-10-19
    change: 'Model sphere of the 2017 study described as 4 mm in radius, not as a 4 mm sphere or bean.'
    reason: 'The study (Table 1) gives L = 4 mm as the radius.'
  - date: 2026-10-19
    change: 'Particle-tracking findings on wall conduction reworded as the authors’ expectation; the floor of the Nusselt number at 2 labelled as following from the formula.'
    reason: 'The 2023 drum experiments were unheated; the 2025 spouted-bed paper gives the formula but does not state the floor.'
brief:
  - In any hot-air roaster, heat reaches the beans by convection, conduction and radiation at the same time; their shares vary between machines and are hard to measure.<sup><a href="#src-s1">1</a></sup>
  - According to a roasting textbook, convection dominates in a fluid bed, while a drum may pass a substantial share of the heat by conduction from its wall.<sup><a href="#src-s1">1</a></sup>
  - Inside the bean, models describe heat spreading by conduction, with a bean thermal conductivity of about 0.08–0.11 W/(m·K).<sup><a href="#src-s6">6</a>,<a href="#src-s7">7</a></sup>
  - A 2025 drum study reported Biot numbers of 0.48–0.82, which its authors read as a relevant resistance to heat flow inside the bean.<sup><a href="#src-s6">6</a></sup>
  - Heat-transfer coefficients reported for coffee beans range from about 12 to 103 W/(m²·K), depending on roaster, air speed and how the value was obtained.<sup><a href="#src-s6">6</a>,<a href="#src-s7">7</a>,<a href="#src-s11">11</a></sup>
quickFacts:
  - label: Three modes
    value: Conduction (contact), convection (hot air), radiation (hot surfaces)
  - label: Fluid bed
    value: Convection predominant (textbook)
  - label: Drum
    value: Substantial conduction possible, especially with direct heating (textbook)
  - label: Inside the bean
    value: Conduction; bean conductivity 0.08–0.11 W/(m·K) in models
  - label: Coefficients reported
    value: About 12–103 W/(m²·K) across studies and methods
  - label: Core versus surface
    value: 16 K apart after 180 s in one simulation (air 230 °C, 2 m/s)
aka:
  - Heat transfer in roasting
  - Heat transfer to the bean
linkTerms:
  - heat transfer
  - heat-transfer coefficient
  - heat transfer coefficient
  - conductive heat transfer
  - convective heat transfer
  - radiative heat transfer
  - Biot number
related:
  - roasting
  - drum-roaster
  - fluid-bed-roaster
  - tangential-and-centrifugal-roasters
  - roast-profile
  - airflow
  - rate-of-rise
  - turning-point
  - preheating-and-charge
  - drying-phase
  - water-in-roasting
  - endothermic-and-exothermic-phases
  - roast-defects
  - cooling-and-quenching
contested:
  - 'Share of radiation: a roasting textbook chapter calls the contribution of radiation in hot-air roasters usually very limited and negligible<sup><a href="#src-s1">1</a></sup>; a 2025 study of single beans held in a gas-fired drum, out of contact with wall and beans, concluded that radiation is the dominant mechanism, from a fitted overall coefficient (60.20–102.55 W m⁻² °C⁻¹) far above the calculated convective one (15.91–17.43 W m⁻² °C⁻¹)<sup><a href="#src-s6">6</a></sup>; and a laboratory fluid-bed study attributed the bean core staying below the set air temperature to excessive heat transfer by radiation, typical of small equipment with a large air-to-bean ratio.<sup><a href="#src-s10">10</a></sup>'
  - 'Uniform bean or internal gradient: in a 2017 model adapted from earlier work (Model 1), temperature and moisture inside the bean become nearly uniform after the first minute<sup><a href="#src-s7">7</a></sup>; a 2013 computational model of a single bean in hot air found the core 16 K below the surface after 180 s<sup><a href="#src-s8">8</a></sup>; and a 2025 drum study reported Biot numbers of 0.48–0.82, which its authors read as a relevant role of conductive resistance within the bean.<sup><a href="#src-s6">6</a></sup> The models differ in geometry, air speed and fitted parameters, so the size of the gradient in a production roast is not established.'
sources:
  - id: s1
    title: "The Roast – Creating the Beans' Signature"
    authors: Schenker, S.; Rothgeb, T.
    publisher: "In: Folmer, B. (ed.), The Craft and Science of Coffee, Academic Press, ch. 11, pp. 245–271"
    year: 2017
    doi: 10.1016/B978-0-12-803520-7.00011-6
    url: https://doi.org/10.1016/B978-0-12-803520-7.00011-6
    tier: B
    quote: "In any hot air roasting system heat is always transferred by convection, conduction, and radiation at the same time."
    accessed: 2026-10-19
  - id: s2
    title: "Investigations on the Hot Air Roasting of Coffee Beans (Diss. ETH No. 13620)"
    authors: Schenker, S.
    publisher: ETH Zürich (doctoral thesis)
    year: 2000
    url: https://library.sweetmarias.com/wp-content/uploads/2020/08/roasting_hot_air_doctorate.pdf
    tier: B
    quote: "Roasters should operate with a fairly high proportion of conductive heat transfer and at low air-to-bean ratios."
    accessed: 2026-10-19
  - id: s3
    title: "Coffee bean particle motion in a rotating drum measured using Positron Emission Particle Tracking (PEPT)"
    authors: Al-Shemmeri, M.; Windows-Yule, K.; Lopez-Quiroga, E.; Fryer, P. J.
    publisher: Food Research International 163, 112253
    year: 2023
    doi: 10.1016/j.foodres.2022.112253
    url: https://research.birmingham.ac.uk/files/185158647/1_s2.0_S0963996922013114_main.pdf
    tier: A
    quote: "In this region, conductive heat transfer within the bean will dominate."
    accessed: 2026-10-19
  - id: s4
    title: "Coffee bean particle motion in a spouted bed measured using Positron Emission Particle Tracking (PEPT)"
    authors: Al-Shemmeri, M.; Windows-Yule, C.; Lopez-Quiroga, E.; Fryer, P. J.
    publisher: Journal of Food Engineering 311, 110709
    year: 2021
    doi: 10.1016/j.jfoodeng.2021.110709
    url: https://research.birmingham.ac.uk/files/134813977/Paper_Coffee_Bean_PEPT_May_21.pdf
    tier: A
    quote: "Thermocouples in the bean bed will measure a combination of bean and air temperature."
    accessed: 2026-10-19
  - id: s5
    title: "Batch-Scale Simulation of Heat and Mass Transfer of Coffee Roasting in Spouted Bed Roasters"
    authors: Al-Shemmeri, M.; Fryer, P. J.; Farr, R.; Lopez-Quiroga, E.
    publisher: Beverages 11(6), 162
    year: 2025
    doi: 10.3390/beverages11060162
    url: https://www.mdpi.com/2306-5710/11/6/162
    tier: A
    quote: "The air-to-bean heat transfer coefficient can, therefore, be approximated via the Ranz-Marshall equation."
    accessed: 2026-10-19
  - id: s6
    title: "Modeling and simulation of coffee bean heating during roasting: effect of heat generation"
    authors: Bustos-Vanegas, J. D.; Martins, M. A.; Corrêa, P. C.; Baptestini, F. M.; de Oliveira, G. H. H.
    publisher: Frontiers in Food Science and Technology 5, 1603783
    year: 2025
    doi: 10.3389/frfst.2025.1603783
    url: https://www.frontiersin.org/journals/food-science-and-technology/articles/10.3389/frfst.2025.1603783/full
    tier: A
    quote: "Values of the Biot number obtained for overall heat transfer coefficients were 0.48; 0.58; 0.54; 0.65 and 0.82"
    accessed: 2026-10-19
  - id: s7
    title: "A heat and mass transfer study of coffee bean roasting"
    authors: Fadai, N. T.; Melrose, J.; Please, C. P.; Schulman, A.; Van Gorder, R. A.
    publisher: International Journal of Heat and Mass Transfer 104, 787–799
    year: 2017
    doi: 10.1016/j.ijheatmasstransfer.2016.08.083
    url: https://ora.ox.ac.uk/objects/uuid:c2433f0b-fc40-4d7c-a207-5453349f6f91/files/m2e0c0e8fb121aa744f0a35396a18ff60
    tier: A
    quote: "Due to evaporation being a local phenomenon, we conclude that Model 2 has a more realistic drying front."
    accessed: 2026-10-19
  - id: s8
    title: "Modeling and Validation of Heat and Mass Transfer in Individual Coffee Beans during the Coffee Roasting Process Using Computational Fluid Dynamics (CFD)"
    authors: Alonso-Torres, B.; Hernández-Pérez, J. A.; Sierra-Espinoza, F.; Schenker, S.; Yeretzian, C.
    publisher: CHIMIA 67(4), 291–294
    year: 2013
    doi: 10.2533/chimia.2013.291
    url: https://chimia.ch/chimia/article/download/2013_291/4675/15360
    tier: A
    quote: "Hence there is a difference of 16 K between the bean core and its surface."
    accessed: 2026-10-19
  - id: s9
    title: "Numerical modeling of heat and mass transfer during coffee roasting process"
    authors: Fabbri, A.; Cevoli, C.; Alessandrini, L.; Romani, S.
    publisher: Journal of Food Engineering 105(2), 264–269
    year: 2011
    doi: 10.1016/j.jfoodeng.2011.02.030
    url: https://cris.unibo.it/handle/11585/102581
    tier: A
    quote: "The model makes reference to a rotating cylinder roaster in natural convection conditions."
    abstractOnly: true
    accessed: 2026-10-19
  - id: s10
    title: "Carbon Dioxide Evolution and Moisture Evaporation During Roasting of Coffee Beans"
    authors: Geiger, R.; Perren, R.; Kuenzli, R.; Escher, F.
    publisher: Journal of Food Science 70(2), E124–E130
    year: 2005
    doi: 10.1111/j.1365-2621.2005.tb07084.x
    url: https://ift.onlinelibrary.wiley.com/doi/10.1111/j.1365-2621.2005.tb07084.x
    tier: A
    quote: "In both processes, the bean core temperature did not reach the pre-set air temperatures of 260°C and 228°C, respectively, because of excessive heat transfer by radiation."
    accessed: 2026-10-19
  - id: s11
    title: "Studies on roasting of coffee beans in a spouted bed"
    authors: Nagaraju, V. D.; Murthy, C. T.; Ramalakshmi, K.; Rao, P. N. S.
    publisher: Journal of Food Engineering 31(2), 263–270
    year: 1997
    url: https://agris.fao.org/search/en/records/65de15a30f3e94b9e5ca98e8
    tier: A
    quote: "Based on the time-temperature relationship, the overall heat transfer coefficient was found to be 12.023 W/(m2K)."
    abstractOnly: true
    accessed: 2026-10-19
  - id: s12
    title: "College Physics for AP Courses 2e, section 14.7: Radiation"
    authors: Wolfe, G.; Gasper, E.; Stoke, J.; Kretchman, J.; Anderson, D.; Czuba, N.; Oberoi, S.; Pujji, L.; Lyublinskaya, I.; Ingram, D.
    publisher: OpenStax, Rice University, Houston
    year: 2022
    url: https://openstax.org/books/college-physics-ap-courses-2e/pages/14-7-radiation
    tier: B
    quote: "The radiation rate is directly proportional to the fourth power of the absolute temperature"
    accessed: 2026-10-19
  - id: s13
    title: "CODATA Recommended Values of the Fundamental Physical Constants: 2022 (wall chart)"
    authors: National Institute of Standards and Technology (NIST)
    publisher: NIST, Physical Measurement Laboratory
    url: https://www.physics.nist.gov/cuu/pdf/wall_2022.pdf
    tier: A
    quote: "Stefan-Boltzmann constant"
    accessed: 2026-10-19
---

## Three ways heat travels

Heat reaches the beans in three ways. Convection carries heat from hot air directly to the bean surface.<sup><a href="#src-s1">1</a></sup> Conduction passes heat from hot walls to the beans that touch them.<sup><a href="#src-s1">1</a></sup> Radiation carries energy as electromagnetic waves, which need no medium.<sup><a href="#src-s12">12</a></sup>

A roaster uses all three at once. According to a roasting textbook chapter, every hot-air roaster transfers heat by convection, conduction and radiation simultaneously.<sup><a href="#src-s1">1</a></sup> Their shares vary from one system to another.<sup><a href="#src-s1">1</a></sup> A 2000 doctoral thesis on hot-air roasting says the same: roasters generally use all three, in very different proportions.<sup><a href="#src-s2">2</a></sup>

Hot-air roasting is the only roasting technology in wide industrial use; infrared, microwave and superheated steam have been tested but not widely adopted.<sup><a href="#src-s1">1</a></sup> Within it, the heat paths decide how fast and how evenly beans heat. Coffearium places heat transfer in the roast's profiling and control group, next to the roast profile and airflow.

## Conduction, convection and radiation in a roaster

**Conduction.** Beans take up heat where they touch hot metal, such as the drum wall.<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a></sup> From bean motion tracked in an unheated drum, a 2023 particle-tracking study expects high metal-to-bean conduction for beans next to a heated drum wall.<sup><a href="#src-s3">3</a></sup> Drum speed changes this contact. Faster rotation tosses the beans up, away from the wall; too fast a drum presses them against it.<sup><a href="#src-s1">1</a></sup>

**Convection.** Hot air carries heat directly to the bean surface.<sup><a href="#src-s1">1</a></sup> According to the same study, beans thrown through the air of a drum are heated mainly this way.<sup><a href="#src-s3">3</a></sup> More air speed means more convection. According to the textbook chapter, an airflow change acts on convection almost at once, while a flame change takes longer.<sup><a href="#src-s1">1</a></sup>

**Radiation.** Hot surfaces radiate heat to the beans without touching them, like the warmth a hand feels close to a hot surface.<sup><a href="#src-s1">1</a></sup> The radiated power rises with the fourth power of the absolute temperature.<sup><a href="#src-s12">12</a></sup> So a modest rise in wall temperature raises radiation steeply (worked example in the Deep dive). How much radiation adds in a roaster is disputed (see Contested).<sup><a href="#src-s1">1</a>,<a href="#src-s6">6</a></sup>

The air-to-bean ratio links these paths. It is the mass of process air per mass of green coffee.<sup><a href="#src-s1">1</a></sup> According to the textbook chapter, the same heat can come from less, hotter air or more, cooler air, and the ratio plays a key role in the conduction-to-convection balance.<sup><a href="#src-s1">1</a></sup>

## How roaster designs differ

Roaster designs mainly differ in how they keep the beans moving, and so in which heat path leads.<sup><a href="#src-s1">1</a></sup> According to the roasting textbook chapter, a precise calculation or measurement of the conduction-to-convection ratio is difficult.<sup><a href="#src-s1">1</a></sup> The comparison below is therefore qualitative.

| Design | Leading heat path, as described | Source |
|---|---|---|
| Drum, direct heating | Burner under the drum; hot wall, substantial conduction to beans touching it | Textbook chapter<sup><a href="#src-s1">1</a></sup> |
| Drum, indirect heating | Insulated drum; hot air led to the back, more convection inside | Textbook chapter<sup><a href="#src-s1">1</a></sup> |
| Paddle (tangential) roaster | Paddles move beans largely independently of air flow; wide air-to-bean ratio, so a variable conduction-to-convection ratio | Textbook chapter<sup><a href="#src-s1">1</a></sup> |
| Bowl (centrifugal) roaster | Works within "a certain range" of air-to-bean ratios; no split given | Textbook chapter<sup><a href="#src-s1">1</a></sup> |
| Fluid bed | Convection predominant; inclined walls can add a phase of more conduction | Textbook chapter<sup><a href="#src-s1">1</a></sup> |
| Spouted bed | Wall-to-bean heat transfer expected to be negligible; heat transfer mostly in the spout | Particle-tracking study<sup><a href="#src-s3">3</a></sup> |

The 2000 thesis sorts roasters into systems where conduction prevails and systems where convection prevails.<sup><a href="#src-s2">2</a></sup> It describes early industrial roasting as conductive, with slow heat transfer.<sup><a href="#src-s2">2</a></sup> Its own recommendation was a fairly high share of conduction and low air-to-bean ratios.<sup><a href="#src-s2">2</a></sup> The drum, fluid-bed and paddle and bowl entries describe each machine in full.

## From the surface to the core

The three modes only bring heat to the bean surface. Inside the bean, models describe heat spreading by conduction, from the hot outside towards the cooler core.<sup><a href="#src-s3">3</a>,<a href="#src-s7">7</a>,<a href="#src-s9">9</a></sup> Coffee conducts heat poorly. Models use a bean thermal conductivity of 0.08–0.11 W/(m·K).<sup><a href="#src-s6">6</a>,<a href="#src-s7">7</a></sup> Liquid water, at 0.58 W/(m·K) in one model, conducts several times better.<sup><a href="#src-s7">7</a></sup>

<figure class="iso-fig">
<div data-figure="heat-transfer-bean-paths"></div>
<ol class="fig-legend">
<li data-n="1"><span><b>Convection.</b> Hot air carries heat to the bean surface; models treat the heat flow as proportional to the gap between air and surface temperature.<sup><a href="#src-s1">1</a>,<a href="#src-s7">7</a></sup></span></li>
<li data-n="2"><span><b>Conduction from metal.</b> Where the bean touches a hot wall, heat passes by contact; in drums this share can be substantial.<sup><a href="#src-s1">1</a>,<a href="#src-s3">3</a></sup></span></li>
<li data-n="3"><span><b>Radiation.</b> Hot surfaces radiate to the bean without contact; the rate scales with the fourth power of absolute temperature.<sup><a href="#src-s1">1</a>,<a href="#src-s12">12</a></sup></span></li>
<li data-n="4"><span><b>Conduction inside.</b> Within the bean, heat spreads by conduction, slowed by the bean's low thermal conductivity.<sup><a href="#src-s6">6</a>,<a href="#src-s7">7</a></sup></span></li>
<li data-n="5"><span><b>Drying front.</b> In one model, evaporation concentrates at a front that moves slowly inward.<sup><a href="#src-s7">7</a></sup></span></li>
<li data-n="6"><span><b>Cooler core.</b> In one simulation, the core was 16 K below the surface after 180 s.<sup><a href="#src-s8">8</a></sup></span></li>
</ol>
<figcaption>Three heat paths to a bean cut across, and conduction from the surface to the core. Arrow sizes do not show the shares, which are disputed.<sup><a href="#src-s1">1</a>,<a href="#src-s6">6</a>,<a href="#src-s7">7</a>,<a href="#src-s8">8</a></sup> Schematic, not to scale.</figcaption>
</figure>

Because heat enters faster than it spreads, the core lags behind the surface. In a 2013 computer model of a single bean in hot air at 230 °C, the core was 16 K cooler than the surface after 180 s.<sup><a href="#src-s8">8</a></sup> Water adds to the delay. Evaporating it takes heat, and one model shows a drying front moving slowly to the centre.<sup><a href="#src-s7">7</a></sup> The drying phase entry describes that front in detail.

Bean temperature on the roaster's display is a further step removed. A probe in the bean mass reads a mix of bean and air temperature.<sup><a href="#src-s1">1</a>,<a href="#src-s4">4</a></sup> According to the textbook chapter, measuring real surface or core bean temperature during roasting is difficult.<sup><a href="#src-s1">1</a></sup>

## When heat comes in too hard

**Steep gradients.** According to the textbook chapter, fast roasting brings greater heat transfer rates, so bean temperature rises and dehydration proceeds faster.<sup><a href="#src-s1">1</a></sup> In extreme cases, high heat transfer at the surface leaves the outer zone over-roasted while the core stays under-roasted.<sup><a href="#src-s1">1</a></sup> The cup could then show "burnt" and "greenish" notes together.<sup><a href="#src-s1">1</a></sup>

**Too much contact heat.** A drum turning too fast makes the beans "hug" its hot wall for longer.<sup><a href="#src-s1">1</a></sup> According to the same chapter, this over-develops the outside and, at worst, scorches the flat sides.<sup><a href="#src-s1">1</a></sup> The thesis names good mixing to prevent scorching as a main task of any roaster.<sup><a href="#src-s2">2</a></sup> Practitioner names for surface marks, such as tipping and facing, are collected in the roast defects entry.

<!-- deep-dive -->

## Reference values

Values reported or used in the sources. Models fit some values to data; they are not material constants or targets. Coefficients in °C⁻¹ and K⁻¹ are numerically equal, since they refer to temperature differences.

| Parameter | Value reported | Source |
|---|---|---|
| Bean thermal conductivity, constant, single-bean drum model | 0.11 W/(m·K) (taken from Fabbri et al. 2011) | Bustos-Vanegas et al.<sup><a href="#src-s6">6</a></sup> |
| Bean bulk thermal conductivity, Model 1 (chosen to agree with earlier simulations) | 0.08 W/(m·K) | Fadai et al.<sup><a href="#src-s7">7</a></sup> |
| Component conductivities, Model 2 | Solid 0.037; liquid water 0.58; water vapour 0.016; CO₂ 0.015 W/(m·K) | Fadai et al.<sup><a href="#src-s7">7</a></sup> |
| Bean conductivity as a function of density, spouted-bed model | k = 7.31 × 10⁻⁵ ρ + 0.045 (units not stated); density ρ = 8721 X + 422, valid for 530–1047 kg/m³ | Al-Shemmeri et al. 2025<sup><a href="#src-s5">5</a></sup> |
| Specific heat, Model 1 / solid in Model 2 | 780 / 450 J/(kg·K) (fitted) | Fadai et al.<sup><a href="#src-s7">7</a></sup> |
| Bean density in the 2017 models | 850 kg/m³ | Fadai et al.<sup><a href="#src-s7">7</a></sup> |
| Overall coefficient h, single bean in a gas-fired drum (fitted) | 60.20 (200 °C); 72.36 (220 °C); 68.00 (240 °C); 81.62 (260 °C); 102.55 W m⁻² °C⁻¹ (280 °C) | Bustos-Vanegas et al.<sup><a href="#src-s6">6</a></sup> |
| Convective coefficient hc, same study (Ranz–Marshall, air 0.02 m/s) | 15.91–17.43 W m⁻² °C⁻¹ (200–280 °C) | Bustos-Vanegas et al.<sup><a href="#src-s6">6</a></sup> |
| Biot number, same study | 0.48; 0.58; 0.54; 0.65; 0.82 (200–280 °C) | Bustos-Vanegas et al.<sup><a href="#src-s6">6</a></sup> |
| Characteristic length, same study | 8.8056 × 10⁻⁴ m (initial volume 1.436 × 10⁻⁷ m³, surface 1.63022 × 10⁻⁴ m²) | Bustos-Vanegas et al.<sup><a href="#src-s6">6</a></sup> |
| Surface coefficient, sphere of 4 mm radius at 200 °C (chosen to agree with earlier data) | 20 W/(m²·K) (Model 1); 16 W/(m²·K) (Model 2); Nusselt number 1 (Model 1) | Fadai et al.<sup><a href="#src-s7">7</a></sup> |
| Overall coefficient, experimental spouted bed (peaberry beans) | 12.023 W/(m²·K), from the time–temperature relationship | Nagaraju et al.<sup><a href="#src-s11">11</a></sup> |
| Core versus surface, single bean in hot air (503 K, 2 m/s) at 180 s | Core 489 K (216 °C), surface 505 K (232 °C): 16 K | Alonso-Torres et al.<sup><a href="#src-s8">8</a></sup> |
| Bean geometry in that model | Semi-ellipsoid, 9.8 × 7.0 × 3.7 mm (mean of 50 arabica beans) | Alonso-Torres et al.<sup><a href="#src-s8">8</a></sup> |
| Bean-centre temperature, 3D model vs thermocouples (rotating drum prototype) | RMSE 5.97 °C | Fabbri et al.<sup><a href="#src-s9">9</a></sup> |
| Stefan–Boltzmann constant σ | 5.670 374 419 × 10⁻⁸ W m⁻² K⁻⁴ | NIST CODATA 2022<sup><a href="#src-s13">13</a></sup> |

## The physics in equations

**Convection at the surface.** Single-bean models treat the heat flux into the bean as proportional to the gap between roasting temperature and surface temperature, scaled by a heat-transfer coefficient h:<sup><a href="#src-s7">7</a></sup> q = h (T<sub>air</sub> − T<sub>s</sub>). The coefficient is not a property of coffee. It depends on the properties of the roasting air<sup><a href="#src-s3">3</a></sup> and, in the correlation below, on air speed.<sup><a href="#src-s5">5</a></sup> Several coffee models estimate it with the Ranz–Marshall correlation, Nu = 2 + 0.6 Re<sup>1/2</sup> Pr<sup>1/3</sup>, where the Nusselt number Nu is h made dimensionless with the equivalent bean diameter.<sup><a href="#src-s5">5</a>,<a href="#src-s6">6</a>,<a href="#src-s8">8</a></sup> The Reynolds number Re grows with air speed, so faster air raises h.<sup><a href="#src-s5">5</a></sup> As air speed approaches zero, the formula gives Nu close to 2, its lowest value. This is why the 2025 drum study, with air moving at only 0.02 m/s from drum rotation, calculated a low convective coefficient.<sup><a href="#src-s6">6</a></sup>

**Radiation.** A surface emits at a rate Q/t = σ e A T⁴, where e is the emissivity, A the area and T the absolute temperature; the net exchange with surroundings at T₂ is σ e A (T₂⁴ − T₁⁴).<sup><a href="#src-s12">12</a></sup> The constant σ is 5.670 374 419 × 10⁻⁸ W m⁻² K⁻⁴.<sup><a href="#src-s13">13</a></sup> A worked example, Coffearium's arithmetic from the law and not a roaster measurement: raising a wall from 300 °C (573 K) to 400 °C (673 K) raises its emission by a factor of (673/573)⁴ ≈ 1.90. For a bean at 150 °C, the net radiation it receives rises by about 2.3 times, with emissivity and geometry held constant. No source consulted for this entry gives a measured emissivity for coffee beans or roaster walls.

**Conduction inside.** Within the bean, a 2023 study notes, conductive heat transfer is governed by porosity and density.<sup><a href="#src-s3">3</a></sup> In one 2025 model, conductivity falls with bean density, which itself falls as moisture leaves.<sup><a href="#src-s5">5</a></sup> In the 2017 Model 2, the pores hold liquid water (0.58 W/(m·K)), vapour (0.016) and carbon dioxide (0.015), next to a solid matrix at 0.037 W/(m·K).<sup><a href="#src-s7">7</a></sup>

**The Biot number.** The Biot number sets the surface coefficient against the bean's conductivity: Bi = h L / k, with L the characteristic length (volume over surface) and k the conductivity. The 2025 drum study reported Bi = 0.48–0.82, which its authors read as a relevant role of conductive resistance within the bean.<sup><a href="#src-s6">6</a></sup> The reported values follow from that formula with the study's own h, L and k (Coffearium's check: 60.20 × 8.8056 × 10⁻⁴ / 0.11 ≈ 0.48).<sup><a href="#src-s6">6</a></sup> The 2017 Model 1 used a Nusselt number of 1; the authors note that this number is sometimes called the heat-transfer Biot number.<sup><a href="#src-s7">7</a></sup> The 2025 study nevertheless used a lumped model with a single bean temperature.<sup><a href="#src-s6">6</a></sup>

<figure>
<div data-figure="heat-transfer-biot"></div>
<figcaption>Biot numbers reported for single beans in a gas-fired drum at five roasting temperatures, and the value used in one spherical model.<sup><a href="#src-s6">6</a>,<a href="#src-s7">7</a></sup> Higher values mean more resistance to heat flow inside the bean relative to its surface. The drum values use volume over surface as the length, the model its radius, so the two are not strictly comparable.<sup><a href="#src-s6">6</a>,<a href="#src-s7">7</a></sup></figcaption>
</figure>

## Heat-transfer coefficients reported

Studies obtained their coefficients in different ways: fitted to measured bean temperatures, calculated from a correlation, or chosen to match earlier data. They are therefore not strictly comparable.<sup><a href="#src-s6">6</a>,<a href="#src-s7">7</a>,<a href="#src-s11">11</a></sup>

- **Single bean in a gas-fired drum.** The overall coefficient, fitted to measured temperatures, rose from 60.20 to 102.55 W m⁻² °C⁻¹ between 200 and 280 °C.<sup><a href="#src-s6">6</a></sup> The convective part, calculated, stayed at 15.91–17.43.<sup><a href="#src-s6">6</a></sup> The bean touched neither wall nor other beans, so conduction was excluded by design.<sup><a href="#src-s6">6</a></sup> The authors attribute the gap to radiation (see Contested).<sup><a href="#src-s6">6</a></sup>
- **Model sphere.** A 2017 model of a bean as a sphere of 4 mm radius in air at 200 °C used 20 and 16 W/(m²·K), chosen to agree with earlier data.<sup><a href="#src-s7">7</a></sup> Its boundary condition included convection but no radiation.<sup><a href="#src-s7">7</a></sup>
- **Spouted bed.** A 1997 study derived one overall coefficient of 12.023 W/(m²·K) from the time–temperature curve and described the heating as unsteady-state heat transfer.<sup><a href="#src-s11">11</a></sup>

<figure>
<div data-figure="heat-transfer-coefficients"></div>
<figcaption>Heat-transfer coefficients for coffee beans reported in three studies, by how they were obtained. Ranges span roasting temperatures of 200–280 °C.<sup><a href="#src-s6">6</a>,<a href="#src-s7">7</a>,<a href="#src-s11">11</a></sup></figcaption>
</figure>

In a spouted bed, a 2021 particle-tracking study expects a high coefficient in the spout, where beans meet the full air stream.<sup><a href="#src-s4">4</a></sup> Within the bed, it lists bean-to-bean contact conduction and bean-to-bean radiation among the mechanisms.<sup><a href="#src-s4">4</a></sup> As beans lighten, more of them are carried into the dilute zone where convection dominates, so the authors expect the global coefficient to rise as the roast proceeds.<sup><a href="#src-s4">4</a></sup>

## Models of the roasting bean

Models of heat transfer in coffee differ in what they include and leave out.

- **Fabbri et al. 2011** built a three-dimensional finite-element model of heat and moisture inside one bean, in simplified and 3D-scanned shapes, for a rotating cylinder roaster under natural convection.<sup><a href="#src-s9">9</a></sup> Predicted bean-centre temperatures matched thermocouples in a drum prototype with an RMSE of 5.97 °C.<sup><a href="#src-s9">9</a></sup>
- **Alonso-Torres et al. 2013** used computational fluid dynamics for a semi-ellipsoid bean in hot air at 200–250 °C and 2 m/s, with h from the Ranz–Marshall correlation.<sup><a href="#src-s8">8</a></sup> The authors report good agreement with measured temperature and moisture, and note that accuracy fell slightly at higher roasting temperatures.<sup><a href="#src-s8">8</a></sup>
- **Fadai et al. 2017** compared a model adapted from earlier work with a new first-principles model that tracks water and vapour in the pores.<sup><a href="#src-s7">7</a></sup> Model 1 becomes nearly uniform in temperature and moisture after the first minute; the authors judge Model 2's slower drying front more realistic.<sup><a href="#src-s7">7</a></sup>
- **Bustos-Vanegas et al. 2025** used a lumped model with one bean temperature, grouping convection and radiation into one coefficient, and added evaporation and reaction heat.<sup><a href="#src-s6">6</a></sup> Evaporation had a greater effect on the predicted temperature than reaction heat.<sup><a href="#src-s6">6</a></sup>
- **Al-Shemmeri et al. 2025** simulated a whole batch in a pilot-scale (0.5 kg) spouted-bed roaster. It neglected metal-to-bean conduction and bean-to-bean conduction and radiation, and it cannot resolve gradients inside the bean.<sup><a href="#src-s5">5</a></sup>

No model consulted for this entry follows a full drum batch with wall contact, hot air and radiation together.

## Measuring heat transfer

Researchers measure bean temperature with fine thermocouples placed in the bean. A 2005 fluid-bed study drilled 0.3 mm holes into beans for a 0.25 mm thermocouple.<sup><a href="#src-s10">10</a></sup> The 2000 thesis took care that the tip sat in the bean tissue, not in the central folding gap.<sup><a href="#src-s2">2</a></sup> In the 2005 study, the bean core never reached the set air temperature; the authors attributed this to radiation and called it typical of small equipment with a large air-to-bean ratio.<sup><a href="#src-s10">10</a></sup>

Production roasters do not measure bean temperature directly. Their probe reads a mix of bean and air temperature, specific to each machine.<sup><a href="#src-s1">1</a>,<a href="#src-s4">4</a></sup> Coefficients in research are fitted to measured bean temperatures or calculated from correlations.<sup><a href="#src-s6">6</a>,<a href="#src-s11">11</a></sup>

## Risks and defects

- **Surface over-roasted, core under-roasted.** In extreme fast roasting, high heat transfer at the surface can give "burnt" and "greenish" notes together, according to the textbook chapter.<sup><a href="#src-s1">1</a></sup>
- **Scorched flat sides.** A drum turning too fast presses beans against the hot wall, over-develops the outside and, at worst, scorches the flats.<sup><a href="#src-s1">1</a></sup> The thesis names mixing to prevent scorching as a main task of a roaster.<sup><a href="#src-s2">2</a></sup>
- **Misreading the probe.** The probe reads bean and air together, so a change in airflow or drum speed can move the reading without the same change in the beans.<sup><a href="#src-s1">1</a>,<a href="#src-s4">4</a></sup>
- **Uneven heating.** Beans must keep moving for homogeneous heat transfer; any movement also stresses the beans mechanically.<sup><a href="#src-s1">1</a></sup>

## Open questions

- **Shares in a loaded production roaster.** No study consulted for this entry measured conduction, convection and radiation separately in a full batch.<sup><a href="#src-s1">1</a>,<a href="#src-s6">6</a></sup>
- **Emissivity of beans and walls.** No measured value was found, so the radiation share cannot be calculated from first principles.
- **Gradients at tips and edges.** Models use spheres, semi-ellipsoids or a scanned bean, and none consulted for this entry reports temperatures at tips or edges.<sup><a href="#src-s7">7</a>,<a href="#src-s8">8</a>,<a href="#src-s9">9</a></sup>
- **Heat paths and flavour.** The thesis recommends a fairly high conductive share and low air-to-bean ratios, linking low ratios to better cup quality and less oxygen contact<sup><a href="#src-s2">2</a></sup>, but no sensory study consulted for this entry varied the heat path alone at equal roast degree and time.

## Key studies

<div class="study">
<p><strong>Bustos-Vanegas et al., 2025 – Single-bean heating in a gas-fired drum.</strong> Holds single arabica beans at the centre of a direct gas-fired drum at 200–280 °C and fits a lumped model with evaporation and reaction heat. The fitted overall coefficient far exceeds the calculated convective one, and the authors read Biot numbers of 0.48–0.82 as a relevant resistance to heat flow inside the bean.</p>
<p class="meta">Frontiers in Food Science and Technology 5, 1603783 · <a href="https://doi.org/10.3389/frfst.2025.1603783">doi:10.3389/frfst.2025.1603783</a></p>
</div>

<div class="study">
<p><strong>Fadai et al., 2017 – Heat and mass transfer in one bean.</strong> Compares a model adapted from earlier work with a new first-principles model that tracks liquid water, vapour and carbon dioxide in the pores. Lists conductivities, specific heats and surface coefficients for both, and finds a slower, more realistic drying front in the new model.</p>
<p class="meta">International Journal of Heat and Mass Transfer 104, 787–799 · <a href="https://doi.org/10.1016/j.ijheatmasstransfer.2016.08.083">doi:10.1016/j.ijheatmasstransfer.2016.08.083</a></p>
</div>

<div class="study">
<p><strong>Alonso-Torres et al., 2013 – Computational model of a bean in hot air.</strong> Simulates a semi-ellipsoid arabica bean in air at 200–250 °C and 2 m/s and validates temperature and moisture against experiments. After 180 s, the core was 16 K cooler than the surface.</p>
<p class="meta">CHIMIA 67(4), 291–294 · <a href="https://doi.org/10.2533/chimia.2013.291">doi:10.2533/chimia.2013.291</a></p>
</div>

<div class="study">
<p><strong>Al-Shemmeri et al., 2023 – Bean motion and heat paths in a drum.</strong> Tracks single beans in an unheated pilot drum and separates a dense bed from beans in flight. The authors expect conduction to dominate in the bed and next to the wall, and convection in flight, and name drum speed as a lever on conduction from the drum.</p>
<p class="meta">Food Research International 163, 112253 · <a href="https://doi.org/10.1016/j.foodres.2022.112253">doi:10.1016/j.foodres.2022.112253</a></p>
</div>
