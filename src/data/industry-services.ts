export interface IndustryFitOut {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  badge: string;
  directAnswer: string;
  overview: string;
  authorities: { name: string; role: string }[];
  loadConsiderations: { parameter: string; detail: string }[];
  requiredDocs: string[];
  processSteps: { step: string; title: string; desc: string }[];
  projectExample: { title: string; location: string; scope: string; outcome: string };
  faqs: { question: string; answer: string }[];
}

export const industryList: IndustryFitOut[] = [
  {
    slug: 'restaurant-cafe-mep',
    title: 'Restaurant & Cafe MEP Fit-Out Approvals Dubai',
    metaTitle: 'Restaurant MEP Fit-Out Dubai | DEWA & Grease Trap | Abbadi Tech',
    metaDescription: 'Turnkey restaurant & cafe MEP fit-outs in Dubai. Commercial kitchen power upgrades, DEWA fit-out NOC, DM grease traps & gas interlocks: +971 50 554 6943.',
    h1: 'Restaurant & Cafe MEP Engineering & Authority Approvals in Dubai',
    badge: 'F&B Specialist · Kitchen Extraction & Grease Traps',
    directAnswer: 'Restaurant and cafe fit-outs in Dubai require coordinated approvals from DEWA (electrical load and fit-out NOC), Dubai Municipality Food Safety (commercial kitchen layouts, stainless steel grease traps), and Civil Defence (gas suppression interlocks). Abbadi Tech manages the complete MEP design, equipment load scheduling, and on-site trade execution.',
    overview: 'Food & Beverage fit-outs are among the most technically demanding commercial projects in Dubai. Commercial ovens, dishwashers, walk-in chillers, and kitchen extract ecology units demand substantial power upgrades, grease interceptors, and strict fire-safety gas shut-off valves.',
    authorities: [
      { name: 'DEWA', role: 'Kitchen electrical load upgrade, Single-Line Diagram, and fit-out NOC' },
      { name: 'Dubai Municipality (Food Safety)', role: 'Commercial kitchen layout approval, grease trap capacity, food-grade drainage' },
      { name: 'Dubai Civil Defence (DCD)', role: 'Kitchen fire hood suppression (Ansul/wet chemical), gas leak detector interlock' },
      { name: 'Landlord / Free Zone', role: 'Mall fit-out guide compliance (Emaar, Nakheel, Meraas) or DMCC/Trakhees approval' }
    ],
    loadConsiderations: [
      { parameter: 'Typical Power Demand', detail: '80 kW to 250+ kW depending on gas vs electric combi-ovens and heavy fryers.' },
      { parameter: 'Diversity Factor', detail: 'DEWA applies 0.70 to 0.85 diversity on commercial cooking loads.' },
      { parameter: 'Kitchen Hood Extraction', detail: 'Dedicated 3-phase circuits for variable-speed exhaust fans and ecology electrostatic precipitators.' },
      { parameter: 'Grease Trap Incomer', detail: 'Continuous power feed for automated grease recovery units (GRU) and biological enzyme dosing pumps.' }
    ],
    requiredDocs: [
      'Ejari & DET Commercial Restaurant Trade License',
      'Food Safety approved kitchen layout drawing (CAD)',
      'Cooking equipment electrical & water consumption schedule',
      'Landlord MEP technical fit-out manual'
    ],
    processSteps: [
      { step: '01', title: 'Kitchen Load Audit & DM Verification', detail: 'We audit total kitchen wattage and calculate DM grease interceptor volume.' },
      { step: '02', title: 'DEWA Load Upgrade Submission', detail: 'We submit stamped SLD and load enhancement file to DEWA for rapid sanction.' },
      { step: '03', title: 'First Fix Containment & Drainage', detail: 'We install acoustic HDPE drainage, grease traps, and overhead galvanized cable ladders.' },
      { step: '04', title: 'Authority Handover & Gas Interlock', detail: 'We test gas shut-off solenoids with Civil Defence and secure final DEWA meter energization.' }
    ],
    projectExample: {
      title: 'Artisan Waterfront Trattoria & Pizzeria',
      location: 'JBR The Walk, Dubai Marina District',
      scope: '140 kW electrical load upgrade, 3-phase pizza oven distribution, 250-litre stainless steel grease recovery unit, and complete ambient dining dimming controls.',
      outcome: 'Secured DEWA NOC in 4 business days and completed handover with zero municipal punch points.'
    },
    faqs: [
      {
        question: 'Do all Dubai restaurants need a grease trap?',
        answer: 'Yes. Dubai Municipality strictly mandates that all food preparation premises discharging fats, oils, and grease (FOG) must route kitchen waste through an approved grease interceptor before municipal sewer discharge.'
      },
      {
        question: 'How do I upgrade power if the landlord says there is no spare capacity?',
        answer: 'We conduct an engineering diversity study of the building switchboard to determine if underutilized load from common areas can be re-allocated, or file for a DEWA feeder enhancement.'
      }
    ]
  },
  {
    slug: 'clinic-healthcare-mep',
    title: 'Clinic & Medical Centre MEP Fit-Out Dubai',
    metaTitle: 'Clinic MEP Fit-Out Dubai | Healthcare Engineering | Abbadi Tech',
    metaDescription: 'DHA and DEWA compliant medical clinic MEP fit-outs in Dubai. Medical gas lines, isolated power supply (IPS), cleanrooms & drainage: +971 50 554 6943.',
    h1: 'Clinic & Medical Centre MEP Engineering & DHA Approvals in Dubai',
    badge: 'Healthcare Engineering · DHA & DEWA Compliance',
    directAnswer: 'Medical clinic and healthcare fit-outs in Dubai require specialized engineering conforming to Dubai Health Authority (DHA) facility guidelines, DEWA electrical safety, and Civil Defence hospital codes. Abbadi Tech engineers isolated power supplies (IPS), dental chair plumbing, and medical examination room circuits.',
    overview: 'Healthcare premises require fail-safe electrical distribution, isolated earthing for diagnostic X-ray/MRI imaging equipment, specialized sanitary drainage for sterilizing autoclaves, and HEPA-filtered clinical air balancing.',
    authorities: [
      { name: 'Dubai Health Authority (DHA)', role: 'Clinical layout approval, treatment room dimensions, sterilization facility compliance' },
      { name: 'DEWA', role: 'Dedicated power circuits for imaging equipment, UPS integration, fit-out NOC' },
      { name: 'Dubai Civil Defence (DCD)', role: 'Medical gas pipe safety, emergency lighting, and fire compartmentalization' }
    ],
    loadConsiderations: [
      { parameter: 'Imaging Equipment', detail: 'Dedicated 3-phase feeds with isolated grounding for panoramic X-ray and CT scanners.' },
      { parameter: 'Autoclave Sterilizers', detail: 'High-amperage dedicated 32A circuits with heat-resistant plumbing discharge.' },
      { parameter: 'UPS Backup Power', detail: 'Dual-source transfer switches ensuring zero-interruption power for surgical procedure rooms.' }
    ],
    requiredDocs: [
      'DHA Initial Approval Certificate & Facility Design Approval',
      'Medical equipment power and water technical specification sheets',
      'Ejari and DET commercial healthcare license copy',
      'Base-building landlord MEP clearance letter'
    ],
    processSteps: [
      { step: '01', title: 'DHA & DEWA Coordinated Design', detail: 'We produce coordinated clinical MEP drawings aligning with DHA health facility design guidelines.' },
      { step: '02', title: 'Authority NOC Approvals', detail: 'Parallel submission of electrical SLD to DEWA and healthcare layouts to DHA.' },
      { step: '03', title: 'Clinical Installation', detail: 'Installation of medical-grade antimicrobial conduits, dental suction lines, and isolated earthing.' },
      { step: '04', title: 'Testing & Commissioning', detail: 'Testing earth loop impedance, phase rotation, and autoclave water supply pressures.' }
    ],
    projectExample: {
      title: 'Multi-Specialty Polyclinic & Dental Studio',
      location: 'Jumeirah Beach Road, Dubai',
      scope: 'Medical gas containment, 85 kW electrical distribution, 6 dental chair suction and water lines, and cleanroom air pressure balancing.',
      outcome: 'Secured simultaneous DHA and DEWA inspection clearances on first audit.'
    },
    faqs: [
      {
        question: 'What are the electrical earthing requirements for medical clinics?',
        answer: 'Patient treatment rooms require dedicated supplementary equipotential bonding (earth busbar) ensuring touch voltage remains under 25V AC to prevent electric shock hazards during examinations.'
      }
    ]
  },
  {
    slug: 'salon-spa-mep',
    title: 'Salon & Spa MEP Fit-Out Dubai',
    metaTitle: 'Salon & Spa MEP Fit-Out Dubai | Hair & Wellness | Abbadi Tech',
    metaDescription: 'Commercial salon & luxury spa MEP engineering in Dubai. Hair wash basins, central water heaters, high-density dryer circuits & DEWA NOC: +971 50 554 6943.',
    h1: 'Salon & Luxury Spa MEP Engineering & DEWA Approvals in Dubai',
    badge: 'Wellness & Beauty · High-Capacity Hot Water & Power',
    directAnswer: 'Salon and spa fit-outs in Dubai require specialized hydraulic systems for continuous hot water across shampoo basins, hydrotherapy bathtubs, and steam rooms, alongside high-density electrical distribution for professional hair styling tools. Abbadi Tech delivers turnkey salon MEP engineering with complete DEWA and DM approvals.',
    overview: 'Salons operate multiple 2000W hair dryers simultaneously while demanding instant, unfluctuating hot water. We design balanced phase networks and recirculating hot water loops that prevent voltage drops and temperature fluctuations.',
    authorities: [
      { name: 'DEWA', role: 'Electrical load upgrades for blow dryers and water heating, fit-out NOC' },
      { name: 'Dubai Municipality (Public Health)', role: 'Sanitary plumbing, hair interceptor traps, and ventilation rates' },
      { name: 'Civil Defence', role: 'Sauna/steam room fire suppression and emergency lighting' }
    ],
    loadConsiderations: [
      { parameter: 'Hair Station Power', detail: 'Independent 16A/20A circuits per styling mirror to prevent cascading breaker trips.' },
      { parameter: 'Hot Water Generation', detail: 'Dual 300L/500L central commercial water storage tanks with secondary recirculation loops.' },
      { parameter: 'Spa Hydrotherapy', detail: 'Dedicated 3-phase feeds for steam generators and Jacuzzi whirlpool pumps.' }
    ],
    requiredDocs: [
      'DET Commercial Salon / Wellness Trade License',
      'Ejari tenancy registration and floor layout plan',
      'Hair wash basin and spa equipment schedule',
      'Landlord fit-out authorization letter'
    ],
    processSteps: [
      { step: '01', title: 'Styling & Hydraulic Take-Off', detail: 'Calculate simultaneous hair dryer demand and hot water peak shower flow.' },
      { step: '02', title: 'DEWA Load & Plumbing Submission', detail: 'Prepare stamped SLD and water schematic for DEWA and municipal approval.' },
      { step: '03', title: 'Plumbing & Electrical First Fix', detail: 'Install fusion-welded PPR hot water loops, hair traps, and RCD-protected socket drops.' },
      { step: '04', title: 'Testing & Handover', detail: 'Conduct 10-bar hydraulic testing and thermal imaging of salon distribution boards.' }
    ],
    projectExample: {
      title: 'Luxury Hair Boutique & Day Spa',
      location: 'Dubai Marina Mall Promenade',
      scope: '75 kW electrical capacity enhancement, 12 styling station power circuits, 600L central water heating skid, and Moroccan bath drainage.',
      outcome: 'Handed over on time with zero breaker tripping under peak weekend client load.'
    },
    faqs: [
      {
        question: 'How do you prevent hot water running cold during peak salon hours?',
        answer: 'We install commercial-grade dual water heating plants paired with a continuous bronze recirculation pump, ensuring instant 55°C water at every shampoo basin.'
      }
    ]
  },
  {
    slug: 'gym-fitness-mep',
    title: 'Gym & Fitness Center MEP Fit-Out Dubai',
    metaTitle: 'Gym & Fitness Center MEP Fit-Out Dubai | Sports MEP | Abbadi Tech',
    metaDescription: 'Commercial gym and fitness studio MEP contracting in Dubai. High-capacity HVAC ventilation, sauna 3-phase power & locker room plumbing: +971 50 554 6943.',
    h1: 'Gym & Fitness Center MEP Engineering & DEWA Approvals in Dubai',
    badge: 'Fitness Engineering · High Ventilation & Locker Plumbing',
    directAnswer: 'Gym and fitness center fit-outs in Dubai require heavy electrical infrastructure for motorized cardio equipment and sauna rooms, high fresh air ventilation rates, and high-volume locker room plumbing. Abbadi Tech manages complete MEP engineering from DEWA power upgrades through municipal drainage clearance.',
    overview: 'High-density workout zones generate substantial sensible and latent heat loads. Our MEP designs integrate heavy ventilation ductwork, cardio machine floor trenches, and acoustic drainage for shower banks.',
    authorities: [
      { name: 'DEWA', role: 'Commercial power load calculation, Single-Line Diagram, and fit-out NOC' },
      { name: 'Dubai Municipality (Public Safety)', role: 'Air change rates (ACH) and shower drainage sanitary standards' },
      { name: 'Dubai Civil Defence', role: 'Open workout floor fire sprinkler coverage and illuminated egress paths' }
    ],
    loadConsiderations: [
      { parameter: 'Treadmill Power Grid', detail: 'Sub-floor cable duct networks delivering isolated circuits for motorized running machines.' },
      { parameter: 'Sauna & Steam Generators', detail: 'Dedicated 3-phase 18kW to 36kW heavy power lines with heat-rated cabling.' },
      { parameter: 'Chilled Water HVAC', detail: 'Multiple FCU units with modulating dampers for constant 20°C workout temperatures.' }
    ],
    requiredDocs: [
      'Ejari & DET Commercial Sports / Fitness License',
      'Architectural zoning plan (cardio, free weights, lockers, wet areas)',
      'Fitness equipment electrical power schedule',
      'Base-building chilled water and electrical intake capacity details'
    ],
    processSteps: [
      { step: '01', title: 'HVAC & Power Load Profiling', detail: 'Calculate fresh air requirements (CFM) and simultaneous cardio machine amperage.' },
      { step: '02', title: 'DEWA Substation Check & NOC', detail: 'Verify transformer capacity for sauna heaters and submit electrical drawings.' },
      { step: '03', title: 'First Fix Rough-In', detail: 'Install floor raceways, shower drainage stacks, and booster pump manifolds.' },
      { step: '04', title: 'Commissioning & Handover', detail: 'Balance air distribution and conduct Megger insulation tests across all equipment.' }
    ],
    projectExample: {
      title: 'Boutique Functional Training & Recovery Studio',
      location: 'Al Quoz Commercial District, Dubai',
      scope: '110 kW power upgrade, 10-shower locker room water supply skid, Finnish sauna 3-phase heating, and industrial-chic exposed cable trays.',
      outcome: 'Delivered in 28 working days with full DEWA and municipal completion certification.'
    },
    faqs: [
      {
        question: 'Do commercial treadmills need dedicated electrical circuits?',
        answer: 'Yes. Commercial treadmills generate transient inrush current during acceleration that can trip shared circuits; we design dedicated 16A circuits per 2–3 machines.'
      }
    ]
  },
  {
    slug: 'retail-showroom-mep',
    title: 'Retail Store & Showroom MEP Fit-Out Dubai',
    metaTitle: 'Retail & Showroom MEP Fit-Out Dubai | Mall Approvals | Abbadi Tech',
    metaDescription: 'Flagship retail store & showroom MEP fit-outs in Dubai. Dubai Mall, Mall of the Emirates, DIFC & boulevard boutiques. DEWA approvals: +971 50 554 6943.',
    h1: 'Retail Store & Showroom MEP Contracting in Dubai Malls & Towers',
    badge: 'Luxury Retail · Emaar & Majid Al Futtaim Approved',
    directAnswer: 'Retail stores and luxury showrooms in Dubai demand high-specification architectural lighting, clean concealed power distribution, and fast-track mall authority approvals. Abbadi Tech delivers turnkey retail MEP contracting inside premier destinations including The Dubai Mall, Mall of the Emirates, and DIFC Gate Avenue.',
    overview: 'High-end retail fit-outs operate on aggressive handover schedules with strict mall night-shift working rules. We engineer CRI 95+ lighting tracks, concealed floor power boxes for display islands, and POS power infrastructure.',
    authorities: [
      { name: 'DEWA', role: 'Commercial tenancy fit-out NOC, Single-Line Diagram, and meter inspection' },
      { name: 'Mall Management (Emaar, MAF, Nakheel)', role: 'Base-building fit-out guide adherence and night-permit authorization' },
      { name: 'Civil Defence', role: 'Sprinkler head drops and central battery emergency exit lights' }
    ],
    loadConsiderations: [
      { parameter: 'Lighting Power Density', detail: 'Designed to conform to green building regulations (<12 W/m²) using high-efficiency LED drivers.' },
      { parameter: 'Display Power Drops', detail: 'Underfloor conduit raceways feeding illuminated display vitrines and cash registers.' },
      { parameter: 'Night-Shift Working', detail: 'Silenced tools and dust-containment partitions matching mall regulations.' }
    ],
    requiredDocs: [
      'Mall Tenancy Lease Agreement & Work Permit Application',
      'Reflected Ceiling Plan (RCP) with lighting circuit distribution',
      'Single-Line Diagram stamped by enrolled electrical engineer',
      'Contractor insurance and security deposit documentation'
    ],
    processSteps: [
      { step: '01', title: 'Mall MEP Coordination', detail: 'Review landlord electrical tap-off unit and chilled water BTU metering.' },
      { step: '02', title: 'DEWA Fit-Out NOC', detail: 'Submit tenant electrical load file to DEWA for rapid 3–5 day NOC issuance.' },
      { step: '03', title: 'Overnight Installation', detail: 'Execute ceiling tray installation, wiring pulls, and lighting bracket suspension.' },
      { step: '04', title: 'Mall & DEWA Handover', detail: 'Complete insulation testing, attend mall engineer walkthrough, and energize store power.' }
    ],
    projectExample: {
      title: 'Luxury Swiss Horology Flagship Boutique',
      location: 'Fashion Avenue, The Dubai Mall',
      scope: 'CRI 97 architectural spotlighting, dual-UPS security showcase power, concealed executive washroom plumbing, and night-shift execution.',
      outcome: 'Secured flawless authority sign-off 4 days ahead of scheduled grand opening.'
    },
    faqs: [
      {
        question: 'How fast can you obtain a DEWA fit-out NOC for a mall retail shop?',
        answer: 'With complete tenant drawings and landlord consent, we secure standard retail DEWA fit-out NOCs within 3 to 5 business days.'
      }
    ]
  },
  {
    slug: 'office-commercial-mep',
    title: 'Corporate Office MEP Fit-Out Dubai',
    metaTitle: 'Corporate Office MEP Fit-Out Dubai | Commercial Towers | Abbadi Tech',
    metaDescription: 'Commercial office MEP contracting in Dubai. DIFC, Business Bay & Downtown high-rises. Dual UPS, server room power & DEWA NOCs: +971 50 554 6943.',
    h1: 'Corporate Office MEP Engineering & Fit-Out Services in Dubai',
    badge: 'Corporate Infrastructure · DIFC & Business Bay',
    directAnswer: 'Abbadi Tech provides turnkey MEP contracting for corporate headquarters, financial offices, and multinational commercial suites across Dubai’s prime office towers. We engineer server room precision power, underfloor busway cabling, acoustic drainage, and DEWA fit-out approvals.',
    overview: 'Modern corporate offices depend on reliable power distribution, ergonomic lighting, and redundant data center feeds. We work seamlessly within high-rise commercial towers along Sheikh Zayed Road, Downtown, and Business Bay.',
    authorities: [
      { name: 'DEWA', role: 'Sub-DB load design, energy metering, and commercial fit-out NOC' },
      { name: 'Civil Defence (DCD)', role: 'Fire sprinkler repositioning, smoke detector address programming, escape lighting' },
      { name: 'Tower Management', role: 'Concordia (JLT), DIFC Authority, or building landlord technical approval' }
    ],
    loadConsiderations: [
      { parameter: 'Workstation Density', detail: 'Underfloor power modules (Grommets) providing clean power and dedicated clean-earth circuits.' },
      { parameter: 'Server Room UPS', detail: 'Isolated online double-conversion UPS feeds with dedicated distribution boards.' },
      { parameter: 'Meeting Room AV', detail: 'Concealed power and acoustic lagging for motorized blinds and conference systems.' }
    ],
    requiredDocs: [
      'Ejari & DET Commercial Corporate Trade License',
      'Architectural space plan and reflected ceiling plan (CAD)',
      'Server room power requirement specifications',
      'Building landlord fit-out NOC'
    ],
    processSteps: [
      { step: '01', title: 'Tower MEP Audit', detail: 'Inspect floor distribution boards, busway tap-offs, and chilled water valve assemblies.' },
      { step: '02', title: 'DEWA NOC Submission', detail: 'Prepare stamped SLD and load schedule for DEWA online portal approval.' },
      { step: '03', title: 'First & Second Fix Execution', detail: 'Pull fire-rated cabling through raised access flooring and install acoustic drainage.' },
      { step: '04', title: 'Final Handover', detail: 'Test thermal balance on server DBs and obtain DEWA final completion certificate.' }
    ],
    projectExample: {
      title: 'International Investment Banking Regional HQ',
      location: 'DIFC Gate Precinct, Dubai',
      scope: 'Dual 40kVA UPS installation, 140 workstation underfloor power drops, board room DALI dimming, and executive restroom sanitary fit-out.',
      outcome: 'Handed over on time with zero operational disruption to neighboring tenancies.'
    },
    faqs: [
      {
        question: 'Do we need a new DEWA meter for a partitioned commercial office?',
        answer: 'If the commercial unit is legally sub-divided with a separate Ejari and DET license, a separate DEWA smart sub-meter application can be filed.'
      }
    ]
  },
  {
    slug: 'warehouse-industrial-mep',
    title: 'Warehouse & Industrial Facility MEP Contracting Dubai',
    metaTitle: 'Warehouse Electrical & MEP Contractor Dubai | Industrial | Abbadi Tech',
    metaDescription: 'Industrial warehouse MEP contracting in Dubai: Al Quoz, DIP, Jebel Ali & Dubai South. 3-phase power, heavy MDB switchgear & high-bay lighting: +971 50 554 6943.',
    h1: 'Industrial Warehouse MEP Engineering & High-Power Upgrades in Dubai',
    badge: 'Heavy Industrial · High-Voltage Power & Cold Storage',
    directAnswer: 'Abbadi Tech delivers industrial electrical and MEP contracting for warehouses, manufacturing plants, and logistics facilities across Dubai’s industrial corridors (Al Quoz, DIP, Jebel Ali, Dubai South). We engineer heavy MDB switchboards up to 2500A, busbar trunking, high-bay LED lighting, and high-capacity drainage.',
    overview: 'Industrial plots require substantial power infrastructure to drive cold storage compressors, automated conveyor systems, and overhead cranes. We manage high-amperage substation upgrades, industrial earthing mats, and municipal industrial waste clearances.',
    authorities: [
      { name: 'DEWA', role: 'Major power load additions (>100kW to 1MW+), substation clearances, and MV/LV cables' },
      { name: 'Dubai Municipality / Free Zone', role: 'Industrial drainage, sand/oil interceptor clearance, building permit' },
      { name: 'Civil Defence', role: 'High-expansion foam suppression, hazardous area classification, fire hydrant feeds' }
    ],
    loadConsiderations: [
      { parameter: 'Heavy Machinery Power', detail: '3-phase 415V distribution with dedicated motor control centers (MCC) and soft starters.' },
      { parameter: 'Power Factor Correction', detail: 'Automatic capacitor banks to eliminate DEWA low power factor surcharge penalties.' },
      { parameter: 'High-Bay Lighting', detail: 'Low-glare high-bay industrial luminaires delivering 300+ lux at floor level.' }
    ],
    requiredDocs: [
      'Plot Affection Plan (Krooki) & Industrial Trade License',
      'Industrial machinery equipment wattage and motor starting schedules',
      'Existing DEWA electricity bill and substation single-line diagram',
      'Civil Defence approved industrial layout'
    ],
    processSteps: [
      { step: '01', title: 'Industrial Load Survey', detail: 'Audit peak motor starting surges and calculate total connected kVA requirement.' },
      { step: '02', title: 'DEWA Substation Feasibility', detail: 'Submit load enhancement and feeder alignment drawings to DEWA Industrial Division.' },
      { step: '03', title: 'Heavy Electrical Installation', detail: 'Erect free-standing MDB panels, pull multi-core armored cables, and install cable ladders.' },
      { step: '04', title: 'Testing & Authority Commissioning', detail: 'Perform 1000V Megger insulation tests and coordinate live DEWA transformer release.' }
    ],
    projectExample: {
      title: 'Automated Logistics & Cold-Chain Warehouse',
      location: 'Dubai Investments Park (DIP 2)',
      scope: '450 kW power load upgrade, 800A Form 4 MDB assembly, capacitor bank installation, cold-room evaporator circuits, and 12-meter high-bay lighting.',
      outcome: 'Commissioned within 6 weeks, eliminating diesel generator operational costs.'
    },
    faqs: [
      {
        question: 'What is the DEWA power factor penalty for industrial warehouses?',
        answer: 'DEWA mandates a power factor of at least 0.95 lagging. If industrial motors cause the power factor to drop below this threshold, DEWA levies significant monthly surcharge penalties. We install automatic capacitor banks to prevent this.'
      }
    ]
  },
  {
    slug: 'villa-residential-mep',
    title: 'Villa & Residential MEP Contracting Dubai',
    metaTitle: 'Villa MEP Contractor Dubai | Luxury Residential MEP | Abbadi Tech',
    metaDescription: 'Turnkey luxury villa MEP contracting in Dubai: Palm Jumeirah, Emirates Hills, Dubai Hills & Jumeirah. Electrical load upgrades, smart panels & plumbing: +971 50 554 6943.',
    h1: 'Luxury Villa MEP Engineering & Renovation Contracting in Dubai',
    badge: 'Luxury Residential · Turnkey Villa MEP Handover',
    directAnswer: 'Abbadi Tech provides turnkey residential MEP contracting for luxury villas and private estates across Dubai. From electrical load upgrades for central AC and swimming pools to soundproof acoustic drainage and smart home automation panels, we deliver master craftsmanship with complete DEWA approvals.',
    overview: 'High-end villas demand quiet, leak-free hydraulics, elegant concealed electrical fittings, and robust power capacity. We provide dedicated engineering teams for private residences across Palm Jumeirah, Emirates Hills, Dubai Hills, and Jumeirah.',
    authorities: [
      { name: 'DEWA', role: 'Villa power capacity enhancement, water meter connection, and electrical NOC' },
      { name: 'Dubai Municipality / Nakheel / Emaar', role: 'Villa structural modification permit and master developer approval' },
      { name: 'Civil Defence', role: 'Residential smoke alarm integration (Hassantuk)' }
    ],
    loadConsiderations: [
      { parameter: 'Air Conditioning Loads', detail: 'Ducted split and VRF systems requiring balanced 3-phase power distribution.' },
      { parameter: 'Swimming Pool Equipment', detail: 'Dedicated outdoor IP65 sub-DB powering pool pumps, chillers, and saltwater chlorinators.' },
      { parameter: 'EV Charging Power', detail: '32A 3-phase supply for fast residential electric vehicle charging.' }
    ],
    requiredDocs: [
      'Title Deed & Owner Passport/Emirates ID Copy',
      'Affection Plan (Krooki) and Existing DEWA Account Bills',
      'Villa architectural extension or renovation drawings',
      'Master community developer NOC (Nakheel, Emaar, Dubai Holding)'
    ],
    processSteps: [
      { step: '01', title: 'Villa Site Audit', detail: 'Inspect consumer boards, earth pit resistance, and water booster pump pressures.' },
      { step: '02', title: 'DEWA Load Upgrade', detail: 'Calculate expanded load and secure DEWA approval for additional kW capacity.' },
      { step: '03', title: 'First Fix Execution', detail: 'Run conduits, install PPR potable loops, and wire central lighting control panels.' },
      { step: '04', title: 'Testing & Commissioning', detail: 'Conduct 10-bar hydrostatic pipe testing and balance phase loads under full AC operation.' }
    ],
    projectExample: {
      title: 'Beachfront Signature Mansion Renovation',
      location: 'Palm Jumeirah Fronds, Dubai',
      scope: 'Turnkey MEP renovation: 120 kW electrical upgrade, smart lighting switchgear, central solar water heating loop, and pool pump electrification.',
      outcome: 'Completed with zero disturbance to neighbors and full DEWA final sign-off.'
    },
    faqs: [
      {
        question: 'Can you upgrade the electrical power of an older villa?',
        answer: 'Yes. We inspect the incoming feeder line from the street pillar, calculate the required additional load, submit the application to DEWA, and upgrade the villa consumer unit.'
      }
    ]
  }
];
