/**
 * Central Configuration & Source of Truth for Abbadi Tech Technical Solutions LLC
 * Ensures strict consistency across all pages, canonicals, schema, and meta tags.
 */

export const siteConfig = {
  // Domain & Host Management
  primaryDomain: 'https://www.abbaditech.com',
  previewDomain: 'https://abbadi-tech.vercel.app',
  siteUrl: 'https://www.abbaditech.com',
  siteName: 'Abbadi Tech Technical Solutions LLC',
  siteShortName: 'Abbadi Tech',

  // Corporate Identity & E-E-A-T
  legalName: 'Abbadi Tech Technical Solutions LLC',
  founder: {
    name: 'Koyakutty Mohammed',
    title: 'Founder & Chairman',
    experienceYears: 21,
    bio: 'Founder and Chairman of Abbadi Tech Technical Solutions LLC, directing certified electrical, commercial plumbing, and MEP authority executions in Dubai since 2005.'
  },
  foundingYear: 2005,

  // Official Communication Channels
  phone: '+971 50 554 6943',
  phoneRaw: '+971505546943',
  whatsappNumber: '971505546943',
  whatsappDefaultMessage: 'Hello Abbadi Tech, I need assistance with a DEWA approval / electrical / plumbing project in Dubai.',
  email: 'info@abbaditech.com',
  quotesEmail: 'quotes@abbaditech.com',

  // Physical Location & Local SEO
  address: {
    street: 'Oberoi Properties Building, Behind Al Khail Mall',
    area: 'Al Quoz / Al Khail Corridor',
    city: 'Dubai',
    region: 'Dubai',
    country: 'AE',
    countryName: 'United Arab Emirates',
    postalCode: '121908',
    latitude: 25.1384,
    longitude: 55.2348
  },

  // Authoritative Standard Timelines (Single Source of Truth - Resolves contradictions)
  timelines: {
    fitOutNoc: '3–5 business days',
    additionalLoadUpgrade: '7–14 business days',
    sldDrafting: '24–48 hours',
    lvInspectionMeterFixing: '3–5 business days',
    temporaryPower: '5–10 business days',
    waterConnectionNoc: '4–7 business days',
    emergencyDispatch: '20–45 minutes in Dubai core corridors'
  },

  // Brand Styling & Color System
  colors: {
    navyDark: '#0D1A21',
    navyPrimary: '#1A3A52',
    amberCta: '#B4864C',
    amberGlow: '#E8A85C',
    tealPlumbing: '#1BA8D8',
    paperLight: '#FBF9F5',
    ivoryBg: '#F6F2E9'
  },

  // Social & Citations
  social: {
    linkedin: 'https://www.linkedin.com/company/abbadi-tech',
    googleBusiness: 'https://maps.google.com/?cid=abbaditech', // Update when owner supplies GBP link
    facebook: 'https://www.facebook.com/abbaditech',
    instagram: 'https://www.instagram.com/abbaditech'
  }
} as const;

export type SiteConfig = typeof siteConfig;
