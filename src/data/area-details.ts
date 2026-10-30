export interface AreaDetail {
  slug: string;
  name: string;
  districtType: 'Commercial Tower' | 'Financial Free Zone' | 'Luxury Waterfront' | 'Industrial & Logistics' | 'Master Community Residential' | 'Historic Commercial';
  metaTitle: string;
  metaDescription: string;
  h1: string;
  badge: string;
  directAnswer: string;
  overview: string;
  localAuthorities: string[];
  buildingTypes: string[];
  engineeringChallenges: string[];
  keyLandmarks: string[];
  dispatchTime: string;
  projectArchetype: { title: string; scope: string; outcome: string };
  faqs: { question: string; answer: string }[];
  geo: { lat: number; lng: number };
}

export const areaDetailsList: AreaDetail[] = [
  {
    slug: 'business-bay',
    name: 'Business Bay',
    districtType: 'Commercial Tower',
    metaTitle: 'MEP & DEWA Contractor Business Bay Dubai | Abbadi Tech',
    metaDescription: 'Specialist MEP and DEWA electrical contractors in Business Bay, Dubai. Corporate office fit-outs, restaurant kitchens & DB upgrades: +971 50 554 6943.',
    h1: 'Electrical, Plumbing & DEWA Approval Services in Business Bay, Dubai',
    badge: 'Commercial District · 15–25 Min Site Dispatch',
    directAnswer: 'Abbadi Tech delivers certified electrical, commercial plumbing, and fast-track DEWA approvals in Business Bay, Dubai. Located minutes away via Al Khail Road, we provide corporate office power upgrades, high-rise chilled water FCU connections, restaurant grease trap drainage, and landlord fit-out coordination.',
    overview: 'Business Bay is Dubai’s high-density corporate hub along Marasi Drive and the Dubai Canal. High-rise commercial towers feature centralized chilled water infrastructure and strict landlord fit-out manuals requiring precision engineering and rapid authority approvals.',
    localAuthorities: ['Dubai Electricity and Water Authority (DEWA)', 'Dubai Municipality Building Department', 'Dubai Civil Defence', 'Building Owners Associations (OA)'],
    buildingTypes: ['High-rise corporate office towers (The Opus, Bay Square, Executive Towers)', 'Canal-front fine dining restaurants and cafes', 'Boutique hotel serviced apartments'],
    engineeringChallenges: [
      'High-rise acoustic drainage stacks to prevent wastewater noise in executive office suites',
      'BTU meter integration with district cooling networks (Empower)',
      'Tight service core riser access for 3-phase sub-main cable pulling'
    ],
    keyLandmarks: ['Bay Square', 'The Opus by Omniyat', 'Executive Towers', 'Marasi Drive Canal Promenade'],
    dispatchTime: '15 to 25 minutes from our central Al Khail base',
    projectArchetype: {
      title: 'Corporate Financial Advisory Suite',
      scope: 'Dual 25kVA UPS power, 85 workstation underfloor power drops, and conference room DALI lighting controls in Bay Square.',
      outcome: 'Secured DEWA fit-out NOC in 3 days with zero base-building landlord punch points.'
    },
    faqs: [
      {
        question: 'How fast can you mobilize for a site survey in Business Bay?',
        answer: 'Because our headquarters is located just off Al Khail Road, our engineering team can conduct on-site surveys anywhere in Business Bay within 2 to 4 hours.'
      }
    ],
    geo: { lat: 25.1857, lng: 55.2676 }
  },
  {
    slug: 'downtown-dubai',
    name: 'Downtown Dubai',
    districtType: 'Commercial Tower',
    metaTitle: 'MEP Contractor Downtown Dubai & Dubai Mall | Abbadi Tech',
    metaDescription: 'Certified MEP contracting in Downtown Dubai and The Dubai Mall. Fashion boutiques, luxury dining & boulevard office electrical: +971 50 554 6943.',
    h1: 'MEP Contracting & DEWA Approvals in Downtown Dubai & Dubai Mall',
    badge: 'Flagship Retail · Emaar Approved Contractor Standards',
    directAnswer: 'Abbadi Tech provides certified MEP contracting and DEWA approval coordination across Downtown Dubai and The Dubai Mall. We specialize in luxury boutique architectural lighting, mall night-shift fit-outs, fine dining grease traps, and strict Emaar tenant manual compliance.',
    overview: 'Downtown Dubai represents the pinnacle of commercial prestige. Working in high-profile properties surrounding the Burj Khalifa requires absolute precision, flawless noise control, and seamless authority permitting.',
    localAuthorities: ['DEWA Head Office liaison', 'Emaar Properties Tenant Coordination Delivery (TCD)', 'Dubai Civil Defence'],
    buildingTypes: ['Super-regional shopping mall tenancies (The Dubai Mall Fashion Avenue)', 'Boulevard retail showrooms and fine dining', 'Ultra-luxury high-rise penthouses'],
    engineeringChallenges: [
      'Strict night-shift execution rules (11:00 PM to 7:00 AM) inside shopping malls',
      'Stringent acoustic and vibration decoupling for ceiling-suspended FCUs',
      'High-CRI (>95) architectural retail track lighting heat dissipation'
    ],
    keyLandmarks: ['The Dubai Mall (Fashion Avenue)', 'Sheikh Mohammed bin Rashid Boulevard', 'Burj Khalifa District', 'Dubai Opera'],
    dispatchTime: '20 to 30 minutes from our central Al Khail base',
    projectArchetype: {
      title: 'Haute Horlogerie Retail Flagship',
      scope: 'CRI 98 optical showcase spotlighting, dual-redundant UPS, concealed washroom plumbing, and night-shift execution.',
      outcome: 'Passed Emaar final inspection with zero defects 4 days ahead of ribbon cutting.'
    },
    faqs: [
      {
        question: 'Do you handle night-shift permits for The Dubai Mall?',
        answer: 'Yes. We manage complete Emaar contractor gate passes, night work permits, material delivery logistics, and clean-down protocols.'
      }
    ],
    geo: { lat: 25.1972, lng: 55.2744 }
  },
  {
    slug: 'difc',
    name: 'DIFC (Dubai International Financial Centre)',
    districtType: 'Financial Free Zone',
    metaTitle: 'MEP Contractor DIFC Dubai | Gate Precinct Fit-Outs | Abbadi Tech',
    metaDescription: 'Specialist MEP and electrical contractor in DIFC Dubai. Bank branches, Michelin-star dining, corporate suites & DIFC Authority NOCs: +971 50 554 6943.',
    h1: 'Electrical, Plumbing & MEP Engineering in DIFC, Dubai',
    badge: 'Financial Free Zone · DIFC Authority Compliance',
    directAnswer: 'Abbadi Tech delivers precision MEP engineering and authority approvals in DIFC (Dubai International Financial Centre). We handle banking dual-UPS power grids, server room precision cooling, Michelin-caliber restaurant drainage, and direct DIFC Authority / DEWA permitting.',
    overview: 'As the UAE’s leading financial free zone, DIFC imposes rigorous building codes and independent authority oversight. We navigate both free zone regulations and DEWA requirements to deliver compliant installations across Gate Village, Gate Precinct, and Gate Avenue.',
    localAuthorities: ['DIFC Authority Building Control Directorate', 'DEWA', 'Dubai Civil Defence'],
    buildingTypes: ['Tier-1 international banking institutions and corporate headquarters', 'Michelin-guide fine dining restaurants and private lounges', 'Art galleries and luxury retail in Gate Avenue'],
    engineeringChallenges: [
      'Mission-critical server room redundant power feeds with automatic transfer switches (ATS)',
      'Complex high-volume kitchen grease interceptors and odor control scrubbers',
      'Free zone independent building permit and inspection milestones'
    ],
    keyLandmarks: ['DIFC Gate Precinct', 'Gate Village', 'Gate Avenue', 'Index Tower'],
    dispatchTime: '20 to 30 minutes',
    projectArchetype: {
      title: 'Regional Asset Management Trading Floor',
      scope: 'Dedicated 60kVA online double-conversion UPS, 120 underfloor workstation power drops, and executive restroom plumbing.',
      outcome: 'Delivered in 24 working days with full DIFC Authority and DEWA completion clearance.'
    },
    faqs: [
      {
        question: 'Does DIFC require a separate permit in addition to DEWA?',
        answer: 'Yes. DIFC operates an independent building control directorate that reviews architectural and MEP drawings in parallel with DEWA electrical submissions.'
      }
    ],
    geo: { lat: 25.2104, lng: 55.2818 }
  },
  {
    slug: 'dubai-marina',
    name: 'Dubai Marina',
    districtType: 'Luxury Waterfront',
    metaTitle: 'MEP Contractor Dubai Marina | Waterfront Fit-Outs | Abbadi Tech',
    metaDescription: 'Licensed MEP contractors in Dubai Marina. Waterfront restaurant grease traps, marina retail, apartment DB upgrades & DEWA approvals: +971 50 554 6943.',
    h1: 'MEP Engineering & DEWA Approval Services in Dubai Marina',
    badge: 'Waterfront Commercial · Marine Salt Resistance',
    directAnswer: 'Abbadi Tech provides specialized MEP contracting and DEWA approval coordination across Dubai Marina. From waterfront promenade dining on JBR Walk to luxury retail in Dubai Marina Mall and residential electrical panel upgrades, we deliver high-spec engineering built to withstand marine environments.',
    overview: 'Dubai Marina’s dense high-rise profile and waterfront promenade require durable MEP components resistant to humid, saline air. We install marine-grade stainless steel enclosures, corrosion-proof cable containment, and high-efficiency water booster pump stations.',
    localAuthorities: ['DEWA', 'Dubai Municipality', 'Emaar Community Management / Dubai Marina Mall Operations'],
    buildingTypes: ['Waterfront promenade dining terraces and cafes', 'Marina Mall retail outlets', 'High-density residential towers and penthouses'],
    engineeringChallenges: [
      'Salt-fog atmospheric corrosion requiring 316 stainless steel and IP66 outdoor enclosures',
      'High kitchen drainage grease loads from high-turnover waterfront restaurants',
      'Elevated water pressure management in 60+ story residential towers'
    ],
    keyLandmarks: ['Dubai Marina Walk', 'Dubai Marina Mall Promenade', 'JBR The Walk', 'Marina Promenade'],
    dispatchTime: '25 to 35 minutes',
    projectArchetype: {
      title: 'Waterfront Italian Dining & Terrace',
      scope: 'Complete commercial kitchen drainage, 110 kW power upgrade for induction cooking, and weatherproof terrace lighting.',
      outcome: 'Secured DEWA and municipal food safety clearances with zero operational delays.'
    },
    faqs: [
      {
        question: 'How do you protect electrical equipment from marine corrosion in Dubai Marina?',
        answer: 'We utilize powder-coated marine-grade aluminum or 316 stainless steel outdoor isolators, UV-stabilized conduits, and IP66 seals to prevent salt air degradation.'
      }
    ],
    geo: { lat: 25.0784, lng: 55.1408 }
  },
  {
    slug: 'jlt',
    name: 'Jumeirah Lakes Towers (JLT)',
    districtType: 'Financial Free Zone',
    metaTitle: 'MEP Contractor JLT Dubai | Concordia & DEWA Approvals | Abbadi Tech',
    metaDescription: 'Certified MEP and DEWA electrical contractor in JLT (DMCC Free Zone). Office fit-outs, cluster retail & Concordia permits: +971 50 554 6943.',
    h1: 'Electrical, Plumbing & Concordia Fit-Out MEP in JLT, Dubai',
    badge: 'DMCC Free Zone · Concordia Permit Specialist',
    directAnswer: 'Abbadi Tech delivers turnkey MEP contracting and DEWA approvals across all 26 clusters of Jumeirah Lakes Towers (JLT). As a DMCC-experienced contractor, we manage Concordia building permits, retail grease trap connections, corporate office power distribution, and air-conditioning FCU retrofits.',
    overview: 'Operating in JLT requires seamless coordination with Concordia Building Management as well as DEWA. We have delivered MEP projects across commercial clusters, basement podium retail, and residential towers in JLT since 2005.',
    localAuthorities: ['Concordia Operations & Building Control', 'DMCC Free Zone Authority', 'DEWA'],
    buildingTypes: ['DMCC corporate office towers', 'Podium lake-level cafes and supermarkets', 'Mid-rise and high-rise mixed-use buildings'],
    engineeringChallenges: [
      'Concordia fit-out submission requirements and strict security pass procedures',
      'Condensate drainage line routing to prevent ceiling leaks in corporate suites',
      'District cooling chilled water modulating valve calibration'
    ],
    keyLandmarks: ['JLT Clusters A through Z', 'Almas Tower', 'JLT Central Park', 'DMCC Business Hub'],
    dispatchTime: '25 to 35 minutes',
    projectArchetype: {
      title: 'Corporate Commodity Trading Office',
      scope: '65 workstation power infrastructure, server room backup generator feed, and executive washroom plumbing in Cluster I.',
      outcome: 'Achieved Concordia and DEWA permit approvals within 5 business days.'
    },
    faqs: [
      {
        question: 'Do you handle Concordia security passes and fit-out deposits for JLT?',
        answer: 'Yes. We compile all required contractor documentation, risk assessments, and method statements to obtain Concordia fit-out permits smoothly.'
      }
    ],
    geo: { lat: 25.0747, lng: 55.1485 }
  },
  {
    slug: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    districtType: 'Luxury Waterfront',
    metaTitle: 'Villa MEP Contractor Palm Jumeirah Dubai | Abbadi Tech',
    metaDescription: 'Premier MEP contractor for Palm Jumeirah luxury villas and beachfront restaurants. Frond mansions, pool pumps, smart power & DEWA load upgrades: +971 50 554 6943.',
    h1: 'Luxury Villa & Beachfront MEP Contracting on Palm Jumeirah, Dubai',
    badge: 'Ultra-Luxury · Frond Signature Mansions & Nakheel NOCs',
    directAnswer: 'Abbadi Tech provides ultra-luxury MEP contracting for private beachfront mansions, frond villas, and hospitality venues across Palm Jumeirah. We engineer smart home power distribution, swimming pool heating/cooling electricals, central solar hot water plants, and Nakheel/DEWA load upgrades.',
    overview: 'Palm Jumeirah properties require whisper-quiet MEP systems, meticulous aesthetic finishes, and marine-grade salt-spray corrosion protection. We have executed electrical and hydraulic installations on private beachfront mansions across Fronds A through P.',
    localAuthorities: ['Nakheel Tenancy & Architectural Control', 'DEWA', 'Dubai Municipality'],
    buildingTypes: ['Signature beachfront mansions and custom villas on Fronds A–P', 'Waterfront dining venues (The Pointe, Palm West Beach)', 'Five-star hotel luxury beach clubs'],
    engineeringChallenges: [
      'Extreme coastal humidity and salt air requiring IP68 marine components',
      'Heavy pool chiller and central water heating power demands requiring DEWA substation load upgrades',
      'Whisper-quiet acoustic drainage preventing pipe vibration in luxury master bedrooms'
    ],
    keyLandmarks: ['Palm Jumeirah Fronds', 'The Crescent & Atlantis', 'Palm West Beach', 'Golden Mile'],
    dispatchTime: '30 to 45 minutes',
    projectArchetype: {
      title: 'Custom Frond Beachfront Mansion Renovation',
      scope: '160 kW DEWA power enhancement, KNX smart lighting cabinets, central solar water loop, and landscape pool power.',
      outcome: 'Delivered turnkey handover with zero noise intrusion and complete Nakheel completion certificate.'
    },
    faqs: [
      {
        question: 'Can you upgrade the electrical load for an older Palm Jumeirah villa?',
        answer: 'Yes. We inspect the boundary service pillar, calculate new AC and pool equipment requirements, submit the upgrade to DEWA, and replace the main distribution board.'
      }
    ],
    geo: { lat: 25.1124, lng: 55.1390 }
  },
  {
    slug: 'al-quoz',
    name: 'Al Quoz Industrial Area',
    districtType: 'Industrial & Logistics',
    metaTitle: 'Industrial Electrician & MEP Contractor Al Quoz Dubai | Abbadi Tech',
    metaDescription: 'Industrial MEP contractors headquartered in Al Quoz, Dubai. Heavy 3-phase power, MDB switchboards, factory power upgrades & DEWA approvals: +971 50 554 6943.',
    h1: 'Industrial Electrical & MEP Contracting in Al Quoz, Dubai',
    badge: 'Central Dubai HQ · Rapid 10–15 Min Response',
    directAnswer: 'Headquartered in the Oberoi Properties Building behind Al Khail Mall, Abbadi Tech is Al Quoz’s home MEP and electrical contractor. We deliver heavy 3-phase industrial power installations, MDB panel fabrication up to 2500A, power factor capacitor banks, and warehouse cold-storage electrical upgrades.',
    overview: 'Al Quoz is Dubai’s creative, commercial, and industrial heartland. From art galleries and fitness complexes along Alserkal Avenue to heavy fabrication workshops in Al Quoz 1–4, we provide rapid, local engineering dispatch.',
    localAuthorities: ['Dubai Electricity and Water Authority (DEWA)', 'Dubai Municipality Industrial Waste Division', 'Dubai Civil Defence'],
    buildingTypes: ['Industrial manufacturing workshops and commercial warehouses', 'Automotive service centers and custom paint booths', 'Fitness centers, design studios, and contemporary galleries'],
    engineeringChallenges: [
      'Managing heavy motor inrush currents and prospective short-circuit fault levels',
      'Preventing DEWA low power factor surcharge penalties with automatic capacitor banks',
      'Industrial grease and oil interceptor drainage for commercial automotive workshops'
    ],
    keyLandmarks: ['Behind Al Khail Mall', 'Alserkal Avenue', 'Al Quoz Industrial 1, 2, 3 & 4', 'Grand City Mall Corridor'],
    dispatchTime: '10 to 15 minutes (Immediate local mobilization)',
    projectArchetype: {
      title: 'Commercial Fitness Hub & Creative Studio',
      scope: '120 kW power upgrade, exposed ceiling galvanized cable trays, commercial shower drainage, and high-bay lighting.',
      outcome: 'Completed on-site in 21 days with instant DEWA inspection sign-off.'
    },
    faqs: [
      {
        question: 'How close is your technical facility to Al Quoz industrial sites?',
        answer: 'Our main office and technical workshop are situated directly in the Al Quoz corridor behind Al Khail Mall, enabling our engineers to arrive on your site within minutes.'
      }
    ],
    geo: { lat: 25.1384, lng: 55.2348 }
  },
  {
    slug: 'al-barsha',
    name: 'Al Barsha',
    districtType: 'Master Community Residential',
    metaTitle: 'MEP & DEWA Contractor Al Barsha Dubai | Abbadi Tech',
    metaDescription: 'Certified electrical and plumbing contractors in Al Barsha 1, 2, 3 & South. Villa rewiring, commercial retail, DB panels & DEWA approvals: +971 50 554 6943.',
    h1: 'Electrical, Plumbing & DEWA Approval Services in Al Barsha, Dubai',
    badge: 'Residential & Retail · 15–20 Min Dispatch',
    directAnswer: 'Abbadi Tech provides licensed electrical contracting, villa plumbing, and commercial DEWA approval services across Al Barsha 1, 2, 3, and Al Barsha South. We specialize in residential distribution board replacements, retail fit-outs near Mall of the Emirates, and villa power capacity upgrades.',
    overview: 'Al Barsha combines vibrant commercial retail and hospitality clusters near Sheikh Zayed Road with tranquil residential villa communities. We handle everything from commercial restaurant grease traps to residential EV charger installations.',
    localAuthorities: ['DEWA', 'Dubai Municipality', 'Dubai Civil Defence'],
    buildingTypes: ['Commercial hotels and shopping complexes (near MOE)', 'Stand-alone luxury family villas in Al Barsha 2 and 3', 'Mid-rise residential apartment blocks'],
    engineeringChallenges: [
      'Modernizing aging consumer units and undersized neutral cables in older villas',
      'Integrating smart EV home charging units into existing villa electrical allocations',
      'Commercial kitchen drainage connections along busy Al Barsha commercial streets'
    ],
    keyLandmarks: ['Mall of the Emirates District', 'Al Barsha Pond Park', 'Al Barsha South Commercial', 'Barsha Heights'],
    dispatchTime: '15 to 20 minutes',
    projectArchetype: {
      title: 'Luxury Family Villa Power & AC Upgrade',
      scope: '45 kW power capacity enhancement, consumer unit replacement with RCBO protection, and central water pump manifold installation.',
      outcome: 'Achieved DEWA meter upgrade and passed inspection on first attempt.'
    },
    faqs: [
      {
        question: 'Can you fix persistent breaker trips in older Al Barsha villas?',
        answer: 'Yes. We conduct forensic Megger insulation tests to locate degraded garden wiring, faulty water heater elements, or overloaded phases, replacing faulty components cleanly.'
      }
    ],
    geo: { lat: 25.1097, lng: 55.2014 }
  },
  {
    slug: 'deira',
    name: 'Deira',
    districtType: 'Historic Commercial',
    metaTitle: 'Electrical & Plumbing Contractor Deira Dubai | Abbadi Tech',
    metaDescription: 'Experienced electrical and MEP contracting in Deira, Dubai. Gold Souk, Rigga, Port Saeed & Naif. Building rewiring & DEWA approvals: +971 50 554 6943.',
    h1: 'Electrical, Plumbing & Building Rewiring in Deira, Dubai',
    badge: 'Heritage & Commercial Trading · Complete Rewiring',
    directAnswer: 'Abbadi Tech provides certified electrical contracting, building rewiring, and DEWA utility modernization across Deira, Dubai. Operating in traditional commercial trading districts (Naif, Al Rigga, Port Saeed, Gold Souk), we upgrade aging electrical switchgear, replace corroded piping, and secure municipal clearances.',
    overview: 'Deira is one of Dubai’s foundational commercial centers. Older buildings frequently face electrical safety challenges, outdated fuse boards, and overloaded circuits that require careful modern engineering and DEWA compliance.',
    localAuthorities: ['Dubai Electricity and Water Authority (DEWA)', 'Dubai Municipality Historic Buildings / Building Control'],
    buildingTypes: ['Multi-story retail trading centers and electronics showrooms', 'Heritage commercial buildings and souk shops', 'Dense residential apartment blocks'],
    engineeringChallenges: [
      'Rewiring active commercial buildings without disrupting tenant retail operations',
      'Upgrading outdated distribution boards to meet current DEWA safety regulations',
      'Replacing legacy galvanized water supply pipes with certified PPR-80'
    ],
    keyLandmarks: ['Deira Gold Souk', 'Al Rigga Road', 'Port Saeed Commercial', 'City Centre Deira District'],
    dispatchTime: '25 to 35 minutes',
    projectArchetype: {
      title: 'Commercial Electronics Showroom Rewiring',
      scope: 'Complete removal of legacy fuse boards, installation of 3-phase SMDB with RCBOs, and LED track lighting overhaul.',
      outcome: 'Eliminated frequent fire-hazard breaker trips and secured updated DEWA certification.'
    },
    faqs: [
      {
        question: 'Can you upgrade electrical wiring in older Deira buildings without shutting down business?',
        answer: 'Yes. We organize phased night-shift installation and temporary power bypasses, ensuring retail businesses continue trading during daytime hours.'
      }
    ],
    geo: { lat: 25.2697, lng: 55.3095 }
  },
  {
    slug: 'bur-dubai',
    name: 'Bur Dubai',
    districtType: 'Historic Commercial',
    metaTitle: 'MEP Contractor Bur Dubai | Electrical & Plumbing | Abbadi Tech',
    metaDescription: 'Trusted electrical, plumbing & DEWA approval contractor in Bur Dubai: Meena Bazaar, Al Mankhool & Oud Metha. Commercial fit-outs: +971 50 554 6943.',
    h1: 'Electrical, Plumbing & MEP Contracting in Bur Dubai',
    badge: 'Commercial Hub · Meena Bazaar & Al Mankhool',
    directAnswer: 'Abbadi Tech delivers certified electrical, plumbing, and DEWA approval services across Bur Dubai. From retail textile boutiques in Meena Bazaar and corporate suites in Oud Metha to residential apartments in Al Mankhool, we provide panel replacements, drainage repairs, and authority NOCs.',
    overview: 'Bur Dubai combines bustling commercial retail markets with established residential and consulate districts. We modernize electrical risers, install commercial grease traps for high-turnover restaurants, and resolve utility compliance notices.',
    localAuthorities: ['DEWA', 'Dubai Municipality', 'Dubai Civil Defence'],
    buildingTypes: ['Retail boutiques and textile showrooms', 'Corporate offices and bank branches in Oud Metha', 'Multi-tenant residential buildings and villas in Mankhool'],
    engineeringChallenges: [
      'Restricted parking and logistics access in high-density urban streets',
      'Underground utility easement verification in established historical sectors',
      'High-amperage electrical upgrades in multi-tenant commercial centers'
    ],
    keyLandmarks: ['Meena Bazaar', 'Al Mankhool Corridor', 'Oud Metha Commercial Complex', 'Dubai Creek Edge'],
    dispatchTime: '25 to 35 minutes',
    projectArchetype: {
      title: 'Commercial Restaurant Kitchen Modernization',
      scope: 'Stainless steel grease trap installation, 65 kW power load upgrade, and acoustic kitchen drainage stacks in Al Karama/Bur Dubai.',
      outcome: 'Passed municipal food safety and DEWA electrical inspections on first submission.'
    },
    faqs: [
      {
        question: 'Do you service commercial properties in Meena Bazaar and Al Fahidi?',
        answer: 'Yes, our mobile technical vans service retail shops and offices throughout Meena Bazaar, Al Fahidi, and Mankhool daily.'
      }
    ],
    geo: { lat: 25.2532, lng: 55.2974 }
  },
  {
    slug: 'jumeirah',
    name: 'Jumeirah',
    districtType: 'Master Community Residential',
    metaTitle: 'Villa MEP Contractor Jumeirah Dubai | Abbadi Tech',
    metaDescription: 'High-spec villa MEP contractor in Jumeirah 1, 2, 3 & City Walk. Luxury villa electrical, smart switchgear & plumbing upgrades: +971 50 554 6943.',
    h1: 'Luxury Villa Electrical & Plumbing Contracting in Jumeirah, Dubai',
    badge: 'Coastal Residential · Jumeirah 1, 2 & 3',
    directAnswer: 'Abbadi Tech provides premier villa electrical and plumbing contracting across Jumeirah 1, 2, 3, and City Walk. We specialize in luxury residential power load enhancements, smart automation panels, swimming pool electrification, and potable water booster pump systems.',
    overview: 'Jumeirah is home to iconic private estates, upscale beachside clinics, and premier boutique retail along Jumeirah Beach Road. Our certified engineers deliver clean, whisper-quiet execution matching high aesthetic expectations.',
    localAuthorities: ['DEWA', 'Dubai Municipality Building Control', 'Dubai Civil Defence'],
    buildingTypes: ['Custom luxury family mansions and coastal villas', 'Aesthetic clinics and specialized healthcare centers', 'Boutique retail and dining venues on Jumeirah Beach Road'],
    engineeringChallenges: [
      'Coastal salt air corrosion requiring protective powder coating and IP66 outdoor components',
      'High electrical demand from multi-zone central air conditioning and swimming pool chillers',
      'Preserving high-end marble, parquet, and imported finishes during electrical chasing'
    ],
    keyLandmarks: ['Jumeirah Beach Road', 'City Walk Corridor', 'La Mer District', 'Jumeirah 1, 2 & 3'],
    dispatchTime: '20 to 30 minutes',
    projectArchetype: {
      title: 'Private Estate Landscape & Power Overhaul',
      scope: '90 kW villa load upgrade, automated pool pump manifold, tree and garden lighting circuit distribution, and surge protection.',
      outcome: 'Completed on schedule with zero lawn disruption and immediate DEWA sign-off.'
    },
    faqs: [
      {
        question: 'Can you install EV car chargers in private Jumeirah villas?',
        answer: 'Yes. We install Level-2 22kW and 11kW AC fast chargers with dedicated armored cabling, RCD Type B breakers, and DEWA notification.'
      }
    ],
    geo: { lat: 25.2048, lng: 55.2415 }
  },
  {
    slug: 'motor-city',
    name: 'Motor City',
    districtType: 'Master Community Residential',
    metaTitle: 'MEP Contractor Motor City Dubai | Fit-Out & Villas | Abbadi Tech',
    metaDescription: 'Certified electrical and plumbing services in Motor City, Dubai. Autodrome retail, apartment DB upgrades & townhouse MEP: +971 50 554 6943.',
    h1: 'Electrical, Plumbing & MEP Services in Motor City, Dubai',
    badge: 'Master Community · Union Properties NOC Coordination',
    directAnswer: 'Abbadi Tech delivers certified electrical contracting, plumbing maintenance, and commercial fit-out services across Motor City, Dubai. We handle retail tenancies along First Avenue Mall and Detroit Road, residential distribution board replacements in Uptown Motor City, and townhouse MEP upgrades in Green Community.',
    overview: 'Motor City combines motorsport commercial facilities and bustling shopping promenades with tranquil townhouse and apartment developments. We navigate Union Properties and DEWA regulations to deliver compliant technical handovers.',
    localAuthorities: ['DEWA', 'Union Properties Community Management', 'Dubai Municipality'],
    buildingTypes: ['Automotive commercial workshops and retail showrooms', 'Townhouses and villas in Green Community Motor City', 'Mid-rise residential apartment blocks in Uptown'],
    engineeringChallenges: [
      'High-bay lighting and heavy 3-phase power for automotive performance workshops',
      'Apartment ELCB breaker tripping caused by aging water heaters or AC fan coils',
      'Master community developer fit-out NOC review protocols'
    ],
    keyLandmarks: ['Dubai Autodrome', 'First Avenue Mall', 'Detroit Road Commercial', 'Uptown Motor City'],
    dispatchTime: '25 to 35 minutes',
    projectArchetype: {
      title: 'Automotive Performance Workshop & Showroom',
      scope: '80 kW electrical capacity expansion, 3-phase vehicle lift power drops, compressor air lines, and oil interceptor drainage.',
      outcome: 'Received DEWA and municipal safety certification within 3 weeks.'
    },
    faqs: [
      {
        question: 'Do you handle commercial retail fit-outs in First Avenue Mall?',
        answer: 'Yes. We coordinate directly with mall management for night-shift execution, drawing approvals, and DEWA NOC clearances.'
      }
    ],
    geo: { lat: 25.0475, lng: 55.2392 }
  },
  {
    slug: 'arabian-ranches',
    name: 'Arabian Ranches',
    districtType: 'Master Community Residential',
    metaTitle: 'Villa MEP Contractor Arabian Ranches Dubai | Abbadi Tech',
    metaDescription: 'Specialist villa electrical and plumbing contractor in Arabian Ranches 1, 2 & 3. Swimming pool power, garden lighting & DEWA load upgrades: +971 50 554 6943.',
    h1: 'Villa Electrical, Plumbing & Pool MEP in Arabian Ranches, Dubai',
    badge: 'Emaar Master Community · Luxury Villa Specialists',
    directAnswer: 'Abbadi Tech provides specialized villa MEP engineering and DEWA approval services across Arabian Ranches 1, 2, and 3. We deliver swimming pool electrical power, garden landscape illumination, water booster pump replacements, and electrical load enhancements for villa extensions.',
    overview: 'Arabian Ranches villas feature expansive outdoor gardens, private pools, and spacious layouts that require reliable power and water distribution. We manage Emaar Community Management (ECM) approvals and DEWA submissions end to end.',
    localAuthorities: ['DEWA', 'Emaar Community Management (ECM)', 'Dubai Municipality'],
    buildingTypes: ['Luxury family villas and townhouses across all sub-communities (Saheel, Mirador, Palmera, Alvorada)', 'Community retail centers and dining venues'],
    engineeringChallenges: [
      'Outdoor garden wiring degradation caused by high soil moisture and intense summer heat',
      'Increasing power capacity for added swimming pool chillers and patio pergolas',
      'Maintaining water pressure consistency across large double-story villa layouts'
    ],
    keyLandmarks: ['Arabian Ranches Golf Club', 'Ranches Souk', 'Al Qudra Road Access Corridor', 'Polo & Equestrian Club'],
    dispatchTime: '25 to 35 minutes',
    projectArchetype: {
      title: 'Mirador Villa Garden & Pool Electrification',
      scope: 'Dedicated outdoor IP65 sub-DB, pool heater/chiller 3-phase cabling, low-voltage garden LED pathways, and pressure tank tuning.',
      outcome: 'Completed cleanly with zero disruption to main house power and full Emaar compliance.'
    },
    faqs: [
      {
        question: 'Do I need Emaar and DEWA approval to build a swimming pool in Arabian Ranches?',
        answer: 'Yes. You need an Emaar alteration permit, a DEWA Building NOC to ensure excavation is clear of buried utility lines, and a load verification for pool pumps.'
      }
    ],
    geo: { lat: 25.0560, lng: 55.2635 }
  },
  {
    slug: 'dubai-hills',
    name: 'Dubai Hills Estate',
    districtType: 'Master Community Residential',
    metaTitle: 'MEP Contractor Dubai Hills Estate | Villas & Mall | Abbadi Tech',
    metaDescription: 'Certified MEP contractor in Dubai Hills Estate. Luxury villa modifications, Dubai Hills Mall retail fit-outs & DEWA load upgrades: +971 50 554 6943.',
    h1: 'MEP Contracting & DEWA Approvals in Dubai Hills Estate',
    badge: 'Premier Master Development · Emaar Community Standards',
    directAnswer: 'Abbadi Tech delivers certified MEP contracting and DEWA approvals across Dubai Hills Estate. From luxury custom mansions in Dubai Hills Grove and Fairways to retail store fit-outs inside Dubai Hills Mall and corporate offices in Dubai Hills Business Park, we provide turnkey engineering.',
    overview: 'Dubai Hills Estate is one of the fastest-growing modern mega-developments in Dubai. Combining luxury residential enclaves with a regional shopping mall and corporate business park, projects require strict adherence to Emaar TCD guidelines.',
    localAuthorities: ['DEWA', 'Emaar Properties TCD', 'Dubai Civil Defence'],
    buildingTypes: ['Custom golf-course mansions (Dubai Hills Grove & View)', 'Contemporary villas (Sidra, Maple, Club Villas)', 'Dubai Hills Mall retail tenancies and Business Park corporate suites'],
    engineeringChallenges: [
      'High-amperage power distribution for luxury smart home automation and pool complexes',
      'Mall tenant coordination and night-shift fire protection interlocks',
      'District cooling chilled water heat exchanger integration'
    ],
    keyLandmarks: ['Dubai Hills Mall', 'Dubai Hills Golf Club', 'Business Park', 'Boulevard Corridor'],
    dispatchTime: '15 to 25 minutes (Fast access via Al Khail Road)',
    projectArchetype: {
      title: 'Dubai Hills Mall Gourmet Dining Fit-Out',
      scope: 'Commercial kitchen grease trap, 95 kW electrical capacity hookup, emergency gas shut-off interlock, and DALI architectural lighting.',
      outcome: 'Secured Emaar handover approval and DEWA meter connection 5 days ahead of schedule.'
    },
    faqs: [
      {
        question: 'How quickly can your team reach Dubai Hills Estate?',
        answer: 'Because Dubai Hills directly borders Al Khail Road opposite our Al Quoz engineering base, our technical teams can arrive on site within 15 to 20 minutes.'
      }
    ],
    geo: { lat: 25.1112, lng: 55.2440 }
  },
  {
    slug: 'silicon-oasis',
    name: 'Dubai Silicon Oasis (DSO)',
    districtType: 'Financial Free Zone',
    metaTitle: 'MEP Contractor Dubai Silicon Oasis (DSO) | Abbadi Tech',
    metaDescription: 'Licensed MEP and electrical contractors in Dubai Silicon Oasis. Technology offices, warehouse fit-outs, villas & DSOA approvals: +971 50 554 6943.',
    h1: 'Electrical, Plumbing & MEP Services in Dubai Silicon Oasis (DSO)',
    badge: 'Technology Park · DSOA & DEWA Permitting',
    directAnswer: 'Abbadi Tech provides certified electrical, commercial plumbing, and MEP fit-out contracting in Dubai Silicon Oasis (DSO). We engineer tech office data power grids, retail fit-outs in Silicon Central Mall, light industrial warehouse power, and Cedre/Semmer villa MEP upgrades with full DSOA approvals.',
    overview: 'Dubai Silicon Oasis is an integrated technology free zone park with specialized high-tech commercial facilities, light manufacturing units, and established villa communities. We navigate DSOA Engineering Directorate regulations and DEWA submissions smoothly.',
    localAuthorities: ['Dubai Silicon Oasis Authority (DSOA)', 'DEWA', 'Dubai Civil Defence'],
    buildingTypes: ['Technology headquarters and data center office facilities', 'Light industrial warehouses and electronics assembly units', 'Cedre and Semmer Villas residential communities'],
    engineeringChallenges: [
      'High-density server room power and clean earthing for tech firms',
      'DSOA free-zone specific building permit and inspection approvals',
      'Balancing heavy cooling electrical loads in desert-edge ambient temperatures'
    ],
    keyLandmarks: ['Silicon Central Mall', 'DSO Headquarters Building', 'Cedre Villas', 'Dubai Digital Park'],
    dispatchTime: '25 to 35 minutes',
    projectArchetype: {
      title: 'Fintech Software Development Office',
      scope: '50kVA UPS power distribution, 80 clean-earth workstation points, server room FM-200 fire coordination, and executive pantry plumbing.',
      outcome: 'Delivered with full DSOA and DEWA clearance in 22 working days.'
    },
    faqs: [
      {
        question: 'Does DSO have its own electrical regulations in addition to DEWA?',
        answer: 'DEWA supplies power across DSO and enforces standard DEWA electrical codes. However, DSOA Engineering Directorate reviews architectural and MEP drawings prior to issuing site work permits.'
      }
    ],
    geo: { lat: 25.1228, lng: 55.3783 }
  },
  {
    slug: 'dubai-south',
    name: 'Dubai South (DWC)',
    districtType: 'Industrial & Logistics',
    metaTitle: 'Industrial MEP Contractor Dubai South | DWC Logistics | Abbadi Tech',
    metaDescription: 'Leading MEP & electrical contractor in Dubai South (DWC). Logistics warehouses, aviation hubs, commercial power & DEWA approvals: +971 50 554 6943.',
    h1: 'Industrial Electrical & MEP Contracting in Dubai South (DWC)',
    badge: 'Aviation & Logistics Hub · High-Power Substation Upgrades',
    directAnswer: 'Abbadi Tech delivers industrial electrical, commercial plumbing, and MEP infrastructure contracting across Dubai South (Dubai World Central). We engineer high-power logistics warehouses, cold-storage facilities, aviation support offices, and exhibition tenancies with complete Dubai South Authority and DEWA approvals.',
    overview: 'Dubai South is the epicentre of Dubai’s future logistics, aviation, and e-commerce supply chains surrounding Al Maktoum International Airport. We deliver heavy MDB switchboards, transformer substations, and industrial stormwater networks.',
    localAuthorities: ['Dubai South Free Zone Authority (DWC)', 'DEWA', 'Dubai Civil Defence'],
    buildingTypes: ['Mega logistics fulfillment warehouses and cold-chain hubs', 'Aviation maintenance and aerospace engineering facilities', 'Commercial exhibition halls and business park offices'],
    engineeringChallenges: [
      'Massive power loads (500 kW to 2 MW+) requiring dedicated 11kV substation integration',
      'Industrial warehouse high-bay illumination across 14-meter ceiling spans',
      'Subterranean oil/sand interceptor drainage for logistics vehicle yards'
    ],
    keyLandmarks: ['Al Maktoum International Airport (DWC)', 'Logistics District', 'Aviation District', 'Business Park Free Zone'],
    dispatchTime: '35 to 45 minutes',
    projectArchetype: {
      title: 'E-Commerce Logistics Hub & Cold Storage',
      scope: '600 kW power load upgrade, 1200A Form 4 MDB switchboard, refrigeration condenser electrical feeds, and industrial fire hydrant piping.',
      outcome: 'Completed on-time and passed DEWA transformer energization inspection upon initial review without punch-list delays.'
    },
    faqs: [
      {
        question: 'Can you handle major substation feasibility studies in Dubai South?',
        answer: 'Yes. We engineer complete high-voltage and low-voltage electrical submission packages, calculating transformer room sizing and busbar layouts for DEWA approval.'
      }
    ],
    geo: { lat: 24.8967, lng: 55.1611 }
  },
  {
    slug: 'dip',
    name: 'Dubai Investments Park (DIP)',
    districtType: 'Industrial & Logistics',
    metaTitle: 'MEP Contractor DIP Dubai Investments Park | Abbadi Tech',
    metaDescription: 'Industrial MEP and electrical contracting in DIP 1 & 2. Factory power upgrades, 3-phase switchgear, warehouse plumbing & Trakhees: +971 50 554 6943.',
    h1: 'Industrial Electrical & Plumbing Contracting in Dubai Investments Park (DIP)',
    badge: 'Industrial Zone · Trakhees & DEWA Authority Mastery',
    directAnswer: 'Abbadi Tech is an experienced industrial MEP contractor operating across Dubai Investments Park (DIP 1 & DIP 2). We engineer heavy industrial MDB switchboards, power factor capacitor banks, warehouse factory rewiring, commercial kitchen grease traps, and Trakhees/DEWA authority approvals.',
    overview: 'Dubai Investments Park is a major manufacturing, warehousing, and commercial mixed-use zone. Technical fit-outs require strict adherence to Trakhees authority regulations and DEWA industrial electrical codes.',
    localAuthorities: ['Trakhees (EHS & Civil Engineering Division)', 'DEWA', 'Dubai Investments Park Management'],
    buildingTypes: ['Light and heavy manufacturing factories', 'Distribution warehouses and temperature-controlled storage', 'Commercial retail strip plazas and labor accommodation complexes'],
    engineeringChallenges: [
      'Dual-authority jurisdiction: Trakhees environmental health and safety (EHS) alongside DEWA power supply',
      'High industrial inductive loads requiring power factor correction to avoid utility surcharges',
      'Heavy chemical-resistant and grease-intercepting wastewater drainage'
    ],
    keyLandmarks: ['DIP 1 & DIP 2 Industrial Sectors', 'Green Community DIP', 'DIP Commercial Zone'],
    dispatchTime: '30 to 40 minutes',
    projectArchetype: {
      title: 'Food Processing Facility & Cold Storage',
      scope: '350 kW load enhancement, automatic capacitor bank, stainless steel drainage channels, and IP66 washdown switchgear.',
      outcome: 'Secured simultaneous Trakhees EHS permit and DEWA power release.'
    },
    faqs: [
      {
        question: 'Do you obtain Trakhees permits for DIP projects?',
        answer: 'Yes. We prepare all structural and MEP calculation packs required by Trakhees EHS and CED directorates for industrial fit-outs in DIP.'
      }
    ],
    geo: { lat: 24.9857, lng: 55.1834 }
  },
  {
    slug: 'jebel-ali',
    name: 'Jebel Ali & JAFZA',
    districtType: 'Industrial & Logistics',
    metaTitle: 'Industrial MEP Contractor Jebel Ali & JAFZA Dubai | Abbadi Tech',
    metaDescription: 'Licensed industrial MEP and electrical contractors in Jebel Ali & JAFZA. Heavy factory power, busbars, Trakhees approvals & DEWA: +971 50 554 6943.',
    h1: 'Heavy Industrial Electrical & MEP Contracting in Jebel Ali & JAFZA',
    badge: 'Free Zone & Port · Trakhees Accredited Practice',
    directAnswer: 'Abbadi Tech provides heavy industrial MEP engineering, factory power installations, and Trakhees authority approvals in Jebel Ali and JAFZA (Jebel Ali Free Zone). We engineer 3-phase switchgear up to 2500A, busbar trunking, hazardous area lighting, and industrial drainage infrastructure.',
    overview: 'Jebel Ali is the Middle East’s largest port and manufacturing center. Operating in JAFZA requires specialized knowledge of heavy industrial switchgear, flame-proof equipment (ATEX), and Trakhees regulatory procedures.',
    localAuthorities: ['Trakhees / PCFC Authority', 'JAFZA Free Zone Directorate', 'DEWA'],
    buildingTypes: ['Heavy industrial fabrication plants and chemical storage', 'Multi-acre distribution warehouses and logistics centers', 'Port administration commercial offices'],
    engineeringChallenges: [
      'Classified hazardous area electrical wiring and explosion-proof fittings',
      'Severe ambient operating temperatures in non-AC warehouse spaces',
      'Trakhees industrial wastewater discharge monitoring and containment'
    ],
    keyLandmarks: ['JAFZA North & South', 'Jebel Ali Port Terminal', 'Jebel Ali Industrial Area 1 & 2'],
    dispatchTime: '35 to 45 minutes',
    projectArchetype: {
      title: 'Industrial Heavy Equipment Assembly Plant',
      scope: '500 kW electrical distribution, overhead 800A busbar trunking, oil separation pits, and high-bay lighting.',
      outcome: 'Achieved complete Trakhees and DEWA operational sign-off on schedule.'
    },
    faqs: [
      {
        question: 'Do you supply explosion-proof electrical equipment for Jebel Ali facilities?',
        answer: 'Yes. We supply and install ATEX/IECEx certified explosion-proof enclosures, gland terminations, and intrinsically safe circuits for hazardous industrial zones.'
      }
    ],
    geo: { lat: 24.9950, lng: 55.0680 }
  },
  {
    slug: 'mirdif',
    name: 'Mirdif',
    districtType: 'Master Community Residential',
    metaTitle: 'Villa MEP Contractor Mirdif Dubai | Electrical & Plumbing | Abbadi Tech',
    metaDescription: 'Villa electrical, plumbing & DEWA contractor in Mirdif. Residential power upgrades, DB panel replacements & pool plumbing: +971 50 554 6943.',
    h1: 'Villa Electrical, Plumbing & DEWA Approval Services in Mirdif, Dubai',
    badge: 'Established Residential · Villa MEP Specialists',
    directAnswer: 'Abbadi Tech delivers certified electrical contracting, plumbing modernization, and DEWA approvals for private villas and townhouses in Mirdif, Dubai. We specialize in distribution board upgrades, central water heater replacements, garden lighting, and power enhancements for villa extensions.',
    overview: 'Mirdif features established family villa communities, private compound homes, and retail complexes (City Centre Mirdif, Uptown Mirdif). We resolve chronic electrical tripping, upgrade aging plumbing, and coordinate DEWA utility additions.',
    localAuthorities: ['DEWA', 'Dubai Municipality Building Department', 'Dubai Civil Defence'],
    buildingTypes: ['Private standalone villas and family compound residences', 'Retail stores and casual dining in Mirdif shopping centers'],
    engineeringChallenges: [
      'Modernizing older electrical switchboards lacking modern RCD earth-leakage protection',
      'Villa extension power calculations to prevent street pillar overload',
      'Water pressure drops across sprawling single and double-story villa wings'
    ],
    keyLandmarks: ['City Centre Mirdif District', 'Uptown Mirdif', 'Mushrif Park Edge', 'Ghoroob & Shorooq'],
    dispatchTime: '25 to 35 minutes',
    projectArchetype: {
      title: 'Standalone Family Villa Full MEP Overhaul',
      scope: 'Complete consumer unit modernization with ABB breakers, 40 kW power enhancement, booster pump manifold, and LED lighting.',
      outcome: 'Eliminated tripping faults and completed DEWA meter re-certification.'
    },
    faqs: [
      {
        question: 'Why do older Mirdif villas suffer from tripping circuit breakers?',
        answer: 'Older villas often feature early-generation circuit breakers with shared neutrals or degraded exterior garden wiring exposed to ground moisture. We rewire and balance these circuits cleanly.'
      }
    ],
    geo: { lat: 25.2215, lng: 55.4217 }
  },
  {
    slug: 'al-furjan',
    name: 'Al Furjan',
    districtType: 'Master Community Residential',
    metaTitle: 'Villa MEP Contractor Al Furjan Dubai | Abbadi Tech',
    metaDescription: 'Certified electrical and plumbing services in Al Furjan, Dubai. Villa power load upgrades, garden lighting, pool pumps & Nakheel permits: +971 50 554 6943.',
    h1: 'Villa Electrical, Plumbing & MEP Services in Al Furjan, Dubai',
    badge: 'Nakheel Master Community · Villa Extensions',
    directAnswer: 'Abbadi Tech provides certified villa MEP contracting, swimming pool electrification, and DEWA approval coordination across Al Furjan, Dubai. We handle power upgrades for villa extensions, outdoor patio pergolas, landscape illumination, and Nakheel community NOCs.',
    overview: 'Al Furjan is a thriving master community of family villas and townhouses developed by Nakheel. Homeowners regularly add swimming pools, back-garden entertainment pergolas, and expanded maid/driver quarters that require approved electrical power upgrades.',
    localAuthorities: ['DEWA', 'Nakheel Community Management', 'Dubai Municipality'],
    buildingTypes: ['Nakheel family villas and townhouses (Quortaj & Dubai style)', 'Al Furjan Pavilion retail centers and community cafes'],
    engineeringChallenges: [
      'Sizing additional power loads for added pool heaters and outdoor kitchens without tripping main incomers',
      'Running underground armored cables beneath manicured landscaped gardens',
      'Securing Nakheel community alteration NOCs in parallel with DEWA permits'
    ],
    keyLandmarks: ['Al Furjan Pavilion East & West', 'Al Furjan Club', 'Yalayis Street Corridor'],
    dispatchTime: '25 to 35 minutes',
    projectArchetype: {
      title: 'Quortaj Villa Garden & Pool Power Expansion',
      scope: 'Dedicated outdoor IP65 sub-DB, 35A 3-phase pool heat pump connection, and garden pathway illumination.',
      outcome: 'Completed in 10 working days with approved Nakheel and DEWA documentation.'
    },
    faqs: [
      {
        question: 'Do I need a DEWA power upgrade to install a swimming pool heater in Al Furjan?',
        answer: 'If the total electrical load of your existing villa is already near the main breaker capacity, adding an 18kW pool heater-chiller requires a DEWA load upgrade. We verify your exact capacity before work starts.'
      }
    ],
    geo: { lat: 25.0210, lng: 55.1438 }
  },
  {
    slug: 'jvc',
    name: 'Jumeirah Village Circle (JVC)',
    districtType: 'Master Community Residential',
    metaTitle: 'MEP Contractor JVC Jumeirah Village Circle | Abbadi Tech',
    metaDescription: 'Trusted electrical & plumbing contractor in JVC Dubai. Circle Mall retail fit-outs, apartment DB maintenance, townhouses & DEWA NOCs: +971 50 554 6943.',
    h1: 'Electrical, Plumbing & Commercial MEP in Jumeirah Village Circle (JVC)',
    badge: 'High-Growth Community · Fast 20–25 Min Response',
    directAnswer: 'Abbadi Tech delivers certified electrical contracting, plumbing maintenance, and commercial fit-out services across Jumeirah Village Circle (JVC), Dubai. We handle retail fit-outs in Circle Mall, restaurant kitchen grease traps, residential apartment distribution board repairs, and townhouse MEP upgrades.',
    overview: 'JVC is one of Dubai’s most active residential and commercial communities. With hundreds of modern mid-rise towers and townhouses, we provide rapid local technical support for property managers, tenants, and commercial businesses.',
    localAuthorities: ['DEWA', 'Nakheel Master Developer', 'Dubai Municipality'],
    buildingTypes: ['Modern mid-rise residential apartment towers', 'Townhouses and residential villa clusters', 'Circle Mall retail outlets and street-level cafes'],
    engineeringChallenges: [
      'Frequent water heater electrical shorts and thermostat failures in high-turnover rental units',
      'Retail fit-out power balancing and kitchen extract ventilation along street-level commercial podiums',
      'Water pressure regulation and booster pump servicing in multi-story towers'
    ],
    keyLandmarks: ['Circle Mall JVC', 'JVC District 10 to 19', 'Halfa Park', 'Al Khail Road Exit Corridor'],
    dispatchTime: '20 to 25 minutes (Direct access via Al Khail Road)',
    projectArchetype: {
      title: 'Podium Casual Dining Restaurant Fit-Out',
      scope: 'Stainless steel grease trap installation, 75 kW power upgrade, commercial kitchen extract wiring, and ambient dining lighting.',
      outcome: 'Delivered in 24 working days with full municipal food safety and DEWA NOC clearances.'
    },
    faqs: [
      {
        question: 'How fast can an electrician reach my property in JVC?',
        answer: 'With direct access down Al Khail Road from our central workshop, our mobile technical vans arrive at JVC within 20 to 25 minutes.'
      }
    ],
    geo: { lat: 25.0601, lng: 55.2081 }
  },
  {
    slug: 'sports-city',
    name: 'Dubai Sports City',
    districtType: 'Master Community Residential',
    metaTitle: 'MEP Contractor Dubai Sports City | Electrical & Plumbing | Abbadi Tech',
    metaDescription: 'Certified electrical and plumbing contractor in Dubai Sports City. Commercial gym fit-outs, apartment DB maintenance & DEWA approvals: +971 50 554 6943.',
    h1: 'Electrical, Plumbing & Commercial Fit-Out MEP in Dubai Sports City',
    badge: 'Sports & Residential · Turnkey Engineering',
    directAnswer: 'Abbadi Tech provides certified MEP contracting, commercial gym fit-outs, and residential electrical services in Dubai Sports City. We handle commercial power upgrades, sports facility lighting, apartment distribution board servicing, and DEWA authority submissions.',
    overview: 'Dubai Sports City combines world-class athletic stadiums and training academies with residential mid-rise towers and golf course villa communities (Victory Heights). We deliver technical contracting matching both commercial and residential needs.',
    localAuthorities: ['DEWA', 'Dubai Sports City Master Developer', 'Dubai Municipality'],
    buildingTypes: ['Sports training facilities, fitness studios, and athletic clubs', 'Victory Heights luxury golf villas', 'High-density residential apartment complexes'],
    engineeringChallenges: [
      'High ventilation and heavy shower drainage requirements for athletic training centers',
      'Golf villa landscape lighting and pool pump power distribution',
      'Apartment ELCB breaker tripping and AC thermostat troubleshooting'
    ],
    keyLandmarks: ['Dubai International Stadium', 'Els Club Golf Course', 'Victory Heights', 'Canal Residence West'],
    dispatchTime: '25 to 35 minutes',
    projectArchetype: {
      title: 'Athletic Training Studio & Locker Facility',
      scope: '85 kW power connection, 8-shower locker room water supply and drainage skid, and industrial high-volume ventilation.',
      outcome: 'Achieved DEWA and municipal completion clearance on schedule.'
    },
    faqs: [
      {
        question: 'Do you service villas in Victory Heights, Dubai Sports City?',
        answer: 'Yes. We provide complete electrical, plumbing, pool equipment power, and DEWA load upgrade services for Victory Heights homeowners.'
      }
    ],
    geo: { lat: 25.0415, lng: 55.2215 }
  }
];
