# Information Architecture & Internal Linking Plan: Abbadi Tech

**Entity:** Abbadi Tech Technical Solutions LLC (`www.abbaditech.com`)  
**Objective:** Outrank `dewaconsultant.ae` and all Dubai MEP contractors across Google Organic Search, Google Maps/Local Pack, and AI Answer Engines (Google AI Overviews, Perplexity, ChatGPT).  
**Architecture Principles:**
1. **One Intent Per URL:** Strict canonical isolation per search intent.
2. **Hub-and-Spoke Authority Silos:** High-relevance internal link clusters passing topical authority without cross-theme leakage.
3. **Flat Depth:** Every single money page and local page is reachable within $\le 3$ clicks from the homepage.
4. **Contextual Triangulation:** Authority approvals $\leftrightarrow$ Technical trades $\leftrightarrow$ Industry fit-outs $\leftrightarrow$ Local districts $\leftrightarrow$ Evidence-based case studies.

---

## 1. Master URL Taxonomy & Hierarchy

```
/ (Homepage)
├── /dewa-approvals-dubai (DEWA Authority Hub)
│   ├── /dewa-approvals-dubai/fit-out-approval-noc
│   ├── /dewa-approvals-dubai/additional-load-upgrade
│   ├── /dewa-approvals-dubai/new-electricity-connection
│   ├── /dewa-approvals-dubai/new-water-connection
│   ├── /dewa-approvals-dubai/building-noc
│   ├── /dewa-approvals-dubai/single-line-diagram-load-schedule
│   ├── /dewa-approvals-dubai/lv-inspection-meter-connection
│   ├── /dewa-approvals-dubai/red-notice-inspection-rectification
│   ├── /dewa-approvals-dubai/temporary-construction-power
│   ├── /dewa-approvals-dubai/meter-cable-shifting
│   ├── /dewa-approvals-dubai/shams-dubai-solar-approval
│   ├── /dewa-approvals-dubai/demolition-noc
│   └── /dewa-approvals-dubai/infrastructure-noc
│
├── /services (Services Overview Hub)
│   ├── /services/electrical-contractors-dubai (Electrical Hub)
│   │   ├── /services/mdb-smdb-panel-assembly-dubai
│   │   ├── /services/commercial-electrical-contractor-dubai
│   │   ├── /services/villa-electrical-contractor-dubai
│   │   ├── /services/ev-charger-installation-dubai
│   │   ├── /services/electrical-maintenance-amc-dubai
│   │   ├── /services/emergency-electrician-dubai
│   │   └── /services/lighting-and-emergency-lighting-dubai
│   │
│   ├── /services/plumbing-contractors-dubai (Plumbing Hub)
│   │   ├── /services/commercial-plumbing-dubai
│   │   ├── /services/grease-trap-installation-dubai
│   │   ├── /services/water-booster-pump-installation-dubai
│   │   ├── /services/leak-detection-pressure-testing-dubai
│   │   ├── /services/drainage-works-dubai
│   │   └── /services/plumbing-amc-dubai
│   │
│   └── /services/mep-contractor-dubai (Integrated MEP Turnkey Hub)
│
├── /industries (Property Type & Fit-Out Hub)
│   ├── /industries/restaurant-cafe-mep
│   ├── /industries/clinic-healthcare-mep
│   ├── /industries/salon-spa-mep
│   ├── /industries/gym-fitness-mep
│   ├── /industries/retail-showroom-mep
│   ├── /industries/office-commercial-mep
│   ├── /industries/warehouse-industrial-mep
│   └── /industries/villa-residential-mep
│
├── /areas (Dubai Local Pack & District Silo)
│   ├── /areas-we-serve (Territory Index Hub)
│   ├── /areas/business-bay
│   ├── /areas/downtown-dubai
│   ├── /areas/difc
│   ├── /areas/dubai-marina
│   ├── /areas/jlt
│   ├── /areas/palm-jumeirah
│   ├── /areas/al-quoz
│   ├── /areas/al-barsha
│   ├── /areas/deira
│   ├── /areas/bur-dubai
│   ├── /areas/jumeirah
│   ├── /areas/motor-city
│   ├── /areas/arabian-ranches
│   ├── /areas/dubai-hills
│   ├── /areas/silicon-oasis
│   ├── /areas/dubai-south
│   ├── /areas/dip
│   ├── /areas/jebel-ali
│   ├── /areas/mirdif
│   ├── /areas/al-furjan
│   ├── /areas/jvc
│   └── /areas/sports-city
│
├── /authority-trust (E-E-A-T Foundation)
│   ├── /about (Founder, licences, equipment, engineering accountability)
│   ├── /certifications (Licence registers, statutory guidelines)
│   ├── /pricing (Transparent starting ranges, factors affecting cost)
│   ├── /faq (Master searchable FAQ repository)
│   ├── /projects (Case study library)
│   ├── /gallery (Verified on-site execution photos)
│   ├── /resources (Technical checklists and code references)
│   └── /contact (Direct phone, WhatsApp, drawing upload RFQ form)
│
└── /ar/ (Bilingual Arabic Mirror - Money Pages)
    ├── /ar/ (Arabic Homepage)
    ├── /ar/dewa-approvals-dubai (موافقة هيئة كهرباء ومياه دبي)
    ├── /ar/services/electrical-contractors-dubai (مقاول كهرباء دبي)
    ├── /ar/services/plumbing-contractors-dubai (مقاول سباكة دبي)
    └── /ar/services/mep-contractor-dubai (مقاول ميب دبي)
```

---

## 2. HTTP 301 Permanent Redirect Matrix (`vercel.json`)

To preserve historical link equity and eliminate thin client-side meta-refresh pages, the following 301 redirects are enforced at the Vercel edge:

| Legacy Source URL | Destination Canonical URL | HTTP Status | Business Reason |
| :--- | :--- | :--- | :--- |
| `/dewa-works-dubai` | `/dewa-approvals-dubai` | `301 Permanent` | Consolidate legacy landing page into authority hub |
| `/dewaapprovalsdubai` | `/dewa-approvals-dubai` | `301 Permanent` | Unify slug typo variant |
| `/electrical-contractor-dubai` | `/services/electrical-contractors-dubai` | `301 Permanent` | Consolidate legacy standalone root into services silo |
| `/electrical-technical-work` | `/services/electrical-contractors-dubai` | `301 Permanent` | Consolidate legacy service keyword variant |
| `/plumbing-contractor-dubai` | `/services/plumbing-contractors-dubai` | `301 Permanent` | Consolidate legacy root plumbing URL |
| `/plumbing-technical-work` | `/services/plumbing-contractors-dubai` | `301 Permanent` | Consolidate legacy technical work URL |
| `https://abbadi-tech.vercel.app/*` | `https://www.abbaditech.com/:path*` | `301 Permanent` | Enforce primary brand domain at CDN level |

---

## 3. Contextual Internal Linking Rules (The Triangulation Model)

To dominate AI Overviews and traditional organic rank, Google must understand the exact semantic relationship between approvals, installations, physical premises, and locations. Every page adheres to this linking rule:

1. **Approval Spoke Pages (`/dewa-approvals-dubai/<slug>`) must link to:**
   * Parent Hub: `/dewa-approvals-dubai` (Breadcrumb + contextual body link)
   * Relevant Trade Execution: e.g. `/dewa-approvals-dubai/fit-out-approval-noc` links to `/services/commercial-electrical-contractor-dubai` and `/services/mdb-smdb-panel-assembly-dubai`
   * Relevant Property Types: e.g. `/dewa-approvals-dubai/additional-load-upgrade` links to `/industries/restaurant-cafe-mep` and `/industries/warehouse-industrial-mep`
   * Relevant Technical Guide: links to `/blog/dewa-red-notice-rectification-dubai` or `/blog/single-line-diagram-load-schedule-calculations`
   * Conversion Action: Direct quote trigger with drawing upload

2. **Trade Service Pages (`/services/<slug>`) must link to:**
   * Required Authority Approval: e.g. `/services/grease-trap-installation-dubai` links to `/dewa-approvals-dubai/new-water-connection` and `/industries/restaurant-cafe-mep`
   * Relevant District Focus: e.g. `/services/commercial-electrical-contractor-dubai` links to `/areas/business-bay` and `/areas/difc`
   * Parent Hub: `/services/electrical-contractors-dubai` or `/services/plumbing-contractors-dubai`

3. **Industry Fit-Out Pages (`/industries/<slug>`) must link to:**
   * Specific DEWA Approval needed for that property type (e.g., `/industries/restaurant-cafe-mep` links to `/dewa-approvals-dubai/additional-load-upgrade` and `/services/grease-trap-installation-dubai`)
   * Top 3 commercial areas for that industry (e.g. Restaurants $\rightarrow$ Business Bay, Downtown, Dubai Marina)
   * Cost guide: `/pricing`

4. **Area Pages (`/areas/<slug>`) must link to:**
   * Master Territory Hub: `/areas-we-serve`
   * Prime Services required in that area (e.g. High-rise office towers in DIFC $\rightarrow$ `/services/commercial-electrical-contractor-dubai` and `/dewa-approvals-dubai/fit-out-approval-noc`)
   * Surrounding/adjacent district pages (e.g., Downtown links to Business Bay and DIFC)

---

## 4. Navigation & Breadcrumb Specifications

### Primary Mega-Menu Structure
* **DEWA Approvals:**
  * Fit-Out NOC Approvals
  * Electrical Load Upgrades
  * Stamped Single-Line Diagrams (SLD)
  * Red Notice Rectification (Urgent)
  * LV Inspection & Meter Connection
  * Temporary Construction Power
  * View All 13 Approval Services $\rightarrow$
* **Electrical Services:**
  * Turnkey Electrical Contracting
  * MDB & SMDB Panel Assembly
  * Commercial Electrical Fit-Out
  * Luxury Villa Electrical
  * EV Charger Station Installation
  * 24/7 Emergency Electrician
* **Plumbing Services:**
  * Commercial Plumbing & Drainage
  * Grease Trap Installation (DM Compliant)
  * Water Booster & Transfer Pumps
  * Leak Detection & Pressure Testing
* **Sectors / Fit-Outs:**
  * Restaurants & Cafes (F&B)
  * Offices & Commercial Spaces
  * Clinics & Healthcare
  * Retail & Boutiques
  * Warehouses & Industrial
* **Areas We Serve:**
  * Business Bay, Downtown, DIFC, Marina, JLT, Palm Jumeirah, Al Quoz, Dubai South, DIP (+ 13 more)
* **Trust & Resources:**
  * About Us & Founders
  * Transparent Pricing
  * Engineering Guides & Blog
  * Direct Contact & Quote RFQ

### Breadcrumb Schema Policy
Every subpage automatically generates valid `BreadcrumbList` JSON-LD schema matching visible UI breadcrumbs:
`Home > Parent Hub > Specific Service / Area / Guide`
All items include `@type: "ListItem"`, sequential `position`, canonical `item` URL, and exact anchor name.
