export interface FAQItem {
  question: string;
  answer: string;
}

// 1. HOMEPAGE FAQS (High-intent overview: DEWA, Dubai Municipality, Pricing, Contracting)
export const homeFaqs: FAQItem[] = [
  {
    question: "What is the importance of hiring an experienced DEWA approvals specialist for MEP projects?",
    answer: "Professional DEWA approval specialists (such as Abbadi Tech LLC, operating in Dubai since 2005) prepare compliant single-line diagrams (SLD), calculate certified electrical load schedules, apply for building NOCs, book official DEWA inspections, and coordinate final smart meter energization. Unlicensed contractors cannot legally pull permits, leading to site shutdown, heavy municipal fines, and connection refusal."
  },
  {
    question: "Do interior fit-outs in Dubai require Dubai Municipality (DM) and DEWA approvals?",
    answer: "Yes. In mainland Dubai, any commercial, retail, restaurant, office, or major residential renovation requires both Dubai Municipality (DM) decoration/building permits and DEWA electrical and water NOCs. For commercial premises, drawings must comply with DM Building Regulations and the DEWA Wiring Guidelines. In freezones like DMCC (JLT), DDA (Dubai Media/Internet City), or Trakhees (DIP/JAFZA), localized authority approvals apply before DEWA energization."
  },
  {
    question: "What core technical services does AbbadiTech LLC specialize in?",
    answer: "AbbadiTech LLC specializes exclusively in two primary disciplines: 1. Electrical Technical Work (including DEWA approvals, power and light layout designing, electrical load schedule calculations, MDB/SMDB/DB panel assembly and dressing, heavy cable pulling, cable trays, EV charger installations, and meter fixing) and 2. Plumbing Technical Work (including PPR & copper potable water lines, HDPE & UPVC drainage networks, automatic booster pump panels, water heaters, grease trap installations, and luxury sanitary fittings)."
  },
  {
    question: "Can AbbadiTech handle combined electrical and plumbing technical works under one contract?",
    answer: "Yes. Hiring a single specialist contractor for both Electrical and Plumbing eliminates on-site coordination clashes, prevents pipe-cable routing conflicts in ceiling voids, cuts project turnaround time by up to 30%, and significantly reduces overall contracting costs for restaurants, retail showrooms, luxury villas, and commercial complexes."
  },
  {
    question: "What is the typical timeline to obtain DEWA and Dubai Municipality MEP approvals?",
    answer: "For standard commercial fit-outs and retail units with existing infrastructure, initial drawing review and NOC issuance through the DEWA online portal takes approximately 3 to 7 business days once engineered drawings and load schedules are submitted. Dubai Municipality (DM) fit-out permits typically take 3 to 5 business days. Final site inspection and meter release take 2 to 4 days after technical work completion."
  },
  {
    question: "How long has AbbadiTech been operating in Dubai and the UAE?",
    answer: "AbbadiTech LLC was founded in Dubai in 2005 by Chairman Koyakutty Mohammed. With over 21 years of continuous engineering leadership in the UAE, our in-house certified engineering team has handed over more than 1,000 landmark commercial, retail, hospitality, industrial, and residential projects on time and on budget."
  },
  {
    question: "What are the common reasons DEWA or Dubai Municipality inspections fail, and how do you prevent them?",
    answer: "Common failure causes include improper 3-phase load balancing, sub-standard cable sizing, incorrect breaker trip ratings, non-fire-rated cable pass-throughs, lack of Megger insulation test reports, non-compliant drainage slopes, missing grease traps in commercial kitchens, and unapproved changes from submitted drawings. AbbadiTech performs pre-inspection mock audits, 10-bar hydrostatic pipe testing, and calibrated Megger testing to guarantee a 100% first-time pass rate."
  },
  {
    question: "Which areas in Dubai and the UAE does AbbadiTech serve?",
    answer: "Our operations cover all of Dubai—including Downtown Dubai, The Dubai Mall, DIFC, Palm Jumeirah, Business Bay, JLT, Dubai Marina, Al Quoz, Dubai South, and Dubai Investments Park (DIP)—with extensive project deliveries across Abu Dhabi and Ajman."
  },
  {
    question: "What types of properties do you execute electrical and plumbing technical works for?",
    answer: "We deliver turnkey technical contracting for prestige automotive showrooms (Ferrari), luxury boutiques (Rolex, Rivoli), corporate banking headquarters (HSBC, ADCB), high-traffic international F&B chains (Subway, Bianca, Caribou), 5-star hospitality resorts (Shangri-La, Radisson Blu), private VIP villas (Palm Jumeirah, Emirates Hills), and industrial logistics complexes."
  },
  {
    question: "How quickly can your engineering team inspect my project and provide an engineering quote?",
    answer: "You can submit your architectural or MEP drawings via WhatsApp to +971 50 554 6943 or email it.abbaditech@gmail.com. Our senior technical estimators can conduct a comprehensive on-site survey anywhere in Dubai within 24 hours and issue a clear, itemized engineering proposal."
  }
];

// 2. ABOUT US PAGE FAQS (Credibility, Licensing, Founder, Standards, E-E-A-T)
export const aboutFaqs: FAQItem[] = [
  {
    question: "What commercial qualifications and capabilities does Abbadi Tech LLC hold in Dubai?",
    answer: "Abbadi Tech Technical Solutions LLC operates in Dubai classified as a Technical Solutions & Contracting company, with over 21 years of proven engineering delivery across Dubai Municipality (DM) and Dubai Electricity and Water Authority (DEWA) compliant projects, as well as Dubai Chamber of Commerce membership."
  },
  {
    question: "Does Abbadi Tech use sub-contracted third-party labor or in-house engineers?",
    answer: "All core electrical panel assembling, cable termination, DEWA authority submissions, copper and PPR fusion welding, and booster pump automation are executed by Abbadi Tech's permanent, in-house team of certified electrical engineers, licensed wiremen, master plumbers, and safety supervisors. We do not broker contracts to unlicensed third-party labor."
  },
  {
    question: "What guarantees and warranty terms do you provide upon project handover?",
    answer: "Abbadi Tech provides an official 12-month Defect Liability Period (DLP) warranty on all executed technical installations, backed by complete Operation and Maintenance (O&M) manuals, as-built CAD drawings, DEWA meter inspection certificates, and 24/7 emergency response for active facilities."
  },
  {
    question: "How does Abbadi Tech maintain compliance with UAE Al Sa'fat Green Building regulations?",
    answer: "Under Dubai Municipality's Al Sa'fat Green Building System, all MEP systems must meet strict water conservation, power factor correction (>0.92 lagging), energy-efficient LED luminaires, solar thermal water heating integration, and sub-metering mandates. Abbadi Tech engineers calculate compliant load schedules and specify certified low-flow sanitaryware and energy-rated distribution equipment."
  },
  {
    question: "Can Abbadi Tech act as the nominated MEP contractor for international fit-out consultants?",
    answer: "Yes. Over our 21-year history, international architecture practices, retail brand project directors, and interior fit-out general contractors frequently nominate Abbadi Tech to handle the complete local Dubai authority approval, DEWA submission, and MEP execution package."
  },
  {
    question: "Who founded Abbadi Tech LLC and what is the company's leadership background?",
    answer: "Abbadi Tech LLC was founded in Dubai in 2005 by Chairman Koyakutty Mohammed. Mr. Mohammed established the company on the foundation of rigorous engineering honesty, direct personal accountability, and zero-defect compliance with Dubai authority regulations."
  },
  {
    question: "What safety protocols (QHSE) are enforced across Abbadi Tech job sites?",
    answer: "Our operations strictly follow Dubai Municipality Code of Construction Safety Practice and DEWA Safety Regulations. Technicians operate with full PPE, lock-out/tag-out (LOTO) protocols on live electrical incomers, certified scaffolding for high-bay warehouse work, and hot-work permits for fusion welding."
  },
  {
    question: "How does Abbadi Tech manage projects in occupied commercial buildings and malls?",
    answer: "For landmark shopping malls (The Dubai Mall, Marina Mall, City Centre) and corporate towers (DIFC, Business Bay), we deploy structured night shifts (10:00 PM to 06:00 AM), sound-dampened equipment, dedicated material hoisting corridors, and clean daily handovers to prevent disruption to daytime trade."
  }
];

// 3. CONTACT PAGE FAQS (Inquiries, Response times, Surveys, Documentation)
export const contactFaqs: FAQItem[] = [
  {
    question: "What is the fastest way to request a site survey and engineering estimate?",
    answer: "The quickest method is contacting our technical dispatch team directly on WhatsApp at +971 50 554 6943 or emailing your project drawings (PDF or CAD DWG) to it.abbaditech@gmail.com. An estimation engineer will review your scope and confirm a survey appointment within 2 to 4 business hours."
  },
  {
    question: "Do you charge an inspection fee for initial project site surveys in Dubai?",
    answer: "Initial on-site engineering assessments and drawing reviews for commercial fit-outs, villas, and industrial facilities in Dubai are completely free of charge and come with a no-obligation, fully itemized Bill of Quantities (BOQ) estimate."
  },
  {
    question: "What documents should I provide to get an accurate MEP contracting quotation?",
    answer: "To generate a precise, tailored engineering quote, provide: 1. Architectural floor plan (CAD or PDF), 2. Reflected ceiling plan (RCP), 3. Equipment schedule (power loads for kitchen, machinery, or AC units), 4. Tenancy Fit-out Guide from the landlord or developer, and 5. Location details with unit number."
  },
  {
    question: "Where is Abbadi Tech's engineering office located in Dubai?",
    answer: "Our corporate headquarters and engineering office is located at Oberoi Properties Building, Behind Al Khail Mall, Dubai, United Arab Emirates (P.O. Box: 121908). Clients and consultants are welcome for scheduled technical consultations."
  },
  {
    question: "Do you provide emergency breakdown response for active commercial operations?",
    answer: "Yes. For active clients, commercial restaurants, retail stores, and critical facilities, Abbadi Tech operates an emergency technical dispatch team reachable 24/7 at +971 50 554 6943 for main panel trip faults, DEWA connection rectifications, and major water line disruptions."
  },
  {
    question: "Can you assist with transferring or opening a new commercial DEWA account?",
    answer: "Yes. Once our electrical installation passes the official DEWA site inspection, we guide you through the final DEWA security deposit payment, submit the Move-In / Premise Release application, and oversee the installation of the smart kilowatt-hour meter."
  },
  {
    question: "What payment milestones do you follow for technical contracting projects?",
    answer: "Our typical contracting milestone structure is transparent and fair: an initial mobilization advance upon contract signing, progress claims tied to verified milestones (rough-in completion, panel delivery, authority inspection pass), and a final retention release upon successful testing and commissioning."
  },
  {
    question: "Can I discuss technical specifications directly with a senior MEP engineer before signing?",
    answer: "Yes. We believe in direct engineering transparency. You will be assigned a senior estimation engineer who will walk through your load schedules, single-line diagrams, and material submittals with you before contract execution."
  }
];

// 4. PROJECTS DIRECTORY FAQS (Mall fit-outs, Authority Handover, Portfolios)
export const projectsFaqs: FAQItem[] = [
  {
    question: "How many projects has AbbadiTech delivered across Dubai and the UAE?",
    answer: "AbbadiTech has successfully completed over 1,000 major electrical and plumbing technical contracting projects across Dubai, Abu Dhabi, and Ajman since 2005, spanning luxury retail, international dining chains, corporate offices, banks, and private villas."
  },
  {
    question: "Have you delivered projects in premier UAE shopping malls and retail centers?",
    answer: "Yes. Our teams have completed certified technical works in The Dubai Mall (Rolex Boutique, Leto Cafe, Water Lemon), Dubai Marina Mall (Rivoli Boutique, Cafe Blanc), Mirdif City Centre (Pottery Barn Kids), DIFC Gate Precinct (Caribou Cafe), Box Park, and Mall of the Emirates."
  },
  {
    question: "How do you navigate mall management fit-out guidelines and night-shift approvals?",
    answer: "Major UAE mall developers (such as Emaar, Majid Al Futtaim, and Nakheel) enforce strict retail tenancy manuals. We submit material submittals, hot-work permits, and MEP coordination drawings directly to mall management, deploying quiet night crews (10 PM to 6 AM) with dust screens to ensure full compliance with mall operational rules."
  },
  {
    question: "Can you execute electrical and plumbing technical works for global franchise restaurants?",
    answer: "Yes. We have delivered turnkey technical fit-outs for over six Subway restaurant locations, Bianca Restaurant, Leto Cafe, and high-capacity central kitchens, including heavy 3-phase kitchen equipment wiring, gas solenoid valve interlocks, and Dubai Municipality-approved grease traps."
  },
  {
    question: "Do you provide electrical and plumbing works for private VIP villas in Dubai?",
    answer: "Yes. We have completed comprehensive technical works for private luxury villas and mansions in Palm Jumeirah (Villa No. 7), Emirates Hills (G+1), Al Barsha, Hor Al Anz, and Al Khawaneej, encompassing automated pump rooms, smart DB panels, and luxury German/Swiss sanitaryware."
  },
  {
    question: "Are your completed projects delivered with official authority completion certificates?",
    answer: "Yes. Every commercial project is handed over with official DEWA electrical inspection certificates, Dubai Municipality building completion NOCs, water laboratory test reports, and stamped as-built drawing documentation."
  },
  {
    question: "Can prospective clients speak to your past commercial clients for references?",
    answer: "Yes. Subject to client confidentiality permissions, we are pleased to connect prospective commercial, retail, and hospitality clients with past project directors and facility managers who have worked with Abbadi Tech."
  },
  {
    question: "What is the typical project value and square footage range Abbadi Tech handles?",
    answer: "We handle projects ranging from specialized 800 sq. ft luxury retail boutiques and 3,000 sq. ft high-turnover restaurants to 50,000+ sq. ft industrial warehouses and multi-story commercial corporate headquarters."
  }
];

// 5. GALLERY FAQS (Photographic Proof, Quality Inspection, On-Site Standards)
export const galleryFaqs: FAQItem[] = [
  {
    question: "Are all photographs in your work gallery genuine Abbadi Tech installations?",
    answer: "Yes. 100% of the photos displayed across our gallery are authentic, unedited project photographs captured on active and handed-over job sites in Dubai, Abu Dhabi, and the UAE by our engineering personnel."
  },
  {
    question: "What technical details can clients look for in your electrical panel photos?",
    answer: "Our panel dressing photographs demonstrate textbook engineering craftsmanship: neat 90-degree orthogonal cable routing, strict phase color-coding (Red, Yellow, Blue, Black neutral, Green/Yellow earth), heat-shrink ferruled wire numbers matching the schematic diagram, and torque-calibrated busbar terminations."
  },
  {
    question: "What quality standards are shown in your commercial plumbing work photos?",
    answer: "Our plumbing photos showcase electrofusion and socket-fusion welded PPR PN20 lines, insulated acoustic HDPE drainage pipes, pressure relief valves, calibrated pressure gauges, and manifold connections with lockable brass gate valves built strictly to Dubai Municipality plumbing regulations."
  },
  {
    question: "Do you document daily and weekly photographic QA/QC logs during construction?",
    answer: "Yes. For every active project, our project managers provide clients and consulting engineers with regular photographic progress logs showing rough-ins, concealed services prior to wall/ceiling closure, hydrostatic pressure gauges, and pre-inspection readiness."
  },
  {
    question: "Can I request to visit an ongoing or completed AbbadiTech technical site in Dubai?",
    answer: "Yes. Prospective clients can arrange a guided site walk of active or recently energized installations in Dubai, subject to client security clearances and safety compliance. Contact us at +971 50 554 6943."
  },
  {
    question: "How frequently is the work photos gallery updated with new UAE deliveries?",
    answer: "We regularly update the gallery as new commercial retail stores, restaurants, villas, and industrial facilities complete their final DEWA meter energization and handover."
  },
  {
    question: "Do your gallery photos include high-capacity commercial EV charging installations?",
    answer: "Yes. The gallery features commercial ABB multi-vehicle electric vehicle (EV) charging stations with heavy armored sub-main cable feeds and dedicated RCD Type-B protection installed in commercial parking facilities."
  },
  {
    question: "Can you provide high-resolution photo documentation for our property insurance records?",
    answer: "Yes. Upon project completion, we hand over a complete photographic archive of all concealed conduit runs, junction boxes, and pipe pressure tests for your building asset management and insurance records."
  }
];

// 6. SERVICES INDEX FAQS (Turnkey MEP, Coordination, Efficiency, Trade Overlap)
export const servicesIndexFaqs: FAQItem[] = [
  {
    question: "Why does Abbadi Tech focus exclusively on Electrical and Plumbing Technical Works?",
    answer: "Electrical and Plumbing are the two most heavily regulated, mission-critical engineering disciplines in any UAE building. By mastering these two interdependent trades in-house since 2005, Abbadi Tech delivers elite technical execution, direct DEWA and Dubai Municipality compliance, and zero coordination errors."
  },
  {
    question: "What are the advantages of bundling electrical and plumbing under one MEP contractor?",
    answer: "Bundling eliminates the notorious 'finger-pointing' between separate electrical and plumbing trades over ceiling space, riser shafts, pump control wiring, and water heater circuits. You get one dedicated project manager, a single unified contract, lower overhead costs, and seamless authority inspection coordination."
  },
  {
    question: "How do your electrical and plumbing engineers coordinate in ceiling voids and risers?",
    answer: "Our engineering design office prepares combined MEP composite coordination drawings in AutoCAD. We maintain mandatory spatial clearances between water supply lines, drainage pipes, and electrical cable trays, preventing condensation leaks from ever contacting power circuits."
  },
  {
    question: "Do your technical services comply with Dubai Green Building Regulations (Al Sa'fat)?",
    answer: "Yes. Under the Dubai Municipality Al Sa'fat framework, all our electrical designs feature energy-efficient LED luminaires, power factor correction, and solar water heating integration. All plumbing installations incorporate certified low-flow aerators and dual-flush cisterns."
  },
  {
    question: "Can Abbadi Tech execute technical contracting for landlord base-build and tenant fit-out?",
    answer: "Yes. We work on both base-build MEP infrastructure (main switchgear, rising busbars, potable water risers, and drainage stacks) and tenant fit-out packages (branch DB panels, retail lighting, kitchen plumbing, and smart sub-meters)."
  },
  {
    question: "What testing and commissioning procedures do you perform before official handover?",
    answer: "We execute comprehensive Testing & Commissioning (T&C): continuity and insulation resistance (Megger) tests, earth loop impedance tests, RCD trip time tests, 10-bar hydrostatic water pipe pressure tests, gravity drainage flow tests, and booster pump automation cycle checks."
  },
  {
    question: "Do you supply the materials, or can the client provide their own fixtures?",
    answer: "We offer both full turnkey supply-and-install contracts (utilizing DEWA/DM-approved brands like Schneider, ABB, Hager, Alfanar, Hepworth, Terrain, Geberit, and Grohe) as well as installation-only contracts where the client supplies designer decorative fixtures."
  },
  {
    question: "How do you handle scope modifications or variation orders (VO) during works?",
    answer: "All scope modifications are documented via formal Variation Requests with clear engineering calculations, revised load schedules (if electrical capacity changes), and transparent cost breakdowns before any physical changes are executed on site."
  }
];

// 7. ELECTRICAL SERVICES FAQS (DEWA Approvals, MDB/SMDB, Load Schedules, Sizing)
export const electricalFaqs: FAQItem[] = [
  {
    question: "What is the complete process for obtaining DEWA electrical approval for a fit-out in Dubai?",
    answer: "The process involves 5 key stages: 1. Design & Load Calculation: Our certified engineering team prepares single-line diagrams (SLD) and load schedules matching DEWA regulations. 2. Online Submission: We submit drawings via the DEWA E-Services portal with the tenancy contract and premise ID. 3. DEWA NOC Approval: DEWA reviews the design and issues the initial electrical sanction. 4. Execution & Testing: We assemble panels, pull cables, and conduct Megger testing. 5. Final Inspection & Meter Release: DEWA inspectors verify the installation on site and release the smart kilowatt-hour meter for energization."
  },
  {
    question: "What is the difference between an MDB, SMDB, and DB panel in UAE commercial installations?",
    answer: "The Main Distribution Board (MDB) is the heavy-duty switchgear connected directly to the incoming DEWA supply (typically 250A to 2500A+). Sub-Main Distribution Boards (SMDB) receive power from the MDB and feed specific floors or major equipment (such as chiller panels or elevator machine rooms). Final Distribution Boards (DB) contain miniature circuit breakers (MCBs) supplying local lighting, sockets, and appliance branch circuits."
  },
  {
    question: "Why is a certified Load Schedule essential, and what does it calculate?",
    answer: "A Load Schedule details every circuit's connected load (kW), power factor, phase allocation (R, Y, B), and diversity factor to establish Maximum Demand (kVA). DEWA requires this document to determine the incoming cable size, CT meter rating, and whether your premises requires a dedicated transformer or an upstream supply enhancement."
  },
  {
    question: "How do I upgrade electrical power (load enhancement) for a commercial kitchen or EV charger?",
    answer: "Abbadi Tech conducts a connected load audit, verifies the existing building main breaker capacity, prepares an enhanced load schedule, and submits a DEWA Load Addition application. If sufficient building margin exists, DEWA approves the upgrade quickly. If additional infrastructure is needed, we coordinate with the building owner and DEWA for sub-station upgrades."
  },
  {
    question: "What are DEWA regulations regarding cable tray routing and containment?",
    answer: "DEWA mandates hot-dip galvanized perforated cable trays or heavy-duty ladders with smooth edges, fire-rated support brackets spaced at standard intervals (typically every 1.2 to 1.5 meters), and continuous earthing bonding. Power cables, data wiring, and fire alarm circuits must be routed in separated containment compartments to prevent electromagnetic interference."
  },
  {
    question: "What earth grounding resistance threshold is required by DEWA in Dubai?",
    answer: "DEWA Wiring Regulations strictly mandate that overall earth electrode resistance must not exceed 1.0 Ohm. Abbadi Tech installs deep copper earth rods, low-resistance soil enhancement compound, and dedicated earth inspection pits with test links to ensure compliant grounding."
  },
  {
    question: "What is the difference between Single-Phase and Three-Phase power connections in Dubai?",
    answer: "Single-phase power (230V, 50Hz) is standard for small apartments and minor retail units with low power demands (under 10 kW). Three-phase power (400V, 50Hz) is required for commercial premises, restaurants, central air conditioning, heavy pumps, and luxury villas. We balance the load across all three phases (Red, Yellow, Blue) to prevent neutral conductor overheating."
  },
  {
    question: "Do you supply and assemble certified distribution boards using Schneider, ABB, or Hager components?",
    answer: "Yes. All our MDB, SMDB, and DB enclosures are assembled using certified original components from premier switchgear manufacturers (ABB, Schneider Electric, Hager, or Alfanar) with factory-tested busbars, ferruled wiring, and typed circuit directories."
  },
  {
    question: "What is RCD / ELCB protection and what sensitivity ratings does DEWA mandate?",
    answer: "Residual Current Devices (RCDs) protect human life and prevent electrical fires. DEWA mandates 30mA high-sensitivity RCDs for standard socket outlets and water heaters, and 100mA or 300mA time-delayed RCDs for lighting circuits, air conditioning units, and sub-main feeders."
  },
  {
    question: "Can Abbadi Tech rectify DEWA inspection red notices or power rejection slips?",
    answer: "Yes. If an uncertified contractor caused a DEWA rejection, our senior electrical engineers can inspect the site, identify all non-compliant points (improper breaker sizing, missing earth bonding, phase imbalance), rectify the physical installation, and re-book the DEWA inspection for clean approval."
  }
];

// 8. PLUMBING SERVICES FAQS (Dubai Municipality, Drainage, Pumps, Water Lines, Grease Traps)
export const plumbingFaqs: FAQItem[] = [
  {
    question: "What are Dubai Municipality (DM) regulations for commercial drainage and waste plumbing?",
    answer: "Dubai Municipality Drainage and Waste Department mandates that all commercial sanitary drainage must flow by gravity with compliant fall ratios (minimum 1:50 or 1:100 depending on pipe diameter). All fixtures must be vented through atmospheric stacks terminating above roof level. Commercial kitchens must install Dubai Municipality-approved grease interceptors before discharging to public sewer lines."
  },
  {
    question: "Why does Abbadi Tech recommend PN20 PPR piping for domestic water networks in Dubai?",
    answer: "Dubai's water conditions and high ambient ground temperatures require piping with superior pressure ratings and thermal stability. Polypropylene Random Copolymer (PPR) PN20 pipes feature 20-bar nominal pressure resistance, seamless thermal fusion welds that eliminate leak points, zero scale buildup, and complete resistance to potable water chlorination."
  },
  {
    question: "What is an Automatic Booster Pump Panel and why is it necessary in Dubai villas and buildings?",
    answer: "Because municipal water supply pressure is kept moderate to protect underground infrastructure, buildings require on-site ground water storage tanks and booster pumps to pressurize upper floors. An Automatic Booster Pump Panel controls twin duty/standby pumps with Variable Frequency Drives (VFD) or pressure transmitters to provide constant, smooth water pressure at all taps while automatically alternating pump run-times."
  },
  {
    question: "What are the rules regarding grease traps for restaurants and cafes in Dubai?",
    answer: "Dubai Municipality Food Safety Department and Environmental Waste Management mandate that every commercial F&B facility must route all pot wash, dishwashing, and prep sink waste through an appropriately sized grease trap (grease interceptor). Traps must be made of stainless steel or heavy polyethylene, installed with accessible inspection covers, and serviced by DM-approved waste collection contractors."
  },
  {
    question: "How does Abbadi Tech conduct hydrostatic pressure testing on water networks?",
    answer: "Before concealing any water pipework inside walls or ceilings, our master plumbers cap all outlets, fill the lines with clean water, purge air pockets, and pressurize the system with a calibrated hydraulic pump to 1.5 times the maximum working pressure (typically 10 bar). The pressure is held for a mandatory 24-hour observation period to certify zero pressure drop."
  },
  {
    question: "What is the difference between HDPE and UPVC drainage piping in commercial projects?",
    answer: "High-Density Polyethylene (HDPE) pipes are jointed via butt-fusion or electrofusion couplers, offering superior resistance to hot water discharges (up to 95°C), caustic cleaning chemicals, and mechanical vibrations—making them mandatory for commercial kitchens and high-end risers. UPVC is jointed with solvent cement and remains an economical, reliable solution for standard gravity sanitary drainage."
  },
  {
    question: "Can Abbadi Tech install luxury German and Swiss sanitary fittings (Geberit, Grohe, Dornbracht)?",
    answer: "Yes. Our master plumbers are trained in luxury sanitary installation, including concealed in-wall cistern frames (Geberit Duofix), floor-mounted free-standing bath fillers, wall-hung bidet toilets, electronic touchless sensor faucets, and rainfall thermostatic shower mixers."
  },
  {
    question: "Do you supply and install commercial water heaters and central solar water heating systems?",
    answer: "Yes. We install Dubai Municipality-compliant central solar water heating systems with auxiliary electric heating elements, expansion vessels, temperature-pressure relief (TPR) valves, and circulation pump loops that deliver instant hot water across luxury residences and hotels."
  },
  {
    question: "What causes water hammer noise in building pipes and how do you prevent it?",
    answer: "Water hammer occurs when high-velocity water is abruptly stopped by fast-closing solenoid valves or mixer taps, sending shockwaves through the piping. Abbadi Tech installs appropriately sized water hammer arrestors and pipe anchor brackets with rubber vibration isolators to ensure completely silent plumbing operation."
  },
  {
    question: "Do you perform water storage tank cleaning and disinfection certification in Dubai?",
    answer: "Yes. In collaboration with Dubai Municipality-accredited environmental hygiene partners, we coordinate complete drainage, mechanical scrubbing, chemical disinfection, and laboratory microbiological water testing for potable water storage tanks."
  }
];

// 9. AREAS WE SERVE FAQS (Jurisdiction nuances: Mainland DM, DDA, DMCC, Trakhees, Abu Dhabi)
export const areasFaqs: FAQItem[] = [
  {
    question: "How do MEP authority approvals differ between mainland Dubai and Freezone jurisdictions?",
    answer: "In mainland Dubai (e.g. Business Bay, Downtown, Al Quoz), approvals are governed jointly by Dubai Municipality (DM) and DEWA. In freezones, independent development authorities handle building permits: DDA (Dubai Development Authority) oversees TECOM/Media City; DMCC oversees JLT; Trakhees (PCFC) regulates JAFZA, DIP, and Dragon Mart. Regardless of the freezone building permit authority, DEWA remains the sole power and water authority for final meter energization across Dubai."
  },
  {
    question: "Can Abbadi Tech handle fast-response MEP contracting across Downtown Dubai and The Dubai Mall?",
    answer: "Yes. Having executed iconic fit-outs inside The Dubai Mall and Downtown commercial towers, our team understands Emaar Retail Tenancy Manuals, night-shift logistics permits, security gate passes, and delivery dock scheduling intimately."
  },
  {
    question: "Do you execute electrical and plumbing technical works in Abu Dhabi?",
    answer: "Yes. Abbadi Tech has successfully completed major commercial and showroom installations in Abu Dhabi (including prestige automotive facilities like the Ferrari Showroom). We coordinate with Abu Dhabi Distribution Company (ADDC) and Abu Dhabi Civil Defence for capital projects."
  },
  {
    question: "What are the specific MEP regulations for villas on Palm Jumeirah?",
    answer: "Palm Jumeirah villas are governed by Nakheel Planning and Approval Regulations along with DEWA. Due to saline coastal conditions, all outdoor electrical switchgear and pump installations require high IP ratings (IP65/IP66) and corrosion-resistant enclosures. Abbadi Tech has energized signature villas on Palm Jumeirah with certified installations."
  },
  {
    question: "Can you provide same-day engineering site inspections in JLT (DMCC) and Dubai Marina?",
    answer: "Yes. Because our engineering teams are deployed daily across central Dubai, we can arrange same-day or next-day site visits across JLT, Dubai Marina, DIFC, and Business Bay."
  },
  {
    question: "How do you handle heavy industrial electrical works in Dubai Investments Park (DIP) and Al Quoz?",
    answer: "Industrial facilities in DIP (under Trakhees) and Al Quoz (under Dubai Municipality) require heavy 3-phase machinery circuits, high-amperage MDB switchgear, overhead crane power busbars, and high-bay lighting. Abbadi Tech provides end-to-end industrial electrical engineering."
  },
  {
    question: "Do you deliver projects in Ajman and the Northern Emirates?",
    answer: "Yes. Abbadi Tech delivers selective high-value commercial, hospitality, and industrial MEP contracting in Ajman, working in full coordination with FEWA / Etihad WEA authorities."
  },
  {
    question: "Are your mobile technical teams equipped to reach active sites on short notice?",
    answer: "Yes. Abbadi Tech maintains dedicated service vehicles stocked with essential diagnostic tools, Megger testers, pipe fusion equipment, and spare circuit components for fast emergency deployment across the emirate."
  }
];

// 10. RESOURCES & GUIDES FAQS (Cost estimates, Documentation, Checklists)
export const resourcesFaqs: FAQItem[] = [
  {
    question: "What is the average cost of MEP contracting per square foot for commercial fit-outs in Dubai?",
    answer: "MEP contracting costs in Dubai vary based on project specifications, layout complexity, and power demands. While general industry averages range from AED 45 to AED 85 per sq. ft for standard commercial offices, Abbadi Tech provides flexible, custom-scoped proposals tailored strictly to each client's architectural scope, equipment schedule, and technical requirements without rigid fixed packages."
  },
  {
    question: "What documents are required to initiate an interior fit-out MEP approval in Dubai?",
    answer: "The essential document checklist includes: 1. Valid Ejari / Tenancy Contract, 2. Title Deed or Affection Plan, 3. Trade License of the tenant, 4. Landlord Fit-Out NOC, 5. Architectural layout and Reflected Ceiling Plan (RCP), 6. Single-Line Diagram (SLD) and Connected Load Schedule prepared by a qualified contractor, and 7. Contractor's technical submission portfolio and engineering credentials."
  },
  {
    question: "How does DEWA calculate the electrical connection security deposit for commercial units?",
    answer: "DEWA charges a refundable security deposit based on premise type and connected load. Standard commercial shops and offices typically require a security deposit of AED 2,000 to AED 4,000 for standard loads, scaling upward for industrial high-voltage connections. This is paid directly to DEWA through their official portal."
  },
  {
    question: "What is the difference between a DEWA NOC for Decoration vs a DEWA NOC for Building Permit?",
    answer: "A DEWA NOC for Decoration is applied for minor interior fit-outs where the connected electrical load does not exceed the unit's existing allocated power margin. A DEWA NOC for Building Permit (BPS) is required when structural modifications, load additions, or new main feeder cables are required."
  },
  {
    question: "What is the step-by-step checklist to avoid DEWA site inspection rejection?",
    answer: "Our proven 7-point checklist: 1. Ensure all panel breakers exactly match approved SLD ratings. 2. Verify earth continuity resistance is below 1.0 Ohm. 3. Confirm all wires are labeled with ferrules and color-coded. 4. Ensure RCD trip times are calibrated. 5. Provide fire-stop sealant at all wall cable penetrations. 6. Ensure clear, unobstructed access to the electrical room. 7. Verify water lines maintain minimum clearance from switchgear."
  },
  {
    question: "How long does a DEWA kilowatt-hour smart meter take to be installed after inspection pass?",
    answer: "Once the DEWA field inspector approves the installation on site and issues the green inspection clearance in the portal, smart meter fixing and live energization typically take 24 to 72 hours upon settlement of the client's connection fee and security deposit."
  },
  {
    question: "Can I download approved MEP sample drawings and load schedules from your website?",
    answer: "Our Resources section provides illustrative diagrams and compliance tables explaining load calculations and piping standards. For project-specific CAD files, contact our engineering office for a customized review."
  },
  {
    question: "What are the common hidden costs in Dubai MEP contracting and how does Abbadi Tech avoid them?",
    answer: "Hidden costs often arise from uncalculated authority fee revisions, surprise DEWA load upgrade penalties, unapproved grease trap sizing, and re-inspection fees from failed audits. Abbadi Tech provides transparent, itemized BOQs tailored specifically to project scope and client requirements to eliminate budget overruns."
  }
];

// 11. DEWA WORKS SPECIALIZED FAQS
export const dewaWorksFaqs: FAQItem[] = [
  {
    question: "What exact services are included in Abbadi Tech's DEWA works package?",
    answer: "Our turnkey DEWA package covers: initial power feasibility reviews, single-line diagram (SLD) engineering, load schedule preparation, online DEWA portal submission, electrical room intake preparation, MDB/SMDB/DB panel supply and installation, incomer DB fixing, smart meter cabinet fabrication, coordination of field inspections, and final energization."
  },
  {
    question: "How do I know if my retail store or restaurant requires a DEWA load upgrade?",
    answer: "If your equipment power schedule (ovens, espresso machines, deep fryers, heavy air conditioning, or water heaters) sums to a maximum demand higher than the landlord's existing electrical breaker rating, a DEWA load upgrade is mandatory. Operating above sanctioned capacity causes frequent main breaker trips, severe municipal penalties, and fire hazards."
  },
  {
    question: "What is a Single-Line Diagram (SLD) and who is authorized to draft it?",
    answer: "An SLD is an engineered schematic showing the flow of electrical power from the incoming DEWA supply through busbars, isolators, circuit breakers, protective RCDs, cable cross-sections, and end-user branch circuits. Under Dubai law, only authorized electrical engineering specialists are qualified to draft, stamp, and submit SLDs for approval."
  },
  {
    question: "What is the procedure for installing a DEWA smart kilowatt-hour electricity meter?",
    answer: "The contractor must fabricate a compliant meter cabinet meeting DEWA dimensions and ventilation standards, install current transformers (CTs) for loads above 100A, run communication conduits for the smart metering network, pass the physical DEWA inspection, and accompany the official DEWA meter installation team during final connection."
  },
  {
    question: "Can Abbadi Tech handle temporary electricity connection (Builder's Power) for construction sites?",
    answer: "Yes. We engineer and install compliant temporary construction power panels with earth leakage circuit breakers and heavy-duty weatherproof enclosures, submitting temporary supply requests to DEWA for rapid job-site energization."
  },
  {
    question: "What is Power Factor Correction (PFC) and when does DEWA mandate a capacitor bank?",
    answer: "DEWA mandates that all commercial and industrial installations maintain an overall power factor of at least 0.92 lagging to reduce energy waste. For installations with large connected loads (typically 100kVA and above with inductive motor loads), Abbadi Tech designs and installs automatic capacitor bank panels with harmonic filters."
  },
  {
    question: "How does DEWA inspect solar photovoltaic (Shams Dubai) connections?",
    answer: "Under the Shams Dubai solar initiative, rooftop solar arrays must be grid-connected via DEWA-approved inverters and bi-directional smart meters. Abbadi Tech provides certified AC side integration, isolation switchgear, and safety disconnects."
  },
  {
    question: "What happens if a building's electrical intake room does not meet DEWA regulations?",
    answer: "DEWA inspectors will issue a rejection notice if the intake room lacks adequate ventilation, has water pipes routed overhead, has inadequate working clearance in front of switchgear (minimum 1.0 to 1.2m), or lacks rubber insulating floor mats. Abbadi Tech ensures intake rooms meet 100% of spatial and safety criteria before booking inspections."
  },
  {
    question: "How do you coordinate with building facility managers during DEWA power shutdowns?",
    answer: "When connecting main incomers or upgrading busbars, temporary power shutdowns are scheduled during low-occupancy windows (typically midnight to 5:00 AM) with mobile backup generators deployed where continuous critical power is required."
  },
  {
    question: "Why should clients select Abbadi Tech for high-stakes DEWA approvals in Dubai?",
    answer: "With 21+ years of clean compliance since 2005, Abbadi Tech maintains an unblemished reputation with DEWA engineering review divisions, ensuring your permits are processed rapidly and without red-tape delays."
  },
  {
    question: "What is a DEWA Red Notice, and how quickly can Abbadi Tech clear violations?",
    answer: "A DEWA Red Notice is an official non-compliance citation issued by utility inspectors for safety violations, unapproved load additions, or defective wiring. It carries a strict rectification deadline (typically 7 to 14 days) before power disconnection. Abbadi Tech conducts emergency 24-hour on-site audits, rectifies panel wiring, conducts Megger insulation tests, and secures the Green Clearance Certificate to keep your power live."
  },
  {
    question: "What is the difference between a DEWA NOC and a Trakhees NOC in Dubai?",
    answer: "Mainland Dubai properties fall directly under Dubai Municipality and DEWA jurisdiction. Developments located in Free Zones like Jebel Ali Free Zone (JAFZA), Dubai Investments Park (DIP), and Dubai Maritime City fall under Trakhees CED (Civil Engineering Department). Trakhees issues its own building permits and utility NOCs, which then interface with DEWA for final power energization. Abbadi Tech is fully qualified and experienced to handle both authorities."
  },
  {
    question: "Can commercial tenants apply for DEWA approvals directly, or is owner consent required?",
    answer: "Tenants with a valid Ejari tenancy contract and commercial trade license can apply for interior fit-out NOCs and smart meter accounts. However, landlords or building owners must provide formal written consent (Owner NOC) and provide base-building electrical intake drawings showing sanctioned upstream breaker capacity."
  },
  {
    question: "What is the Shams Dubai solar connection and net metering process?",
    answer: "Under DEWA's Shams Dubai initiative, commercial building owners and villa residents can install rooftop solar photovoltaic (PV) systems to offset their monthly electricity bills. Surplus solar power exported to DEWA's grid is credited at full retail tariff via bi-directional smart meters. Abbadi Tech engineers the AC integration, grid isolators, and safety trip switches to pass DEWA solar inspection."
  },
  {
    question: "What are the common reasons DEWA rejects electrical applications, and how do you prevent them?",
    answer: "The top rejection causes include: 1. Unbalanced 3-phase load schedules exceeding 10% phase deviation; 2. Single Line Diagrams that do not match site cable sizes; 3. Non-compliant breaker trip curves; 4. Incomplete landlord documentation. Abbadi Tech's licensed electrical design office conducts internal engineering QA reviews on every calculation, ensuring a 100% first-pass approval rate."
  },
  {
    question: "What is RSB approval and why does it matter for Dubai utility projects?",
    answer: "The Regulation and Supervision Bureau (RSB) oversees Dubai's water and electricity sector standards. Certain specialized commercial energy audits, solar integration schemes, and utility sub-contractors must adhere to RSB guidelines. Working with a compliant, veteran engineering firm like Abbadi Tech guarantees your installation aligns with RSB and DEWA regulatory frameworks."
  },
  {
    question: "What are the legal and financial penalties for operating unauthorized power connections in Dubai?",
    answer: "Operating unapproved electrical connections or tampering with DEWA meters is a serious violation under UAE Federal and Dubai Municipal law. Penalties include heavy fines (often exceeding AED 50,000 to AED 200,000+), immediate power disconnection, retroactive billing at peak penalty tariffs, and commercial license suspension until full engineering regularization."
  },
  {
    question: "At what power demand does DEWA mandate a dedicated substation transformer room?",
    answer: "For individual facilities or buildings where the maximum electrical demand exceeds approximately 400kVA to 500kVA (or where local LV distribution networks are congested), DEWA requires the developer or building owner to allocate a dedicated, ground-level 11kV electrical substation or package transformer room with 24/7 direct access for DEWA service trucks."
  }
];

// 12. ELECTRICAL CONTRACTOR FAQS
export const electricalContractorFaqs: FAQItem[] = [
  {
    question: "What legal qualifications define an official Electrical Contractor in Dubai?",
    answer: "In the Emirate of Dubai, an official electrical contractor must maintain certified electrical engineers accredited by the Society of Engineers UAE, and possess active contractor portal access with DEWA."
  },
  {
    question: "What safety ratings and fire-resistance certifications do you enforce for electrical cabling?",
    answer: "We install cables complying strictly with BS 6387, BS 7671, and IEC standards, including low-smoke zero-halogen (LSZH) insulation, fire-resistant XLPE armored cabling, and metallic fire-resistant conduit sleeves at all structural wall partitions."
  },
  {
    question: "How do you ensure proper phase balance in three-phase commercial installations?",
    answer: "Our engineers balance connected circuits equally across the Red, Yellow, and Blue phases in the load schedule. During commissioning, we measure actual running currents with calibrated clamp meters to ensure phase deviation remains under 10%, maximizing equipment lifespan and reducing energy bills."
  },
  {
    question: "Can Abbadi Tech execute warehouse high-bay lighting and busbar trunking systems?",
    answer: "Yes. For logistics facilities, workshops, and retail warehouses, we install energy-efficient industrial high-bay LED fixtures, smart daylight sensors, and sandwich-type busbar trunking systems that provide flexible tap-off power feeds for industrial machinery."
  },
  {
    question: "What is Megger insulation resistance testing and why is it mandatory?",
    answer: "Megger testing applies a high DC test voltage (500V or 1000V) between phase conductors, neutral, and earth to verify that cable insulation has not been damaged during pulling. DEWA requires certified test results confirming minimum insulation resistance of at least 1.0 Megaohm before approving live power."
  },
  {
    question: "Do you supply and wire uninterruptible power supply (UPS) systems for commercial offices?",
    answer: "Yes. For corporate headquarters, financial trading floors, and server rooms, we wire dedicated clean-power circuits, dual-input static transfer switches (STS), and central UPS systems with battery backup racks."
  },
  {
    question: "Can Abbadi Tech assist with architectural lighting automation (KNX, DALI)?",
    answer: "Yes. We install advanced DALI addressable dimming and KNX architectural lighting automation for luxury villas, hospitality lounges, and executive conference rooms."
  },
  {
    question: "How do you protect sensitive commercial equipment from UAE power grid voltage surges?",
    answer: "We integrate Type 1 and Type 2 Surge Protection Devices (SPD) inside main and sub-main distribution boards, shunting voltage spikes caused by lightning or grid switching safely to earth before they reach sensitive electronics."
  }
];

// 13. ELECTRICAL TECHNICAL WORK FAQS
export const electricalTechnicalWorkFaqs: FAQItem[] = [
  {
    question: "What specific wiring methods are permitted inside false ceiling voids in Dubai fit-outs?",
    answer: "DEWA regulations strictly prohibit loose, unsupported wiring in false ceiling voids. All cabling must be routed inside rigid metallic conduits, flexible metal conduits with approved adaptors, or laid neatly on galvanized cable trays with fire-resistant ties."
  },
  {
    question: "What is the proper height and placement for electrical sockets and switches per Dubai codes?",
    answer: "Standard socket outlets are installed at 300mm to 450mm above finished floor level (FFL), countertop sockets at 150mm above worktops, and wall light switches at 1100mm to 1200mm above FFL. In wet areas (bathrooms and kitchens), sockets must maintain a minimum 1.5m clearance from water outlets and be protected by 30mA RCDs."
  },
  {
    question: "How do you execute electrical wiring for emergency lighting and exit signage?",
    answer: "Emergency exit lights and escape route luminaires are wired using fire-resistant cables (such as FP200) connected to dedicated unswitched local circuits or central battery systems, providing a minimum of 3 hours of illumination during main power failure per Dubai Civil Defence regulations."
  },
  {
    question: "What is the role of an equipment isolator switch in commercial kitchens and mechanical rooms?",
    answer: "Rotary equipment isolators provide a visible, lockable local physical disconnect switch within 1 to 2 meters of motors, chillers, exhaust fans, and commercial ovens. This allows maintenance technicians to safely de-energize machinery without walking back to the main electrical panel."
  },
  {
    question: "How do you identify and label electrical circuits in commercial distribution boards?",
    answer: "Every single outgoing circuit in an Abbadi Tech distribution board is fitted with computer-printed wire sleeves matching the panel schedule, with a clear, laminated circuit directory mounted inside the enclosure door indicating exact room numbers and appliance identities."
  },
  {
    question: "What cable sizes are used for standard 13A socket rings and lighting circuits in Dubai?",
    answer: "Per DEWA standards, 13A radial socket circuits utilize minimum 2.5mm² copper conductors with 1.5mm² earth; ring circuits use 2.5mm² or 4.0mm²; lighting circuits utilize 1.5mm² conductors; heavy kitchen appliances and water heaters use 4.0mm² to 6.0mm² cabling."
  },
  {
    question: "Can Abbadi Tech install busbar tap-off boxes for expanding office tenants?",
    answer: "Yes. For commercial towers with rising busbar trunking, we install certified tap-off disconnect units and feed sub-main cables down into new tenant distribution boards."
  },
  {
    question: "How do you verify phase rotation before connecting 3-phase commercial motors?",
    answer: "We use calibrated digital phase rotation meters to confirm clockwise phase sequence (L1-L2-L3) before energizing motors, preventing fans, compressors, and booster pumps from spinning backward and sustaining mechanical damage."
  }
];

// 14. PLUMBING CONTRACTOR FAQS
export const plumbingContractorFaqs: FAQItem[] = [
  {
    question: "What qualifications should I verify before hiring a plumbing contractor in Dubai?",
    answer: "Ensure the contractor employs certified master plumbers familiar with Dubai Municipality Plumbing Regulations, and provides evidence of pressure-testing certifications and as-built documentation."
  },
  {
    question: "Why is backflow prevention mandatory for commercial water supplies in Dubai?",
    answer: "Backflow preventers (reduced pressure zone / RPZ valves) prevent potentially contaminated water from commercial kitchens, dental clinics, or cooling towers from siphoning backward into the public drinking water network during pressure drops. Dubai Municipality strictly mandates tested backflow assemblies."
  },
  {
    question: "How do you design acoustic drainage systems for luxury residential villas?",
    answer: "To eliminate the sound of rushing wastewater inside luxury bedrooms and dining halls, we install mineral-reinforced acoustic polypropylene drainage pipes (such as Geberit Silent-PP or Valsir Triplus) secured with rubber-lined acoustic pipe clamps and insulated drop elbows."
  },
  {
    question: "What are the ventilation requirements for sanitary drainage stacks in multi-story buildings?",
    answer: "Every drainage stack must extend through the roof to open air as a vent pipe (or be fitted with approved Air Admittance Valves / AAV where roof penetration is prohibited) to equalize pneumatic pressure and prevent trap seals from being siphoned out, which causes sewer gas odor."
  },
  {
    question: "Can Abbadi Tech install sub-metering systems for multi-tenant commercial properties?",
    answer: "Yes. We install smart ultrasonic water meters (such as Diehl Hydrus) with remote M-Bus or Modbus readout, enabling building owners and mall management to bill individual tenants accurately based on verified consumption."
  },
  {
    question: "How do you prevent legionella and bacterial growth in building water systems?",
    answer: "We design continuous hot water circulation loops that maintain minimum storage temperatures of 60°C and return temperatures of at least 50°C, eliminate dead-legs in distribution piping, and conduct certified chemical flushing before commissioning."
  },
  {
    question: "What is the life expectancy of a professionally installed PPR water distribution network?",
    answer: "When installed using certified PN20 PPR piping with calibrated heat-fusion welding machines, the system has a design life exceeding 50 years without internal corrosion, scaling, or pitting."
  },
  {
    question: "How do you repair defective plumbing work left by uncertified subcontractors?",
    answer: "We isolate defective runs, utilize thermal imaging and acoustic leak detectors to pinpoint hidden leaks, replace non-compliant fittings with certified materials, and re-certify the entire network with calibrated hydrostatic testing."
  }
];

// 15. PLUMBING TECHNICAL WORK FAQS
export const plumbingTechnicalWorkFaqs: FAQItem[] = [
  {
    question: "What are the standard slope gradients for gravity drainage pipes under Dubai Municipality code?",
    answer: "Under Dubai Municipality regulations, 50mm and 75mm waste pipes require a minimum gradient of 1:50 (20mm drop per meter); 110mm and 160mm soil drainage pipes require a minimum gradient of 1:100 (10mm drop per meter) to maintain self-cleansing velocity without stranding solids."
  },
  {
    question: "What is socket-fusion welding and why is it superior for PPR water pipes?",
    answer: "Socket fusion uses an electronically controlled heating iron to melt both the pipe exterior and the fitting interior simultaneously to 260°C. When pushed together, the plastics fuse into a single monolithic, homogeneous joint that is structurally stronger than the pipe wall itself, completely eliminating threaded or solvent-glued leak points."
  },
  {
    question: "How does a submersible sump pump panel function for basement drainage?",
    answer: "Submersible sump stations collect groundwater, stormwater, or basement drainage in a heavy-duty basin. An automated control panel with float switches and level sensors operates dual duty/standby pumps, sounding high-water alarms and alternating pump cycles to prevent basement flooding."
  },
  {
    question: "What is a floor cleanout (FCO) and where must it be installed in commercial kitchens?",
    answer: "A Floor Cleanout (FCO) provides a flush, gastight brass or stainless steel access point in the floor slab, allowing mechanical drain snakes to clear blockages without dismantling fixtures. Dubai Municipality mandates cleanouts at every change of direction exceeding 45 degrees and at intervals of no more than 15 meters."
  },
  {
    question: "How do you pressure-test concealed sanitary drainage lines?",
    answer: "Before floor screeding, drainage stacks and underground branches are filled with water to a minimum 3-meter head of water (air/smoke tests are also utilized) with all cleanout plugs tightened. The water level must remain completely stable for a minimum of 30 minutes with zero visible seepage."
  },
  {
    question: "What is the proper pipe sizing for water supply to commercial restaurant kitchens?",
    answer: "Commercial kitchens with pot washers, combi-steamers, and multi-sink stations require minimum 1-inch (32mm) or 1¼-inch (40mm) main branch lines to maintain minimum dynamic flow rates of 1.5 bar at peak simultaneous fixture usage."
  },
  {
    question: "How do you install trap primers for commercial floor drains?",
    answer: "In air-conditioned UAE buildings, water in floor drain traps evaporates quickly, allowing sewer gases to enter. Abbadi Tech installs automatic trap primer valves connected to nearby flush lines or sensor taps, replenishing the water trap seal every time a fixture is operated."
  },
  {
    question: "What pipe insulation materials do you use to prevent condensation in chilled water or cold lines?",
    answer: "We install closed-cell elastomeric nitrile rubber insulation (such as Armaflex or K-Flex) with vapor-barrier foil tape, preventing humid Dubai ambient air from causing surface condensation and subsequent ceiling water damage."
  }
];
