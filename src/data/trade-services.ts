export interface TradeService {
  slug: string;
  category: 'electrical' | 'plumbing' | 'mep';
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  badge: string;
  directAnswer: string;
  overview: string;
  scopeList: string[];
  specs: { label: string; value: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const tradeServicesList: TradeService[] = [
  {
    slug: 'mdb-smdb-panel-assembly-dubai',
    category: 'electrical',
    title: 'MDB & SMDB Distribution Panel Assembly Dubai',
    metaTitle: 'MDB & SMDB Panel Assembly Dubai | Switchgear | Abbadi Tech',
    metaDescription: 'Custom MDB, SMDB and DB panel assembly in Dubai. IEC 61439 compliant, certified switchgear, busbar dressing & factory acceptance testing: +971 50 554 6943.',
    h1: 'MDB & SMDB Distribution Panel Assembly & Switchgear in Dubai',
    badge: 'Custom Switchgear · IEC 61439 & DEWA Compliant',
    directAnswer: 'Abbadi Tech engineers, assembles, and tests Main Distribution Boards (MDB), Sub-Main Distribution Boards (SMDB), and final Distribution Boards (DB) in Dubai. Following IEC 61439 and DEWA regulations, our panels feature form segregation, certified copper busbars, and branded switchgear (ABB, Schneider, Hager) with full factory testing.',
    overview: 'Electrical distribution boards are the nerve center of commercial, industrial, and residential power networks. We build custom switchboards tailored to site space constraints, incorporating surge protection, power quality meters, and motor control centers (MCC).',
    scopeList: [
      'Main Distribution Boards (MDB) up to 2500A with form 2/3/4 internal separation',
      'Sub-Main Distribution Boards (SMDB) with molded case circuit breakers (MCCB)',
      'Final consumer DB panels with miniature circuit breakers (MCB) and RCD/RCBO protection',
      'Capacitor banks for automatic power factor correction (APFC) maintaining PF > 0.95',
      'Motor Control Centers (MCC) with variable frequency drives (VFD) and soft starters'
    ],
    specs: [
      { label: 'Compliance Standard', value: 'IEC 61439-1 / IEC 61439-2 / DEWA Regulations' },
      { label: 'Busbar Material', value: '99.9% High-Conductivity Tinned Electrolytic Copper' },
      { label: 'Ingress Protection', value: 'IP42 / IP54 (Indoor) / IP65 (Outdoor Weatherproof)' },
      { label: 'Approved Switchgear', value: 'ABB, Schneider Electric, Hager, Legrand, Siemens' }
    ],
    process: [
      { step: '01', title: 'Schematic Engineering', detail: 'We produce detailed panel GA drawings, busbar sizing calculations, and heat dissipation models.' },
      { step: '02', title: 'Precision Fabrication', detail: 'CNC laser-cut electro-galvanized sheet steel enclosure fabrication with electrostatic powder coating.' },
      { step: '03', title: 'Component Dressing & Ferruling', detail: 'Neat component layout, busbar bending, and numbered ferrule wiring conforming to approved drawings.' },
      { step: '04', title: 'Factory Acceptance Testing (FAT)', detail: 'Dielectric insulation resistance, high-voltage flash tests, and contact torque audits.' }
    ],
    faqs: [
      {
        question: 'What is the difference between an MDB and an SMDB?',
        answer: 'The Main Distribution Board (MDB) receives power directly from the DEWA transformer or intake pillar and feeds multiple Sub-Main Distribution Boards (SMDB) located across building floors or zones.'
      },
      {
        question: 'Do you provide on-site panel testing certificates?',
        answer: 'Yes. Every assembled panel is delivered with complete routine test certificates and single-line schematics for DEWA site audits.'
      }
    ],
    relatedSlugs: ['commercial-electrical-contractor-dubai', 'electrical-contractors-dubai']
  },
  {
    slug: 'commercial-electrical-contractor-dubai',
    category: 'electrical',
    title: 'Commercial Electrical Fit-Out Contractor Dubai',
    metaTitle: 'Commercial Electrical Contractor Dubai | Fit-Out MEP | Abbadi Tech',
    metaDescription: 'Licensed commercial electrical contractors in Dubai. Offices, restaurants, retail & hospitality power fit-outs with DEWA certification: +971 50 554 6943.',
    h1: 'Commercial Electrical Contracting & Fit-Out Services in Dubai',
    badge: 'Turnkey Commercial · Corporate & Retail Execution',
    directAnswer: 'Abbadi Tech provides turnkey commercial electrical contracting across Dubai. From office towers in Business Bay and DIFC to flagship retail in The Dubai Mall, we execute cable containment, busbar trunking, 3-phase power distribution, and architectural lighting with guaranteed DEWA compliance and on-time handover.',
    overview: 'Commercial spaces demand high power density, uninterruptible power supply (UPS) integration, and strict safety controls. Our certified wiremen and site engineers deliver projects with zero defects and night-shift flexibility.',
    scopeList: [
      'Overhead hot-dip galvanized cable trays, trunking, and underfloor busway systems',
      'Dual-feed UPS and central generator emergency power wiring for financial offices',
      'Commercial kitchen appliance power drops with IP66 rotary isolator switches',
      'DALI and 0-10V architectural lighting controls and automated occupancy sensors',
      'Testing and commissioning (Megger, earth loop, phase balancing, thermal imaging)'
    ],
    specs: [
      { label: 'Cabling Standards', value: 'BS 5467 / BS 6724 Fire-Resistant FP200 Conductor' },
      { label: 'Containment', value: 'Heavy Duty Hot-Dip Galvanized GI Cable Trays' },
      { label: 'Night-Shift Availability', value: '24/7 Mall & Commercial Tower Shift Capability' },
      { label: 'Authority Handover', value: 'Complete DEWA & Civil Defence Sign-Off' }
    ],
    process: [
      { step: '01', title: 'Contract Drawing Review', detail: 'We audit consultant MEP schematics and cross-reference against physical site dimensions.' },
      { step: '02', title: 'First Fix Containment', detail: 'Erection of ceiling cable trays, conduits, wall chases, and backboxes.' },
      { step: '03', title: 'Second Fix Cabling', detail: 'Pulling fire-rated XLPE copper cables and terminating distribution boards with numbered ferrules.' },
      { step: '04', title: 'Testing & Commissioning', detail: 'Conducting comprehensive loop impedance and insulation tests prior to authority handover.' }
    ],
    faqs: [
      {
        question: 'Can Abbadi Tech perform mall night-shift fit-out works?',
        answer: 'Yes. We are experienced in working under strict mall management night regulations (e.g., Emaar The Dubai Mall, Majid Al Futtaim, Nakheel).'
      }
    ],
    relatedSlugs: ['mdb-smdb-panel-assembly-dubai', 'lighting-and-emergency-lighting-dubai']
  },
  {
    slug: 'villa-electrical-contractor-dubai',
    category: 'electrical',
    title: 'Luxury Villa Electrical Contractor Dubai',
    metaTitle: 'Villa Electrical Contractor Dubai | Residential MEP | Abbadi Tech',
    metaDescription: 'Specialist luxury villa electrical contractors in Dubai: Palm Jumeirah, Dubai Hills, Emirates Hills & Arabian Ranches. Smart panels & pool power: +971 50 554 6943.',
    h1: 'Luxury Villa Electrical Contracting & Upgrades in Dubai',
    badge: 'Residential Luxury · Palm Jumeirah & Dubai Hills',
    directAnswer: 'Abbadi Tech provides premier electrical contracting for luxury villas in Dubai, including Palm Jumeirah fronds, Dubai Hills, and Emirates Hills. We specialize in smart automation panels, landscape and facade illumination, pool pump power, and high-capacity AC feeder circuits with full DEWA approvals.',
    overview: 'High-end villas feature demanding electrical infrastructures: multi-ton chillers, swimming pool heaters, sauna rooms, EV chargers, and smart automation systems that require meticulous phase balancing and premium aesthetic finishes.',
    scopeList: [
      'Smart home automation electrical panels (KNX, Lutron, Crestron integration)',
      'Submersible pool pump, heater-chiller, and water feature electrical distribution',
      'Exterior architectural facade spotlights, tree uplighting, and IP67 landscape circuits',
      'Villa main incomer upgrades, sub-DB replacements, and surge protection devices',
      'Tesla & Type-2 EV home charging station installations'
    ],
    specs: [
      { label: 'Typical Villa Sizes', value: '4,000 sq ft to 30,000+ sq ft luxury mansions' },
      { label: 'Outdoor Protection', value: 'IP67/IP68 weather-sealed junction boxes' },
      { label: 'Smart Home Standards', value: 'KNX / Lutron certified cabling pathways' },
      { label: 'Testing Protocol', value: 'Comprehensive 1000V Megger insulation testing' }
    ],
    process: [
      { step: '01', title: 'Villa Site Survey', detail: 'Audit existing consumer units, grounding pits, and landscape cable conduits.' },
      { step: '02', title: 'Engineering & DEWA NOC', detail: 'Prepare load calculation and submit for DEWA power upgrade if adding AC or pool chillers.' },
      { step: '03', title: 'Clean Execution', detail: 'Chasing, conduit installation, and silent drilling with dust extraction to preserve interior decor.' },
      { step: '04', title: 'Testing & Handover', detail: 'Thermal scan of all breakers under full load and balance confirmation.' }
    ],
    faqs: [
      {
        question: 'Can you increase the power load of an older Dubai villa?',
        answer: 'Yes. We audit the incoming cable gauge and service pillar breaker, submit an additional load application to DEWA, and upgrade the villa consumer unit.'
      }
    ],
    relatedSlugs: ['ev-charger-installation-dubai', 'commercial-electrical-contractor-dubai']
  },
  {
    slug: 'ev-charger-installation-dubai',
    category: 'electrical',
    title: 'Commercial & Residential EV Charger Installation Dubai',
    metaTitle: 'EV Charger Installation Dubai | DEWA Approved | Abbadi Tech',
    metaDescription: 'Certified EV charger installation for commercial properties & villas in Dubai. Type 2 AC & DC fast chargers. Complete DEWA approval: +971 50 554 6943.',
    h1: 'EV Charger Installation & DEWA Approval Services in Dubai',
    badge: 'Green Mobility · DEWA EV Green Charger Standard',
    directAnswer: 'Abbadi Tech supplies, installs, and commissions commercial and residential Electric Vehicle (EV) chargers in Dubai. We install 7kW to 22kW Type 2 AC wallboxes and 50kW+ DC fast chargers, managing dedicated cable runs, RCBO Type B earth protection, and full DEWA utility approvals.',
    overview: 'As Dubai transitions toward electric mobility, commercial buildings, shopping centers, and private villas require dedicated EV charging infrastructure capable of handling continuous high-amperage draw safely.',
    scopeList: [
      'Residential 7kW to 22kW AC smart wallbox installations (Tesla, ABB, Schneider, Wallbox)',
      'Commercial multi-bay EV charging hubs for shopping malls, corporate offices, and hotels',
      'High-speed DC rapid charging stations with dynamic load management (DLM)',
      'Dedicated sub-metering, billing software integration, and RFID access systems',
      'DEWA EV Green Charger registration and electrical load verification'
    ],
    specs: [
      { label: 'Charger Ratings', value: '7.4kW (1-Phase 32A) / 11kW / 22kW (3-Phase 32A) / 50kW+ DC' },
      { label: 'Connector Type', value: 'Type 2 IEC 62196 (Mennekes) / CCS Combo 2' },
      { label: 'Earth Protection', value: 'Type B RCD / 6mA DC residual fault protection' },
      { label: 'DEWA Requirement', value: 'Enrolled contractor submission & dedicated breaker' }
    ],
    process: [
      { step: '01', title: 'Load Feasibility Check', detail: 'We verify whether the existing electrical panel has sufficient spare amperage capacity.' },
      { step: '02', title: 'Dedicated Circuit Pulling', detail: 'We run heavy-duty armored XLPE cable from the distribution board to the parking bay.' },
      { step: '03', title: 'Unit Mounting & Wiring', detail: 'We mount the weatherproof charging station with dedicated isolator and surge arrestor.' },
      { step: '04', title: 'Commissioning & App Setup', detail: 'We test earth loop impedance, simulate EV handshake, and configure customer RFID/WiFi.' }
    ],
    faqs: [
      {
        question: 'Do I need DEWA approval to install an EV charger in a villa?',
        answer: 'If the EV charger fits within your existing sanctioned load capacity, an internal DB addition is registered. If the 22kW charger requires power capacity enhancement, a DEWA load upgrade application is necessary.'
      }
    ],
    relatedSlugs: ['villa-electrical-contractor-dubai', 'commercial-electrical-contractor-dubai']
  },
  {
    slug: 'electrical-maintenance-amc-dubai',
    category: 'electrical',
    title: 'Commercial Electrical Maintenance & AMC Contracts Dubai',
    metaTitle: 'Electrical Maintenance AMC Dubai | Commercial Buildings | Abbadi Tech',
    metaDescription: 'Preventive electrical maintenance and annual maintenance contracts (AMC) in Dubai. Thermal imaging, switchgear audits & 24/7 emergency repair: +971 50 554 6943.',
    h1: 'Electrical Maintenance & Annual Maintenance Contracts (AMC) in Dubai',
    badge: 'Preventive Reliability · 24/7 SLA Dispatch',
    directAnswer: 'Abbadi Tech provides comprehensive commercial electrical Annual Maintenance Contracts (AMC) across Dubai. Our preventive service includes quarterly switchgear cleaning, infrared thermal imaging of busbars, insulation resistance checks, breaker torque audits, and guaranteed 24/7 emergency response.',
    overview: 'Unplanned electrical failures shut down business operations and create fire hazards. Our scheduled preventive maintenance programs detect loose terminations, phase imbalances, and deteriorating insulation before costly breakdowns occur.',
    scopeList: [
      'Infrared thermographic inspections to identify hot-spots in switchboards and cables',
      'Quarterly preventive maintenance of MDBs, SMDBs, capacitor banks, and transfer switches',
      'Emergency lighting central battery system discharge testing (Civil Defence compliance)',
      'Earth pit resistance audits and electrode re-conditioning',
      'Guaranteed rapid on-site emergency breakdown dispatch with SLA commitments'
    ],
    specs: [
      { label: 'Response Time SLA', value: '20 to 45 minutes for emergency power outages in Dubai' },
      { label: 'Diagnostic Tools', value: 'Calibrated Fluke Thermal Cameras & Megger Testers' },
      { label: 'Reporting', value: 'Comprehensive digital audit reports with corrective recommendations' },
      { label: 'Contract Types', value: 'Comprehensive (with spares) or Non-Comprehensive AMC' }
    ],
    process: [
      { step: '01', title: 'Initial Baseline Audit', detail: 'Full asset tagging, thermal scan, and electrical load profiling of all on-site switchboards.' },
      { step: '02', title: 'Customized AMC Schedule', detail: 'Establishing monthly, quarterly, and semi-annual inspection checkpoints.' },
      { step: '03', title: 'Preventive Servicing', detail: 'Cleaning, de-dusting, torquing terminal lugs, and testing breaker trip mechanisms.' },
      { step: '04', title: 'Continuous Support', detail: '24/7 priority emergency dispatch line for uninterrupted facility operations.' }
    ],
    faqs: [
      {
        question: 'Why is thermographic thermal imaging required for commercial panels?',
        answer: 'Thermal imaging detects elevated temperatures caused by loose wire terminations or overloading before cables burn out or catch fire, allowing preventive repair during off-hours.'
      }
    ],
    relatedSlugs: ['emergency-electrician-dubai', 'mdb-smdb-panel-assembly-dubai']
  },
  {
    slug: 'emergency-electrician-dubai',
    category: 'electrical',
    title: '24/7 Emergency Electrician & Power Outage Repair Dubai',
    metaTitle: '24/7 Emergency Electrician Dubai | Urgent Power Repair | Abbadi Tech',
    metaDescription: 'Rapid 24/7 emergency electrician in Dubai. Power outages, burnt switchgear, short circuits & breaker trips. Central HQ dispatch: +971 50 554 6943.',
    h1: '24/7 Emergency Electrician & Urgent Power Restoration in Dubai',
    badge: 'Emergency Dispatch · 20–45 Minute Response',
    directAnswer: 'Abbadi Tech operates a dedicated 24/7 emergency electrical response unit stationed centrally in Dubai. We resolve complete power outages, burnt switchboards, short circuits, tripping main breakers (ELCB/MCCB), and water damage electrical faults within 20 to 45 minutes of dispatch.',
    overview: 'Electrical emergencies halt retail trade, spoil commercial refrigeration stocks, and leave villa residents without air conditioning in Dubai’s extreme climate. Our emergency vans carry diagnostic equipment and critical switchgear spares for immediate on-site restoration.',
    scopeList: [
      'Total building or unit power blackout investigation and rapid re-energization',
      'Immediate replacement of burnt main incoming breakers, isolators, and contactors',
      'Diagnostic fault-finding for persistent earth leakage and short-circuit breaker tripping',
      'Emergency isolation and rewiring of water-damaged electrical circuits',
      'Temporary generator hook-ups during prolonged utility service disruptions'
    ],
    specs: [
      { label: 'Availability', value: '365 Days / 24 Hours / 7 Days a week' },
      { label: 'Dispatch Center', value: 'Oberoi Properties Building, Al Khail Corridor, Dubai' },
      { label: 'Vehicle Stock', value: 'Common MCCB, MCB, ELCB breakers, contactors, cables' },
      { label: 'Electricians', value: 'Certified senior master wiremen and diagnostic engineers' }
    ],
    process: [
      { step: '01', title: 'Immediate Phone Triage', detail: 'Our duty engineer instructs site occupants on safe electrical isolation steps.' },
      { step: '02', title: 'Rapid Site Mobilization', detail: 'Emergency technical van arrives at your location within 20 to 45 minutes.' },
      { step: '03', title: 'Fault Isolation', detail: 'Using specialized multimeters and Megger testers, we isolate the compromised branch circuit.' },
      { step: '04', title: 'Safe Restoration', detail: 'We restore power to the remainder of the premises and replace failed components.' }
    ],
    faqs: [
      {
        question: 'Why does my main DEWA circuit breaker trip repeatedly?',
        answer: 'Repeated tripping is usually triggered by an earth fault in water heaters, outdoor garden wiring moisture, or AC compressor motor insulation breakdown.'
      }
    ],
    relatedSlugs: ['electrical-maintenance-amc-dubai', 'mdb-smdb-panel-assembly-dubai']
  },
  {
    slug: 'lighting-and-emergency-lighting-dubai',
    category: 'electrical',
    title: 'Architectural & Emergency Lighting Installation Dubai',
    metaTitle: 'Architectural & Emergency Lighting Dubai | DCD Compliant | Abbadi Tech',
    metaDescription: 'Commercial architectural and Civil Defence compliant emergency lighting in Dubai. Central battery systems, exit signage & DALI: +971 50 554 6943.',
    h1: 'Commercial Architectural & Emergency Lighting Systems in Dubai',
    badge: 'Civil Defence Compliant · DALI & Smart Lighting',
    directAnswer: 'Abbadi Tech designs and installs commercial architectural lighting and Dubai Civil Defence (DCD) compliant emergency escape lighting. From luxury retail track lighting and chandeliers to centralized battery monitoring systems and illuminated exit signs, we ensure visual elegance and life-safety compliance.',
    overview: 'Lighting creates the visual identity of boutiques, restaurants, and corporate offices while emergency exit systems protect occupants during power disruptions.',
    scopeList: [
      'High-CRI (>95) architectural LED track lighting, recessed downlights, and cove fixtures',
      'Civil Defence approved illuminated emergency exit signage and escape route luminaires',
      'Central Battery Systems (CBS) with monitored self-testing capabilities',
      'DALI, KNX, and 0-10V automated lighting controls with scene programming',
      'Exterior facade architectural floodlighting and landscape illumination'
    ],
    specs: [
      { label: 'Life-Safety Standard', value: 'UAE Fire & Life Safety Code / BS 5266 / Civil Defence' },
      { label: 'Backup Duration', value: 'Minimum 3 hours battery discharge under emergency mode' },
      { label: 'Color Rendering', value: 'CRI 90+ & CRI 95+ for luxury retail and hospitality' }
    ],
    process: [
      { step: '01', title: 'Lux Level Calculation', detail: 'We perform Dialux lighting simulations ensuring recommended commercial illumination levels.' },
      { step: '02', title: 'Emergency Route Planning', detail: 'We map exit signage and emergency illumination across escape routes for DCD approval.' },
      { step: '03', title: 'First Fix Containment', detail: 'Installation of fire-resistant FP200 cabling and ceiling suspension channels.' },
      { step: '04', title: 'Focusing & Testing', detail: 'Precision spotlight beam alignment and 3-hour battery discharge verification.' }
    ],
    faqs: [
      {
        question: 'What are the Civil Defence requirements for emergency exit lights in Dubai?',
        answer: 'All commercial premises must have emergency luminaires providing continuous illumination along escape corridors and illuminated EXIT signs backed by a minimum 3-hour battery reserve.'
      }
    ],
    relatedSlugs: ['commercial-electrical-contractor-dubai', 'electrical-contractors-dubai']
  },
  {
    slug: 'commercial-plumbing-dubai',
    category: 'plumbing',
    title: 'Commercial Plumbing & Hydraulic Contracting Dubai',
    metaTitle: 'Commercial Plumbing Contractor Dubai | Turnkey Hydraulics | Abbadi Tech',
    metaDescription: 'Licensed commercial plumbing contractors in Dubai. Potable water networks, acoustic drainage, booster pumps & grease traps: +971 50 554 6943.',
    h1: 'Commercial Plumbing & Hydraulic Engineering in Dubai',
    badge: 'Turnkey Hydraulics · 10-Bar Hydrostatic Standards',
    directAnswer: 'Abbadi Tech provides comprehensive commercial plumbing contracting across Dubai. We engineer potable water supply networks (PPR, copper), acoustic drainage systems (HDPE, UPVC), water booster pump manifolds, and commercial kitchen drainage complying with Dubai Municipality and DEWA standards.',
    overview: 'Commercial plumbing requires rigorous hydraulic engineering to guarantee leak-free operation, correct water pressure across multi-story buildings, and sound-insulated drainage that prevents nuisance noise in luxury retail and hospitality environments.',
    scopeList: [
      'Potable water distribution using fusion-welded PPR and brazed copper piping',
      'Acoustic soil, waste, and vent drainage networks using push-fit HDPE and UPVC',
      'Commercial kitchen water supply manifolds and secondary hot water return loops',
      'Central electric and solar water heating plants with temperature balancing valves',
      '10-bar hydrostatic pressure testing with signed engineering test certificates'
    ],
    specs: [
      { label: 'Pressure Testing', value: 'Mandatory 10-bar hydrostatic pressure hold for 24 hours' },
      { label: 'Pipe Materials', value: 'PPR-80 (German/UAE certified), Type L Copper, HDPE' },
      { label: 'Authority Standards', value: 'Dubai Municipality Technical Guidelines & DEWA Water Code' }
    ],
    process: [
      { step: '01', title: 'Hydraulic Sizing', detail: 'Calculation of fixture units (WSFU/DFU) to correctly size water supply and drainage pipe diameters.' },
      { step: '02', title: 'Trenching & Rough-In', detail: 'Chasing, core drilling, and installing acoustic drainage stacks with seismic-rated brackets.' },
      { step: '03', title: 'Fusion Welding & Pressure Test', detail: 'Precision heat fusion of PPR pipelines followed by 10-bar pressure gauge hold.' },
      { step: '04', title: 'Sanitary Fixture Handover', detail: 'Final connection of high-spec mixer taps, concealed cisterns, and water heaters.' }
    ],
    faqs: [
      {
        question: 'Why is hydrostatic pressure testing mandatory before wall closure?',
        answer: 'Hydrostatic pressure testing subjects water pipes to 1.5 times maximum working pressure (typically 10 bar) to reveal weak joints or micro-fissures before walls and tiles are sealed.'
      }
    ],
    relatedSlugs: ['grease-trap-installation-dubai', 'water-booster-pump-installation-dubai', 'plumbing-contractors-dubai']
  },
  {
    slug: 'grease-trap-installation-dubai',
    category: 'plumbing',
    title: 'Commercial Kitchen Grease Trap Installation Dubai',
    metaTitle: 'Grease Trap Installation Dubai | Dubai Municipality Approved | Abbadi Tech',
    metaDescription: 'Dubai Municipality compliant grease trap supply and installation for restaurants, cafes & commercial kitchens. Waste permits & sizing: +971 50 554 6943.',
    h1: 'Commercial Kitchen Grease Trap Installation in Dubai',
    badge: 'Dubai Municipality Compliant · Food & Beverage Fit-Out',
    directAnswer: 'Abbadi Tech supplies, sizes, and installs Dubai Municipality compliant grease traps (grease interceptors) for restaurants, commercial kitchens, cafes, and bakeries. We install epoxy-coated carbon steel, stainless steel, and automatic grease recovery units (GRU) with biological dosing systems and municipal approvals.',
    overview: 'Under Dubai Municipality regulations, no commercial food establishment can discharge fatty, oily effluent into the public sewerage network without an approved grease interceptor. Discharging untreated grease results in municipal fines and sewer blockages.',
    scopeList: [
      'Flow-rate calculation and capacity sizing based on commercial kitchen fixture units',
      'Supply and installation of manual and automated Grease Recovery Units (GRU)',
      'Installation of biological enzyme dosing systems for odor and grease breakdown',
      'Acoustic HDPE kitchen waste pipework with deep seal trap connections',
      'Dubai Municipality Waste Management Department inspection clearance'
    ],
    specs: [
      { label: 'Capacities', value: 'From 50 Litres (under-sink) to 5,000+ Litres (central underground)' },
      { label: 'Materials', value: '304/316 Stainless Steel, Heavy-Duty Polyethylene, Epoxy Carbon Steel' },
      { label: 'Municipal Regulation', value: 'Dubai Municipality Technical Guideline for Food Establishments' }
    ],
    process: [
      { step: '01', title: 'Kitchen Fixture Audit', detail: 'Audit pot wash sinks, dishwashers, and combi-ovens to calculate peak flow rate in Litres per Minute.' },
      { step: '02', title: 'Location & Odor Planning', detail: 'Position interceptors with sufficient headspace for suction tanker vacuum hoses or basket cleaning.' },
      { step: '03', title: 'Plumbing Integration', detail: 'Connect heat-resistant discharge pipes and vent lines to prevent siphonage and odor escape.' },
      { step: '04', title: 'Municipal Sign-Off', detail: 'Verify flow baffle operation and compile documentation for municipal food safety inspectors.' }
    ],
    faqs: [
      {
        question: 'What size grease trap does my Dubai restaurant need?',
        answer: 'Sizing depends on the number of meals served per day, pot sink volume, and dishwasher discharge rates according to Dubai Municipality formulas. We calculate the exact required capacity during the initial MEP layout review.'
      }
    ],
    relatedSlugs: ['commercial-plumbing-dubai', 'drainage-works-dubai']
  },
  {
    slug: 'water-booster-pump-installation-dubai',
    category: 'plumbing',
    title: 'Water Booster & Transfer Pump Installation Dubai',
    metaTitle: 'Water Booster Pump Installation Dubai | Pressure Pumps | Abbadi Tech',
    metaDescription: 'Commercial and villa water booster pump installations in Dubai. Variable speed drives (VFD), transfer pumps & constant pressure: +971 50 554 6943.',
    h1: 'Water Booster Pump & Transfer Pumping Stations in Dubai',
    badge: 'Constant Pressure · VFD Intelligent Pumps',
    directAnswer: 'Abbadi Tech supplies, installs, and commissions commercial and residential water booster and transfer pump stations across Dubai. We install energy-efficient Variable Frequency Drive (VFD) pressure booster sets (Grundfos, Lowara, Wilo) ensuring constant water pressure, dry-run protection, and whisper-quiet operation.',
    overview: 'Inconsistent water pressure spoils luxury guest experiences in hotels, restaurants, and villas. Our multi-pump booster skids maintain steady pressure across all fixture outlets, automatically adjusting motor speed to match instantaneous demand.',
    scopeList: [
      'Multi-pump variable speed booster skids with intelligent digital control panels',
      'Underground to overhead tank water transfer pump sets with float switch automation',
      'Submersible sewage and storm water sump pump stations with macerator grinders',
      'Expansion diaphragm pressure vessel replacement, pre-charge tuning, and maintenance',
      'Vibration isolation springs, flexible bellow connectors, and acoustic lagging'
    ],
    specs: [
      { label: 'Approved Pump Brands', value: 'Grundfos, Lowara (Xylem), Wilo, DAB, Ebara' },
      { label: 'Control Technology', value: 'Integrated Inverter / VFD with dry-run and high/low pressure alarms' },
      { label: 'Manifold Construction', value: 'AISI 304 / 316 Stainless Steel Manifolds' }
    ],
    process: [
      { step: '01', title: 'Head & Flow Calculation', detail: 'Calculate total dynamic head (TDH) and peak simultaneous water flow (m³/hr).' },
      { step: '02', title: 'Skid Installation', detail: 'Mount pumps on concrete plinths with anti-vibration rubber inertia pads.' },
      { step: '03', title: 'Pipework & Electrical Hookup', detail: 'Install non-return check valves, isolation valves, and connect dedicated 3-phase power supply.' },
      { step: '04', title: 'Pressure Calibration', detail: 'Set target cut-in/cut-out pressures and test automatic pump alternation.' }
    ],
    faqs: [
      {
        question: 'Why is a variable frequency drive (VFD) pump better than a fixed-speed pump?',
        answer: 'VFD booster pumps adjust motor RPM smoothly to match actual water tap demand, eliminating pressure surges (water hammer), reducing electrical consumption by up to 50%, and operating almost silently.'
      }
    ],
    relatedSlugs: ['commercial-plumbing-dubai', 'plumbing-amc-dubai']
  },
  {
    slug: 'leak-detection-pressure-testing-dubai',
    category: 'plumbing',
    title: 'Non-Destructive Water Leak Detection & Pressure Testing Dubai',
    metaTitle: 'Leak Detection & Pressure Testing Dubai | Water Pipe Repair | Abbadi Tech',
    metaDescription: 'Acoustic and thermal non-destructive water leak detection in Dubai. Hidden pipe leaks, 10-bar pressure testing & slab leak repairs: +971 50 554 6943.',
    h1: 'Non-Destructive Water Leak Detection & Pressure Testing in Dubai',
    badge: 'Acoustic & Thermal Diagnostics · Zero Guesswork',
    directAnswer: 'Abbadi Tech provides non-destructive water leak detection and hydrostatic pressure testing across Dubai. Using electro-acoustic ground microphones, infrared thermal cameras, and trace gas sensors, we locate hidden pipe leaks behind tiled walls and beneath concrete slabs without destructive demolition.',
    overview: 'Unexplained spikes in DEWA water bills, damp spots on walls, or dropping booster pump pressure indicate concealed water line leaks. Our electronic diagnostic tools pinpoint the exact leak location within centimeters.',
    scopeList: [
      'Electro-acoustic ground microphone surveys for underground pressurized water pipelines',
      'Infrared thermography to detect temperature anomalies from hot and chilled water leaks',
      'Nitrogen / Hydrogen tracer gas injection for pinpointing micro-leaks in sealed lines',
      'Mandatory 10-bar hydrostatic pressure testing for commercial fit-outs and handovers',
      'Targeted pipe micro-excavation, repair, re-testing, and surface restoration'
    ],
    specs: [
      { label: 'Diagnostic Tech', value: 'Acoustic listening rods, FLIR thermal imaging, tracer gas' },
      { label: 'Accuracy', value: 'Pinpoint precision within 10–20 cm without floor excavation' },
      { label: 'Applicable Lines', value: 'Potable water supply, fire fighting lines, chilled water loops' }
    ],
    process: [
      { step: '01', title: 'Pressure Decay Test', detail: 'We isolate building plumbing sections with calibrated pressure gauges to confirm line leakage.' },
      { step: '02', title: 'Acoustic & Thermal Scanning', detail: 'We sweep pipe routes with electro-acoustic sensors listening for high-frequency water escape hiss.' },
      { step: '03', title: 'Pinpoint Verification', detail: 'Thermal verification confirms temperature boundary and identifies precise break point.' },
      { step: '04', title: 'Surgical Repair', detail: 'We open a minimal localized access tile, replace the damaged pipe section, and perform 10-bar re-testing.' }
    ],
    faqs: [
      {
        question: 'How do I know if I have a hidden water leak?',
        answer: 'Key indicators include a continually spinning DEWA water meter when all taps are closed, booster pumps cycling on periodically without demand, damp wall stains, or an unexpected spike in your monthly utility bill.'
      }
    ],
    relatedSlugs: ['commercial-plumbing-dubai', 'plumbing-amc-dubai']
  },
  {
    slug: 'drainage-works-dubai',
    category: 'plumbing',
    title: 'Commercial Drainage & Sewer Network Works Dubai',
    metaTitle: 'Commercial Drainage Contractor Dubai | Sewer Works | Abbadi Tech',
    metaDescription: 'Commercial drainage and gravity sewer installation in Dubai. HDPE acoustic stacks, manholes, interceptors & municipal sign-off: +971 50 554 6943.',
    h1: 'Commercial Drainage, Soil Stacks & Sewer Works in Dubai',
    badge: 'Acoustic HDPE · Slope Precision & Municipality Code',
    directAnswer: 'Abbadi Tech designs and installs commercial gravity drainage, acoustic soil and waste stacks, and external sewer networks in Dubai. We install solvent-weld UPVC and butt-welded HDPE pipework with laser-leveled fall gradients, deep-seal gully traps, and inspection manholes meeting Dubai Municipality standards.',
    overview: 'Improper drainage gradients result in chronic blockages, foul sewer gas back-siphonage, and expensive facility shutdowns. We engineer self-cleansing velocity drainage networks that operate smoothly.',
    scopeList: [
      'Acoustic sound-insulated drainage stacks for high-rise commercial and residential towers',
      'Suspended basement drainage networks with clean-out access plugs and heavy brackets',
      'Subterranean sewer pipe laying with gravel bedding, inspection chambers, and manholes',
      'Commercial kitchen floor gullies, stainless steel channel drains, and perimeter trench grates',
      'Anti-siphon vent piping terminating above roof level with bird-screen cowl caps'
    ],
    specs: [
      { label: 'Fall Gradient', value: 'Laser-calibrated 1:50 (2%) or 1:100 (1%) self-cleansing slope' },
      { label: 'Jointing Method', value: 'Butt-fusion and electrofusion welding (HDPE), solvent weld (UPVC)' },
      { label: 'Testing Method', value: 'Air pressure test / water fill test to top of stack' }
    ],
    process: [
      { step: '01', title: 'Invert Level Planning', detail: 'Survey boundary sewer connection invert levels to calculate required pipe gradients.' },
      { step: '02', title: 'Stack & Branch Rough-In', detail: 'Suspend drainage pipes with sound-decoupling rubber-lined brackets.' },
      { step: '03', title: 'Air & Water Testing', detail: 'Plug branch ends and subject drainage lines to 50mm water gauge pressure hold.' },
      { step: '04', title: 'Final Handover', detail: 'Inspect clean-out access points and verify trap water seal depth.' }
    ],
    faqs: [
      {
        question: 'Why is acoustic HDPE drainage preferred over UPVC in luxury interiors?',
        answer: 'High-density polyethylene (HDPE) with sound-deadening mineral layers dampens wastewater rushing noise by up to 15 dB compared to standard thin-wall UPVC, essential for quiet luxury hotel suites and retail stores.'
      }
    ],
    relatedSlugs: ['commercial-plumbing-dubai', 'grease-trap-installation-dubai']
  },
  {
    slug: 'plumbing-amc-dubai',
    category: 'plumbing',
    title: 'Commercial Plumbing Maintenance & AMC Dubai',
    metaTitle: 'Commercial Plumbing AMC Dubai | Preventive Maintenance | Abbadi Tech',
    metaDescription: 'Commercial plumbing annual maintenance contracts (AMC) in Dubai. Booster pumps, drainage flushing & 24/7 emergency leak repair: +971 50 554 6943.',
    h1: 'Commercial Plumbing Maintenance & Annual Contracts (AMC) in Dubai',
    badge: 'Hydraulic Assurance · 24/7 Urgent Dispatch',
    directAnswer: 'Abbadi Tech delivers comprehensive commercial plumbing Annual Maintenance Contracts (AMC) across Dubai. Our certified technicians service booster and transfer pump skids, inspect water heater manifolds, descale fixture valves, and flush main sewer lines, backing contracts with 24/7 priority emergency leak dispatch.',
    overview: 'Plumbing failures damage inventory, ruin ceilings, and halt business operations. Our planned preventive maintenance programs identify failing pump mechanical seals, faulty pressure relief valves, and scaling before catastrophic leaks occur.',
    scopeList: [
      'Quarterly preventive servicing of water booster, transfer, and sump pumps',
      'Inspection and testing of temperature-pressure relief (TPR) valves on commercial boilers',
      'Hydro-jetting and clearing of grease-prone commercial kitchen drainage lines',
      'Water tank float valve calibration and backflow preventer annual certification',
      '24/7 emergency response for major burst pipes, flooding, and pump outages'
    ],
    specs: [
      { label: 'SLA Response', value: '20 to 45 minutes for burst pipe emergencies in Dubai' },
      { label: 'Service Frequency', value: 'Monthly, Quarterly, or Bi-Annual preventive cycles' },
      { label: 'Documentation', value: 'Detailed digital maintenance logs and water quality health checks' }
    ],
    process: [
      { step: '01', title: 'Hydraulic Asset Audit', detail: 'Cataloging all pumps, pressure vessels, backflow preventers, and major shut-off valves.' },
      { step: '02', title: 'Preventive Servicing', detail: 'Lubricating pump bearings, testing pressure switch cut-in, and cleaning strainer baskets.' },
      { step: '03', title: 'Corrective Upgrades', detail: 'Replacing worn washers, leaking flexi-hoses, and recalibrating system pressure.' },
      { step: '04', title: 'On-Call Emergency Protection', detail: 'Continuous 24/7 priority dispatch support for contract holders.' }
    ],
    faqs: [
      {
        question: 'What is included in a commercial plumbing AMC?',
        answer: 'A standard AMC includes scheduled inspections of water booster pumps, drainage stacks, water heater boilers, valve exercising, strainer cleanings, and discounted parts with priority emergency call-out.'
      }
    ],
    relatedSlugs: ['water-booster-pump-installation-dubai', 'commercial-plumbing-dubai']
  },
  {
    slug: 'mep-contractor-dubai',
    category: 'mep',
    title: 'Turnkey MEP Contracting Services Dubai',
    metaTitle: 'MEP Contractor Dubai | Mechanical, Electrical, Plumbing | Abbadi Tech',
    metaDescription: 'Leading turnkey MEP contractor in Dubai. Combined electrical, plumbing, HVAC & DEWA approval engineering for commercial fit-outs: +971 50 554 6943.',
    h1: 'Turnkey MEP Contracting (Mechanical, Electrical, Plumbing) in Dubai',
    badge: 'Integrated MEP · One Accountable Turnkey Contractor',
    directAnswer: 'Abbadi Tech is an integrated MEP (Mechanical, Electrical, Plumbing) contractor in Dubai with over 20 years of continuous UAE execution. We deliver complete turnkey fit-out engineering: DEWA electrical submissions, MDB panel building, HVAC chilled-water and ductwork coordination, acoustic drainage, and Civil Defence compliance under a single accountable engineering management team.',
    overview: 'Splitting electrical, plumbing, and HVAC across separate sub-contractors creates scheduling conflicts, finger-pointing, and site coordination clashes. Abbadi Tech solves this by providing a unified MEP engineering team that designs, coordinates in 3D BIM, executes, and secures authority approvals end to end.',
    scopeList: [
      'Complete DEWA electrical approvals, Single-Line Diagrams, and smart meter energization',
      'MDB/SMDB panel building, primary cable containment, and 3-phase power distribution',
      'Potable water piping (PPR/copper), acoustic drainage (HDPE/UPVC), and grease interceptors',
      'HVAC chilled water FCU installation, ducted split systems, and air balancing',
      'Dubai Civil Defence (DCD) and Dubai Municipality (DM) authority coordination and handover'
    ],
    specs: [
      { label: 'Years of UAE Delivery', value: 'Operating in Dubai and the UAE since 2005' },
      { label: 'Project Sectors', value: 'Retail, F&B dining, commercial offices, healthcare, luxury villas' },
      { label: 'Workforce', value: '100% in-house certified electrical engineers and master plumbers' },
      { label: 'Authority Interface', value: 'Direct liaison with DEWA, DM, Civil Defence, Trakhees, DDA' }
    ],
    process: [
      { step: '01', title: 'Combined MEP Design & Sizing', detail: 'We integrate electrical load schedules, hydraulic flow rates, and HVAC cooling loads into coordinated CAD drawings.' },
      { step: '02', title: 'Authority Permitting', detail: 'We secure DEWA fit-out NOCs, DM approvals, and landlord technical sign-off in parallel.' },
      { step: '03', title: 'Synchronized First & Second Fix', detail: 'Our unified teams pull cable trays, install ductwork, and run water lines without physical clashes.' },
      { step: '04', title: 'Integrated Testing & Handover', detail: 'Megger testing, 10-bar hydraulic testing, air flow balancing, and authority inspection attendance.' }
    ],
    faqs: [
      {
        question: 'Why choose a combined MEP contractor instead of separate trades?',
        answer: 'A combined MEP contractor eliminates clashes between ductwork, cable trays, and drainage pipes in tight ceiling voids, ensures a single point of technical accountability, and reduces project handover schedules by 20% to 35%.'
      },
      {
        question: 'Does Abbadi Tech provide HVAC services as part of MEP contracting?',
        answer: 'Yes. We coordinate chilled water fan coil unit (FCU) piping, duct fabrication, extract fans, and air balancing alongside our core electrical and plumbing execution.'
      }
    ],
    relatedSlugs: ['commercial-electrical-contractor-dubai', 'commercial-plumbing-dubai', 'mdb-smdb-panel-assembly-dubai']
  }
];
