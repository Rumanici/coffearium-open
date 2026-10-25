---
title: Hardness and alkalinity
summary: What total, carbonate and non-carbonate hardness and alkalinity mean, how the carbonate system ties them to pH, how alkalinity buffers coffee acids, and how both values are measured and reported.
domain: extraction
kind: Concept
stage: brew
topics: [science]
status: verified
lastVerified: 2026-10-20
reviewer: Coffearium verification pass
updated: 2026-10-24
added: 2026-10-20
brief:
  - Total hardness is the dissolved calcium and magnesium; alkalinity is the water’s capacity to neutralise acid, in most waters mainly bicarbonate.<sup><a href="#src-s4">4</a>,<a href="#src-s5">5</a>,<a href="#src-s2">2</a></sup>
  - Carbonate (temporary) hardness is the lower of total hardness and alkalinity; the rest of the hardness is non-carbonate (permanent) hardness.<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a>,<a href="#src-s12">12</a></sup>
  - Alkalinity is titrated with strong acid to about pH 4.3–4.5; a second end point near pH 8.2–8.3 marks the carbonate share.<sup><a href="#src-s1">1</a>,<a href="#src-s6">6</a>,<a href="#src-s10">10</a></sup>
  - Bicarbonate is the main form of dissolved carbonate between about pH 6.3 and 10.3 (our calculation);<sup><a href="#src-s7">7</a>,<a href="#src-s8">8</a></sup> below pH 8.3 alkalinity is practically all bicarbonate.<sup><a href="#src-s2">2</a></sup>
  - The EU drinking-water directive sets no limit for hardness but requires suppliers to inform the public about it.<sup><a href="#src-s13">13</a></sup>
quickFacts:
  - label: Total hardness
    value: Ca²⁺ + Mg²⁺, in equivalents
  - label: Alkalinity
    value: Acid needed to titrate to pH 4.3–4.5
  - label: Carbonate hardness
    value: The lower of total hardness and alkalinity
  - label: Carbonic acid
    value: pK₁ ≈ 6.3; pK₂ = 10.33 (25 °C)
  - label: 1 mmol/L alkalinity
    value: 50.04 ppm as CaCO₃
  - label: Standards
    value: ISO 6059 (hardness); ISO 9963-1, DIN 38409-7 (alkalinity)
aka:
  - Water hardness and alkalinity
linkTerms:
  - non-carbonate hardness
  - permanent hardness
  - acid-neutralising capacity
  - acid buffering capacity
  - carbonate system
  - hydrogen carbonate
  - bicarbonate
  - alkalinity
  - total hardness
  - carbonate hardness
related:
  - water-for-coffee
  - water-minerals-and-flavour
  - measuring-water
  - water-treatment
  - acids-in-coffee
  - espresso-machine
  - brew-ratio-and-strength
contested:
  - 'Titration end points: the SCA handbook and the German standard DIN 38409-7 titrate alkalinity to pH 4.3,<sup><a href="#src-s1">1</a>,<a href="#src-s10">10</a></sup> while the USGS places the bicarbonate equivalence point of most environmental waters near pH 4.5.<sup><a href="#src-s6">6</a></sup> The carbonate end point is pH 8.2 in DIN 38409-7 and about 8.3 for the USGS.<sup><a href="#src-s6">6</a>,<a href="#src-s10">10</a></sup> By our calculation, the free hydrogen ions between pH 4.5 and 4.3 alone add about 1 ppm as CaCO₃ to the result; the difference matters only for very soft waters.'
  - 'Carbonate hardness as a name for alkalinity: the SCAA handbook links carbonate and bicarbonate with temporary hardness and sulfate with permanent hardness,<sup><a href="#src-s3">3</a></sup> and many test kits sold for “carbonate hardness” measure alkalinity.<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a></sup> The SCA handbook calls this use misleading, because carbonate hardness equals alkalinity only when total hardness is the larger of the two.<sup><a href="#src-s1">1</a></sup>'
  - 'English units in the SCA handbook: its glossary defines the Clark degree as one grain of calcium carbonate per imperial gallon (4.55 L), but its entry “grains per imperial gallon” uses the US gallon (3.78 L), gives 17.1 ppm and calls this unit a Clark degree as well; it also gives the grain once as 64.8 g and once as 64.8 milligrams. Its conversion table keeps the two units apart (17.12 and 14.25 ppm as CaCO₃).<sup><a href="#src-s1">1</a></sup> A grain is exactly 64.79891 mg, a US gallon 3.785 L and an imperial gallon 4.546 L.<sup><a href="#src-s17">17</a></sup> By our calculation, one grain per imperial gallon is 14.25 ppm and one grain per US gallon 17.12 ppm, so the table is right and the glossary is not.'
corrections:
  - date: 2026-10-24
    change: "Buffering in numbers: the acid matched by 1.0 mmol/L of bicarbonate is now calculated at pH 5 (about 116 mg citric or 94 mg acetic acid), not with all acid groups reacting (64 mg citric, 60 mg acetic)."
    reason: "At the pH of a cup the third acid group of citric acid (pK 6.40) and part of the others stay protonated, so the earlier figures overstated how much acid the alkalinity matches. Pointed out by a reader audit."
  - date: 2026-10-20
    change: Hydroxide at pH 8.3 corrected from about 0.0001 to about 0.1 ppm as CaCO₃.
    reason: Arithmetic error; 10⁻⁵·⁷ mol/L × 50,040 mg/mol ≈ 0.1 mg/L.
  - date: 2026-10-20
    change: Removed the test-kit end point of pH 4.5 (Contested, Open questions); reworded the English-units item and added NIST Handbook 44 for the grain and gallons.
    reason: The test-kit value rested only on a textbook chapter; the SCA glossary inconsistency was stated incompletely.
sources:
  - id: s1
    title: "The SCA Water Quality Handbook, edition 2 (ISBN 978-0-9995807-3-8)"
    authors: Wellinger, M.; Smrke, S.; Yeretzian, C.
    publisher: Specialty Coffee Association
    year: 2018
    url: https://digitalcollection.zhaw.ch/handle/11475/12365
    tier: A/B
    tierNote: A for its water recommendations (pH 6–8), the measuring procedure it specifies (alkalinity end point pH 4.3) and its unit conversion table (checked by our calculation; the same factors appear in source 2); B for general chemistry, definitions and explanations. Its glossary entries on English units are internally inconsistent (see Contested).
    quote: "In other words, carbonate hardness effectively corresponds to the maximum amount of scale that can form and is therefore equal to whichever of the two values of total hardness and alkalinity is lower."
    accessed: 2026-10-20
  - id: s2
    title: "Water for Extraction – Composition, Recommendations, and Treatment"
    authors: Wellinger, M.; Smrke, S.; Yeretzian, C.
    publisher: "In: Folmer, B. (ed.), The Craft and Science of Coffee, Academic Press, ch. 16, pp. 381–398"
    year: 2017
    doi: 10.1016/B978-0-12-803520-7.00016-5
    url: https://doi.org/10.1016/B978-0-12-803520-7.00016-5
    tier: B
    quote: "Because alkalinity of water reacts with the extracted acids from coffee, it effectively neutralizes part of the acids."
    accessed: 2026-10-20
  - id: s3
    title: "The Water Quality Handbook (ISBN 978-1-882552-08-5)"
    authors: Beeman, D.; Songer, P.; Lingle, T. (ed. Everage, L.)
    publisher: Specialty Coffee Association of America
    year: 2011
    tier: A/B
    tierNote: A for the SCAA standards it reproduces; B for practical advice and explanations.
    quote: "Total alkalinity measures the water’s ability to neutralize acids."
    accessed: 2026-10-20
  - id: s4
    title: Hardness of Water
    authors: U.S. Geological Survey, Water Science School
    publisher: U.S. Geological Survey
    url: https://www.usgs.gov/water-science-school/science/hardness-water
    tier: A
    quote: "The simple definition of water hardness is the amount of dissolved calcium and magnesium in the water."
    accessed: 2026-10-20
  - id: s5
    title: Alkalinity and Water
    authors: U.S. Geological Survey, Water Science School
    publisher: U.S. Geological Survey
    url: https://www.usgs.gov/water-science-school/science/alkalinity-and-water
    tier: A
    quote: "pH is a measure of how acidic/basic water is."
    accessed: 2026-10-20
  - id: s6
    title: Alkalinity Calculator – Frequently Asked Questions
    authors: U.S. Geological Survey, Oregon Water Science Center
    publisher: U.S. Geological Survey
    url: https://or.water.usgs.gov/alk/faq.html
    tier: A
    quote: "The carbonate equivalence point normally occurs in the vicinity of pH 8.3."
    accessed: 2026-10-20
  - id: s7
    title: Alkalinity Calculation Methods
    authors: U.S. Geological Survey, Oregon Water Science Center
    publisher: U.S. Geological Survey
    url: https://or.water.usgs.gov/alk/methods.html
    tier: A
    quote: "This restricts the search to the approximate pH range between 10.3 and 6.3."
    accessed: 2026-10-20
  - id: s8
    title: "The solubilities of calcite, aragonite and vaterite in CO2-H2O solutions between 0 and 90°C, and an evaluation of the aqueous model for the system CaCO3-CO2-H2O"
    authors: Plummer, L. N.; Busenberg, E.
    publisher: Geochimica et Cosmochimica Acta 46(6), 1011–1040
    year: 1982
    doi: 10.1016/0016-7037(82)90056-4
    url: https://pubs.usgs.gov/publication/70011789
    tier: A
    quote: "These expressions hold for 1 atm. total pressure between 0 and 100°C"
    abstractOnly: true
    accessed: 2026-10-20
  - id: s9
    title: "ISO 9963-1:1994 Water quality – Determination of alkalinity – Part 1: Determination of total and composite alkalinity (abstract)"
    authors: International Organization for Standardization
    publisher: ISO (abstract as listed by the Association Sénégalaise de Normalisation)
    year: 1994
    url: https://asn.sn/en/node/48974
    tier: A
    quote: "The recommended lower limit is 0,4 mmol/l."
    abstractOnly: true
    accessed: 2026-10-20
  - id: s10
    title: "Basisvalidierung zur Überarbeitung der Norm DIN 38409-7 (H7) vom Mai 1979, Bestimmung der Säure- und Basekapazität"
    authors: DIN Arbeitskreis 1.16 „Säure- Basekapazität“
    publisher: Wasserchemische Gesellschaft in der GDCh / DIN (validation document)
    year: 2005
    url: https://archiv.gdch.de/fileadmin/downloads/Netzwerk_und_Strukturen/Fachgruppen/Wasserchemische_Gesellschaft/DEV/vdok_h07.pdf
    tier: A
    quote: "Das Verfahren DIN 38409-H7-1 nach Abschnitt 4 legt die Bestimmung der Säurekapazitäten bis zu den pH-Werten 8,2 und 4,3 fest"
    accessed: 2026-10-20
  - id: s11
    title: "ISO 6059:1984 Water quality – Determination of the sum of calcium and magnesium – EDTA titrimetric method (abstract)"
    authors: International Organization for Standardization
    publisher: ISO (abstract as listed by the Association Sénégalaise de Normalisation)
    year: 1984
    url: https://www.asn.sn/en/node/51314
    tier: A
    quote: "The lowest concentration that can be determined is 0,05 mmol/l."
    abstractOnly: true
    accessed: 2026-10-20
  - id: s12
    title: "Hardness in Drinking-water: Background document for development of WHO Guidelines for Drinking-water Quality (WHO/HSE/WSH/09.01/10)"
    authors: World Health Organization
    publisher: World Health Organization
    year: 2009
    url: https://hispagua.cedex.es/sites/default/files/hispagua_documento/dureza.pdf
    tier: A
    quote: "Hardness is most commonly expressed as milligrams of calcium carbonate equivalent per litre."
    accessed: 2026-10-20
  - id: s13
    title: "Directive (EU) 2020/2184 of the European Parliament and of the Council of 16 December 2020 on the quality of water intended for human consumption, Annexes I and IV"
    authors: European Parliament; Council of the European Union
    publisher: Official Journal of the European Union (text as published by legislation.gov.uk)
    year: 2020
    url: https://www.legislation.gov.uk/eudr/2020/2184/annex/IV
    tier: A
    quote: "information on the following parameters not listed in Part C of Annex I and associated values:"
    accessed: 2026-10-20
  - id: s14
    title: Informationspflicht Trinkwasser (Merkblatt)
    authors: Kanton Aargau, Departement Gesundheit und Soziales, Amt für Verbraucherschutz
    publisher: Kanton Aargau
    year: 2020
    url: https://www.ag.ch/media/kanton-aargau/dgs/dokumente/verbraucherschutz/lebensmittelkontrolle/trinkwasser/20-merkblatt-informationspflicht-trinkwasser.pdf
    tier: A
    quote: "Gesamthärte in französischen Härtegraden."
    accessed: 2026-10-20
  - id: s15
    title: Effects of Water Quality Factors on the Main Components and Flavor of Cold Brew Coffee
    authors: Chen, S.; Xiao, Y.; Jiang, F.; Jiang, T.; He, X.; Zhu, J.; Tang, W.; Zhou, Y.
    publisher: Science and Technology of Food Industry (Shipin Gongye Keji) 45(5), 70–80
    year: 2024
    doi: 10.13386/j.issn1002-0306.2023050076
    url: https://doaj.org/article/639cf2a8b5574ae7a150cbc553959298
    tier: A
    quote: "six types of commercially available water were selected for preparing cold brew coffee"
    abstractOnly: true
    accessed: 2026-10-20
  - id: s16
    title: The Role of Dissolved Cations in Coffee Extraction
    authors: Hendon, C. H.; Colonna-Dashwood, L.; Colonna-Dashwood, M.
    publisher: Journal of Agricultural and Food Chemistry 62(21), 4947–4950
    year: 2014
    doi: 10.1021/jf501687c
    url: https://researchportal.bath.ac.uk/en/publications/the-role-of-dissolved-cations-in-coffee-extraction/
    tier: A
    quote: "Using density functional theory, we quantify the thermodynamic binding energies of five familiar coffee-contained acids, caffeine, and a representative flavor component, eugenol."
    abstractOnly: true
    accessed: 2026-10-20
  - id: s17
    title: "Handbook 44 – 2026, Appendix C: General Tables of Units of Measurement"
    authors: National Institute of Standards and Technology
    publisher: NIST, U.S. Department of Commerce
    year: 2026
    url: https://www.nist.gov/document/2026-nist-handbook-44-appendix-c
    tier: A
    quote: "64.798 91 milligrams (exactly)"
    accessed: 2026-10-20
  - id: s18
    title: "Dissociation constants of organic acids and bases (CRC Handbook of Chemistry and Physics, section 8)"
    authors: CRC Press
    publisher: CRC Press
    tier: A
    tierNote: Standard reference table of acid constants at 25 °C; edition not stated on the copy consulted.
    quote: "Citric acid 1 25 3.13 / 2 25 4.76 / 3 25 6.40"
    accessed: 2026-10-24
---

## Two different measures

Hardness and alkalinity are often confused, but they count different ions. Hardness counts positive ions; alkalinity counts the capacity of negative ions to take up acid.<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a></sup>

**Total hardness** is the amount of dissolved calcium and magnesium.<sup><a href="#src-s4">4</a></sup> The name comes from washing: these ions make soap precipitate.<sup><a href="#src-s1">1</a>,<a href="#src-s12">12</a></sup> Other doubly or triply charged ions, such as iron or strontium, also count in principle, but fresh water rarely holds more than traces of them.<sup><a href="#src-s1">1</a></sup>

**Alkalinity** is the water’s ability to neutralise acids.<sup><a href="#src-s3">3</a>,<a href="#src-s5">5</a></sup> It is not a substance but a property, which bicarbonate, carbonate and hydroxide ions provide.<sup><a href="#src-s3">3</a>,<a href="#src-s5">5</a></sup> Below pH 8.3, the range of most tap water, almost all of it is bicarbonate, also called hydrogen carbonate (HCO₃⁻).<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a></sup> The SCA handbook therefore also calls it the acid buffer capacity.<sup><a href="#src-s1">1</a></sup>

Alkalinity is not the same as an alkaline pH. A pH above 7 only says that the water is basic at that moment.<sup><a href="#src-s2">2</a></sup> Alkalinity says how much acid the water can absorb before its pH falls, whatever its starting pH.<sup><a href="#src-s2">2</a>,<a href="#src-s5">5</a></sup> Why pH alone misleads for coffee water is shown with numbers in Water for coffee.

## Carbonate and non-carbonate hardness

Heating hard water makes calcium carbonate settle out as scale.<sup><a href="#src-s4">4</a></sup> Scale needs both partners: calcium or magnesium from the hardness, and carbonate from the alkalinity.<sup><a href="#src-s1">1</a></sup> So at most the smaller of the two can leave the water.

The SCA handbook calls this smaller amount the **carbonate hardness**, also known as temporary hardness.<sup><a href="#src-s1">1</a></sup> The rest of the hardness is **non-carbonate hardness**, or permanent hardness: it stays dissolved when the water is boiled.<sup><a href="#src-s1">1</a>,<a href="#src-s12">12</a></sup> Calcium and magnesium in this part are balanced by anions such as sulfate and chloride.<sup><a href="#src-s1">1</a>,<a href="#src-s3">3</a></sup>

Three kinds of water show how the terms work:

- **Limestone water.** Water that has dissolved only calcium or magnesium carbonate holds equal amounts of hardness and alkalinity.<sup><a href="#src-s2">2</a></sup> Most tap waters come close, with hardness slightly above alkalinity.<sup><a href="#src-s1">1</a></sup>
- **Gypsum water.** Calcium sulfate adds hardness without alkalinity. A hardness far above the alkalinity points to much sulfate.<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a></sup>
- **Softened or salt-influenced water.** A softener swaps calcium and magnesium for sodium or potassium, which lowers hardness but leaves alkalinity.<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a></sup> Sea-water intrusion can do the same.<sup><a href="#src-s1">1</a></sup> Here alkalinity exceeds hardness, and carbonate hardness equals total hardness.<sup><a href="#src-s1">1</a></sup>

<figure>
<div data-figure="hardness-and-alkalinity-three-waters"></div>
<figcaption>Hardness and alkalinity in three types of water, drawn as cations and anions in equivalents. Carbonate hardness is the lower of total hardness and alkalinity; in softened water the surplus bicarbonate is “not hard” carbonate.<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a></sup> Schematic, not to scale.</figcaption>
</figure>

The SCA handbook calls bicarbonate in excess of hardness “not hard” carbonate.<sup><a href="#src-s1">1</a></sup> Carbonate hardness can never exceed alkalinity, by definition.<sup><a href="#src-s1">1</a></sup> Many test kits labelled “carbonate hardness” actually measure alkalinity.<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a></sup> In softened water the label and the result no longer agree.

## How alkalinity buffers coffee acids

Bicarbonate takes up a hydrogen ion from an acid and becomes carbonic acid, which can leave as carbon dioxide.<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a></sup> Each bicarbonate ion removes one hydrogen ion. The acid is neutralised, and the cup tastes less acidic.<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a></sup>

A coffee science textbook chapter puts it simply: perceived acidity is the acidity extracted from the coffee minus the water’s alkalinity.<sup><a href="#src-s2">2</a></sup> The more water per gram of coffee, the larger the effect, so filter coffee is more sensitive than espresso.<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a></sup> Water for coffee works this through with brew ratios.

Hardness acts differently. A modelling study suggests that calcium and magnesium ions bind to coffee acids, caffeine and an aroma compound.<sup><a href="#src-s16">16</a></sup> How hardness and alkalinity change flavour is covered in Water minerals and flavour.

## Units and reporting

Hardness and alkalinity are usually expressed as if all the ions were calcium carbonate.<sup><a href="#src-s1">1</a>,<a href="#src-s12">12</a></sup> These are equivalent units: they weight each ion by its valence, not by its mass.<sup><a href="#src-s1">1</a></sup> One calcium ion and two bicarbonate ions then show up as equal amounts, just as they react in scale.<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a></sup>

- **ppm or mg/L as CaCO₃** is used in the USA and by the SCA.<sup><a href="#src-s1">1</a></sup>
- **French degrees (°fH)** are also based on calcium carbonate; one is 10 ppm as CaCO₃.<sup><a href="#src-s1">1</a></sup> In Aargau, Switzerland, water suppliers must report hardness in them.<sup><a href="#src-s14">14</a></sup>
- **German degrees (°dH)** are based on calcium oxide instead.<sup><a href="#src-s1">1</a></sup> One German degree is 17.85 ppm as CaCO₃.<sup><a href="#src-s1">1</a></sup>
- **English (Clark) degrees** and **grains per US gallon** are based on a grain of calcium carbonate per imperial or US gallon.<sup><a href="#src-s1">1</a>,<a href="#src-s17">17</a></sup>
- **mmol/L** counts particles directly. Laboratories and standards use it.<sup><a href="#src-s9">9</a>,<a href="#src-s11">11</a></sup>

Bottle labels list calcium, magnesium and hydrogen carbonate in mg/L instead; these have to be converted before they can be compared.<sup><a href="#src-s1">1</a></sup> Water for coffee gives the factors for converting them.

<!-- deep-dive -->

## The carbonate system

Bicarbonate, carbonate and dissolved carbon dioxide form one linked system:<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a></sup>

CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H⁺ ⇌ CO₃²⁻ + 2 H⁺

Water chemistry customarily lumps dissolved CO₂ and true carbonic acid together.<sup><a href="#src-s1">1</a></sup> Two acid constants then set which form dominates at a given pH. The first, pK₁, is about 6.3, according to the USGS alkalinity calculator.<sup><a href="#src-s7">7</a></sup> The second, pK₂, follows from the temperature equation of a 1982 calcite solubility study; by our calculation it is 10.33 at 25 °C.<sup><a href="#src-s8">8</a></sup> Between the two, about pH 6.3 to 10.3, bicarbonate is the main form (our calculation).<sup><a href="#src-s7">7</a>,<a href="#src-s8">8</a></sup>

<figure>
<div data-figure="hardness-and-alkalinity-carbonate-species"></div>
<figcaption>Share of dissolved carbonate present as CO₂ and carbonic acid, bicarbonate and carbonate, from pH 3 to 12, with the titration end points and the SCA pH range for brewing water.<sup><a href="#src-s1">1</a>,<a href="#src-s6">6</a>,<a href="#src-s10">10</a></sup> Our calculation at 25 °C from pK₁ ≈ 6.3<sup><a href="#src-s7">7</a></sup> and pK₂ = 10.33,<sup><a href="#src-s8">8</a></sup> without activity corrections.</figcaption>
</figure>

Our calculation with these constants, for the SCA’s pH range of 6–8 for brewing water:<sup><a href="#src-s1">1</a></sup> at pH 6 about 33% of the dissolved carbonate is bicarbonate, at pH 7 about 83%, at pH 8 about 98%. Carbonate stays below 1% up to pH 8.3. This is why the SCA handbook notes that carbonate forms only in very basic water.<sup><a href="#src-s1">1</a></sup> A tap water left to stand loses excess CO₂ and rises in pH.<sup><a href="#src-s1">1</a></sup> Its alkalinity stays the same, because CO₂ is electrically neutral and does not appear in the equation below.<sup><a href="#src-s2">2</a></sup>

Temperature shifts the constants. The 1982 equation for pK₂ holds from 0 to 100 °C at 1 atm.<sup><a href="#src-s8">8</a></sup> By our calculation, pK₂ falls from 10.38 at 20 °C to 10.14 at 90 °C, so hot water holds slightly more carbonate at a given pH. No source consulted for this entry gave a temperature equation for pK₁.

## Alkalinity as a charge balance

For fresh water, alkalinity can be written as a sum of concentrations in mol/L:<sup><a href="#src-s2">2</a></sup>

Alkalinity = [HCO₃⁻] + 2 [CO₃²⁻] + [OH⁻] − [H⁺]

Carbonate counts twice because it can take up two hydrogen ions. Below pH 8.3 the other terms are several orders of magnitude smaller than bicarbonate, so alkalinity equals the bicarbonate content to a close approximation.<sup><a href="#src-s2">2</a></sup> Our calculation: at pH 8.3 and 25 °C, hydroxide amounts to about 0.1 ppm as CaCO₃.

The USGS describes alkalinity as a deficiency of hydrogen ions relative to a solution of carbon dioxide in water.<sup><a href="#src-s6">6</a></sup> That reference point explains the titration end point. Adding acid until all bicarbonate has become carbonic acid returns the water to a plain CO₂ solution, which is acidic.<sup><a href="#src-s6">6</a></sup>

Equivalent units follow from the same balance. One mmol/L of bicarbonate is 50.04 ppm as CaCO₃, half the figure for one mmol/L of calcium plus magnesium, because bicarbonate is singly and calcium doubly charged.<sup><a href="#src-s1">1</a></sup> When calcium carbonate forms scale, the calcium falls by one mole and the bicarbonate by two; in equivalent units both fall by the same amount.<sup><a href="#src-s1">1</a>,<a href="#src-s2">2</a></sup>

## Titration end points and standards

Alkalinity is titrated with a strong acid such as hydrochloric acid.<sup><a href="#src-s1">1</a></sup> Two end points are in use, and the sources do not quite agree on either (see Contested):

- **Total alkalinity.** The SCA handbook defines alkalinity as the acid needed to lower a sample to pH 4.3.<sup><a href="#src-s1">1</a></sup> DIN 38409-7 also uses pH 4.3, as the acid capacity to pH 4.3, known in German as Säurekapazität K<sub>S4.3</sub>.<sup><a href="#src-s10">10</a></sup> The USGS places the bicarbonate equivalence point of most environmental waters near pH 4.5.<sup><a href="#src-s6">6</a></sup>
- **Carbonate alkalinity.** A first end point near pH 8.3 (USGS) or at pH 8.2 (DIN) captures carbonate and hydroxide.<sup><a href="#src-s6">6</a>,<a href="#src-s10">10</a></sup> The DIN method determines both end points for waters above pH 8.2.<sup><a href="#src-s10">10</a></sup> Below pH 8.3 the carbonate share is negligible, so for most drinking waters this value is zero.<sup><a href="#src-s2">2</a></sup>

The DIN validation report notes that the acid capacity to pH 4.3 is often equated with bicarbonate, although it also includes other buffers.<sup><a href="#src-s10">10</a></sup> ISO 9963-1 specifies the titration of total and composite alkalinity for natural, treated and waste water.<sup><a href="#src-s9">9</a></sup> It applies directly up to 20 mmol/L, with a recommended lower limit of 0.4 mmol/L;<sup><a href="#src-s9">9</a></sup> by our calculation, that is about 20–1,000 ppm as CaCO₃. Hardness is titrated with EDTA; ISO 6059 standardises this method for the sum of calcium and magnesium.<sup><a href="#src-s1">1</a>,<a href="#src-s11">11</a></sup> Kits, resolution and meters are covered in Measuring water.

## Buffering in numbers

Our own calculation, from the cited definitions and acid constants. An alkalinity of 50 ppm as CaCO₃ is 1.0 mmol/L of bicarbonate.<sup><a href="#src-s1">1</a></sup> It can take up 1.0 mmol of hydrogen ions per litre and release up to 1.0 mmol, or 44 mg, of CO₂. How much acid that matches depends on how many hydrogen ions each acid molecule gives up at the pH of the cup. Citric acid has three acid groups, with pK values of 3.13, 4.76 and 6.40 at 25 °C; acetic acid has one, with pK 4.76.<sup><a href="#src-s18">18</a></sup> At pH 5, by our calculation, citric acid gives up about 1.7 hydrogen ions per molecule and acetic acid about 0.64. The same alkalinity then matches about 116 mg of citric acid or 94 mg of acetic acid. The figure of 64 mg of citric acid, with all three groups reacting, would hold only at a much higher pH. Coffee contains many acids at once, so these figures illustrate the scale; they are not a measured value for a brew.

The reaction runs nearly to completion in a cup. Our calculation with pK₁ ≈ 6.3:<sup><a href="#src-s7">7</a></sup> at pH 5, about 95% of the original bicarbonate has become CO₂ or carbonic acid. Brew pH values are given in Acids in coffee.

A coffee science textbook chapter, based on earlier titrations of filter and lungo coffees, estimates that water of moderate alkalinity neutralises a noticeable share of the titratable acidity in filter coffee and a smaller share in a lungo.<sup><a href="#src-s2">2</a></sup> It also states that at high alkalinity, the CO₂ formed can add resistance and lengthen espresso extraction.<sup><a href="#src-s2">2</a></sup> In a 2024 study of cold brew made with six commercial waters, calcium, magnesium and bicarbonate correlated negatively with titratable acid.<sup><a href="#src-s15">15</a></sup> Its abstract reports the three ions together and does not separate their effects.<sup><a href="#src-s15">15</a></sup>

## Rules and reporting classes

Drinking-water rules treat hardness as information, not as a limit:

- **WHO.** The 2009 background document proposes no health-based guideline value for hardness.<sup><a href="#src-s12">12</a></sup> It uses the same bands as the USGS: below 60 mg/L as CaCO₃ soft, 60–120 moderately hard, 120–180 hard, above 180 very hard.<sup><a href="#src-s4">4</a>,<a href="#src-s12">12</a></sup>
- **European Union.** Directive 2020/2184 sets no parametric value for hardness, calcium, magnesium or alkalinity.<sup><a href="#src-s13">13</a></sup> Its Annex IV requires information to the public on hardness, calcium, magnesium and potassium.<sup><a href="#src-s13">13</a></sup> Annex I sets pH 6.5–9.5, asks that water not be aggressive, and allows minimum calcium and magnesium levels for softened or demineralised water.<sup><a href="#src-s13">13</a></sup>
- **Switzerland.** The Swiss drinking-water ordinance (TBDV, Art. 5) obliges suppliers to inform consumers about water quality at least once a year.<sup><a href="#src-s14">14</a></sup> In Aargau this includes total hardness in French degrees, classed as soft (0–15 °fH), medium hard (15–25 °fH) and hard (above 25 °fH).<sup><a href="#src-s14">14</a></sup> Water for coffee lists finer Swiss classes.

None of these rules names alkalinity as a reporting item. For coffee it usually has to be found in the full water analysis or measured.<sup><a href="#src-s1">1</a>,<a href="#src-s13">13</a>,<a href="#src-s14">14</a></sup>

## Reference values

| Parameter | Value | Source |
|---|---|---|
| pK₁ of carbonic acid (CO₂ + H₂CO₃) | About 6.3 | USGS<sup><a href="#src-s7">7</a></sup> |
| pK₂ of carbonic acid, 25 °C | 10.33 (our calculation from the published equation) | Plummer & Busenberg<sup><a href="#src-s8">8</a></sup> |
| pK₂, 20 °C and 90 °C | 10.38 and 10.14 (our calculation) | Plummer & Busenberg<sup><a href="#src-s8">8</a></sup> |
| Bicarbonate the main form | About pH 6.3–10.3 (our calculation) | Calculated from<sup><a href="#src-s7">7</a>,<a href="#src-s8">8</a></sup> |
| Bicarbonate share of dissolved carbonate at pH 6, 7, 8 | ≈33%, ≈83%, ≈98% (our calculation, 25 °C) | Calculated from<sup><a href="#src-s7">7</a>,<a href="#src-s8">8</a></sup> |
| Total alkalinity end point | pH 4.3 (SCA, DIN 38409-7); about pH 4.5 (USGS) | SCA<sup><a href="#src-s1">1</a></sup>, DIN<sup><a href="#src-s10">10</a></sup>, USGS<sup><a href="#src-s6">6</a></sup> |
| Carbonate end point | pH 8.2 (DIN 38409-7); about pH 8.3 (USGS) | DIN<sup><a href="#src-s10">10</a></sup>, USGS<sup><a href="#src-s6">6</a></sup> |
| 1 mmol/L bicarbonate | 50.04 ppm as CaCO₃ | SCA<sup><a href="#src-s1">1</a></sup> |
| ISO 9963-1 range | 0.4–20 mmol/L (≈20–1,000 ppm as CaCO₃, our calculation) | ISO<sup><a href="#src-s9">9</a></sup> |
| ISO 6059 lowest determinable | 0.05 mmol/L | ISO<sup><a href="#src-s11">11</a></sup> |
| Acid neutralised by 50 ppm alkalinity | 1.0 mmol H⁺ per litre (our calculation) | From the SCA factor<sup><a href="#src-s1">1</a></sup> |
| WHO health-based value for hardness | None proposed | WHO<sup><a href="#src-s12">12</a></sup> |
| EU parametric value for hardness | None; pH 6.5–9.5 | Directive 2020/2184<sup><a href="#src-s13">13</a></sup> |
| Aargau reporting classes | Soft 0–15; medium hard 15–25; hard > 25 °fH | Kanton Aargau<sup><a href="#src-s14">14</a></sup> |

## Open questions

- **Which end point for coffee water.** The SCA uses pH 4.3, the USGS about 4.5.<sup><a href="#src-s1">1</a>,<a href="#src-s6">6</a></sup> No study consulted for this entry compared the two on low-alkalinity brewing waters.
- **Temperature.** Alkalinity is defined and measured at room temperature, while coffee is brewed near boiling. Only pK₂ has a cited temperature equation here;<sup><a href="#src-s8">8</a></sup> no study consulted for this entry measured bicarbonate buffering at brewing temperature.
- **Bicarbonate versus hardness in the cup.** The cold brew study’s abstract does not separate the three ions, so their separate effects remain open.<sup><a href="#src-s15">15</a></sup>
- **Other buffers.** The acid capacity to pH 4.3 also includes buffers other than bicarbonate.<sup><a href="#src-s10">10</a></sup> No study consulted for this entry measured how much they matter in drinking water used for coffee.

## Key studies

<div class="study">
<p><strong>Plummer & Busenberg, 1982 – Calcite solubility and carbonic acid.</strong> Measured the solubility of calcite, aragonite and vaterite in CO₂–water solutions from 0 to 90 °C and fitted temperature equations for the equilibrium constants of the CaCO₃–CO₂–H₂O system. Their equation for the second dissociation constant of carbonic acid is the basis for the pK₂ values given here.</p>
<p class="meta">Geochimica et Cosmochimica Acta 46(6), 1011–1040 · <a href="https://doi.org/10.1016/0016-7037(82)90056-4">doi:10.1016/0016-7037(82)90056-4</a></p>
</div>

<div class="study">
<p><strong>Hendon et al., 2014 – Cations and extraction.</strong> Used density functional theory to calculate how strongly sodium, magnesium and calcium ions bind to five coffee acids, caffeine and eugenol. It is a model of the hardness ions, not a brewing trial; its abstract does not address alkalinity.</p>
<p class="meta">Journal of Agricultural and Food Chemistry 62(21), 4947–4950 · <a href="https://doi.org/10.1021/jf501687c">doi:10.1021/jf501687c</a></p>
</div>

<div class="study">
<p><strong>Chen et al., 2024 – Water and cold brew.</strong> Made cold brew with six commercial waters and related their ions to the brews’ chemistry and flavour. Calcium, magnesium and bicarbonate correlated negatively with titratable acid, and higher levels reduced fruity and floral flavours.</p>
<p class="meta">Science and Technology of Food Industry 45(5), 70–80 · <a href="https://doi.org/10.13386/j.issn1002-0306.2023050076">doi:10.13386/j.issn1002-0306.2023050076</a></p>
</div>
