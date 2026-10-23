export interface GalleryItem {
  id: string;
  title: string;
  category: 'electrical' | 'plumbing' | 'commercial' | 'villas';
  categoryLabel: string;
  trade: 'Electrical Technical Work' | 'Plumbing Technical Work';
  location: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export const galleryCategories = [
  { id: 'all', label: 'All Work Photos', icon: 'Layers' },
  { id: 'electrical', label: 'Electrical Technical Work', icon: 'Zap' },
  { id: 'plumbing', label: 'Plumbing Technical Work', icon: 'Droplets' },
  { id: 'commercial', label: 'Commercial & Retail', icon: 'Building2' },
  { id: 'villas', label: 'Luxury Villas', icon: 'Home' }
];

export const galleryItems: GalleryItem[] = [
  // ORGANIC SITE PHOTOS - ELECTRICAL
  {
    id: 'dewa-multi-tenant-kwh-meter-cabinet',
    title: 'DEWA Multi-Tenant Digital kWh Metering Cabinet',
    category: 'commercial',
    categoryLabel: 'Electrical Technical Work',
    trade: 'Electrical Technical Work',
    location: 'Mixed-Use Commercial Complex, Bur Dubai',
    description: 'DEWA-approved commercial multi-meter cabinet with digital kWh meters, heavy-duty galvanized cable trunking, and independent circuit disconnect switchgear for retail units.',
    image: '/images/gallery/dewa-multi-tenant-kwh-meter-cabinet.jpg',
    tags: ['DEWA Multi-Meter', 'Digital kWh', 'Galvanized Trunking', 'Tenant Metering'],
    featured: true
  },
  {
    id: 'commercial-ev-charging-station-abb',
    title: 'Commercial ABB Dual EV Charger Pedestal Installation',
    category: 'commercial',
    categoryLabel: 'Electrical Technical Work',
    trade: 'Electrical Technical Work',
    location: 'Corporate Commercial Facility, Al Quoz, Dubai',
    description: 'Turnkey electric vehicle charging infrastructure featuring twin ABB commercial chargers, underground armored feeder cabling, and dedicated DEWA-approved sub-distribution.',
    image: '/images/gallery/commercial-ev-charging-station-abb.jpg',
    tags: ['EV Charging', 'ABB Fast Charger', 'Armored Cabling', 'Green Mobility'],
    featured: true
  },
  {
    id: 'hager-modular-db-panel-dressing',
    title: 'Hager Multi-Section Distribution Board & ELCB Protection',
    category: 'commercial',
    categoryLabel: 'Electrical Technical Work',
    trade: 'Electrical Technical Work',
    location: 'Corporate Office Complex, Business Bay, Dubai',
    description: 'Precision Hager 3-phase distribution board featuring multiple ELCB residual current protection sections, structured neutral rails, and torque-verified cable management.',
    image: '/images/gallery/hager-modular-db-panel-dressing.jpg',
    tags: ['Hager DB', 'ELCB Protection', 'Panel Dressing', 'Neutral Busbars'],
    featured: true
  },
  {
    id: 'industrial-warehouse-mdb-switchgear',
    title: 'Industrial Warehouse Main Switchgear & Motor Control Center',
    category: 'commercial',
    categoryLabel: 'Electrical Technical Work',
    trade: 'Electrical Technical Work',
    location: 'Industrial Logistics Park, Dubai South',
    description: 'Turnkey industrial warehouse main distribution switchgear, motor control circuits for heavy industrial equipment, and motorized roller shutter automation.',
    image: '/images/gallery/industrial-warehouse-mdb-switchgear.jpg',
    tags: ['Industrial MDB', 'Motor Control', 'Warehouse Fit-out', 'Heavy Machinery'],
    featured: true
  },
  {
    id: 'abb-three-phase-db-panel-dressing',
    title: 'ABB 3-Phase Commercial Distribution Board Dressing',
    category: 'electrical',
    categoryLabel: 'Electrical Technical Work',
    trade: 'Electrical Technical Work',
    location: 'Retail Showroom, Dubai Mall',
    description: 'High-standard cable dressing and termination on ABB modular breakers with strict phase segregation, torque-calibrated busbars, and color-coded identification.',
    image: '/images/gallery/abb-three-phase-db-panel-dressing.jpg',
    tags: ['DB Dressing', 'ABB Breakers', '3-Phase Power', 'Phase Identification'],
    featured: true
  },
  {
    id: 'db-panel-ferruled-cabling-dressing',
    title: 'Precision DB Panel Wiring & Ferruled Cable Combing',
    category: 'electrical',
    categoryLabel: 'Electrical Technical Work',
    trade: 'Electrical Technical Work',
    location: 'Tech Park Commercial Building, Dubai Silicon Oasis',
    description: 'Internal distribution board craftsmanship featuring individual circuit ferrule markers, uniform bending radiuses, and balanced neutral links compliant with DEWA regulations.',
    image: '/images/gallery/db-panel-ferruled-cabling-dressing.jpg',
    tags: ['Cable Combing', 'Ferrules', 'Distribution Board', 'Torque Checked']
  },
  {
    id: 'sub-db-load-distribution-schedule',
    title: 'Sub-DB Panel with Official DEWA Load Schedule Directory',
    category: 'commercial',
    categoryLabel: 'Electrical Technical Work',
    trade: 'Electrical Technical Work',
    location: 'Executive Tower, Business Bay, Dubai',
    description: 'Complete circuit directory labeling and laminated DEWA load schedule mounting, detailing circuit ratings, wire sizes, and designated load breakdown per breaker.',
    image: '/images/gallery/sub-db-load-distribution-schedule.jpg',
    tags: ['Load Schedule', 'DEWA Directory', 'Circuit Numbering', 'Sub-DB']
  },
  {
    id: 'alfanar-load-center-circuit-chart',
    title: 'Alfanar 3-Phase Load Center & Inspection Directory',
    category: 'villas',
    categoryLabel: 'Electrical Technical Work',
    trade: 'Electrical Technical Work',
    location: 'Luxury Villa, Arabian Ranches, Dubai',
    description: 'Alfanar IP43 flush-mount load center with certified main isolator, neutral terminal strip, and engineer-verified circuit identification documentation.',
    image: '/images/gallery/alfanar-load-center-circuit-chart.jpg',
    tags: ['Alfanar Load Center', 'Circuit Directory', 'Residential Electrical', 'IP43']
  },
  {
    id: 'architectural-downlight-recessed-ceiling',
    title: 'Architectural Ceiling Recessed Lighting & Downlights',
    category: 'villas',
    categoryLabel: 'Electrical Technical Work',
    trade: 'Electrical Technical Work',
    location: 'Luxury Residence, Dubai Hills Estate',
    description: 'Precision laser-leveled installation of architectural recessed downlights and linear decorative fixtures with hidden junction boxes and dimming circuitry.',
    image: '/images/gallery/architectural-downlight-recessed-ceiling.jpg',
    tags: ['Architectural Lighting', 'Recessed Downlights', 'Dimming Controls', 'First & Second Fix']
  },
  {
    id: 'modern-chandelier-spotlight-installation',
    title: 'Double-Height Feature Chandelier & Accent Lighting',
    category: 'villas',
    categoryLabel: 'Electrical Technical Work',
    trade: 'Electrical Technical Work',
    location: 'Luxury Mansion, Palm Jumeirah, Dubai',
    description: 'Suspension mounting and structural ceiling reinforcement for multi-tier ring chandelier with smart automation scene controller integration.',
    image: '/images/gallery/modern-chandelier-spotlight-installation.jpg',
    tags: ['Chandelier Mounting', 'Smart Automation', 'High Ceiling', 'Feature Lighting']
  },
  {
    id: 'socket-outlet-grounded-wiring',
    title: 'BS 1363 Switched Socket Second Fix & Earth Continuity',
    category: 'commercial',
    categoryLabel: 'Electrical Technical Work',
    trade: 'Electrical Technical Work',
    location: 'Commercial Offices, DIFC, Dubai',
    description: 'High-durability 13A switched socket outlet wiring with continuous protective conductor (earth), ferruled circuit wire tagging, and heavy-duty galvanized backbox.',
    image: '/images/gallery/socket-outlet-grounded-wiring.jpg',
    tags: ['Second Fix', 'Earth Continuity', 'Ferruled Cabling', 'BS 1363']
  },
  {
    id: 'rotary-equipment-isolator-switch',
    title: 'Dedicated 35A Rotary Heavy Equipment Isolator Switch',
    category: 'commercial',
    categoryLabel: 'Electrical Technical Work',
    trade: 'Electrical Technical Work',
    location: 'Commercial Laundry Facility, Al Quoz, Dubai',
    description: 'Industrial IP66 weatherproof rotary isolator for heavy laundry machinery, compliant with DEWA safety regulations for independent machine lockout/tagout.',
    image: '/images/gallery/rotary-equipment-isolator-switch.jpg',
    tags: ['Rotary Isolator', 'Machine Disconnect', 'IP66', 'DEWA Safety']
  },
  {
    id: 'industrial-exhaust-fan-motor-wiring',
    title: 'Industrial Roof Exhaust Fan & Motor Power Connection',
    category: 'commercial',
    categoryLabel: 'Electrical Technical Work',
    trade: 'Electrical Technical Work',
    location: 'Logistics Warehouse, JAFZA, Dubai',
    description: 'Heavy-duty industrial axial smoke exhaust and roof ventilation fan motor hookup, flexible liquid-tight conduit connection, and local weather-protected isolator.',
    image: '/images/gallery/industrial-exhaust-fan-motor-wiring.jpg',
    tags: ['Exhaust Fan', 'Motor Wiring', 'Liquid-Tight Conduit', 'Roof Isolator']
  },

  // ORGANIC SITE PHOTOS - PLUMBING
  {
    id: 'commercial-multi-tenant-water-meters',
    title: 'Commercial Multi-Tenant Hydrus Smart Water Meter Manifold',
    category: 'commercial',
    categoryLabel: 'Plumbing Technical Work',
    trade: 'Plumbing Technical Work',
    location: 'Retail Mall Complex, Deira, Dubai',
    description: 'DEWA-approved tenant sub-metering manifold in commercial retail mall, featuring ultrasonic Hydrus smart flow meters, test points, and lockable bronze gate valves.',
    image: '/images/gallery/commercial-multi-tenant-water-meters.jpg',
    tags: ['Tenant Sub-Metering', 'Hydrus Smart Meters', 'Mall Retail', 'Water Manifold'],
    featured: true
  },
  {
    id: 'dewa-smart-water-meter-cabinet',
    title: 'DEWA Approved Outdoor Smart Water Meter Cabinet',
    category: 'villas',
    categoryLabel: 'Plumbing Technical Work',
    trade: 'Plumbing Technical Work',
    location: 'Private Villa Complex, Jumeirah, Dubai',
    description: 'Installation of DEWA-compliant outdoor water meter cabinet with electrofusion PPR pipework, brass lockable ball valves, and non-return check valves.',
    image: '/images/gallery/dewa-smart-water-meter-cabinet.jpg',
    tags: ['DEWA Water Meter', 'PPR Risers', 'Outdoor Cabinet', 'Isolation Valves'],
    featured: true
  },
  {
    id: 'commercial-laundry-plumbing-electrical',
    title: 'Commercial Laundry Dual MEP Utility Station (Water & Power)',
    category: 'commercial',
    categoryLabel: 'Plumbing Technical Work',
    trade: 'Plumbing Technical Work',
    location: 'Commercial Laundry & Facility, Al Barsha, Dubai',
    description: 'Integrated MEP installation providing synchronized 35A rotary electrical feeds and high-pressure potable water bib taps for high-capacity commercial washer units.',
    image: '/images/gallery/commercial-laundry-plumbing-electrical.jpg',
    tags: ['Dual MEP Station', 'Water Supply Feeds', 'Machinery Hookup', 'Commercial Utility'],
    featured: true
  },

  // HIGH-RESOLUTION ENGINEERING ASSETS
  {
    id: 'electrical-panel-assembly',
    title: 'MDB & SMDB Power Distribution Panel Assembly',
    category: 'electrical',
    categoryLabel: 'Electrical Technical Work',
    trade: 'Electrical Technical Work',
    location: 'Dubai Commerce City, UAE',
    description: 'Certified assembly, busbar alignment, circuit breaker integration, and DEWA regulation compliance testing for high-capacity commercial main distribution boards.',
    image: '/images/gallery/electrical-panel-assembly.jpg',
    tags: ['MDB Assembly', 'DEWA Compliant', 'Commercial Power', 'Busbars']
  },
  {
    id: 'cable-tray-pulling',
    title: 'Suspended Cable Tray & Heavy Armored Cable Pulling',
    category: 'commercial',
    categoryLabel: 'Electrical Technical Work',
    trade: 'Electrical Technical Work',
    location: 'Dubai Mall Retail Fit-out, Dubai',
    description: 'High-ceiling perforated steel cable tray installation, multi-core XLPE armored cable pulling, neat routing, and load distribution testing for luxury retail outlets.',
    image: '/images/gallery/cable-tray-pulling.jpg',
    tags: ['Cable Trays', 'Armored Cables', 'Dubai Mall', 'Sub-station Feed']
  },
  {
    id: 'dewa-meter-installation',
    title: 'DEWA Incomer DB & Digital Power Metering Installation',
    category: 'electrical',
    categoryLabel: 'Electrical Technical Work',
    trade: 'Electrical Technical Work',
    location: 'Al Quoz Commercial Complex, Dubai',
    description: 'Official DEWA standard incomer distribution board fixing, smart kilowatt-hour meter fixing, safety lockout disconnect switchgear, and final energization approval.',
    image: '/images/gallery/dewa-meter-installation.jpg',
    tags: ['DEWA Incomer DB', 'Smart Meters', 'Switchgear', 'Safety Lockout']
  },
  {
    id: 'plumbing-ppr-pipework',
    title: 'PPR & Copper Potable Water Supply Pipework',
    category: 'plumbing',
    categoryLabel: 'Plumbing Technical Work',
    trade: 'Plumbing Technical Work',
    location: 'DIFC Commercial Tower, Dubai',
    description: 'Fusion-welded PN20 green PPR potable water lines and precision brazed copper pipes with dual calibrated pressure gauges and testing manifold.',
    image: '/images/gallery/plumbing-ppr-pipework.jpg',
    tags: ['PPR Piping', 'Copper Manifolds', 'Pressure Testing', 'Potable Water']
  },
  {
    id: 'booster-pump-drainage',
    title: 'Automatic Dual Booster Pump Station & Drainage',
    category: 'commercial',
    categoryLabel: 'Plumbing Technical Work',
    trade: 'Plumbing Technical Work',
    location: 'Downtown Dubai Commercial Tower, Dubai',
    description: 'High-performance stainless steel vertical multistage pressure booster pumps with diaphragm expansion tanks, acoustic vibration isolators, and digital pressure control panel.',
    image: '/images/gallery/booster-pump-drainage.jpg',
    tags: ['Booster Pumps', 'Pressure Panel', 'HDPE Drainage', 'Acoustic Piping']
  },
  {
    id: 'luxury-sanitary-fitting',
    title: 'Concealed Sanitary & Luxury Bathroom Brass Fittings',
    category: 'villas',
    categoryLabel: 'Plumbing Technical Work',
    trade: 'Plumbing Technical Work',
    location: 'Palm Jumeirah Luxury Villa, Dubai',
    description: 'High-end residential sanitary installation including Geberit concealed cistern frames, thermostatic brushed brass wall mixers, linear floor drains, and hydro-testing.',
    image: '/images/gallery/luxury-sanitary-fitting.jpg',
    tags: ['Luxury Sanitary', 'Concealed Cistern', 'Palm Jumeirah', 'Brass Fixtures']
  }
];
