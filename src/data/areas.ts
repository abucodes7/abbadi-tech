export interface AreaItem {
  id: string;
  name: string;
  slug: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  keyLandmarks: string[];
  servicesOffered: string[];
  responseTime: string;
  projectsCount: string;
}

export const areasData: AreaItem[] = [
  {
    id: "business-bay",
    slug: "business-bay",
    name: "Business Bay Commercial District",
    headline: "Commercial Office & Hospitality MEP Contractors in Business Bay",
    metaTitle: "MEP Contractors Business Bay Dubai | DEWA Approval Services | Abbadi Tech",
    metaDescription: "Premier MEP contractors in Business Bay Dubai: turnkey corporate fit-outs, restaurant MEP, DEWA approvals & DB panel building. Call +971 50 554 6943.",
    description: "Business Bay is Dubai's high-density business epicentre. Abbadi Tech delivers precision electrical load schedule engineering, DEWA NOC approvals, corporate chilled water FCUs, and luxury restaurant drainage for landmark commercial towers along Marasi Drive, Bay Square, and the Dubai Canal.",
    keyLandmarks: ["Bay Square Commercial", "The Executive Towers", "The Opus by Omniyat", "Marasi Drive", "Iris Bay"],
    servicesOffered: ["DEWA Commercial Load Approvals & NOCs", "MDB & SMDB Distribution Board Upgrades", "Restaurant Kitchen Drainage & Grease Traps", "High-Rise Chilled Water FCU Commissioning", "24/7 Rapid Emergency Dispatch"],
    responseTime: "20 - 35 Minutes Rapid Dispatch",
    projectsCount: "25+ Projects"
  },
  {
    id: "downtown",
    slug: "downtown-dubai-mall",
    name: "Downtown Dubai & Dubai Mall",
    headline: "Flagship Luxury Retail & Fine Dining MEP Fit-Outs in Downtown",
    metaTitle: "MEP Contractors Downtown Dubai & Dubai Mall | Abbadi Tech",
    metaDescription: "Certified MEP contractor for Dubai Mall fashion boutiques, Downtown restaurants and luxury towers. Fast-track mall approvals & DEWA approval services.",
    description: "Downtown Dubai demands world-class precision and strict adherence to Emaar and Dubai Mall fit-out regulations. Abbadi Tech has engineered and delivered luxury plumbing and electrical systems for premier brands including Rolex, Leto Cafe, and Water Lemon in The Dubai Mall and Downtown boulevard towers.",
    keyLandmarks: ["The Dubai Mall (Fashion Avenue)", "Downtown Boulevard", "Burj Khalifa District", "Bay Square Business Bay"],
    servicesOffered: ["Luxury Retail Boutique MEP Fit-Out", "Mall Night-Shift Electrical & Plumbing", "Architectural CRI 95+ Lighting", "Acoustic Drainage & Booster Pumps", "Fast-Track Tenancy Approvals"],
    responseTime: "30 - 45 Minutes",
    projectsCount: "10+ Projects"
  },
  {
    id: "difc",
    slug: "difc",
    name: "DIFC (Dubai International Financial Centre)",
    headline: "Corporate Banking & High-End Hospitality MEP Contractors in DIFC",
    metaTitle: "MEP Contractors DIFC Dubai | Office & Restaurant Fit-Out | Abbadi Tech",
    metaDescription: "Specialist MEP contracting in DIFC: Marks & Spencer, Caribou Cafe, Yoi Sushi, corporate bank branches. DEWA approvals & acoustic engineering.",
    description: "In the UAE's premier financial center, Abbadi Tech provides specialized MEP fit-outs for international banking institutions, Michelin-caliber dining concepts, and multinational corporate headquarters. Our delivered DIFC portfolio includes Marks & Spencer, Caribou Cafe Gate Precinct, and Yoi Sushi.",
    keyLandmarks: ["DIFC Gate Precinct", "Gate Village", "Gate Avenue", "Index Tower"],
    servicesOffered: ["Bank Dual-UPS Power Infrastructure", "High-Density Commercial Chilled Water FCUs", "Acoustic Soil Stacks for High-Rise Towers", "DIFC Authority & DEWA Permitting", "Executive Restroom Sanitary Engineering"],
    responseTime: "30 - 45 Minutes",
    projectsCount: "8+ Projects"
  },
  {
    id: "jlt-marina",
    slug: "jlt-dubai-marina",
    name: "JLT & Dubai Marina",
    headline: "Commercial Towers & Waterfront Dining MEP Contractors in JLT & Marina",
    metaTitle: "MEP Contractors JLT & Dubai Marina | Electrical & Plumbing | Abbadi Tech",
    metaDescription: "Turnkey MEP contracting for JLT offices, Dubai Marina Mall boutiques and waterfront restaurants. Radisson Blu, Bianca JBR, Rivoli Marina Mall.",
    description: "Across Jumeirah Lakes Towers (JLT) and Dubai Marina, Abbadi Tech has executed mission-critical hospitality and commercial MEP works. Delivered projects include Radisson Blu Dubai Marina, Bianca Restaurant on JBR Walk, Rivoli Boutique in Marina Mall, and multiple corporate office suites in JLT towers.",
    keyLandmarks: ["JBR The Walk", "Dubai Marina Mall Promenade", "JLT Clusters (DMCC Free Zone)", "Marina Promenade"],
    servicesOffered: ["Waterfront Commercial Restaurant MEP", "Marine-Grade Corrosion Resistant Electricals", "Chilled Water FCU Replacements", "DMCC & Concordia Authority Permits", "Apartment & Commercial DB Upgrades"],
    responseTime: "35 - 50 Minutes",
    projectsCount: "14+ Projects"
  },
  {
    id: "palm-jumeirah",
    slug: "palm-jumeirah",
    name: "Palm Jumeirah",
    headline: "Ultra-Luxury Villas & Waterfront Hospitality MEP Engineering",
    metaTitle: "Luxury Villa & Resort MEP Contractors Palm Jumeirah | Abbadi Tech",
    metaDescription: "High-spec electrical, plumbing & HVAC contractors for Palm Jumeirah luxury villas (Fronds) and beachfront restaurants like Dar Al Khamr.",
    description: "Palm Jumeirah properties require an uncompromising standard of finish, salt-corrosion protection, and whisper-quiet MEP engineering. Abbadi Tech has delivered signature electrical and plumbing systems for private beachfront mansions on the Fronds (including Villa No. 7) and beachfront dining venues such as Dar Al Khamr.",
    keyLandmarks: ["Palm Jumeirah Fronds (Signature Villas)", "The Pointe & Boardwalk", "Golden Mile", "Palm West Beach"],
    servicesOffered: ["Smart Home Automation Electrical Cabinets", "Central Solar Water Heating Loops", "Luxury Italian Sanitary Fixture Fitting", "Swimming Pool & Landscape Electricals", "Nakheel Tenancy & DEWA Upgrades"],
    responseTime: "40 - 60 Minutes",
    projectsCount: "6+ Projects"
  },
  {
    id: "abu-dhabi",
    slug: "abu-dhabi",
    name: "Abu Dhabi & Federal Coverage",
    headline: "Commercial Showroom, Banking & Authority MEP Works in Abu Dhabi",
    metaTitle: "MEP Contractors Abu Dhabi | Commercial & Showroom Works | Abbadi Tech",
    metaDescription: "Licensed MEP works in Abu Dhabi: Ferrari Showroom, Pro League Committee HQ, Carrefour Musaffah, British Club. On-time delivery.",
    description: "Abbadi Tech extends its proven technical capabilities across the UAE capital. Our landmark deliveries in Abu Dhabi include the prestigious Ferrari Showroom on Corniche Road, the Pro League Committee Headquarters, Carrefour Musaffah, and The British Club.",
    keyLandmarks: ["Abu Dhabi Corniche", "Musaffah Commercial Area", "Capital Centre & ADNEC", "Al Wahda & Bateen"],
    servicesOffered: ["Luxury Automotive Showroom Display Power", "Government & Federation Headquarters MEP", "Hypermarket Heavy Electrical & Drainage", "Clubhouse & Sports Facility Plumbing", "Inter-Emirate Project Management"],
    responseTime: "Scheduled Contracting & Project Teams",
    projectsCount: "7+ Projects"
  }
];
