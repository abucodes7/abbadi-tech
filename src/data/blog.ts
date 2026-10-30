export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: 'DEWA Approvals' | 'Electrical Engineering' | 'Plumbing & Hydraulics' | 'Regulatory & Compliance';
  author: {
    name: string;
    role: string;
    image?: string;
  };
  publishDate: string;
  readTime: string;
  featured?: boolean;
  image: string;
  summary: string;
  contentHtml: string;
  keyTakeaways: string[];
  relatedSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'dewa-approval-process-dubai-fitouts-2026',
    title: 'The Complete Guide to DEWA Approvals & NOCs for Dubai Fit-Outs (2026 Edition)',
    metaTitle: 'DEWA Approval Process Guide 2026 | Fit-Out NOCs & Energization Dubai',
    metaDescription: 'Step-by-step master guide for commercial tenants, fit-out contractors, and property owners to secure DEWA electrical NOCs, load approvals, and meter energization in Dubai.',
    category: 'DEWA Approvals',
    author: {
      name: 'Koyakutty Mohammed',
      role: 'Founder & Chairman, Abbadi Tech LLC (21+ Years UAE MEP)',
    },
    publishDate: 'October 2026',
    readTime: '9 min read',
    featured: true,
    image: '/images/gallery/electrical-panel-assembly.jpg',
    summary: 'Navigating the Dubai Electricity and Water Authority (DEWA) approval process is the single most critical factor in meeting your commercial opening date. Learn the exact 5-step roadmap, required documentation, and how specialized engineering teams eliminate application rejections.',
    keyTakeaways: [
      'Qualified electrical engineering specialists prepare and submit compliant Single Line Diagrams (SLDs) to secure NOCs.',
      'Initial drawing approvals take 3 to 7 working days once complete load schedules are submitted.',
      'Megger insulation resistance testing (<1 Megaohm threshold) must be documented prior to scheduling an inspection.',
      'Tenants require landlord consent and a valid DET Trade License to secure a fit-out NOC.'
    ],
    relatedSlugs: [
      'dewa-red-notice-rectification-dubai',
      'single-line-diagram-load-schedule-calculations',
      'trakhees-noc-vs-dewa-approval-dubai'
    ],
    contentHtml: `
      <h2>Why DEWA Approval Governs Your Project Handover</h2>
      <p>In the Emirate of Dubai, no commercial space—whether a boutique in The Dubai Mall, an office in DIFC, or a restaurant in Business Bay—can legally energize electrical power or begin full operations without formal certification from the <strong>Dubai Electricity and Water Authority (DEWA)</strong>.</p>
      
      <p>Operating without proper permits or modifying internal electrical switchboards without an approved NOC results in immediate site shutdown, municipal fines, or supply disconnection. This master guide outlines the exact workflow verified across over 1,000 projects delivered by Abbadi Tech Technical Solutions LLC since 2005.</p>

      <h2>Step 1: Document Gathering & Preliminary Audit</h2>
      <p>Before engineering drafting begins, the applicant must compile the base administrative pack:</p>
      <ul>
        <li><strong>Tenancy Contract (Ejari):</strong> Proof of legal leasehold for the unit.</li>
        <li><strong>Trade License Copy:</strong> Valid DET (Department of Economy & Tourism) commercial registration matching the business activity.</li>
        <li><strong>Premise ID / DEWA Account Number:</strong> Found on the existing DEWA meter or landlord bill.</li>
        <li><strong>Landlord NOC:</strong> Formal authorization permitting interior fit-out modifications.</li>
        <li><strong>Developer Tenancy Fit-out Guide:</strong> Specific landlord criteria (e.g., Emaar, Nakheel, Dubai Holding).</li>
      </ul>

      <h2>Step 2: Single Line Diagram (SLD) & Load Schedule Engineering</h2>
      <p>The technical core of any DEWA submission is the electrical design package. A qualified contractor drafts:</p>
      <ul>
        <li><strong>Single Line Diagram (SLD):</strong> An engineering schematic charting the electrical supply from the intake pillar through busbars, MDBs, SMDBs, circuit breakers, and final DBs.</li>
        <li><strong>Load Schedule:</strong> Calculation of Connected Load (kW), Diversity Factor, and Maximum Demand (kVA). This confirms whether existing building breakers can support the new load or if an upstream power upgrade is required.</li>
      </ul>

      <h2>Step 3: Online Submission via the DEWA Portal</h2>
      <p>Your engineering contractor submits drawings through the official DEWA e-Services portal. DEWA review teams audit the calculations against the latest DEWA Regulations for Electrical Installations. Typical processing timelines:</p>
      <table class="data-table">
        <thead>
          <tr>
            <th>Application Category</th>
            <th>Average Review Timeline</th>
            <th>Approval Deliverable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standard Fit-out NOC (Existing Load)</td>
            <td>3 to 5 Business Days</td>
            <td>DEWA Fit-out NOC Certificate</td>
          </tr>
          <tr>
            <td>Additional Load Enhancement (&lt;50kW)</td>
            <td>5 to 7 Business Days</td>
            <td>Sanctioned Load Approval</td>
          </tr>
          <tr>
            <td>Major Power Upgrade / Substation Addition</td>
            <td>10 to 18 Business Days</td>
            <td>Substation Feasibility Clearance</td>
          </tr>
        </tbody>
      </table>

      <h2>Step 4: Site Execution & First-Fix Compliance</h2>
      <p>During physical fit-out works, the on-site team installs cable trays, metallic conduits, wiring, and panel switchgear strictly matching approved drawings. Crucial compliance checkpoints:</p>
      <ul>
        <li>Strict phase color coding: Red (Phase 1), Yellow (Phase 2), Blue (Phase 3), Black (Neutral), Green/Yellow (Earth).</li>
        <li>Full separation of neutral and earth bars inside all distribution boards without common neutrals.</li>
        <li>Armored XLPE cables with metallic glanding for all heavy sub-mains and kitchen feeds.</li>
      </ul>

      <h2>Step 5: Pre-Commissioning Megger Testing & Final Inspection</h2>
      <p>Before an official DEWA inspector visits the site, Abbadi Tech performs calibrated pre-inspection checks:</p>
      <ol>
        <li><strong>Insulation Resistance (Megger Test):</strong> Conducted at 500V or 1000V DC. All conductors must demonstrate a minimum insulation resistance exceeding 1.0 MΩ.</li>
        <li><strong>Earth Loop Impedance:</strong> Earth electrode pits must measure below required 1-ohm / 5-ohm thresholds.</li>
        <li><strong>Smart Meter Release:</strong> DEWA inspection engineers verify breaker trip ratings, seal the CT metering chamber, and install the digital smart kilowatt-hour meter.</li>
      </ol>
    `
  },
  {
    slug: 'dewa-red-notice-rectification-dubai',
    title: 'DEWA Red Notice Rectification: How to Clear Electrical Violations & Avoid Power Disconnection',
    metaTitle: 'DEWA Red Notice Rectification Dubai | Clear Electrical Violations Fast',
    metaDescription: 'Received a DEWA Red Notice? Learn the top violation triggers (unbalanced loads, unauthorized cables, non-compliant DB panels) and the emergency rectification process.',
    category: 'Regulatory & Compliance',
    author: {
      name: 'Lead Electrical Compliance Engineer',
      role: 'DEWA Liaison Division, Abbadi Tech LLC',
    },
    publishDate: 'October 2026',
    readTime: '8 min read',
    featured: false,
    image: '/images/gallery/industrial-warehouse-mdb-switchgear.jpg',
    summary: 'A DEWA Red Notice is a high-priority enforcement citation issued by utility inspectors for safety violations, unapproved modifications, or code breaches. Discover how to resolve citations quickly before penalties or disconnection occur.',
    keyTakeaways: [
      'A Red Notice grants a strict cure window (typically 7 to 14 days) before supply disconnection.',
      'Common triggers include unapproved load additions, lack of Megger certificates, and missing circuit labeling.',
      'Only an approved DEWA contractor can inspect, submit corrective action reports, and request re-inspection.',
      'Abbadi Tech provides emergency 24/48-hour rectification response across Dubai.'
    ],
    relatedSlugs: [
      'dewa-approval-process-dubai-fitouts-2026',
      'single-line-diagram-load-schedule-calculations'
    ],
    contentHtml: `
      <h2>What is a DEWA Red Notice?</h2>
      <p>A <strong>DEWA Red Notice</strong> is an official non-compliance citation issued by Dubai Electricity and Water Authority inspection engineers when an electrical or water installation fails safety codes, contains unapproved alterations, or poses an immediate hazard to the public distribution grid.</p>

      <p>When an inspector posts a Red Notice on your premises or sends a digital warning to the property owner, a formal countdown begins. Failure to rectify identified violations within the stipulated window (often 7 to 14 days) leads to supply isolation, hefty administrative fines, and refusal of municipality occupancy permits.</p>

      <h2>Top Causes of DEWA Red Notices in Commercial & Industrial Sites</h2>
      <ul>
        <li><strong>Unapproved Electrical Load Expansion:</strong> Adding high-draw commercial kitchen appliances, heavy motors, or secondary cold rooms without submitting a load enhancement application.</li>
        <li><strong>Non-Compliant Panel Wiring & Dressing:</strong> Missing wire ferrules, exposed live copper busbars, improper breaker ratings, or lack of 30mA RCD protection in wet areas.</li>
        <li><strong>Intake Room Obstructions:</strong> Storing combustible inventory inside the electrical switchgear room or failing to maintain the mandatory 1.0m to 1.2m clear working space in front of panels.</li>
        <li><strong>Defective Insulation (Failed Megger Test):</strong> Damaged cable insulation causing high earth leakage currents.</li>
        <li><strong>Unmetered or Bypassed Feeds:</strong> Unauthorized tapping of power from landlord common areas.</li>
      </ul>

      <h2>The 4-Step Rectification Workflow</h2>
      <ol>
        <li><strong>Emergency On-Site Technical Audit:</strong> Our senior electrical engineer visits the premises within 24 hours to audit every cited infraction on the inspection notice.</li>
        <li><strong>Engineering Correction & Panel Dressing:</strong> Our in-house wiremen re-terminate conductors, replace non-compliant breakers with approved brands (ABB, Schneider, Hager), balance phases, and install proper heat-shrink ferruling.</li>
        <li><strong>Certified Test Reporting:</strong> We perform comprehensive insulation resistance (Megger), earth fault loop impedance, and RCD trip timing tests, producing a stamped technical report.</li>
        <li><strong>Submission & Inspector Clearance:</strong> We submit the rectification pack through the DEWA contractor portal and attend the site re-inspection to secure the formal Green Clearance Certificate.</li>
      </ol>
    `
  },
  {
    slug: 'shams-dubai-solar-approval-net-metering',
    title: 'Shams Dubai Solar Approvals: The Commercial & Villa Guide to Grid Connection & Net Metering',
    metaTitle: 'Shams Dubai Solar Approval Guide | Commercial & Villa Rooftop Grid Connection',
    metaDescription: 'Comprehensive walkthrough of DEWA\'s Shams Dubai initiative: solar inverter compliance, bi-directional smart meter installation, and utility bill offset calculations.',
    category: 'DEWA Approvals',
    author: {
      name: 'Koyakutty Mohammed',
      role: 'Founder & Chairman, Abbadi Tech LLC',
    },
    publishDate: 'September 2026',
    readTime: '7 min read',
    featured: false,
    image: '/images/gallery/commercial-ev-charging-station-abb.jpg',
    summary: 'The Shams Dubai initiative allows villa owners and commercial property operators to connect rooftop solar photovoltaic systems directly to DEWA\'s grid, offsetting consumption through net metering. Learn the technical approval sequence.',
    keyTakeaways: [
      'Net metering allows solar electricity generated on-site to offset your monthly DEWA electricity bill.',
      'All inverters and solar PV modules must appear on the official DEWA-certified equipment list.',
      'AC-side switchgear, isolators, and bi-directional meters must be installed by accredited contractors.',
      'Commercial roofs with high daytime consumption (warehouses, factories) achieve the fastest return on investment.'
    ],
    relatedSlugs: [
      'dewa-approval-process-dubai-fitouts-2026',
      'single-line-diagram-load-schedule-calculations'
    ],
    contentHtml: `
      <h2>Overview: How the Shams Dubai Program Operates</h2>
      <p>Under the landmark <strong>Shams Dubai</strong> initiative launched by the Dubai Electricity and Water Authority, building owners are legally authorized to generate electricity using on-site rooftop solar photovoltaic (PV) panels and export excess generation directly into DEWA’s distribution grid.</p>

      <p>Unlike off-grid systems that rely on expensive battery storage, Shams Dubai operates through <strong>Net Metering</strong>. A bi-directional smart electricity meter measures both the power consumed from DEWA and the surplus energy exported to the grid. Any surplus units are credited against future bills at the standard tariff rate.</p>

      <h2>Eligibility for Shams Dubai Solar Connections</h2>
      <ul>
        <li><strong>Private Villas & Mansions:</strong> Rooftop installations in Emirates Hills, Palm Jumeirah, Al Barsha, and Arabian Ranches.</li>
        <li><strong>Commercial Warehouses & Logistics Hubs:</strong> Large flat steel roofs in Al Quoz, Dubai Investments Park (DIP), and Jebel Ali.</li>
        <li><strong>Schools, Colleges & Healthcare Facilities:</strong> Properties with steady daytime operating hours matching peak solar production.</li>
        <li><strong>Industrial Manufacturing Plants:</strong> High baseload operations seeking long-term operational expenditure reduction.</li>
      </ul>

      <h2>The DEWA Solar Approval Roadmap</h2>
      <ol>
        <li><strong>Solar Feasibility & Shading Analysis:</strong> Calculation of annual irradiance, available structural roof load, and optimum PV array tilt angles.</li>
        <li><strong>DEWA Equipment Verification:</strong> Ensuring inverters and panels are certified under DEWA’s solar equipment standards.</li>
        <li><strong>AC Connection Design & SLD Submission:</strong> Drafting the AC isolation scheme, breaker coordination, surge protection, and interlock protection.</li>
        <li><strong>Site Installation & Testing:</strong> Structurally securing mounting rails, cabling DC circuits, and integrating the AC solar distribution board.</li>
        <li><strong>DEWA Bi-Directional Smart Meter Fixing:</strong> Inspection by DEWA solar engineers and commissioning of the bi-directional meter.</li>
      </ol>
    `
  },
  {
    slug: 'trakhees-noc-vs-dewa-approval-dubai',
    title: 'Trakhees NOC vs. DEWA Approval: Navigating Utility Permits Across Dubai Free Zones',
    metaTitle: 'Trakhees NOC vs DEWA Approval Dubai | Free Zone MEP Authority Guide',
    metaDescription: 'Understanding utility jurisdiction in Dubai: Trakhees (DIP, JAFZA) vs. DEWA mainland approvals, application sequences, and authority compliance criteria.',
    category: 'Regulatory & Compliance',
    author: {
      name: 'Lead Electrical Compliance Engineer',
      role: 'DEWA Liaison Division, Abbadi Tech LLC',
    },
    publishDate: 'August 2026',
    readTime: '8 min read',
    featured: false,
    image: '/images/gallery/alfanar-load-center-circuit-chart.jpg',
    summary: 'Navigating utility and fit-out approvals in Dubai depends heavily on whether your property falls under mainland jurisdiction or special free zones like Trakhees, DDA, or DMCC. Master the exact jurisdictional boundaries.',
    keyTakeaways: [
      'Mainland Dubai properties require Dubai Municipality (DM) and DEWA approvals.',
      'Properties in JAFZA, DIP, and Dubai Maritime City fall under Trakhees CED regulatory jurisdiction.',
      'Trakhees issues its own building permits and electrical NOCs, which then interface with DEWA.',
      'Abbadi Tech holds active credentials across both mainland DEWA and free zone portals.'
    ],
    relatedSlugs: [
      'dewa-approval-process-dubai-fitouts-2026',
      'dewa-red-notice-rectification-dubai'
    ],
    contentHtml: `
      <h2>Mainland Dubai vs. Free Zone Jurisdictions</h2>
      <p>A common pitfall for new business owners and international fit-out consultants in Dubai is assuming all building permits and utility NOCs follow a single unified authority portal. In reality, Dubai’s regulatory framework is partitioned into distinct administrative jurisdictions.</p>

      <h2>Key Jurisdiction Breakdown: Who Approves What?</h2>
      <table class="data-table">
        <thead>
          <tr>
            <th>Zone / Master Development</th>
            <th>Primary Building Authority</th>
            <th>Electrical &amp; Water Authority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Mainland Dubai</strong> (Downtown, Al Quoz, Deira, Bur Dubai)</td>
            <td>Dubai Municipality (DM)</td>
            <td>DEWA Direct</td>
          </tr>
          <tr>
            <td><strong>Trakhees Zones</strong> (JAFZA, DIP, Palm Jumeirah retail, Maritime City)</td>
            <td>Trakhees CED (Civil Engineering Department)</td>
            <td>Trakhees NOC &rarr; DEWA Energization</td>
          </tr>
          <tr>
            <td><strong>Dubai Development Authority / DDA</strong> (Media City, Internet City, Design District)</td>
            <td>DDA Licensing &amp; Zoning</td>
            <td>DDA NOC &rarr; DEWA Direct</td>
          </tr>
          <tr>
            <td><strong>DMCC</strong> (Jumeirah Lakes Towers / JLT)</td>
            <td>Concordia / DMCC Authority</td>
            <td>Concordia Permit &rarr; DEWA Direct</td>
          </tr>
        </tbody>
      </table>

      <h2>The Trakhees NOC Workflow</h2>
      <p>For industrial warehouses in Dubai Investments Park (DIP) or logistics units in Jebel Ali Free Zone (JAFZA), submissions must pass through the Trakhees CED online portal. Trakhees conducts its own independent architectural, structural, and electrical reviews before clearing your contractor to request DEWA inspection.</p>

      <p>Working with an engineering contractor accredited across both mainland DEWA and Trakhees prevents weeks of bureaucratic ping-pong between authorities.</p>
    `
  },
  {
    slug: 'commercial-plumbing-drainage-dubai-regulations',
    title: 'Commercial Plumbing & Drainage Standards in Dubai: Meeting DM, DEWA & Al Sa\'fat Codes',
    metaTitle: 'Commercial Plumbing & Drainage Dubai Guide | DM & DEWA Regulations',
    metaDescription: 'Technical standards for commercial kitchen grease traps, acoustic soil stacks, PPR socket fusion, 10-bar hydrostatic testing, and Dubai Municipality inspections.',
    category: 'Plumbing & Hydraulics',
    author: {
      name: 'Koyakutty Mohammed',
      role: 'Founder & Chairman, Abbadi Tech LLC',
    },
    publishDate: 'July 2026',
    readTime: '9 min read',
    featured: false,
    image: '/images/gallery/plumbing-ppr-pipework.jpg',
    summary: 'From grease trap installation in high-turnover F&B kitchens to 10-bar hydrostatic pressure testing of PPR potable water lines, commercial plumbing in Dubai demands strict compliance with municipal health and environmental regulations.',
    keyTakeaways: [
      'Commercial restaurant kitchens must install municipality-approved grease traps before discharging into public sewer networks.',
      'Potable water distribution lines must undergo mandatory 10-bar hydrostatic hold tests for a minimum of 2 hours.',
      'Gravity drainage pipes require strict gradients: 1:50 for 50-75mm waste and 1:100 for 110-160mm soil lines.',
      'Al Sa\'fat Green Building regulations mandate certified low-flow aerators and sensor-activated faucets.'
    ],
    relatedSlugs: [
      'dewa-approval-process-dubai-fitouts-2026',
      'single-line-diagram-load-schedule-calculations'
    ],
    contentHtml: `
      <h2>The Critical Role of Certified Commercial Plumbing</h2>
      <p>While electrical approvals often grab headlines, plumbing and drainage failures are responsible for some of the most expensive fit-out rectification costs in Dubai. A single failed pipe weld inside a false ceiling void can ruin luxury retail inventory or shut down a dining room during peak revenue hours.</p>

      <h2>1. Potable Water Piping: Material Standards &amp; Fusion Welding</h2>
      <p>In accordance with DEWA Water Regulations, potable water supply pipes must utilize certified non-toxic, non-corrosive materials:</p>
      <ul>
        <li><strong>Polypropylene Random Copolymer (PPR PN20):</strong> The gold standard for hot and cold internal distribution. Jointing must be executed using electronically regulated socket fusion tools at 260&deg;C, creating a continuous monolithic weld without glue or chemical adhesives.</li>
        <li><strong>Cross-Linked Polyethylene (PEX):</strong> Utilized in flexible conduit sleeves with central distribution manifolds for luxury residential bathrooms.</li>
        <li><strong>Copper (Type K/L):</strong> Specified in commercial boiler rooms and exposed high-temperature industrial setups.</li>
      </ul>

      <h2>2. Commercial Kitchen Grease Trap Mandates</h2>
      <p>Dubai Municipality Waste Management Department strictly prohibits discharging fats, oils, and grease (FOG) into the municipal sewerage network. Every commercial kitchen, bakery, and cafeteria must install a properly calculated grease interceptor:</p>
      <ul>
        <li>Automatic grease recovery units (AGRU) or recessed stainless steel grease traps sized to peak fixture flow rates.</li>
        <li>Vent pipes routed through the roof to prevent anaerobic odor buildup.</li>
        <li>Accessible floor cleanouts (FCO) within 1.5m of the trap inlet for routine vacuum pumping.</li>
      </ul>

      <h2>3. Hydrostatic Testing Protocols</h2>
      <p>Before any ceiling is closed or floor screed poured, Abbadi Tech subjects all water supply lines to a rigorous <strong>10-bar hydrostatic pressure test</strong>. A calibrated pressure gauge is monitored for at least 2 hours. Any pressure drop indicates micro-leakage and triggers immediate inspection.</p>
    `
  },
  {
    slug: 'single-line-diagram-load-schedule-calculations',
    title: 'Single Line Diagram (SLD) & Load Schedule Calculations for Dubai Commercial Properties',
    metaTitle: 'Single Line Diagram & Load Schedule Calculations Dubai | Engineering Guide',
    metaDescription: 'How certified electrical engineers calculate connected load, demand factor, breaker trip curves, and draw compliant SLDs for DEWA review.',
    category: 'Electrical Engineering',
    author: {
      name: 'Lead Electrical Compliance Engineer',
      role: 'DEWA Liaison Division, Abbadi Tech LLC',
    },
    publishDate: 'June 2026',
    readTime: '8 min read',
    featured: false,
    image: '/images/gallery/sub-db-load-distribution-schedule.jpg',
    summary: 'A detailed engineering deep-dive into how electrical engineers draft compliant Single Line Diagrams (SLDs) and compute load schedules that pass DEWA scrutiny without objections.',
    keyTakeaways: [
      'An SLD documents breaker ratings, cable cross-sections, fault current withstand levels, and metering enclosures.',
      'Load schedules establish Maximum Demand (kVA) using standard diversity factors recognized by DEWA.',
      'Three-phase loads must be balanced within a 10% tolerance across Red, Yellow, and Blue phases.',
      'Accurate calculations prevent over-specifying costly cables while guaranteeing adequate power margins.'
    ],
    relatedSlugs: [
      'dewa-approval-process-dubai-fitouts-2026',
      'dewa-red-notice-rectification-dubai'
    ],
    contentHtml: `
      <h2>The Purpose of an Electrical Single Line Diagram (SLD)</h2>
      <p>An electrical <strong>Single Line Diagram (SLD)</strong> is the foundational architectural blueprint of a power distribution network. Using standardized IEC and British Standard (BS) electrical symbols, the SLD shows how electrical energy flows from DEWA’s intake supply point down to branch miniature circuit breakers (MCBs).</p>

      <h2>Core Elements Required on Every Compliant DEWA SLD</h2>
      <ul>
        <li><strong>Incomer Specifications:</strong> Main circuit breaker type (MCCB / ACB), fault level withstand capacity (kA), and CT metering ratio.</li>
        <li><strong>Distribution Feeders:</strong> Cable cross-sectional area (e.g., 4C x 70mm² XLPE/SWA/LSZH), length, and containment method.</li>
        <li><strong>Protective Devices:</strong> Residual Current Devices (RCDs) with 30mA trip ratings for socket outlets and 100mA/300mA time-delayed trip ratings for lighting and mechanical equipment.</li>
        <li><strong>Earthing &amp; Bonding System:</strong> Main earth terminal (MET) sizing, earth electrode pit locations, and bonding conductor cross-sections.</li>
      </ul>

      <h2>Load Calculation Formulae &amp; Diversity Factors</h2>
      <p>Engineers calculate total connected electrical load and apply diversity factors reflecting that not all equipment runs simultaneously:</p>
      <ul>
        <li><strong>Connected Load (CL):</strong> The sum of the rated power (kW) of all connected appliances, lighting, and mechanical plant.</li>
        <li><strong>Maximum Demand (MD):</strong> Computed by multiplying connected loads by their approved diversity factors:
          <ul>
            <li>Lighting circuits: 0.90 to 1.00 diversity.</li>
            <li>General 13A socket circuits: 0.50 to 0.70 diversity.</li>
            <li>Air conditioning compressors: 1.00 diversity.</li>
            <li>Commercial kitchen equipment: 0.70 to 0.80 diversity.</li>
          </ul>
        </li>
      </ul>

      <p>Submitting an unbalanced or over-estimated load schedule results in immediate rejection by DEWA, while under-estimating causes frequent nuisance tripping and dangerous cable overheating. Abbadi Tech guarantees balanced, mathematically proven calculations stamped by certified UAE electrical engineers.</p>
    `
  }
];
