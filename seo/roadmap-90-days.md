# 90-Day Technical & Local SEO Implementation Roadmap

**Entity:** Abbadi Tech Technical Solutions LLC  
**Owner:** Technical SEO Lead, Senior Web Engineer, Managing Director / Owner  
**Horizon:** Month 1 to Month 3 (90 Days)  
**Target:** Rank #1 for DEWA Approval Dubai & Electrical Contractor Dubai; Top 3 Local Pack in prime districts; Dominant share of AI Overview citations.

---

## Month 1 (Days 1–30): Foundation, Compliance & Core Silos

| Sprint | Task Description | Owner | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| **Day 1–3** | **Host & DNS Resolution:** Point `www.abbaditech.com` CNAME to `cname.vercel-dns.com` and apex A record to `76.76.21.21`. Deprecate Zoho DNS. | Domain Admin / Client | `https://www.abbaditech.com` returns 200 OK via Vercel with valid SSL. |
| **Day 4–7** | **Edge Redirects & Central Config:** Deploy `vercel.json` with 301 redirects for legacy URLs; create `src/config/site.ts`. Remove HTML refresh stubs. | Senior Web Engineer | Zero soft-404s; all legacy URLs return true HTTP 301. |
| **Day 8–14** | **Truthfulness & Content Scrub:** Remove all unverified claims (CLM-01 through CLM-13) and leaked internal text ("Lead Generation Division", etc.). | Content Lead / Engineer | Zero unverified claims live; claims log `/seo/claims-to-verify.md` maintained. |
| **Day 15–22** | **DEWA Approval Hub Architecture:** Deploy 13 child pages under `/dewa-approvals-dubai/` with answer-first summaries, checklists, and timelines. | Senior Web Engineer | All 13 child URLs compile, pass schema checks, and are internally linked. |
| **Day 23–30** | **Trade Services & MEP Integration:** Deploy 7 electrical sub-services, 6 plumbing sub-services, and unified `/services/mep-contractor-dubai`. | Senior Web Engineer | Complete coverage of electrical, plumbing, and turnkey MEP intents. |

---

## Month 2 (Days 31–60): Local Packs, Sectors & Conversion Engine

| Sprint | Task Description | Owner | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| **Day 31–40** | **District Landing Pages (22 Areas):** Deploy unique, localized area landing pages (`/areas/business-bay`, `/areas/downtown-dubai`, etc.) with local authority rules. | Local SEO Strategist / Engineer | Zero templated find-and-replace text; each area features specific building types & free-zone rules. |
| **Day 41–48** | **Industry Fit-Out Pages (8 Sectors):** Deploy restaurant, clinic, salon, gym, retail, office, warehouse, and villa fit-out landing pages. | Content Strategist / Engineer | Clear authority sequence (DM -> DEWA -> Civil Defence) and load guidelines per sector. |
| **Day 49–55** | **Google Business Profile (GBP) Overhaul:** Update primary category to *Electrical Contractor*, add secondary categories (*Plumber*, *Engineering Consultant*), sync NAP, upload authentic geotagged site photos. | Local SEO Specialist | 100% profile completeness score; UTM tagging on website links (`utm_source=gbp&utm_medium=organic`). |
| **Day 56–60** | **Lead Capture & Conversion Upgrade:** Implement drawing upload RFQ form with server-side email dispatch to `@abbaditech.com`; sticky WhatsApp and call buttons. | Full-Stack Engineer | Forms tested and verified; GA4 conversion events logging phone, WhatsApp, and form submissions. |

---

## Month 3 (Days 61–90): Authority Scaling, AI Engine Optimization & Citations

| Sprint | Task Description | Owner | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| **Day 61–70** | **Bilingual Arabic Mirror (`/ar/`):** Deploy high-converting Arabic mirror for core money pages with native technical terminology and bidirectional hreflang tags. | Arabic Localization / Engineer | Valid `hreflang` implementation; zero automated machine-translation artifacts. |
| **Day 71–80** | **Tier-1 UAE Citations & Directory Synchronization:** Claim and standardize NAP across Dubai Chamber, Yellow Pages UAE, Connect.ae, Apple Business Connect, Bing Places. | Local SEO Specialist | 100% NAP consistency across top 15 UAE business registries. |
| **Day 81–85** | **Educational Technical Intelligence (Group D):** Publish original deep guides (Red Notice Rectification, SLD vs Load Schedule, Substation Requirements, Grease Trap DM Rules). | Content Lead / Engineer | 4 newly published guides with original technical diagrams and contextual links to money pages. |
| **Day 86–90** | **Post-Launch Performance & Ranking Audit:** Re-crawl site via GSC, test mobile Core Web Vitals, audit SERP movement, and review monthly conversion ROI. | Principal Technical SEO | CWV all "Good" on mobile; impressions and clicks trending upward on Group A & B keywords. |
