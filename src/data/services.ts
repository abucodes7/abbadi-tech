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
    metaTitle: "Electrical Contractors Dubai | DEWA Approval Services | Abbadi Tech",
    metaDescription: "Experienced electrical contractors in Dubai since 2005. Turnkey power, MDB panels, load schedule calculations & fit-out NOCs. Free survey: +971 50 554 6943.",
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
        question: "Do you handle complete DEWA approvals and submissions?",
        answer: "Yes, Abbadi Tech LLC specializes in complete DEWA approvals, single-line diagram (SLD) submissions, inspections, and smart meter connections directly with full compliance across Dubai."
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
    metaTitle: "Plumbing & Drainage Contractors Dubai | Municipality Approved | Abbadi Tech",
    metaDescription: "Licensed commercial plumbing & drainage contractors in Dubai. PPR & copper water lines, HDPE acoustic drainage & grease traps. Free quote: +971 50 554 6943.",
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
  }
];
