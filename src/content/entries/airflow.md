---
title: Airflow
summary: The stream of air drawn through a coffee roaster – how it carries heat to the beans, takes water vapour and chaff away, how much air different roaster designs use, and what changing it does to the roast.
domain: roasting
kind: Concept
stage: roast
topics: [equipment]
status: verified
lastVerified: 2026-10-19
reviewer: Coffearium verification pass
updated: 2026-10-19
added: 2026-10-19
corrections:
  - date: 2026-10-19
    change: Humidity of the roasting air now reports the thesis result that roast loss and drying ran slightly faster in humid hot air, and the water found in industrial recirculated air; the claim that no source measured an effect was removed.
    reason: Verification read the results chapters of Schenker 2000, which do report these measurements.
  - date: 2026-10-19
    change: Removed the airflow vent settings (25–50–100% and 25–75–100%) attributed to Catão et al. 2022.
    reason: Only the abstract could be accessed when the entry was checked; the settings could not be checked.
  - date: 2026-10-19
    change: The share of heat carried by the air is no longer said to depend mainly on the amount of air; the drum particle-tracking finding is restated as the study gives it.
    reason: The textbook chapter says the air-to-bean ratio plays a key role and that the proportions vary by system (in drums also with direct or indirect heating); the 2023 study describes convection as much lower in the bed, with conduction dominating there.
brief:
  - In every hot-air roaster, heat reaches the beans by convection from the air, conduction from hot walls and radiation, in proportions that vary by design.<sup><a href="#src-s1">1</a></sup>
  - The air-to-bean ratio is the mass of process air per mass of green coffee; drums usually run at a relatively low ratio, fluid beds need high air velocity.<sup><a href="#src-s1">1</a></sup>
  - In a drum, the usable airflow is capped by the exit air velocity at which beans would be carried away.<sup><a href="#src-s1">1</a></sup>
  - In a 2025 spouted-bed study, batch size and airflow changed the time–temperature profiles more than inlet air temperature did.<sup><a href="#src-s6">6</a></sup>
  - Large roasters recirculate a major part of their hot gas; according to a textbook chapter, part must always leave to avoid explosive gas concentrations.<sup><a href="#src-s1">1</a></sup>
quickFacts:
  - label: What it does
    value: Carries heat by convection; removes water vapour, gases, chaff and dust
  - label: Main measure
    value: Air-to-bean ratio (kg air per kg green coffee)
  - label: Drum
    value: Relatively low ratio; capped by bean carry-over
  - label: Fluid bed
    value: High air velocity needed to lift the beans
  - label: Set by
    value: Roaster design; often adjustable by fan speed and flap (damper) settings
  - label: Measured with
    value: Anemometers, Pitot tubes with differential pressure gauges (research and audits)
aka:
  - Air flow
  - Roaster airflow
  - Process air
linkTerms:
  - airflow
  - air flow
  - roaster airflow
  - airflow control
  - process air
  - roaster gas
  - expansion chamber
related:
  - roasting
  - roast-profile
  - drum-roaster
  - fluid-bed-roaster
  - tangential-and-centrifugal-roasters
  - heat-transfer
  - rate-of-rise
  - turning-point
  - drying-phase
  - first-crack
  - roast-loss
  - roaster-emissions
  - water-in-roasting
  - preheating-and-charge
  - cooling-and-quenching
contested:
  - 'Air-to-bean ratio and cup quality: a 2000 doctoral thesis on hot-air roasting, comparing laboratory fluid-bed with industrial roasts, concluded that low air-to-bean ratios gave superior cup quality and excessive air streams bland, flat coffee<sup><a href="#src-s3">3</a></sup>, and a flavour chapter links higher ratios to aroma stripping<sup><a href="#src-s2">2</a></sup>; a roasting chapter describes the effect of the ratio alone as limited but statistically significant<sup><a href="#src-s1">1</a></sup>, and when a laboratory fluid bed and a drum followed the same bean-temperature profile, the kinetics of aroma formation were similar.<sup><a href="#src-s9">9</a></sup>'
sources:
  - id: s1
    title: "The Roast – Creating the Beans' Signature"
    authors: Schenker, S.; Rothgeb, T.
    publisher: "In: Folmer, B. (ed.), The Craft and Science of Coffee, Academic Press, ch. 11, pp. 245–271"
    year: 2017
    doi: 10.1016/B978-0-12-803520-7.00011-6
    url: https://doi.org/10.1016/B978-0-12-803520-7.00011-6
    tier: B
    quote: "Drum roasters usually operate at a relatively low ABR."
    accessed: 2026-10-19
  - id: s2
    title: "The Chemistry of Roasting – Decoding Flavor Formation"
    authors: Poisson, L.; Blank, I.; Dunkel, A.; Hofmann, T.
    publisher: "In: Folmer, B. (ed.), The Craft and Science of Coffee, Academic Press, ch. 12, pp. 273–309"
    year: 2017
    doi: 10.1016/B978-0-12-803520-7.00012-8
    url: https://doi.org/10.1016/B978-0-12-803520-7.00012-8
    tier: B
    quote: "It seems that a higher air-to-bean ratio leads to a rather less complex and flat flavor, which was linked to an increased aroma stripping at higher air flows."
    accessed: 2026-10-19
  - id: s3
    title: "Investigations on the Hot Air Roasting of Coffee Beans (Diss. ETH No. 13620)"
    authors: Schenker, S.
    publisher: ETH Zürich (doctoral thesis)
    year: 2000
    url: https://library.sweetmarias.com/wp-content/uploads/2020/08/roasting_hot_air_doctorate.pdf
    tier: B
    quote: "This ratio is a characteristic parameter in a roasting process, but only applies for a given degree of roast."
    accessed: 2026-10-19
  - id: s4
    title: "Carbon Dioxide Evolution and Moisture Evaporation During Roasting of Coffee Beans"
    authors: Geiger, R.; Perren, R.; Kuenzli, R.; Escher, F.
    publisher: Journal of Food Science 70(2), E124–E130
    year: 2005
    doi: 10.1111/j.1365-2621.2005.tb07084.x
    url: https://ift.onlinelibrary.wiley.com/doi/10.1111/j.1365-2621.2005.tb07084.x
    tier: A
    quote: "These values were recorded after fluidization of the coffee bean bed started so that pressure drop due to product was taken into account."
    accessed: 2026-10-19
  - id: s5
    title: "Coffee bean particle motion in a spouted bed measured using Positron Emission Particle Tracking (PEPT)"
    authors: Al-Shemmeri, M.; Windows-Yule, C.; Lopez-Quiroga, E.; Fryer, P. J.
    publisher: Journal of Food Engineering 311, 110709
    year: 2021
    doi: 10.1016/j.jfoodeng.2021.110709
    url: https://research.birmingham.ac.uk/files/134813977/Paper_Coffee_Bean_PEPT_May_21.pdf
    tier: A
    quote: "it may be best to start with moderate air flow, and to reduce it as coffee density changes"
    accessed: 2026-10-19
  - id: s6
    title: "Batch-Scale Simulation of Heat and Mass Transfer of Coffee Roasting in Spouted Bed Roasters"
    authors: Al-Shemmeri, M.; Fryer, P. J.; Farr, R.; Lopez-Quiroga, E.
    publisher: Beverages 11(6), 162
    year: 2025
    doi: 10.3390/beverages11060162
    url: https://www.mdpi.com/2306-5710/11/6/162
    tier: A
    quote: "Case study II exhibited more diverse time–temperature profiles, especially at early times, compared to case study I."
    accessed: 2026-10-19
  - id: s7
    title: "Coffee bean particle motion in a rotating drum measured using Positron Emission Particle Tracking (PEPT)"
    authors: Al-Shemmeri, M.; Windows-Yule, K.; Lopez-Quiroga, E.; Fryer, P. J.
    publisher: Food Research International 163, 112253
    year: 2023
    doi: 10.1016/j.foodres.2022.112253
    url: https://research.birmingham.ac.uk/files/185158647/1_s2.0_S0963996922013114_main.pdf
    tier: A
    quote: "In this region, conductive heat transfer within the bean will dominate."
    accessed: 2026-10-19
  - id: s8
    title: "Modeling and simulation of coffee bean heating during roasting: effect of heat generation"
    authors: Bustos-Vanegas, J. D.; Martins, M. A.; Corrêa, P. C.; Baptestini, F. M.; de Oliveira, G. H. H.
    publisher: Frontiers in Food Science and Technology 5, 1603783
    year: 2025
    doi: 10.3389/frfst.2025.1603783
    url: https://www.frontiersin.org/journals/food-science-and-technology/articles/10.3389/frfst.2025.1603783/full
    tier: A
    quote: "radiation is the governing phenomena."
    accessed: 2026-10-19
  - id: s9
    title: "Coffee Roasting and Aroma Formation: Application of Different Time−Temperature Conditions"
    authors: Baggenstoss, J.; Poisson, L.; Kaegi, R.; Perren, R.; Escher, F.
    publisher: Journal of Agricultural and Food Chemistry 56(14), 5836–5846
    year: 2008
    doi: 10.1021/jf800327j
    url: https://doi.org/10.1021/jf800327j
    tier: A
    quote: "the kinetics of aroma generation were similar in both processes."
    abstractOnly: true
    accessed: 2026-10-19
  - id: s10
    title: "Roasting Conditions and Coffee Flavor: A Multi-Study Empirical Investigation"
    authors: Münchow, M.; Alstrup, J.; Steen, I.; Giacalone, D.
    publisher: Beverages 6(2), 29
    year: 2020
    doi: 10.3390/beverages6020029
    url: https://www.mdpi.com/2306-5710/6/2/29
    tier: A
    quote: "In order to keep the focus on roasting time, airflow was kept constant, and the starting temperature was kept the same within each study, except for Study 1 (Table 2)."
    accessed: 2026-10-19
  - id: s11
    title: "Coffee-roasting variables associated with volatile organic profiles and sensory evaluation using multivariate analysis"
    authors: Catão, A. A.; Mateus, N. de S.; Garcia, C. da C.; da Silva, M. C.; Novaes, F. J. M.; Alves, S.; Marriott, P. J.; da Silva, A. I.
    publisher: Applied Food Research 2(2), 100223
    year: 2022
    doi: 10.1016/j.afres.2022.100223
    url: https://doi.org/10.1016/j.afres.2022.100223
    tier: A
    quote: "30 seconds are enough to diminish a couple of points in coffee quality"
    abstractOnly: true
    accessed: 2026-10-19
  - id: s12
    title: "AP-42, Fifth Edition, Section 9.13.2: Coffee Roasting"
    authors: U.S. Environmental Protection Agency
    publisher: U.S. EPA, Compilation of Air Pollutant Emission Factors
    year: 1995
    url: https://www.epa.gov/sites/default/files/2020-10/documents/c9s13-2.pdf
    tier: A
    quote: "Some facilities use the burners that heat the roaster as thermal oxidizers."
    accessed: 2026-10-19
  - id: s13
    title: "Evolution of Coffee Roasting (paper 600b)"
    authors: Schwartzberg, H. G.
    publisher: "AIChE Annual Meeting 2005, Food Process and Product Development – Case Histories (conference proceedings)"
    year: 2005
    url: https://skoge.folk.ntnu.no/prost/proceedings/aiche-2005/topical/pdffiles/T9/papers/600b.pdf
    tier: B
    quote: "Roaster system blowers tend to provide a nearly constant volumetric-flow rate, V."
    accessed: 2026-10-19
  - id: s14
    title: "Energy and airflow optimization in an industrial roasting system: A case study"
    authors: Dimchev, I.
    publisher: E3S Web of Conferences 727, 01003 (EEPES 2026 proceedings)
    year: 2026
    doi: 10.1051/e3sconf/202672701003
    url: https://www.e3s-conferences.org/articles/e3sconf/pdf/2026/45/e3sconf_eepes2026_01003.pdf
    tier: B
    quote: "A minimum transport velocity is required to ensure effective transport of solid particles"
    accessed: 2026-10-19
---

## What airflow does in a roaster

Almost all industrial coffee is roasted with hot air.<sup><a href="#src-s1">1</a>,<a href="#src-s3">3</a></sup> A fan draws air through a heater, through the beans and out of the roaster.<sup><a href="#src-s4">4</a>,<a href="#src-s1">1</a></sup> This moving air is the roaster's airflow.

The air does several jobs at once. It carries heat to the bean surface, which is called convection.<sup><a href="#src-s1">1</a></sup> It carries away the water vapour and carbon dioxide that leave the beans; a laboratory study measured both in the exhaust air.<sup><a href="#src-s4">4</a></sup> It also carries off silverskin (chaff), dust and small bean fragments, which a cyclone separates from the air.<sup><a href="#src-s1">1</a></sup>

Convection is not the only way heat reaches the beans. In every hot-air roaster, heat also passes by conduction from hot walls and by radiation.<sup><a href="#src-s1">1</a></sup> The proportions vary from one roaster to another, and are difficult to calculate or measure precisely.<sup><a href="#src-s1">1</a></sup> The heat transfer entry compares the three paths.

## Air-to-bean ratio

The air-to-bean ratio is the mass of hot air used in a roast divided by the mass of green coffee.<sup><a href="#src-s1">1</a></sup> It applies to one blend, roasting time and roast degree, and can vary considerably between roasters.<sup><a href="#src-s1">1</a>,<a href="#src-s3">3</a></sup>

The same heat can reach the beans in two ways. A small amount of air can be very hot, or a large amount can be cooler.<sup><a href="#src-s1">1</a></sup> According to the textbook chapter, the ratio plays a key role in how heat divides between convection and conduction.<sup><a href="#src-s1">1</a></sup>

According to the chapter, the ratio is largely set by the roaster's design. Many machines allow it to be changed through fan speed and flap settings.<sup><a href="#src-s1">1</a></sup>

## Airflow in different roasters

<figure>
<div data-figure="airflow-air-paths"></div>
<figcaption>Air paths in a drum roaster and a fluid-bed roaster: in the drum, air passes through a turning batch; in the fluid bed, fast air from below lifts the beans.<sup><a href="#src-s1">1</a>,<a href="#src-s7">7</a></sup> Schematic, not to scale.</figcaption>
</figure>

**Drum roasters.** Hot air enters at the back of the drum through a screen. It leaves at the front through an expansion chamber.<sup><a href="#src-s1">1</a></sup> Drums usually run at a relatively low air-to-bean ratio.<sup><a href="#src-s1">1</a></sup> The limit is the exit air speed at which beans would be blown out with the air.<sup><a href="#src-s1">1</a></sup> In a particle-tracking study, convection dominated for beans in flight; in the dense bed, convection from the air was much lower and conduction dominated.<sup><a href="#src-s7">7</a></sup>

**Paddle roasters.** The air rises through the beans into a wide expansion chamber. There it slows down so much that no beans are carried away, even at a high ratio.<sup><a href="#src-s1">1</a></sup> Because paddles move the beans, the air-to-bean ratio can vary widely.<sup><a href="#src-s1">1</a></sup>

**Fluid-bed roasters.** Here the air alone keeps the beans moving, so it must flow fast enough to lift them.<sup><a href="#src-s1">1</a></sup> Convection carries most of the heat.<sup><a href="#src-s1">1</a></sup> In a pilot spouted-bed roaster, a larger batch of green coffee needed more air before it began to spout.<sup><a href="#src-s5">5</a></sup>

<figure>
<div data-figure="airflow-velocities"></div>
<figcaption>Air velocities reported for three research roasters: a model input for a drum without forced air<sup><a href="#src-s8">8</a></sup>, the suction air of a laboratory fluid bed<sup><a href="#src-s4">4</a></sup> and the air range and spouting minima of a pilot spouted bed.<sup><a href="#src-s5">5</a></sup> Measured at different points and temperatures; the values show orders of magnitude, not one scale.</figcaption>
</figure>

## Airflow as a roasting control

On small drum roasters, the burner and the trier are the main tools; airflow and drum speed are changed less often.<sup><a href="#src-s1">1</a></sup> An airflow control restricts or increases the air speed through the drum.<sup><a href="#src-s1">1</a></sup> According to the textbook chapter, this changes convection almost at once, while a flame change takes longer to act.<sup><a href="#src-s1">1</a></sup>

More air dries the beans faster. According to the same chapter, a high air-to-bean ratio can raise the air speed at the bean surface and speed up evaporation.<sup><a href="#src-s1">1</a></sup> In a 2025 study on a 0.5 kg spouted-bed roaster, batch size and airflow shaped the time–temperature curves more than inlet air temperature did.<sup><a href="#src-s6">6</a></sup>

The chapter's section on artisan roasting also links airflow to the cup. A change that shortens the roast is described as giving a brighter, fruitier cup; one that stretches the roast as mellowing acidity.<sup><a href="#src-s1">1</a></sup> No study consulted for this entry tested these sensory links on a drum.

Many studies hold airflow constant to isolate other factors. In eight sensory studies on roasting time, airflow was kept constant to keep the focus on time.<sup><a href="#src-s10">10</a></sup> A 2022 study of 38 roast profiles tested the opening of the airflow vent among five variables. The time after first crack had the largest effect.<sup><a href="#src-s11">11</a></sup>

<!-- deep-dive -->

## Reference values

Values reported in the sources for particular machines and conditions. They are not targets, and velocities measured at different points of different roasters cannot be compared directly.

| Parameter | Value reported | Source |
|---|---|---|
| Air-to-bean ratio, definition | kg hot air per kg green coffee, for a given blend, roasting time and roast degree | Schenker & Rothgeb<sup><a href="#src-s1">1</a></sup>; Schenker<sup><a href="#src-s3">3</a></sup> |
| Air-to-bean ratio by design | Drum relatively low; paddle wide range; bowl a certain range; fluid bed high air velocity | Schenker & Rothgeb<sup><a href="#src-s1">1</a></sup> |
| Suction air velocity at the inlet, laboratory fluid bed (100 g batches) | 2.037 m/s (slow roast, 228 °C air, 720 s); 3.007 m/s (fast roast, 260 °C air, 170 s) | Geiger et al.<sup><a href="#src-s4">4</a></sup> |
| Exhaust tube cross-section, same roaster | 0.0079 m² | Geiger et al.<sup><a href="#src-s4">4</a></sup> |
| Air velocity, pilot spouted bed (air at about 25 °C) | 4.2, 5.7, 7.2 and 10.0 m/s at fan frequencies of 30, 39, 48 and 65 Hz | Al-Shemmeri et al. 2021<sup><a href="#src-s5">5</a></sup> |
| Air mass flow, same roaster | 0.0141, 0.0185, 0.0228 and 0.0310 kg/s | Al-Shemmeri et al. 2021<sup><a href="#src-s5">5</a></sup>; 2025<sup><a href="#src-s6">6</a></sup> |
| Minimum airflow for spouting, green coffee | 39 Hz (5.7 m/s) for 350 g; 48 Hz (7.2 m/s) for 500 g | Al-Shemmeri et al. 2021<sup><a href="#src-s5">5</a></sup> |
| Batch sizes, same roaster | 200, 350 and 500 g | Al-Shemmeri et al.<sup><a href="#src-s5">5</a>,<a href="#src-s6">6</a></sup> |
| Air velocity in a drum without forced air (model input) | 0.02 m/s, from the drum's rotation alone | Bustos-Vanegas et al.<sup><a href="#src-s8">8</a></sup> |
| Convective coefficient, calculated, same drum | 15.91–17.43 W m⁻² °C⁻¹ (200–280 °C) | Bustos-Vanegas et al.<sup><a href="#src-s8">8</a></sup> |
| Silverskin carried off, laboratory fluid bed | 1.0 g per 100 g green coffee (fast and slow roast) | Geiger et al.<sup><a href="#src-s4">4</a></sup> |
| Operating temperature of a separate thermal oxidiser for roaster off-gas | Typically 650–816 °C | EPA AP-42<sup><a href="#src-s12">12</a></sup> |

The 2000 thesis quotes a wide range of ratios from older literature. It is the only source consulted for this entry that gives values, so none are listed here.

## Physics of roaster air

**Hot air takes up more room.** The same mass of air flows faster when it is hotter.<sup><a href="#src-s4">4</a></sup> In the laboratory fluid bed of a 2005 study, exhaust velocities were calculated from the inlet velocity and the ratio of exhaust to inlet temperature, and checked with a Pitot-static tube in empty runs.<sup><a href="#src-s4">4</a></sup> At an inlet velocity of 4.7 m/s, the measured exhaust velocity rose from 4.23 m/s with 28 °C air to 7.87 m/s with 245 °C air.<sup><a href="#src-s4">4</a></sup> A conference paper on roasting adds the converse: roaster blowers deliver a nearly constant volume flow, so the mass of gas they move falls as it gets hotter.<sup><a href="#src-s13">13</a></sup>

<figure>
<div data-figure="airflow-exhaust-velocity"></div>
<figcaption>Measured exhaust air velocity in an empty laboratory fluid bed at three inlet velocities, as the air was heated from 28 °C to about 250 °C. Values from a calibration table; no beans in the roaster.<sup><a href="#src-s4">4</a></sup></figcaption>
</figure>

**More air, more convection, with diminishing returns.** Convection depends on how fast air moves past the bean. Without forced air, a 2025 single-bean study in a gas-fired drum assumed an air speed of 0.02 m/s from the rotation alone.<sup><a href="#src-s8">8</a></sup> Its calculated convective coefficient was only 15.91–17.43 W m⁻² °C⁻¹, and the authors concluded that radiation governed the heating.<sup><a href="#src-s8">8</a></sup> According to the 2005 conference paper, the heat-transfer coefficient rises less quickly than the gas flow, so the mean efficiency of heat transfer is lower in roasters that use very high gas flows.<sup><a href="#src-s13">13</a></sup>

**Air moves the beans.** In a spouted bed, more air spread the beans over a larger part of the chamber.<sup><a href="#src-s5">5</a></sup> With 200 g of green coffee at the highest airflow, the dense bean bed disappeared into a circulating flow.<sup><a href="#src-s5">5</a></sup> As beans lose density during the roast they are lifted more easily, so the authors suggest starting with moderate airflow and reducing it as the roast goes on.<sup><a href="#src-s5">5</a></sup>

**Air and the curve.** In the 2025 spouted-bed model, small batches with high airflow formed a high thermal load. Under such loads, product-temperature changes reflected heat taken up or released by the roast reactions.<sup><a href="#src-s6">6</a></sup> More air also changes the bean itself: according to the textbook chapter, high ratios dry the bean faster, change the path of bean temperature and water activity, and slightly reduce final bean volume.<sup><a href="#src-s1">1</a></sup>

## Recirculation, off-gas and humidity

Smaller roasters usually draw in fresh air at one end and release the hot off-gas at the other, an open system.<sup><a href="#src-s1">1</a></sup> Because the off-gas is still hot, this wastes energy, and most large operations lead a major part of it back to the heater.<sup><a href="#src-s1">1</a></sup> According to the textbook chapter, another part must always leave, so that gas concentrations with the potential for explosion do not build up.<sup><a href="#src-s1">1</a></sup>

Recirculated gas also tempers the burner. The 2005 conference paper describes roaster gas being mixed with combustion products to bring them to an inlet temperature the beans tolerate.<sup><a href="#src-s13">13</a></sup> Single-pass roasters dilute combustion products with fresh air instead, so their gas holds more oxygen and less water vapour than recirculated gas.<sup><a href="#src-s13">13</a></sup> According to the paper, the water vapour in recirculated gas peaks in the middle of the roast.<sup><a href="#src-s13">13</a></sup>

The air that leaves carries pollutants. The United States Environmental Protection Agency (EPA) describes gaseous roaster emissions as usually ducted to a thermal or catalytic oxidiser after a cyclone removes the particles.<sup><a href="#src-s12">12</a></sup> Some plants use the roaster's own burners as the oxidiser, ducting the exhaust back to them.<sup><a href="#src-s12">12</a></sup> The roaster emissions entry covers this in detail.

**Humidity of the roasting air.** The 2000 doctoral thesis concludes that hot-air humidity is a further process parameter that influences the rate of heat transfer.<sup><a href="#src-s3">3</a></sup> Its laboratory roaster could inject steam into the hot air, and a dew-point hygrometer logged inlet humidity on an industrial roaster.<sup><a href="#src-s3">3</a></sup> In isothermal laboratory roasts at the same air temperature, roast loss and drying progressed slightly faster in humid than in dry hot air.<sup><a href="#src-s3">3</a></sup> The thesis also found a substantial amount of water in the hot air of industrial roasters, where recirculation lets water from the beans and from quenching accumulate.<sup><a href="#src-s3">3</a></sup> It called for further work on the effects on product quality, and no study consulted for this entry measured them.<sup><a href="#src-s3">3</a></sup>

## Measuring airflow

Research roasters measure air velocity at defined points.

- **Inlet anemometer.** The 2005 laboratory fluid bed measured the suction air at the inlet with an anemometer and set it with a flap valve in front of a radial fan.<sup><a href="#src-s4">4</a></sup> Its values were recorded once the bed was fluidised, so the pressure drop across the beans was included.<sup><a href="#src-s4">4</a></sup>
- **Exhaust measurement.** Air above a fluidised bed is turbulent, so exhaust flow could not be measured directly during roasting; it was calibrated in empty runs instead.<sup><a href="#src-s4">4</a></sup>
- **Fan frequency.** The pilot spouted bed set airflow by fan frequency, calibrated with a hot-wire anemometer and corrected for the change in air density with temperature.<sup><a href="#src-s5">5</a>,<a href="#src-s6">6</a></sup>
- **Pitot traverse.** An energy audit of an industrial drum roaster measured exhaust-duct velocity with a Pitot tube and differential pressure gauges across the duct, then corrected for gas temperature.<sup><a href="#src-s14">14</a></sup>

Modern roasting equipment often allows the air-to-bean ratio to be changed through fan speed and flap settings.<sup><a href="#src-s1">1</a></sup> No source consulted for this entry describes how small-batch roasters calibrate their airflow controls to a measured flow.

## Risks and limits

- **Beans blown out.** Above a certain exit air velocity, beans are carried away; this caps the airflow of a drum.<sup><a href="#src-s1">1</a></sup>
- **No bean bed.** In a spouted bed, a small batch at high airflow lost its bed entirely.<sup><a href="#src-s5">5</a></sup>
- **Aroma stripping.** High air flows have been linked to flatter, less complex flavour.<sup><a href="#src-s2">2</a>,<a href="#src-s3">3</a></sup>
- **Explosive gas.** In recirculating systems, part of the gas must always leave to prevent explosive concentrations.<sup><a href="#src-s1">1</a></sup>
- **Chaff deposits and fire.** According to the energy audit, too low a duct velocity lets particles settle, which raises the risk of fouling and fire.<sup><a href="#src-s14">14</a></sup>
- **Wasted heat.** Open systems release hot off-gas and are not energy efficient.<sup><a href="#src-s1">1</a></sup>

## Open questions

- **Air-to-bean ratio and flavour.** Sources disagree on how much the ratio matters on its own (see Contested).<sup><a href="#src-s1">1</a>,<a href="#src-s3">3</a>,<a href="#src-s9">9</a></sup>
- **Ratios of real roasters.** No peer-reviewed measurement of air-to-bean ratios across production drum, paddle and fluid-bed roasters was found.
- **Humidity of the roasting air.** Named as a heat-transfer parameter, with slightly faster roasting in humid air in one laboratory test<sup><a href="#src-s3">3</a></sup>; no study consulted for this entry measured its effect on flavour.
- **Airflow profiles on drums.** Practitioner advice on changing airflow during a roast is not backed by a controlled sensory study in the sources consulted; in one multivariate study, the vent opening was outweighed by the time after first crack.<sup><a href="#src-s11">11</a></sup>

## Key studies

<div class="study">
<p><strong>Geiger et al., 2005 – Air velocity and gas release in a laboratory fluid bed.</strong> Roasted 100 g batches fast and slow to the same colour at set inlet air velocities, and measured carbon dioxide and water vapour in the exhaust. Calibrated exhaust velocities against inlet velocity and air temperature in empty runs, because the air above the bed was too turbulent to measure directly.</p>
<p class="meta">Journal of Food Science 70(2), E124–E130 · <a href="https://doi.org/10.1111/j.1365-2621.2005.tb07084.x">doi:10.1111/j.1365-2621.2005.tb07084.x</a></p>
</div>

<div class="study">
<p><strong>Al-Shemmeri et al., 2021 – Airflow and bean motion in a spouted bed.</strong> Tracked single beans in a pilot spouted-bed roaster at three batch sizes and four airflows. More air spread the beans further; a small green batch at the highest airflow lost its bed, and the authors suggest reducing airflow as beans lighten.</p>
<p class="meta">Journal of Food Engineering 311, 110709 · <a href="https://doi.org/10.1016/j.jfoodeng.2021.110709">doi:10.1016/j.jfoodeng.2021.110709</a></p>
</div>

<div class="study">
<p><strong>Al-Shemmeri et al., 2025 – Airflow, batch size and the roast curve.</strong> Modelled heat and mass transfer in the same 0.5 kg spouted bed from logged temperatures. Changing batch size and airflow gave more varied time–temperature profiles, especially early, than changing inlet air temperature.</p>
<p class="meta">Beverages 11(6), 162 · <a href="https://doi.org/10.3390/beverages11060162">doi:10.3390/beverages11060162</a></p>
</div>

<div class="study">
<p><strong>Schenker, 2000 – Hot-air roasting and the air-to-bean ratio.</strong> A doctoral thesis on roasting conditions, mostly in a laboratory fluid bed with industrial trials. Comparing laboratory and industrial roasts, it concludes that low air-to-bean ratios gave better cup quality, and that air humidity influences heat transfer.</p>
<p class="meta">Diss. ETH No. 13620, ETH Zürich · <a href="https://library.sweetmarias.com/wp-content/uploads/2020/08/roasting_hot_air_doctorate.pdf">PDF</a></p>
</div>
