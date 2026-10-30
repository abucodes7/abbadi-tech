export interface ResourceItem {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  readTime: string;
  publishDate: string;
  summary: string;
  contentHtml: string;
}

export const resourcesData: ResourceItem[] = [
  {
    id: "dewa-approval-guide",
    slug: "dewa-approval-guide-dubai-fitouts",
    title: "The Complete DEWA Approval Process Guide for Dubai Fit-Outs & Load Upgrades (2026)",
    metaTitle: "DEWA Approval Process Guide 2026 | Dubai MEP Fit-Outs | Abbadi Tech",
    metaDescription: "Step-by-step guide to DEWA electrical approvals, NOCs, load calculation submissions, site inspection booking, and meter energization in Dubai.",
    category: "DEWA & Regulatory Approvals",
    readTime: "7 min read",
    publishDate: "January 2026",
    summary: "Navigating the Dubai Electricity and Water Authority (DEWA) approval process is critical for any retail, commercial, or villa fit-out. Learn how licensed contractors submit single-line diagrams, calculate load schedules, and pass the final DEWA inspection on the first attempt.",
    contentHtml: `
      <h3>Introduction: Why DEWA Compliance Dictates Your Opening Date</h3>
      <p>Whether fitting out a fashion boutique in The Dubai Mall or expanding power capacity for a commercial restaurant in Downtown, no electrical work can be legally energized in Dubai without formal approval from the Dubai Electricity and Water Authority (DEWA). Delays in DEWA NOCs or failed site inspections can push handover dates back by weeks, triggering severe mall rent penalties.</p>

      <h3>Step 1: Initial Engineering Drawings & Load Schedule Preparation</h3>
      <p>Before any site work begins, qualified electrical engineering specialists prepare:</p>
      <ul>
        <li><strong>Single-Line Diagrams (SLD):</strong> Showing the path of electrical power from the DEWA incoming service pillar to the MDB, SMDBs, and final DB circuits.</li>
        <li><strong>Connected & Demand Load Schedules:</strong> Documenting the exact kilovolt-ampere (kVA) or kilowatt (kW) ratings of every planned light, socket, AC unit, and kitchen equipment.</li>
        <li><strong>Shop Drawings:</strong> Showing cable tray layouts, earthing pit locations, and conduit runs.</li>
      </ul>

      <h3>Step 2: Submitting the Application via the DEWA Portal</h3>
      <p>Your engineering contractor submits the package through the official DEWA e-Services portal. DEWA engineers review the submission against the latest DEWA Regulations for Electrical Installations. For simple fit-outs with existing capacity, approval is typically granted within 3 to 7 working days.</p>

      <h3>Step 3: Site Execution & First-Fix Inspection</h3>
      <p>During physical execution, electrical cabling, cable trays, and conduit containment must strictly match the approved drawings. Crucial compliance checks include:</p>
      <ul>
        <li>Proper color-coding of conductors (Red, Yellow, Blue for 3 phases, Black for Neutral, Green/Yellow for Earth).</li>
        <li>Armored XLPE cables for external and high-current runs.</li>
        <li>Separate neutral and earth busbars inside all distribution boards without shared neutrals.</li>
      </ul>

      <h3>Step 4: Pre-Inspection Testing (Megger & Earth Pit Verification)</h3>
      <p>Before requesting a DEWA inspector, the contractor must perform internal insulation resistance testing (at 500V or 1000V DC) and verify earth loop impedance. Earth electrode resistance must be measured and confirmed to be under the required 1-ohm or 5-ohm thresholds.</p>

      <h3>Step 5: Official DEWA Site Inspection & Meter Release</h3>
      <p>A DEWA technical inspector visits the premises to audit the MDB panel, check cable sizes against breakers, inspect the meter cabinet, and verify safety interlocks. Upon a successful pass, the DEWA inspector issues a clearance certificate, and the metering team connects the digital kWh meter for permanent energization.</p>

      <div class="resource-cta-box">
        <h4>Need Expert Assistance with Your DEWA Approval?</h4>
        <p>Abbadi Tech LLC has managed DEWA submissions and electrical approvals across Dubai since 2005. Speak with our lead electrical engineer for a complimentary review of your load requirements.</p>
        <a href="/contact" class="btn btn-primary">Book a Technical Site Survey</a>
      </div>
    `
  },
  {
    id: "mep-fitout-cost-guide",
    slug: "dubai-commercial-mep-fitout-cost-guide",
    title: "Dubai Commercial MEP Fit-Out Cost Guide 2026: Retail, F&B & Office Benchmarks",
    metaTitle: "Dubai MEP Fit-Out Cost Guide 2026 | Commercial Benchmarks | Abbadi Tech",
    metaDescription: "Comprehensive cost benchmarks for mechanical, electrical and plumbing fit-outs in Dubai. Understand per-sq-ft pricing for retail, restaurants and offices.",
    category: "Cost Engineering & Planning",
    readTime: "8 min read",
    publishDate: "February 2026",
    summary: "Planning a fit-out in Dubai? Understand the realistic cost drivers for electrical switchgear, chilled water FCUs, ventilation ducting, and commercial plumbing across different commercial sectors.",
    contentHtml: `
      <h3>Understanding MEP Fit-Out Cost Structures in the UAE</h3>
      <p>Mechanical, Electrical, and Plumbing (MEP) works typically account for <strong>35% to 55% of the total fit-out budget</strong> in Dubai commercial projects. In high-demand environments like commercial restaurants and luxury retail, specialized technical systems dictate feasibility.</p>

      <h3>Average MEP Cost Benchmarks (AED per Square Foot)</h3>
      <table class="data-table">
        <thead>
          <tr>
            <th>Sector / Space Type</th>
            <th>Standard Spec (AED/sq ft)</th>
            <th>Premium / Luxury Spec (AED/sq ft)</th>
            <th>Key Technical Drivers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Corporate Offices</strong></td>
            <td>AED 65 – 110</td>
            <td>AED 120 – 180+</td>
            <td>Server room dual-UPS, smart lighting controls, meeting room AC zoning</td>
          </tr>
          <tr>
            <td><strong>Retail Boutiques</strong></td>
            <td>AED 85 – 140</td>
            <td>AED 160 – 260+</td>
            <td>High-CRI track spotlighting, luxury washrooms, concealed containment</td>
          </tr>
          <tr>
            <td><strong>Restaurants & Cafes (F&B)</strong></td>
            <td>AED 180 – 320</td>
            <td>AED 350 – 550+</td>
            <td>Commercial kitchen hood ecology units, gas detection interlocks, grease drainage</td>
          </tr>
          <tr>
            <td><strong>Luxury Residential Villas</strong></td>
            <td>AED 110 – 190</td>
            <td>AED 220 – 380+</td>
            <td>Central solar heating loops, smart home lighting, booster pump stations</td>
          </tr>
          <tr>
            <td><strong>Industrial Warehouses</strong></td>
            <td>AED 35 – 65</td>
            <td>AED 70 – 120+</td>
            <td>3-phase MDB panels, cable trays, high-bay LED, ventilation fans</td>
          </tr>
        </tbody>
      </table>

      <h3>Top Factors That Impact Your MEP Fit-Out Budget</h3>
      <ol>
        <li><strong>Base Building Capacity vs. Tenancy Load:</strong> If your restaurant requires 120 kW but the landlord allocated only 40 kW, you will incur DEWA capital contribution charges and main feeder cable pulling expenses.</li>
        <li><strong>District Cooling vs. DX Ducted AC:</strong> Connecting to district cooling (Empower/Tabreed) requires pressure-rated valve packages, dynamic balancing, and BTU metering.</li>
        <li><strong>Mall Working Regulations:</strong> Major malls (The Dubai Mall, Mall of the Emirates) enforce strict night-shift MEP execution, requiring higher labor overtime and safety overheads.</li>
      </ol>

      <div class="resource-cta-box">
        <h4>Get an Itemized, Accurate BOQ Estimate</h4>
        <p>Avoid unexpected cost variations. Send your space floor plans to Abbadi Tech's estimation team for a line-item MEP bill of quantities within 48 hours.</p>
        <a href="https://wa.me/971505546943?text=Hi%20AbbadiTech,%20I%20would%20like%20a%20cost%20estimate%20for%20a%20fit-out%20project" target="_blank" rel="noopener" class="btn btn-primary">Request a Free BOQ Estimate</a>
      </div>
    `
  },
  {
    id: "ppr-vs-copper-piping",
    slug: "ppr-vs-copper-piping-dubai-plumbing",
    title: "PPR vs Copper Piping in UAE Commercial Plumbing: Durability & Municipality Compliance",
    metaTitle: "PPR vs Copper Piping in Dubai | UAE Commercial Plumbing | Abbadi Tech",
    metaDescription: "Detailed engineering comparison of PPR heat-welded pipes versus brazed copper for potable water lines, commercial kitchens, and luxury villas in Dubai.",
    category: "Technical Plumbing Standards",
    readTime: "6 min read",
    publishDate: "March 2026",
    summary: "Which pipe material is best suited for Dubai's municipal water quality and high ambient heat? Discover why heat-fused PPR has become the industry standard for domestic water while copper remains crucial for commercial kitchens.",
    contentHtml: `
      <h3>The Challenge of Water Chemistry in the UAE</h3>
      <p>Municipal potable water in Dubai is desalinated seawater treated to high purity standards. However, high ambient temperatures, aggressive chemical disinfection, and seasonal temperature swings can rapidly degrade inferior piping materials, leading to hidden pinhole leaks and costly water damage.</p>

      <h3>PPR (Polypropylene Random Copolymer): The Modern Standard</h3>
      <p>PPR has become the gold standard for domestic and commercial water distribution across Dubai for clear engineering reasons:</p>
      <ul>
        <li><strong>Homogeneous Fusion Welding:</strong> PPR pipe joints are heat-fused at 260°C, melting pipe and fitting into a single solid piece. This completely eliminates mechanical O-ring failures and solvent cement degradation.</li>
        <li><strong>100% Corrosion Immunity:</strong> Zero risk of pitting corrosion, galvanic reaction, or scaling, ensuring clean drinking water for over 50 years.</li>
        <li><strong>Low Thermal Conductivity:</strong> Significantly reduces heat transfer, helping cold water stay refreshingly cool in Dubai summers.</li>
      </ul>

      <h3>Copper Piping: The Commercial Kitchen Heavyweight</h3>
      <p>While PPR dominates general potable distribution, brazed copper remains essential for:</p>
      <ul>
        <li>High-temperature commercial dishwasher and steam kettle feeds exceeding 85°C.</li>
        <li>Exposed mechanical plant rooms where rigid, fire-resistant lines are mandatory.</li>
        <li>Medical gas and specialized laboratory liquid piping.</li>
      </ul>

      <div class="resource-cta-box">
        <h4>Need Certified Plumbing Contractors for Your Next Project?</h4>
        <p>Abbadi Tech LLC engineers both PPR and copper potable water systems with hydrostatic pressure guarantees. Contact our plumbing division today.</p>
        <a href="/services/plumbing-contractors-dubai" class="btn btn-secondary">Explore Plumbing Services</a>
      </div>
    `
  }
];
