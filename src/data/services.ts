export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  tagline: string;
  heroH1: string;
  overview: string;
  keyBenefits: string[];
  deliverables: { title: string; description: string }[];
  sectors: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "electrical",
    slug: "electrical-contractors-dubai",
    title: "Electrical Contractors Dubai",
    shortTitle: "Electrical Works",
    navLabel: "Electrical Contractors",
    metaTitle: "Electrical Contractors Dubai | DEWA Works | Abbadi Tech",
    metaDescription: "Licensed electrical contractor in Dubai: DEWA works, MDB/SMDB/DB installation, cable tray, wiring and lighting design. Call for a free site visit.",
    icon: "Zap",
    tagline: "DEWA-Certified Electrical Contracting Since 2005",
    heroH1: "Licensed Electrical Contractors in Dubai & DEWA Approval Works",
    overview: "Abbadi Tech LLC provides turnkey commercial, industrial, and high-end residential electrical contracting services across Dubai and the UAE. From DEWA authority approvals, load schedule design, and MDB/SMDB panel building to cable pulling and power distribution, our licensed engineers ensure total compliance, zero downtime, and certified handover.",
    keyBenefits: [
      "Certified DEWA works handled from initial engineering drawings to final meter release",
      "In-house assembly & testing of MDB, SMDB, and DB panels complying with BS 7671",
      "Accurate electrical load schedule calculations preventing breaker trips and utility penalties",
      "Overhead galvanized and perforated cable tray systems for clean, organized routing",
      "Single-phase and three-phase high-amperage power cabling pulled with verified insulation tests",
      "Authority-compliant incomer DB installation and DEWA kWh metering cubicle execution"
    ],
    deliverables: [
      {
        title: "DEWA Approval & Authority Coordination",
        description: "Full end-to-end management of Dubai Electricity and Water Authority (DEWA) submissions, NOCs, inspection booking, and meter energization."
      },
      {
        title: "MDB, SMDB & DB Panel Assembly",
        description: "Custom assembly, busbar alignment, component grading, and installation of Main, Sub-Main, and Final Distribution Boards."
      },
      {
        title: "Power & Architectural Lighting Layouts",
        description: "Precision electrical schematics for retail, corporate offices, hospitality, and villas, including dimming controls and emergency lighting."
      },
      {
        title: "Load Schedule Engineering & Calculation",
        description: "Detailed connected load and demand load schedules engineered to DEWA regulations, optimizing cable sizes and switchgear ratings."
      },
      {
        title: "Cable Tray & Trunking Networks",
        description: "Heavy-duty hot-dip galvanized cable trays, ladder racks, and wire mesh baskets installed with seismic-rated drop rods."
      },
      {
        title: "Wiring, Cable Pulling & Termination",
        description: "XLPE, PVC, and fire-resistant FP200 cabling pulled through conduits and risers with comprehensive megger and continuity testing."
      },
      {
        title: "DEWA Incomer DB & Meter Fixing",
        description: "Precision installation of DEWA incomer isolation cubicles, current transformer (CT) chambers, and digital kWh meter boards."
      }
    ],
    sectors: [
      "Retail Boutiques & Shopping Malls",
      "Restaurants & Commercial Kitchens",
      "Corporate Office Towers & Banks",
      "Luxury Residential Villas",
      "Industrial Warehouses & Factories"
    ],
    faqs: [
      {
        question: "Are you an approved electrical contractor registered with DEWA?",
        answer: "Yes, Abbadi Tech LLC has been a registered and certified electrical contractor with the Dubai Electricity and Water Authority (DEWA) since 2005. We handle all DEWA approvals, drawing submissions, inspections, and meter connections directly."
      },
      {
        question: "How long does a DEWA electrical load upgrade take?",
        answer: "A standard load upgrade in Dubai typically takes between 10 to 21 working days, depending on existing substation capacity, submission approvals, and whether additional cable pulling is required from the service pillar."
      },
      {
        question: "Do you assemble electrical distribution boards in-house?",
        answer: "Yes, we assemble, wire, and test MDBs, SMDBs, and DBs following strict IEC and DEWA regulations, complete with proper phase labeling, ferrule numbering, and circuit directory schedules."
      },
      {
        question: "What testing is conducted prior to DEWA inspection?",
        answer: "We perform full insulation resistance tests (Megger), loop impedance, earth continuity, and polarity tests, providing signed test certificates to ensure a first-time pass on DEWA site inspection."
      }
    ]
  },
  {
    id: "plumbing",
    slug: "plumbing-contractors-dubai",
    title: "Plumbing & Drainage Contractors Dubai",
    shortTitle: "Plumbing Works",
    navLabel: "Plumbing Contractors",
    metaTitle: "Plumbing & Drainage Contractors Dubai | Abbadi Tech",
    metaDescription: "Expert plumbing contractor in Dubai: PPR, copper, HDPE and UPVC piping, pressure pumps and heaters. Fast, reliable, on-time delivery.",
    icon: "Droplets",
    tagline: "High-Performance Potable Water & Sanitary Drainage Engineering",
    heroH1: "Certified Plumbing & Drainage Contractors in Dubai",
    overview: "Abbadi Tech LLC delivers precision commercial and high-end residential plumbing and drainage contracting throughout Dubai and the UAE. We engineer leak-proof potable water networks using heat-welded PPR and brazed copper, install acoustic HDPE and UPVC soil stacks, and build automated booster pumping stations and solar heating loops.",
    keyBenefits: [
      "Certified fusion-welded PPR and medical/commercial copper piping with 10-bar pressure guarantees",
      "Soundproof HDPE drainage lines engineered for luxury hospitality and high-rise residences",
      "Custom automatic booster and transfer pump control panels with duty/standby failover",
      "Commercial grease interceptor and food-waste drainage systems compliant with Dubai Municipality",
      "Energy-efficient central solar water heating systems with electric backup circulation",
      "High-precision installation of European luxury sanitary fittings and concealed wall-hung cisterns"
    ],
    deliverables: [
      {
        title: "PPR & Potable Water Distribution",
        description: "Clean, non-corrosive Polypropylene Random Copolymer (PPR) piping heat-fused for domestic and commercial potable water loops."
      },
      {
        title: "Brazed Copper Plumbing Systems",
        description: "Durable copper piping installed for high-temperature water lines, commercial kitchens, steam circuits, and specialized medical/lab feeds."
      },
      {
        title: "HDPE & UPVC Soil and Waste Drainage",
        description: "Acoustic high-density polyethylene and UPVC drainage stacks designed to eliminate hydraulic noise, odors, and water hammer."
      },
      {
        title: "Automatic Booster Pump Panels & Controls",
        description: "Variable frequency drive (VFD) pressure booster sets and dual-pump control panels ensuring consistent water pressure to all floors."
      },
      {
        title: "Central Water Heaters & Solar Systems",
        description: "Installation and hydraulic balancing of commercial water heaters, rooftop solar thermal collector arrays, and circulation pumps."
      },
      {
        title: "Luxury Sanitary Fixture Installation",
        description: "Concealed cisterns, thermostatic rain showers, sensor faucets, wall-hung water closets, and bespoke Italian/German bath fixtures."
      }
    ],
    sectors: [
      "Luxury Hotels & Beachfront Resorts",
      "Fine Dining & Fast-Casual Restaurants",
      "Private Mansions & Palm Jumeirah Villas",
      "Commercial Kitchens & Food Processing",
      "Office Restrooms & Corporate Pantries"
    ],
    faqs: [
      {
        question: "What pipe materials do you use for potable water supply?",
        answer: "We primarily utilize fusion-welded PPR (Polypropylene Random Copolymer) from certified manufacturers for potable water, as well as high-grade Type L/K copper for specialized commercial kitchens and heating systems."
      },
      {
        question: "How do you test plumbing and drainage installations before handover?",
        answer: "All water supply lines undergo a rigorous 10-to-15 bar hydrostatic pressure hold test for a minimum of 24 hours. Drainage networks undergo smoke and water leak tests compliant with Dubai Municipality regulations."
      },
      {
        question: "Can you install and maintain automated booster pump sets?",
        answer: "Yes, we specify, assemble, install, and program automatic multi-pump booster sets with VFD frequency inverters, pressure transmitters, and emergency bypass manifolds."
      },
      {
        question: "Do you install commercial grease traps for restaurant fit-outs?",
        answer: "Yes, we supply and install stainless steel and fiberglass grease traps and grease interceptors fully approved by Dubai Municipality Food Safety and Drainage departments."
      }
    ]
  },
  {
    id: "hvac",
    slug: "hvac-contractors-dubai",
    title: "HVAC & AC Contractors Dubai",
    shortTitle: "HVAC / Air Conditioning",
    navLabel: "HVAC Contractors",
    metaTitle: "HVAC & AC Contractors Dubai | Abbadi Tech LLC",
    metaDescription: "Complete HVAC and air-conditioning installation and maintenance for Dubai offices, retail, restaurants and villas. Request a quote.",
    icon: "Snowflake",
    tagline: "Precision Climate Control & Energy-Efficient Cooling Solutions",
    heroH1: "Commercial & Residential HVAC Contractors in Dubai",
    overview: "In the demanding climate of the UAE, effective air conditioning is essential to business operations and occupant comfort. Abbadi Tech LLC provides turnkey HVAC contracting: from chilled water Fan Coil Units (FCU) and Air Handling Units (AHU) to VRF/VRV systems and ducted split units, complete with certified galvanized duct fabrication, thermal insulation, and testing and balancing.",
    keyBenefits: [
      "Rapid heat-load calculations sizing cooling equipment perfectly for peak Dubai summers",
      "Turnkey chilled water network piping (chilled water FCUs, AHUs, and balancing valves)",
      "High-efficiency VRF/VRV inverter systems delivering zoned climate control with low energy costs",
      "Custom galvanized sheet metal duct fabrication and high-density acoustic insulation",
      "Fresh air handling (FAHU) and kitchen ecology unit integration with fire dampers",
      "Full Testing, Adjusting & Balancing (TAB) reports ensuring uniform airflow across all rooms"
    ],
    deliverables: [
      {
        title: "Chilled Water FCU & AHU Installation",
        description: "Mounting, piping, dynamic 2-way balancing valves, and smart thermostat integration for district cooling systems (Empower, Tabreed, Emicool)."
      },
      {
        title: "VRV / VRF Variable Refrigerant Flow Systems",
        description: "Multi-split VRV/VRF outdoor units with multiple indoor evaporators, delivering flexible simultaneous cooling for multi-room villas and offices."
      },
      {
        title: "Ducted Split & Package Unit Systems",
        description: "Heavy-duty roof-mounted package units and ducted split ACs for retail showrooms, restaurants, and warehouse workspaces."
      },
      {
        title: "GI Duct Fabrication & Acoustic Insulation",
        description: "Galvanized iron ductwork engineered to SMACNA standards with closed-cell elastomeric thermal insulation and sound attenuators."
      },
      {
        title: "Kitchen Ecology & Exhaust Extraction",
        description: "Grease-rated kitchen hood exhaust ductwork, electrostatic precipitators (ESP), and activated carbon filters compliant with Dubai Civil Defence."
      },
      {
        title: "Air Balancing & Commissioning (TAB)",
        description: "Calibrated anemometer airflow measurements, damper setting, and temperature delta verification for optimal air changes per hour."
      }
    ],
    sectors: [
      "Corporate Headquarters & Commercial Offices",
      "Fine Dining & Fast-Food Restaurants",
      "Retail Stores & Shopping Centres",
      "Private Residential Villas & Penthouses",
      "Industrial Warehouses & Server Rooms"
    ],
    faqs: [
      {
        question: "Do you work with District Cooling providers like Empower, Tabreed, and Emicool?",
        answer: "Yes, our engineers are thoroughly experienced with Dubai district cooling requirements, including pressure testing chilled water loops, valve package installation, and BTU meter integration."
      },
      {
        question: "How do you eliminate AC condensation leaks and mold issues?",
        answer: "We install heavy-gauge insulated uPVC or copper drain lines with deep U-traps, auxiliary float shutoff switches, and premium closed-cell insulation that prevents sweating and moisture buildup."
      },
      {
        question: "What is the turnaround time for a commercial AC replacement?",
        answer: "Depending on equipment availability and crane access permits, emergency rooftop or indoor unit replacements can often be executed within 24 to 48 hours to minimize business downtime."
      }
    ]
  },
  {
    id: "fitout",
    slug: "fit-out-contractors-dubai",
    title: "Fit-Out & Interior Contractors Dubai",
    shortTitle: "Interior Fit-Out",
    navLabel: "Fit-Out Contractors",
    metaTitle: "Fit-Out & Interior Contractors Dubai | Abbadi Tech",
    metaDescription: "MEP and interior fit-out for shops, cafes, restaurants and offices in Dubai. Trusted by leading brands. Get a free quote.",
    icon: "Building2",
    tagline: "Turnkey Commercial MEP Fit-Outs Delivered on Time",
    heroH1: "Turnkey MEP & Interior Fit-Out Contractors in Dubai",
    overview: "Abbadi Tech LLC delivers comprehensive MEP interior fit-out contracting for Dubai's premier shopping malls, financial hubs, and commercial centers. Trusted by global brands like Rolex, Subway, and Marks & Spencer, we coordinate all mechanical, electrical, plumbing, and authority approvals under one accountable roof to open your space on schedule.",
    keyBenefits: [
      "Over 20 years experience executing fit-outs in Dubai Mall, DIFC, Marina Mall, and Box Park",
      "Complete authority management: DEWA, Dubai Municipality, Civil Defence (DCD), and mall management",
      "Tight milestone adherence ensuring retail and F&B businesses launch on opening day without rent penalty",
      "Seamless integration between ceiling MEP services, lighting architecture, and designer interiors",
      "Dedicated site engineers and project managers on-site during mall night-shift fit-out hours",
      "Complete closeout documentation, As-Built drawings, and operation and maintenance manuals"
    ],
    deliverables: [
      {
        title: "Retail Boutique MEP Fit-Out",
        description: "Specialized electrical, architectural spotlighting, luxury washrooms, and climate control for high-end fashion and jewelry brands."
      },
      {
        title: "Restaurant & Cafe MEP Fit-Out",
        description: "Heavy-duty commercial kitchen rough-ins, gas detection interlocks, grease drainage, FAHU ventilation, and dining area ambiance."
      },
      {
        title: "Corporate Office & Banking Fit-Out",
        description: "Raised access flooring electrical boxes, structured cabling conduits, meeting room presentation power, and executive amenities."
      },
      {
        title: "Authority NOCs & Dubai Approvals",
        description: "DEWA electricity connection, Dubai Municipality Food & Safety approvals, Civil Defence fire safety NOCs, and mall work permits."
      },
      {
        title: "Acoustic & Ceiling MEP Coordination",
        description: "BIM/CAD MEP clash detection, coordinating HVAC diffusers, sprinkler heads, speakers, and architectural lighting in gypsum or open ceilings."
      },
      {
        title: "Testing, Commissioning & Handover",
        description: "Systematic energization, safety interlock testing, airflow balancing, authority inspections, and final tenancy completion certificates."
      }
    ],
    sectors: [
      "Shopping Mall Boutiques & Department Stores",
      "Dine-In Restaurants, Bakeries & Coffee Shops",
      "Corporate Headquarters & Co-Working Spaces",
      "Banking Branches & Wealth Management Lounges",
      "Medical Clinics & Aesthetic Centers"
    ],
    faqs: [
      {
        question: "Do you have experience working inside major Dubai malls?",
        answer: "Yes, our teams have successfully delivered completed fit-out projects inside The Dubai Mall, Dubai Marina Mall, City Centre Mirdif, City Centre Shindagha, and Dubai Festival City, strictly adhering to mall night-shift rules and safety protocols."
      },
      {
        question: "Can Abbadi Tech handle both the MEP contracting and authority approvals?",
        answer: "Yes, we handle the entire technical approval chain, including DEWA electrical approvals, Civil Defence NOCs, Dubai Municipality drainage and health approvals, and mall engineering sign-offs."
      },
      {
        question: "How do you ensure projects finish on schedule?",
        answer: "We establish detailed Gantt charts, pre-order long-lead electrical switchgear and AC units, and deploy double-shift teams when required to hit opening dates without compromise."
      }
    ]
  },
  {
    id: "maintenance",
    slug: "mep-maintenance-dubai",
    title: "MEP Maintenance Services Dubai",
    shortTitle: "MEP Maintenance",
    navLabel: "MEP Maintenance",
    metaTitle: "MEP Maintenance Services Dubai | Abbadi Tech LLC",
    metaDescription: "Annual and on-call MEP maintenance in Dubai: electrical, plumbing and AC. Fast response, transparent pricing. Call now.",
    icon: "Wrench",
    tagline: "Proactive Preventive Maintenance & 24/7 Emergency Repairs",
    heroH1: "Preventive & On-Call MEP Maintenance Contractors Dubai",
    overview: "Prevent costly downtime, unexpected electrical outages, and water leaks with Abbadi Tech's comprehensive MEP maintenance services in Dubai. We offer customized Annual Maintenance Contracts (AMC) and rapid on-call emergency response for commercial buildings, retail stores, restaurants, and luxury residences.",
    keyBenefits: [
      "24/7 emergency response team stationed in Al Quoz, reaching central Dubai locations in minutes",
      "Comprehensive Annual Maintenance Contracts (AMC) covering electrical, plumbing, and AC systems",
      "Thermal infrared thermographic scanning of electrical panels to identify hot spots before fires occur",
      "Scheduled drainage descaling, grease trap cleaning, and booster pump mechanical overhauls",
      "AC coil chemical washing, gas pressure checks, filter replacements, and thermostat calibrations",
      "Transparent digital reporting with photographic before-and-after maintenance logs"
    ],
    deliverables: [
      {
        title: "Commercial & Retail AMC Contracts",
        description: "Scheduled quarterly preventive visits and unlimited emergency call-outs for shops, restaurants, offices, and multi-tenant facilities."
      },
      {
        title: "Electrical Panel Thermographic Audits",
        description: "FLIR infrared thermal imaging of MDB and SMDB busbars and circuit breakers to detect loose connections, overloads, and fire risks."
      },
      {
        title: "Booster Pump & Drainage Maintenance",
        description: "Mechanical seal replacements, bearing lubrication, float switch calibration, pressure vessel recharging, and drainage line flushing."
      },
      {
        title: "AC & Chilled Water System Servicing",
        description: "Evaporator coil deep chemical sanitization, blower wheel cleaning, condensate drain clearing, and actuator valve maintenance."
      },
      {
        title: "Rapid Emergency Troubleshooting",
        description: "Rapid dispatch for power trips, short circuits, burst pipes, pump station failures, and AC breakdowns across Dubai and Abu Dhabi."
      },
      {
        title: "Statutory Safety & Compliance Audits",
        description: "Periodic testing of emergency lighting batteries, earthing pit resistance, and safety isolators to maintain municipal compliance."
      }
    ],
    sectors: [
      "Commercial Towers & Business Parks",
      "Retail Stores & Restaurant Chains",
      "Hotels, Resorts & Serviced Apartments",
      "Residential Villa Communities",
      "Warehouses & Industrial Storage Facilities"
    ],
    faqs: [
      {
        question: "What is included in an Abbadi Tech Annual Maintenance Contract (AMC)?",
        answer: "Our standard AMC includes regular quarterly preventive maintenance for all electrical switchgear, plumbing pumps and heaters, and HVAC cooling equipment, plus 24/7 priority emergency dispatch and discounted rates on replacement parts."
      },
      {
        question: "How fast is your emergency dispatch in Dubai?",
        answer: "For emergency AMC clients in Dubai (Al Quoz, Downtown, Business Bay, JLT, Marina, DIFC), our technicians arrive on-site within 45 to 90 minutes of receiving the call."
      },
      {
        question: "Do you offer thermographic scanning for insurance compliance?",
        answer: "Yes, our certified electrical engineers perform infrared thermographic surveys and deliver comprehensive inspection reports with thermal images required by insurance companies and DEWA."
      }
    ]
  }
];
