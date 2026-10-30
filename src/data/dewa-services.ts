export interface DewaApprovalService {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  badge: string;
  directAnswer: string;
  overview: string;
  targetAudience: string[];
  timeline: string;
  requiredDocuments: { name: string; description: string }[];
  steps: { step: string; title: string; detail: string }[];
  technicalConsiderations: string[];
  commonPitfalls: string[];
  pricingGuidance: string;
  faqs: { question: string; answer: string }[];
  relatedApprovalSlugs: string[];
  relatedServiceSlugs: string[];
}

export const dewaServicesList: DewaApprovalService[] = [
  {
    slug: 'fit-out-approval-noc',
    title: 'DEWA Fit-Out Approval & Decoration NOC',
    metaTitle: 'DEWA Fit-Out NOC Dubai | Decoration Approval | Abbadi Tech',
    metaDescription: 'Secure your DEWA fit-out NOC in Dubai within 3–5 days. Compliant single-line diagrams, load schedules & fast-track approval. Call +971 50 554 6943.',
    h1: 'DEWA Fit-Out Approval & Decoration NOC in Dubai',
    badge: 'Fit-Out Permitting · 3–5 Day Turnaround',
    directAnswer: 'A DEWA Fit-Out NOC (Decoration Approval) is mandatory before starting interior fit-out modifications in any Dubai commercial property. Abbadi Tech prepares certified Single-Line Diagrams (SLDs) and connected load schedules, submits them through the DEWA e-Services portal, and secures your stamped NOC within 3 to 5 business days without delays.',
    overview: 'Whether fitting out a luxury retail store in The Dubai Mall, an office in Business Bay, or a restaurant in DIFC, DEWA regulations require an approved No Objection Certificate before electrical installations or power energization can take place. Operating without this NOC triggers municipal stop-work orders and power disconnection.',
    targetAudience: [
      'Commercial tenants leasing retail, F&B, or corporate office spaces',
      'Interior fit-out contractors requiring certified MEP drawings & authority submission',
      'Property landlords verifying tenant electrical load alterations',
      'Retail franchise brands opening new branch locations across Dubai'
    ],
    timeline: '3 to 5 business days for standard fit-out approvals with existing building capacity.',
    requiredDocuments: [
      { name: 'Ejari Certificate & Tenancy Contract', description: 'Valid tenancy registration showing tenant trade name matching the DET commercial license.' },
      { name: 'DET Commercial Trade License', description: 'Copy of valid Dubai commercial license reflecting the designated business activity.' },
      { name: 'Premise ID / DEWA Account Number', description: 'The 10-digit Premise ID located on the premises meter or previous utility invoice.' },
      { name: 'Landlord / Base-Building NOC', description: 'Signed no-objection certificate from building management authorizing tenant MEP modifications.' },
      { name: 'Architectural & Reflected Ceiling Plans', description: 'AutoCAD layout showing partition walls, lighting tracks, and equipment positions.' }
    ],
    steps: [
      { step: '01', title: 'Site Inspection & Load Verification', detail: 'Our electrical engineers survey the premise, review existing DB capacity, and determine connected vs demand load.' },
      { step: '02', title: 'SLD & Load Schedule Drafting', detail: 'We engineer stamped Single-Line Diagrams (SLD) in AutoCAD fully compliant with DEWA Electrical Installation Regulations.' },
      { step: '03', title: 'Online Submission via DEWA Portal', detail: 'We upload drawings, calculations, and tenancy documents through our enrolled contractor portal for authority review.' },
      { step: '04', title: 'Clarification & Approval Release', detail: 'We coordinate directly with DEWA reviewing engineers to answer technical queries and obtain the stamped Fit-Out NOC certificate.' }
    ],
    technicalConsiderations: [
      'Total connected load must remain within the base-building allocated breaker rating unless a formal load upgrade is requested.',
      'Power factor must be maintained at a minimum of 0.95 lagging across all commercial loads.',
      'Emergency exit lighting and central battery systems must conform to UAE Fire and Life Safety regulations.'
    ],
    commonPitfalls: [
      'Submitting drawings without landlord authorization or without confirming actual substation breaker ratings.',
      'Unbalanced single-phase loads across the three supply phases causing premature trips.',
      'Commencing on-site demolition or wiring before receiving the official stamped DEWA NOC certificate.'
    ],
    pricingGuidance: 'Flexible, project-specific engineering proposal based on unit floor area, load schedule complexity, and site survey requirements. Official authority statutory deposit fees are invoiced directly by DEWA.',
    faqs: [
      {
        question: 'Can a tenant apply directly for a DEWA fit-out NOC without an approved contractor?',
        answer: 'No. DEWA e-Services portal requires electrical drawings, load schedules, and NOC applications to be uploaded and stamped by an enrolled electrical contractor or engineering consultant.'
      },
      {
        question: 'How long does DEWA fit-out approval take in Dubai?',
        answer: 'Under standard conditions where the tenant load does not exceed existing allocated power, DEWA reviews and issues the fit-out NOC within 3 to 5 business days.'
      },
      {
        question: 'Do I need a DEWA NOC for minor cosmetic renovations?',
        answer: 'If the renovation involves zero electrical rewiring, no added DB breakers, and no alteration of lighting circuits or sanitary pipes, a DEWA NOC may not be required. However, any modification to wiring circuits or power capacity legally requires a DEWA NOC.'
      },
      {
        question: 'What is the difference between a DEWA NOC and Dubai Municipality permit?',
        answer: 'Dubai Municipality (DM) approves structural, architectural, and civil alterations, whereas DEWA strictly regulates electrical and water supply infrastructure. In most commercial fit-outs, DM requires the DEWA NOC as a prerequisite for final completion.'
      }
    ],
    relatedApprovalSlugs: ['single-line-diagram-load-schedule', 'additional-load-upgrade', 'lv-inspection-meter-connection'],
    relatedServiceSlugs: ['commercial-electrical-contractor-dubai', 'mdb-smdb-panel-assembly-dubai']
  },
  {
    slug: 'additional-load-upgrade',
    title: 'DEWA Additional Electrical Load Upgrade',
    metaTitle: 'DEWA Electrical Load Upgrade Dubai | Additional Power | Abbadi Tech',
    metaDescription: 'Need more electrical power for commercial kitchens, chillers, or machinery? Fast DEWA load upgrades in Dubai. Turnkey SLD & cables: +971 50 554 6943.',
    h1: 'DEWA Additional Electrical Load Upgrades in Dubai',
    badge: 'Power Capacity Enhancement · Substation Feasibility',
    directAnswer: 'A DEWA Additional Load Upgrade is required when a property requires more electrical power (kW) than currently sanctioned. Abbadi Tech audits existing feeder capacity, engineers new load schedules and Single-Line Diagrams, submits the enhancement request through DEWA, and manages upstream breaker and cable upgrades from 20kW to 1,000+ kW.',
    overview: 'Restaurants installing high-power ovens and induction ranges, warehouses adding cold storage, and corporate data rooms often exhaust their initial power allotment. Abbadi Tech evaluates building substation capacity, secures DEWA sanctions, and coordinates physical cable pulling and breaker enhancements without business interruptions.',
    targetAudience: [
      'Restaurant & commercial kitchen operators upgrading cooking equipment',
      'Warehouse operators installing heavy cold storage, refrigeration, or automated conveyor motors',
      'Office tenants adding high-density server racks or supplementary DX cooling units',
      'Villa owners installing central air conditioning, EV fast chargers, or heated pool systems'
    ],
    timeline: '7 to 14 business days for upgrades supported by existing transformer capacity; 3 to 6 weeks if substation enhancement or external cable pulling is required.',
    requiredDocuments: [
      { name: 'Latest DEWA Electricity Bill', description: 'Showing Premise ID, existing connected load (kW), and account verification.' },
      { name: 'Existing Stamped Single-Line Diagram', description: 'Original approved SLD reflecting the current distribution board configuration.' },
      { name: 'New Equipment Schedule & Power Ratings', description: 'Equipment cut-sheets showing kW, phase requirement (1-phase vs 3-phase), and running amperage.' },
      { name: 'Building Owner / Developer NOC', description: 'Confirming allowable load allocation from the main intake switchboard.' }
    ],
    steps: [
      { step: '01', title: 'Load Audit & Breaker Sizing', detail: 'We calculate new Maximum Demand (kVA) using DEWA diversity factors to establish the exact required increment.' },
      { step: '02', title: 'Substation Feasibility Assessment', detail: 'We verify whether the building transformer and busbar trunking can deliver the additional amperage.' },
      { step: '03', title: 'DEWA Power Enhancement Submission', detail: 'We submit the revised SLD, feeder schedule, and calculation pack through DEWA e-Services.' },
      { step: '04', title: 'Execution & Inspection', detail: 'Upon DEWA approval, our certified wiremen pull upgraded incoming cables, upgrade MCCBs, and coordinate final DEWA inspection.' }
    ],
    technicalConsiderations: [
      'Upgrades above 400A require CT (Current Transformer) metering cubicles and dedicated isolation switches.',
      'If cumulative building demand exceeds transformer capacity, a formal substation feasibility study and capital contribution to DEWA may apply.',
      'Cables must be sized strictly according to DEWA derating tables for UAE ambient temperature (50°C ground/ambient).'
    ],
    commonPitfalls: [
      'Procuring heavy commercial cooking machinery before securing DEWA load sanction, leading to idle premises.',
      'Failing to account for motor starting current (inrush) resulting in nuisance tripping of main incomer breakers.',
      'Overlooking cable containment sizing when pulling larger XLPE copper conductors.'
    ],
    pricingGuidance: 'Customized engineering quotation tailored to the requested kilowatt enhancement, upstream transformer capacity, and cable run distance. DEWA statutory capacity fees apply as per utility tariff classification.',
    faqs: [
      {
        question: 'How do I know if my unit needs a DEWA load upgrade?',
        answer: 'If the total connected wattage of your planned equipment exceeds the sanctioned load on your DEWA bill or if your main circuit breaker trips when running multiple appliances, an additional load upgrade is necessary.'
      },
      {
        question: 'How much does DEWA charge per additional kW of power?',
        answer: 'DEWA assesses infrastructure charges per additional kW or kVA based on premises category (commercial, industrial, residential) and whether substation modifications are required. We calculate these exact costs during the feasibility survey.'
      },
      {
        question: 'Can the landlord deny my request to increase electrical load?',
        answer: 'Yes, if the building’s total sanctioned transformer capacity is fully allocated to other units. In such cases, we perform a diversity audit to establish whether surplus load can be transferred from underutilized circuits.'
      }
    ],
    relatedApprovalSlugs: ['fit-out-approval-noc', 'single-line-diagram-load-schedule', 'lv-inspection-meter-connection'],
    relatedServiceSlugs: ['mdb-smdb-panel-assembly-dubai', 'commercial-electrical-contractor-dubai']
  },
  {
    slug: 'new-electricity-connection',
    title: 'DEWA New Electricity Connection Approval',
    metaTitle: 'DEWA New Electricity Connection Dubai | Fast-Track | Abbadi Tech',
    metaDescription: 'Complete DEWA new electricity connection services in Dubai. Feasibility, substation approval, cable laying & live meter energization: +971 50 554 6943.',
    h1: 'DEWA New Electricity Connection Services in Dubai',
    badge: 'Permanent Power · Turnkey Energization',
    directAnswer: 'A DEWA New Electricity Connection establishes permanent power supply for newly constructed buildings, warehouses, villas, or industrial plots in Dubai. Abbadi Tech manages the complete technical trajectory—from initial substation design and DEWA NOC approvals to MV/LV cable laying, transformer room inspection, and live meter activation.',
    overview: 'Securing a new utility connection in Dubai requires rigorous adherence to DEWA design guidelines and coordination with infrastructure authorities. Abbadi Tech provides end-to-end engineering from preliminary design through final commissioning.',
    targetAudience: [
      'Property developers and general contractors delivering new builds',
      'Industrial plot owners in Al Quoz, DIP, Dubai South, and Jebel Ali',
      'Private villa owners constructing new residences across Dubai',
      'Commercial warehouse operators establishing new logistics facilities'
    ],
    timeline: '2 to 4 weeks for standard low-voltage permanent connections; 6 to 12 weeks for major developments requiring substation integration.',
    requiredDocuments: [
      { name: 'Dubai Municipality Approved Site Plan (Krooki)', description: 'Official plot demarcations, plot number, and zoned utility access points.' },
      { name: 'Dubai Municipality Building Permit', description: 'Approved architectural and MEP schematics stamped by Dubai Municipality.' },
      { name: 'Estimated Connected Load Calculations', description: 'Comprehensive engineering schedule detailing building total connected kW and peak demand.' },
      { name: 'Consultant & Contractor Appointment Letters', description: 'Formal authorization appointing Abbadi Tech as the technical executing contractor.' }
    ],
    steps: [
      { step: '01', title: 'Preliminary Feasibility & Booking', detail: 'We verify nearest DEWA service points, substation distance, and network availability.' },
      { step: '02', title: 'Electrical Design & NOC Approval', detail: 'We produce detailed MV/LV schematics, cable trench drawings, and switchgear layouts for DEWA sign-off.' },
      { step: '03', title: 'Infrastructure Execution & Laying', detail: 'Our certified crews excavate, lay heavy-duty armored cables, install earthing mats, and erect meter cubicles.' },
      { step: '04', title: 'DEWA Inspection & Meter Release', detail: 'We manage final testing (Megger, earth loop, phase sequence) and oversee DEWA smart meter fixing and energization.' }
    ],
    technicalConsiderations: [
      'Substation rooms must comply strictly with DEWA ventilation, fire-rated door, and vehicle access specifications.',
      'Main incoming cables must be heavy-duty copper conductors complying with IEC 60502 standards.',
      'Dedicated earthing system must achieve a resistance reading below 1.0 Ohm.'
    ],
    commonPitfalls: [
      'Delaying the connection application until late in construction, leading to costly diesel generator operation.',
      'Constructing electrical rooms with non-compliant dimensions or insufficient clearance for DEWA equipment.',
      'Failing to obtain Road & Transport Authority (RTA) NOCs for external cable trench excavation.'
    ],
    pricingGuidance: 'Project-specific engineering and execution quotes. DEWA statutory connection charges apply as per tariff schedule.',
    faqs: [
      {
        question: 'When should I apply for a new DEWA electricity connection?',
        answer: 'You should apply as soon as building permits are issued by Dubai Municipality to ensure utility lead times align with your construction completion timeline.'
      },
      {
        question: 'Does Abbadi Tech handle the physical cable pulling and civil trenching?',
        answer: 'Yes, we provide full turnkey execution including external cable trenching, sand bedding, protective warning tiles, and cable pulling to DEWA standards.'
      }
    ],
    relatedApprovalSlugs: ['building-noc', 'single-line-diagram-load-schedule', 'temporary-construction-power'],
    relatedServiceSlugs: ['electrical-contractors-dubai', 'mdb-smdb-panel-assembly-dubai']
  },
  {
    slug: 'new-water-connection',
    title: 'DEWA New Water Connection & Meter Approval',
    metaTitle: 'DEWA New Water Connection Dubai | Water Meter Approval | Abbadi Tech',
    metaDescription: 'Secure DEWA new water connections in Dubai. Potable pipework, meter fixing, hydrostatic testing & authority inspection. Call +971 50 554 6943.',
    h1: 'DEWA New Water Connection & Meter Approvals in Dubai',
    badge: 'Potable Water · Hydraulic Certification',
    directAnswer: 'A DEWA New Water Connection provides municipal potable water supply to new buildings, villas, or commercial expansions. Abbadi Tech designs compliant water reticulation schematics, installs certified PPR and HDPE piping, coordinates DEWA water meter cabinet fixing, and manages pressure testing for prompt water release.',
    overview: 'Dubai Electricity and Water Authority maintains stringent public health and hydraulic standards for all potable water connections. Our master plumbers and hydraulic engineers ensure water networks pass strict microbiological and pressure standards.',
    targetAudience: [
      'Villa owners building or extending residential premises',
      'Commercial kitchen and laundry facilities requiring high-flow water supplies',
      'Industrial plants and car wash operators needing dedicated water metering',
      'Commercial property developers requiring multi-tenant water meter banks'
    ],
    timeline: '5 to 10 business days from application to water meter installation.',
    requiredDocuments: [
      { name: 'Approved Plumbing Layout Drawings', description: 'Schematics showing water supply pipelines, storage tanks, and pump manifolds.' },
      { name: 'Krooki (Site Plan) & Building Permit', description: 'Official municipal plot documents and building clearances.' },
      { name: 'Premise ID / Tenancy Ejari', description: 'Identifying documentation for the physical space.' }
    ],
    steps: [
      { step: '01', title: 'Water Demand Calculation', detail: 'We size pipe diameters, storage tank capacities, and water meter ratings based on fixture units.' },
      { step: '02', title: 'Water Layout Submission', detail: 'We submit plumbing layouts to DEWA Water Department for connection approval.' },
      { step: '03', title: 'Piping & Meter Cabinet Installation', detail: 'We install certified food-grade PPR pipes, boundary valve boxes, and DEWA-standard water meter cabinets.' },
      { step: '04', title: 'Inspection & Meter Energization', detail: 'DEWA inspectors verify hydrostatic pressure hold and commission the smart water meter.' }
    ],
    technicalConsiderations: [
      'Water meter cabinets must be mounted externally on the boundary wall with unrestricted access for DEWA technicians.',
      'Ground storage tanks must feature food-grade epoxy coating and automated dual-level float switches.',
      'All internal potable lines must undergo mandatory 10-bar hydrostatic testing.'
    ],
    commonPitfalls: [
      'Installing non-certified PPR fittings that fail DEWA material audits.',
      'Placing water meter cabinets inside gated private areas without independent 24/7 authority access.',
      'Omitting backflow preventers on commercial drainage or chiller top-up feeds.'
    ],
    pricingGuidance: 'Tailored engineering and installation quote based on meter niche distance, pipeline diameter, and fixture count. DEWA statutory connection fees are billed directly to the utility account.',
    faqs: [
      {
        question: 'How long does DEWA take to install a new water meter?',
        answer: 'Once physical piping passes DEWA inspection, the smart water meter is typically fixed and commissioned within 3 to 5 business days.'
      },
      {
        question: 'Do commercial kitchens need separate water meters?',
        answer: 'Certain developers and multi-tenant commercial centers require sub-metering for high-consumption tenants like restaurants and commercial laundries.'
      }
    ],
    relatedApprovalSlugs: ['new-electricity-connection', 'building-noc'],
    relatedServiceSlugs: ['commercial-plumbing-dubai', 'water-booster-pump-installation-dubai']
  },
  {
    slug: 'building-noc',
    title: 'DEWA Building NOC (Electricity & Water)',
    metaTitle: 'DEWA Building NOC Dubai | Utility Clearance | Abbadi Tech',
    metaDescription: 'Secure DEWA Building NOC for new construction, additions, or renovations in Dubai. Complete utility verification. Fast clearance: +971 50 554 6943.',
    h1: 'DEWA Building NOC (Electricity & Water Clearance) in Dubai',
    badge: 'Statutory Clearance · Dubai Building Permit Prerequisite',
    directAnswer: 'A DEWA Building NOC is an official statutory clearance certifying that proposed construction or structural renovations do not interfere with existing underground electricity cables or water mains. Abbadi Tech conducts utility clearance audits and secures your stamped DEWA Building NOC required for Dubai Municipality building permits.',
    overview: 'Before Dubai Municipality or free zone authorities issue a building or modification permit, developers must obtain clearance confirming that excavation, piling, or structural additions will not jeopardize underground high-voltage cables or water distribution trunks.',
    targetAudience: [
      'Architects and structural consultants submitting Dubai Municipality permits',
      'Villa owners adding swimming pools, annexes, or boundary wall extensions',
      'Commercial property owners modifying building facades or underground parking',
      'Civil construction contractors preparing for site mobilization'
    ],
    timeline: '4 to 7 business days for standard utility clearances.',
    requiredDocuments: [
      { name: 'DM Building Permit Application', description: 'Official municipal registration details and structural design package.' },
      { name: 'Affection Plan (Krooki)', description: 'Plot coordinates indicating exact boundary lines and proposed excavation zones.' },
      { name: 'Architectural & Structural Cross Sections', description: 'CAD drawings showing foundation depths, piling locations, and utility easements.' }
    ],
    steps: [
      { step: '01', title: 'DEWA Infrastructure Corridor Check', detail: 'We review DEWA geographic information system (GIS) maps to locate adjacent electrical cables and water trunks.' },
      { step: '02', title: 'Clearance Application Submission', detail: 'We compile and submit architectural CAD drawings through the DEWA building clearance portal.' },
      { step: '03', title: 'Site Inspection & Trial Pits (If Required)', detail: 'If high-voltage cables cross the boundary, we oversee manual trial trenching to confirm exact pipe/cable depth.' },
      { step: '04', title: 'NOC Certificate Issuance', detail: 'DEWA approves the submission and releases the official Building NOC.' }
    ],
    technicalConsiderations: [
      'Minimum safety clearances must be maintained from DEWA high-voltage transmission and distribution corridors.',
      'Excavation within 1.5 meters of live DEWA cables requires special manual digging supervision.',
      'Building over existing water easements is strictly prohibited under Dubai law.'
    ],
    commonPitfalls: [
      'Commencing machine excavation before obtaining the DEWA Building NOC, causing catastrophic cable damage and severe fines.',
      'Failing to identify buried irrigation or street lighting feeders along plot boundaries.'
    ],
    pricingGuidance: 'Tailored application coordination quoted according to site boundary dimensions, excavation depth, and adjacent utility corridors.',
    faqs: [
      {
        question: 'Is a DEWA Building NOC required for villa swimming pool construction?',
        answer: 'Yes. Any excavation for an in-ground swimming pool requires a DEWA Building NOC to verify that no underground electrical or water utility lines cross the excavation path.'
      }
    ],
    relatedApprovalSlugs: ['demolition-noc', 'infrastructure-noc', 'new-electricity-connection'],
    relatedServiceSlugs: ['electrical-contractors-dubai']
  },
  {
    slug: 'single-line-diagram-load-schedule',
    title: 'DEWA Stamped Single-Line Diagram (SLD) & Load Schedule',
    metaTitle: 'DEWA SLD Drawing & Load Schedule Dubai | Stamped Design | Abbadi Tech',
    metaDescription: 'Certified DEWA Single-Line Diagrams (SLD) and load schedule calculations in Dubai. Stamped AutoCAD schematics in 24–48 hours. Call +971 50 554 6943.',
    h1: 'DEWA Stamped Single-Line Diagram (SLD) & Load Schedule Calculations',
    badge: 'AutoCAD Schematics · Stamped Within 24–48 Hours',
    directAnswer: 'A Single-Line Diagram (SLD) and Load Schedule form the core technical submission for every DEWA electrical approval. Abbadi Tech’s licensed electrical engineers design stamped AutoCAD SLDs, calculate exact connected vs demand loads, select appropriate breaker curves and cable gauges, and deliver DEWA-ready packages within 24 to 48 hours.',
    overview: 'The Single-Line Diagram is the universal electrical roadmap of your property. It illustrates everything from the incoming supply cut-out fuse, main circuit breakers (MCCB/MCB), busbar ratings, cable gauges, and residual current devices (ELCB/RCD), down to individual branch circuits.',
    targetAudience: [
      'Fit-out contractors needing urgent stamped electrical drawings for client spaces',
      'Business owners facing DEWA application rejections due to drawing errors',
      'Interior design consultants seeking certified MEP engineering support',
      'Property managers documenting building electrical switchgear networks'
    ],
    timeline: '24 to 48 hours for standard commercial and residential units.',
    requiredDocuments: [
      { name: 'Existing Electrical DB Layout (or Hand Sketch)', description: 'Details of existing circuit breakers, incoming mains, and equipment lists.' },
      { name: 'Floor Plan with Equipment Locations', description: 'CAD or PDF floor plan detailing power sockets, AC units, and lighting arrays.' },
      { name: 'Premise ID / DEWA Account Copy', description: 'Utility details verifying sanctioned load limits.' }
    ],
    steps: [
      { step: '01', title: 'Load Take-Off & Diversity Calculations', detail: 'We calculate total wattage, apply standard DEWA diversity factors, and establish maximum demand kVA.' },
      { step: '02', title: 'Circuit Grading & Cable Sizing', detail: 'We size conductors, circuit breakers, and earth continuity conductors according to BS 7671 and DEWA guidelines.' },
      { step: '03', title: 'AutoCAD SLD Drafting', detail: 'We draft the complete Single-Line Diagram detailing phase distribution (R-Y-B balance) and breaker ratings.' },
      { step: '04', title: 'Engineering Stamping & Deliverable Package', detail: 'We deliver stamped, submission-ready PDF and DWG drawing sets ready for instant portal upload.' }
    ],
    technicalConsiderations: [
      'Load must be evenly distributed across Red, Yellow, and Blue phases to prevent neutral overheating and voltage drop.',
      'Residual current devices (RCD) must be rated at 30mA for general socket outlets and damp areas, and 100mA/300mA for lighting and fixed machinery.',
      'Substation rooms and switchgear must be rated to withstand prospective short-circuit fault levels.'
    ],
    commonPitfalls: [
      'Using outdated AutoCAD templates that do not reflect recent DEWA regulations on smart meter CT chambers.',
      'Unbalanced phase calculations showing excessive neutral current.',
      'Specifying cable cross-sectional areas that fail temperature derating calculations.'
    ],
    pricingGuidance: 'Certified SLD packages quoted flexibly according to total connected load, sub-circuit breaker count, and distribution board tiers (MDB/SMDB/DB).',
    faqs: [
      {
        question: 'What is the turnaround time for a stamped DEWA SLD drawing?',
        answer: 'Our electrical engineering team delivers complete, submission-ready Single-Line Diagrams within 24 to 48 hours upon receipt of site layout drawings.'
      },
      {
        question: 'Can you correct an existing SLD that was rejected by DEWA?',
        answer: 'Yes. We frequently rectify rejected third-party drawings, redesigning load schedules and correcting phase balance to satisfy DEWA review queries.'
      }
    ],
    relatedApprovalSlugs: ['fit-out-approval-noc', 'additional-load-upgrade', 'red-notice-inspection-rectification'],
    relatedServiceSlugs: ['mdb-smdb-panel-assembly-dubai', 'commercial-electrical-contractor-dubai']
  },
  {
    slug: 'lv-inspection-meter-connection',
    title: 'DEWA LV Inspection & Smart Meter Connection',
    metaTitle: 'DEWA LV Inspection & Meter Connection Dubai | Abbadi Tech',
    metaDescription: 'Pass your DEWA Low Voltage (LV) site inspection first time. Pre-testing, Megger reports & meter energization across Dubai. Call +971 50 554 6943.',
    h1: 'DEWA Low Voltage (LV) Inspection & Meter Connection in Dubai',
    badge: 'On-Site Commissioning · First-Time Pass Target',
    directAnswer: 'A DEWA Low Voltage (LV) site inspection is the mandatory final hurdle before electrical power is permanently turned on. Abbadi Tech conducts rigorous on-site pre-inspections—performing insulation resistance (Megger), earth fault loop impedance, and polarity checks—before attending the official DEWA inspection to secure instant approval and meter connection.',
    overview: 'After electrical fit-out work is physically completed, DEWA inspectors visit the premises to audit installation quality, earthing integrity, breaker ratings, and cable terminations against the approved Single-Line Diagram.',
    targetAudience: [
      'Fit-out contractors preparing for immediate handover to client',
      'Commercial tenants awaiting power activation to commence trade',
      'Villa owners awaiting permanent DEWA meter fixing',
      'Facilities managers completing building electrical distribution upgrades'
    ],
    timeline: 'Inspection booking within 3 to 5 business days; live meter fixing within 24 to 48 hours post-clearance.',
    requiredDocuments: [
      { name: 'Approved DEWA Single-Line Diagram', description: 'The official stamped schematic matching physical on-site installation.' },
      { name: 'Signed Electrical Test Certificate (Megger)', description: 'Insulation resistance and continuity report certified by our electrical engineer.' },
      { name: 'Premise Access Confirmation', description: 'Unrestricted access to the electrical room, incomer DB, and smart meter cabinet.' }
    ],
    steps: [
      { step: '01', title: 'Internal Pre-Audit & Testing', detail: 'Our testing engineers inspect every DB, torque connections, verify phase colors, and perform 500V/1000V Megger insulation tests.' },
      { step: '02', title: 'Booking via DEWA e-Services', detail: 'We upload testing certificates and schedule the official LV site inspection date.' },
      { step: '03', title: 'On-Site Inspection Representation', detail: 'Our senior electrical engineer attends the inspection with the DEWA inspector, walking through testing points.' },
      { step: '04', title: 'Meter Release & Live Energization', detail: 'Upon inspection sign-off, DEWA meter fixing teams install and energize the digital smart meter.' }
    ],
    technicalConsiderations: [
      'Insulation resistance must measure greater than 1.0 Megaohm across all live-to-earth and live-to-live conductors.',
      'All DB panels must feature engraved permanent circuit directory charts and phase identification sleeves.',
      'Earthing continuity conductors must be securely bonded to containment trays and metallic water pipes.'
    ],
    commonPitfalls: [
      'Failing insulation tests due to moisture, damaged cable insulation, or connected electronic loads during Megger testing.',
      'Physical switchboard not matching the approved SLD (e.g., mismatched breaker brand or ampere rating).',
      'Missing warning labels, shock hazard notices, or incomplete DB circuit schedules.'
    ],
    pricingGuidance: 'Comprehensive pre-audit, Megger testing certification, and engineer attendance quoted based on premises scale. DEWA applies standard meter fixing charges as per utility schedule.',
    faqs: [
      {
        question: 'What happens if a property fails a DEWA LV inspection?',
        answer: 'DEWA issues an inspection punch list or Red Notice citing defects. Re-booking delays handover by 1 to 2 weeks. Abbadi Tech conducts pre-testing to eliminate this risk.'
      },
      {
        question: 'Do all appliances have to be installed for the DEWA inspection?',
        answer: 'Fixed isolators and switches must be in place. However, sensitive plug-in electronics must be disconnected during high-voltage Megger testing to prevent equipment damage.'
      }
    ],
    relatedApprovalSlugs: ['fit-out-approval-noc', 'single-line-diagram-load-schedule', 'red-notice-inspection-rectification'],
    relatedServiceSlugs: ['electrical-contractors-dubai', 'mdb-smdb-panel-assembly-dubai']
  },
  {
    slug: 'red-notice-inspection-rectification',
    title: 'DEWA Red Notice Inspection Failure Rectification',
    metaTitle: 'DEWA Red Notice Rectification Dubai | Inspection Failed? | Abbadi Tech',
    metaDescription: 'Failed a DEWA electrical inspection? Rapid Red Notice rectification in Dubai. Site audit within 24h, cable/DB correction & re-inspection: +971 50 554 6943.',
    h1: 'DEWA Red Notice & Failed Inspection Rectification in Dubai',
    badge: 'Urgent Rectification · 24-Hour Rapid Dispatch',
    directAnswer: 'A DEWA Red Notice or Inspection Rejection Notice is issued when site electrical works fail safety audits, show poor insulation resistance, or contradict approved drawings. Abbadi Tech provides rapid emergency dispatch within 24 hours to audit inspector punch points, replace non-compliant switchgear or cabling, and secure re-inspection clearance.',
    overview: 'An inspection rejection puts commercial openings in jeopardy and can trigger tenancy delay fines. Abbadi Tech specializes in resolving complex authority non-compliance issues fast.',
    targetAudience: [
      'Contractors whose previous electrical sub-contractor failed authority inspection',
      'Retail and restaurant tenants facing imminent mall opening deadlines',
      'Building owners whose premises were issued stop-work or disconnection warnings',
      'Commercial property buyers resolving historical utility violations'
    ],
    timeline: 'Rapid site survey within 24 hours; technical rectification completed within 2 to 5 business days.',
    requiredDocuments: [
      { name: 'DEWA Inspection Report / Red Notice Slip', description: 'Official document listing inspector comments and technical rejection codes.' },
      { name: 'Previously Approved Single-Line Diagram (SLD)', description: 'The baseline drawing referenced during the failed inspection.' },
      { name: 'Premise Access Keys & Location Pin', description: 'Immediate physical access to all distribution boards and meter rooms.' }
    ],
    steps: [
      { step: '01', title: 'Emergency Site Audit (24 Hours)', detail: 'Our senior engineer audits physical installation against inspector notes and conducts forensic insulation testing.' },
      { step: '02', title: 'Correction Plan & BOQ', detail: 'We detail exact cabling, switchgear, or earthing modifications required to satisfy DEWA regulations.' },
      { step: '03', title: 'Physical Rectification Work', detail: 'Our wiremen rewire faulty distribution boards, re-terminate loose lugs, balance phases, and correct circuit schedules.' },
      { step: '04', title: 'Re-Inspection Booking & Clearance', detail: 'We submit the rectification response report on the DEWA portal and accompany the inspector for final pass sign-off.' }
    ],
    technicalConsiderations: [
      'Common technical causes: Earth leakage trip threshold issues, missing ferrule numbering, undersized neutral cables, and non-certified ELCB breakers.',
      'All replacement equipment must feature approved DEWA/ESMA compliance documentation.',
      'Phase load imbalance exceeding 10% must be re-distributed across active circuits.'
    ],
    commonPitfalls: [
      'Attempting to re-book inspection without physically rectifying every cited item; repeat rejections attract escalated scrutiny.',
      'Using uncertified wiremen to perform emergency fixes without engineering supervision.'
    ],
    pricingGuidance: 'Emergency on-site survey and rectification proposal quoted flexibly based on cited Red Notice defect points and required physical remediation scope.',
    faqs: [
      {
        question: 'Why did my DEWA inspection fail?',
        answer: 'The most frequent rejection causes are insulation resistance failure (Megger < 1 MΩ), missing DB ferrule labeling, mismatched circuit breakers, and unbonded metallic cable trays.'
      },
      {
        question: 'How fast can Abbadi Tech mobilize to resolve a Red Notice?',
        answer: 'We mobilize senior electrical engineering teams within 24 hours anywhere in Dubai, Abu Dhabi, or Ajman.'
      }
    ],
    relatedApprovalSlugs: ['lv-inspection-meter-connection', 'single-line-diagram-load-schedule'],
    relatedServiceSlugs: ['emergency-electrician-dubai', 'mdb-smdb-panel-assembly-dubai']
  },
  {
    slug: 'temporary-construction-power',
    title: 'DEWA Temporary Construction Power Approval',
    metaTitle: 'DEWA Temporary Power Connection Dubai | Builder Power | Abbadi Tech',
    metaDescription: 'Secure DEWA temporary construction power in Dubai. Eliminate costly diesel generators with builder utility connections. Turnkey service: +971 50 554 6943.',
    h1: 'DEWA Temporary Construction Power Connections in Dubai',
    badge: 'Builder Supply · Cost-Saving Site Power',
    directAnswer: 'DEWA Temporary Construction Power provides builder electrical supply for active construction sites, major renovations, or temporary commercial installations in Dubai. Abbadi Tech secures temporary supply NOCs, installs weatherproof outdoor feeder pillars and metering cubicles, and transitions sites away from noisy, expensive diesel generators.',
    overview: 'Operating diesel generators on construction sites costs thousands in monthly fuel and maintenance. Connecting temporary DEWA builder power cuts site operating expenses significantly while delivering continuous three-phase energy.',
    targetAudience: [
      'Main contractors and civil construction companies managing active sites',
      'Property owners developing new private villas or commercial warehouses',
      'Event organizers and temporary exhibition venues requiring short-term utility power',
      'Fit-out contractors undertaking extensive structural rebuilds'
    ],
    timeline: '7 to 14 business days from submission to live builder meter energization.',
    requiredDocuments: [
      { name: 'Dubai Municipality Building Permit / Demolition Permit', description: 'Confirming lawful construction activities on site.' },
      { name: 'Krooki Site Plan with Demarcated Feeder Point', description: 'Plot plan detailing location for the temporary feeder pillar.' },
      { name: 'Temporary Connected Load Schedule', description: 'Calculations for tower cranes, hoists, welding machines, and site offices.' }
    ],
    steps: [
      { step: '01', title: 'Site Power Demand Sizing', detail: 'We audit contractor heavy equipment (cranes, hoists, site cabins) to specify required temporary kVA capacity.' },
      { step: '02', title: 'Temporary SLD Submission', detail: 'We submit temporary schematic drawings to DEWA Builder Connections Department.' },
      { step: '03', title: 'Weatherproof Feeder Pillar Installation', detail: 'We install IP65-rated outdoor distribution boards with RCD earth protection and lockable breaker enclosures.' },
      { step: '04', title: 'Inspection & Meter Fixing', detail: 'DEWA inspects earthing and cable depth before installing the temporary builder meter.' }
    ],
    technicalConsiderations: [
      'Temporary distribution boards must possess a minimum ingress protection rating of IP65 and UV stabilization.',
      'Independent earthing pits must deliver an earth resistance reading below 1.0 Ohm.',
      'All branch circuits powering hand tools must feature 30mA residual current protection.'
    ],
    commonPitfalls: [
      'Using indoor-rated switchboards exposed to dust and weather on open construction sites.',
      'Exceeding sanctioned temporary kW limits with heavy welding sets, causing line trips.'
    ],
    pricingGuidance: 'Design, weatherproof switchgear supply, and feeder installation quoted flexibly based on contractor kVA demand and site layout. DEWA refundable security deposits apply.',
    faqs: [
      {
        question: 'Is temporary construction power cheaper than running diesel generators?',
        answer: 'Yes. In typical Dubai construction scenarios, DEWA temporary builder power reduces monthly energy operating costs by 40% to 65% compared to commercial diesel generator hire and fuel consumption.'
      }
    ],
    relatedApprovalSlugs: ['new-electricity-connection', 'building-noc'],
    relatedServiceSlugs: ['electrical-contractors-dubai']
  },
  {
    slug: 'meter-cable-shifting',
    title: 'DEWA Electricity Meter & Cable Shifting Approvals',
    metaTitle: 'DEWA Meter & Cable Shifting Dubai | Relocation Approval | Abbadi Tech',
    metaDescription: 'Relocate your DEWA electric meter or underground supply cable in Dubai. Compliant engineering, authority NOC & physical shifting: +971 50 554 6943.',
    h1: 'DEWA Electricity Meter & Cable Shifting Services in Dubai',
    badge: 'Utility Relocation · Villa & Commercial Remodeling',
    directAnswer: 'DEWA Meter or Cable Shifting is necessary when building expansions, villa boundary modifications, or retail realignments require moving existing utility meters or incoming service cables. Abbadi Tech secures DEWA network relocation approvals, builds new compliant meter cabinets, and manages cable re-routing without prolonged power downtime.',
    overview: 'Expanding a villa garage, altering entrance gates, or combining two retail units frequently demands moving existing DEWA kWh metering cubicles and intake cables.',
    targetAudience: [
      'Villa owners remodeling boundary walls, extensions, or vehicle garages',
      'Retail mall tenants consolidating or reconfiguring store entrance facades',
      'Industrial warehouse owners adjusting logistic loading docks and access gates',
      'Commercial landlords modernizing centralized building meter rooms'
    ],
    timeline: '10 to 20 business days including DEWA network coordination and jointing.',
    requiredDocuments: [
      { name: 'Existing Premise ID & Account Details', description: 'Utility bills verifying active connection status.' },
      { name: 'Architectural Layout Showing New Meter Position', description: 'Drawings demonstrating proposed new location complying with DEWA access rules.' },
      { name: 'Landlord / Title Deed Documentation', description: 'Proof of property ownership authorizing physical alterations.' }
    ],
    steps: [
      { step: '01', title: 'Feasibility Survey', detail: 'We verify underground cable slack, jointing feasibility, and compliance of the proposed new location.' },
      { step: '02', title: 'DEWA Shifting Application', detail: 'We submit the relocation package to DEWA Distribution Operations Department.' },
      { step: '03', title: 'New Cabinet Construction', detail: 'We prepare the new compliant meter niche or boundary enclosure with proper conduit routing.' },
      { step: '04', title: 'Cable Splicing & Live Reconnection', detail: 'Under DEWA supervision, cables are safely extended/jointed, the meter re-fixed, and power re-energized.' }
    ],
    technicalConsiderations: [
      'New meter positions must guarantee 24/7 unobstructed access for DEWA meter reading and maintenance personnel.',
      'Underground cable extensions require certified heat-shrink resin jointing kits approved by DEWA specifications.',
      'Planned power outages during cut-over must be coordinated to protect occupant operations.'
    ],
    commonPitfalls: [
      'Relocating meter cabinets to internal or restricted areas rejected by DEWA inspectors.',
      'Attempting unauthorized physical shifting without DEWA presence, resulting in severe utility tampering fines.'
    ],
    pricingGuidance: 'Turnkey engineering and cabinet construction quoted flexibly based on feeder trenching distance, jointing requirements, and site conditions. DEWA statutory shifting charges apply.',
    faqs: [
      {
        question: 'Can I move my DEWA meter to the inside of my property?',
        answer: 'No. DEWA strictly mandates that smart electricity and water meters must be externally accessible from outside boundary walls or in designated common electrical rooms.'
      }
    ],
    relatedApprovalSlugs: ['fit-out-approval-noc', 'additional-load-upgrade'],
    relatedServiceSlugs: ['electrical-contractors-dubai', 'mdb-smdb-panel-assembly-dubai']
  },
  {
    slug: 'shams-dubai-solar-approval',
    title: 'DEWA Shams Dubai Solar Net-Metering Approvals',
    metaTitle: 'Shams Dubai Solar Approval | DEWA Net-Metering NOC | Abbadi Tech',
    metaDescription: 'Secure DEWA Shams Dubai solar PV approvals. Rooftop solar net-metering design, grid-impact studies & bidirectional meter connection: +971 50 554 6943.',
    h1: 'DEWA Shams Dubai Solar Net-Metering Approvals in Dubai',
    badge: 'Solar PV Grid Integration · Net-Metering Clearance',
    directAnswer: 'The Shams Dubai Solar Initiative allows property owners to connect rooftop solar photovoltaic (PV) systems to the DEWA electrical grid for net-metering credits. Abbadi Tech handles complete engineering submissions—solar SLDs, inverter certifications, grid-impact assessments, and bidirectional smart meter installation.',
    overview: 'Shams Dubai enables villas, factories, and commercial buildings to generate clean solar energy, reduce monthly utility expenditure, and export excess electricity back to DEWA’s grid.',
    targetAudience: [
      'Commercial warehouse and factory owners with large roof surface areas in Al Quoz and DIP',
      'Villa owners seeking substantial long-term electricity bill reductions',
      'Corporate building managers pursuing LEED environmental sustainability targets',
      'Solar EPC contractors seeking local enrolled electrical contractor coordination'
    ],
    timeline: '3 to 6 weeks for design clearance, grid audit, and bidirectional meter fixing.',
    requiredDocuments: [
      { name: 'DEWA Electricity Bill & Premise ID', description: 'Valid account in good standing without outstanding balances.' },
      { name: 'Solar PV Array Layout & Roof Structural NOC', description: 'Engineering certificate confirming roof load-bearing capacity for solar panels.' },
      { name: 'Equipment Data Sheets (Inverter & PV Modules)', description: 'Technical documentation verifying compliance with DEWA solar equipment lists.' }
    ],
    steps: [
      { step: '01', title: 'Solar Sizing & Grid Compatibility', detail: 'We calculate optimal PV capacity based on annual historical consumption and roof area.' },
      { step: '02', title: 'Electrical Solar SLD Design', detail: 'We produce detailed DC/AC schematics, anti-islanding protection schemes, and inverter wiring schedules.' },
      { step: '03', title: 'Shams Dubai Portal Submission', detail: 'We upload engineering packs for DEWA Solar Department technical evaluation.' },
      { step: '04', title: 'Inspection & Bidirectional Metering', detail: 'DEWA inspects protection relays, witnesses anti-islanding disconnect tests, and installs the bidirectional generation meter.' }
    ],
    technicalConsiderations: [
      'Inverters must feature certified anti-islanding protection to immediately disconnect solar feed during grid power outages.',
      'Total connected solar capacity cannot exceed sanctioned electrical load of the premises without special variance.',
      'DC cabling must be double-insulated, UV-resistant solar cable conforming to EN 50618.'
    ],
    commonPitfalls: [
      'Selecting solar inverters not listed on DEWA’s official approved equipment registry.',
      'Overlooking roof structural certifications required by Dubai Municipality.'
    ],
    pricingGuidance: 'Permitting, solar SLD engineering, and DEWA grid interface quoted flexibly based on system kilowatt/megawatt capacity and roof structural layout.',
    faqs: [
      {
        question: 'How does DEWA Shams Dubai net metering work?',
        answer: 'Your solar system feeds power directly to your building. Excess energy flows into the DEWA grid, spinning your generation meter backward and generating kilowatt-hour credits offset against future bills.'
      }
    ],
    relatedApprovalSlugs: ['new-electricity-connection', 'single-line-diagram-load-schedule'],
    relatedServiceSlugs: ['commercial-electrical-contractor-dubai']
  },
  {
    slug: 'demolition-noc',
    title: 'DEWA Demolition NOC & Utility Disconnection',
    metaTitle: 'DEWA Demolition NOC Dubai | Utility Disconnection | Abbadi Tech',
    metaDescription: 'Secure DEWA Demolition NOC in Dubai. Safe electrical & water disconnection, meter decommissioning & site clearance for redevelopment: +971 50 554 6943.',
    h1: 'DEWA Demolition NOC & Utility Disconnection in Dubai',
    badge: 'Safe Decommissioning · Site Redevelopment Clearance',
    directAnswer: 'A DEWA Demolition NOC is legally required before demolishing any existing structure in Dubai. Abbadi Tech manages the complete utility decommissioning process—safely isolating power, coordinating official DEWA meter removal, retrieving security deposits, and obtaining the stamped Demolition NOC required by Dubai Municipality.',
    overview: 'Before demolition excavators can touch a building, DEWA must formally verify that high-voltage electrical feeders and pressurized water mains are safely terminated and disconnected at the property boundary.',
    targetAudience: [
      'Demolition contractors preparing sites for tear-down',
      'Property owners redeveloping older villas or commercial plots',
      'Civil engineering consultants submitting Dubai Municipality demolition files'
    ],
    timeline: '7 to 14 business days to achieve complete meter decommissioning and NOC release.',
    requiredDocuments: [
      { name: 'Dubai Municipality Demolition Permit File', description: 'Municipal application documents.' },
      { name: 'Latest DEWA Final Settlement Bill', description: 'Confirming zero outstanding financial liability on the premise.' },
      { name: 'Title Deed & Demarcation Site Plan', description: 'Proof of ownership and site boundary coordinates.' }
    ],
    steps: [
      { step: '01', title: 'Final Bill Settlement', detail: 'We assist in obtaining final meter readings and closing active customer accounts.' },
      { step: '02', title: 'Demolition Application Submission', detail: 'We upload demolition requests and boundary layout plans via DEWA portal.' },
      { step: '03', title: 'DEWA Site Disconnection', detail: 'DEWA technical teams physically remove the meter and isolate the main feeder cable at the service pillar.' },
      { step: '04', title: 'Stamped Demolition NOC Delivery', detail: 'DEWA issues the final clearance certificate required for municipal demolition permits.' }
    ],
    technicalConsiderations: [
      'Physical demolition cannot proceed while service cables remain energized under load.',
      'Boundary water mains must be capped and isolated to prevent subterranean flooding during foundation excavation.'
    ],
    commonPitfalls: [
      'Starting interior strip-out or structural demolition prior to official meter removal, incurring severe regulatory penalties.'
    ],
    pricingGuidance: 'Coordination and physical utility isolation supervision quoted flexibly according to building scale, service count, and disconnect schedule.',
    faqs: [
      {
        question: 'Can I keep a temporary power connection during demolition?',
        answer: 'Yes. We can coordinate transitioning the existing permanent supply into an approved temporary construction power feeder before full demolition begins.'
      }
    ],
    relatedApprovalSlugs: ['building-noc', 'temporary-construction-power'],
    relatedServiceSlugs: ['electrical-contractors-dubai']
  },
  {
    slug: 'infrastructure-noc',
    title: 'DEWA Infrastructure NOC & Utility Corridor Clearance',
    metaTitle: 'DEWA Infrastructure NOC Dubai | Utility Corridor Clearance | Abbadi Tech',
    metaDescription: 'Secure DEWA Infrastructure NOC for roadworks, trenching & utility corridors in Dubai. GIS utility mapping & cross-authority clearance: +971 50 554 6943.',
    h1: 'DEWA Infrastructure NOC & Utility Corridor Clearance in Dubai',
    badge: 'Right-of-Way Permitting · RTA & DM Coordination',
    directAnswer: 'A DEWA Infrastructure NOC is required for civil excavation, roadworks, pipe laying, or deep trenching in public rights-of-way and utility corridors across Dubai. Abbadi Tech conducts GIS utility conflict analysis, manages trial trench verification, and secures DEWA infrastructure clearances across municipal and free-zone jurisdictions.',
    overview: 'Dubai’s subterranean rights-of-way contain high-density networks of high-voltage transmission lines, 11kV distribution feeders, and pressurized potable water mains. Securing an Infrastructure NOC protects public utility networks and guarantees compliance.',
    targetAudience: [
      'Civil infrastructure contractors laying sewer, stormwater, or telecom duct banks',
      'Industrial developers extending utility trenches in Al Quoz, DIP, and JAFZA',
      'Landscaping and road paving contractors operating in public rights-of-way'
    ],
    timeline: '10 to 20 business days based on the number of intersecting utility corridors.',
    requiredDocuments: [
      { name: 'RTA / DM Right-of-Way Permit Application', description: 'Approved road or infrastructure alignment package.' },
      { name: 'CAD Alignment Drawings with Geographic Coordinates', description: 'Detailed route plan overlaid with existing municipal infrastructure.' }
    ],
    steps: [
      { step: '01', title: 'Corridor GIS Mapping', detail: 'We audit planned routes against DEWA electricity and water network databases.' },
      { step: '02', title: 'Cross-Section & Clearance Drafting', detail: 'We draft vertical and horizontal clearance schematics respecting DEWA safety buffers.' },
      { step: '03', title: 'DEWA Technical Review', detail: 'We submit the engineering pack via the Infrastructure NOC portal and attend authority technical meetings.' },
      { step: '04', title: 'Issuance & Supervision', detail: 'DEWA grants the stamped NOC with specified trial pit and protection conditions.' }
    ],
    technicalConsiderations: [
      'Minimum separation distances between water pipelines and power cables must be strictly maintained.',
      'Heavy vehicle crossing over shallow DEWA cables requires engineered concrete protection slabs.'
    ],
    commonPitfalls: [
      'Excavating without trial pits to physically verify cable locations indicated on older utility records.'
    ],
    pricingGuidance: 'Permit coordination quoted based on corridor length and utility intersections.',
    faqs: [
      {
        question: 'Who issues the final right-of-way permit?',
        answer: 'The Roads and Transport Authority (RTA) or Dubai Municipality issues the final excavation permit, but only after receiving unconditional NOCs from DEWA, telecom providers, and civil defense.'
      }
    ],
    relatedApprovalSlugs: ['building-noc', 'demolition-noc'],
    relatedServiceSlugs: ['drainage-works-dubai']
  }
];
