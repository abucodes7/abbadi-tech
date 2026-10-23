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
  {
    id: 'electrical-panel-assembly',
    title: 'MDB & SMDB Power Distribution Panel Assembly',
    category: 'electrical',
    categoryLabel: 'Electrical Technical Work',
    trade: 'Electrical Technical Work',
    location: 'Dubai Commerce City, UAE',
    description: 'Certified assembly, busbar alignment, circuit breaker integration, and DEWA regulation compliance testing for high-capacity commercial main distribution boards.',
    image: '/images/gallery/electrical-panel-assembly.jpg',
    tags: ['MDB Assembly', 'DEWA Compliant', 'Commercial Power', 'Busbars'],
    featured: true
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
    tags: ['Cable Trays', 'Armored Cables', 'Dubai Mall', 'Sub-station Feed'],
    featured: true
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
    tags: ['DEWA Incomer DB', 'Smart Meters', 'Switchgear', 'Safety Lockout'],
    featured: true
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
    tags: ['PPR Piping', 'Copper Manifolds', 'Pressure Testing', 'Potable Water'],
    featured: true
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
    tags: ['Booster Pumps', 'Pressure Panel', 'HDPE Drainage', 'Acoustic Piping'],
    featured: true
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
    tags: ['Luxury Sanitary', 'Concealed Cistern', 'Palm Jumeirah', 'Brass Fixtures'],
    featured: true
  }
];
