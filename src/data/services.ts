export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Formation" | "Trademark" | "Contract" | "Compliance" | "Consultation";
  price?: string;
  summary: string;
  description: string[];
  includes?: string[];
  process?: { step: string; detail: string }[];
  faqs?: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "ny-llc-formation",
    title: "New York LLC Formation Service",
    shortTitle: "NY LLC Formation",
    category: "Formation",
    price: "$1,750 Flat Fee",
    summary: "Complete LLC formation in New York including state filing, operating agreement, EIN and publication assistance.",
    description: [
      "Thomas Law Firm PLLC offers a complete New York LLC formation package designed for entrepreneurs and small business owners launching operations in New York State.",
      "Our flat fee includes all preparation, filing and follow-up work necessary to form a compliant LLC and prepare it for the New York publication requirement.",
    ],
    includes: [
      "Name availability search with the NY Department of State",
      "Preparation and filing of Articles of Organization",
      "Filing fee paid to the New York Department of State",
      "Custom Operating Agreement tailored to your ownership structure",
      "EIN (Federal Tax ID) registration with the IRS",
      "Initial registered agent service guidance",
      "Digital delivery of all formation documents",
    ],
    process: [
      { step: "Consultation", detail: "Brief intake call to confirm name, members and management structure." },
      { step: "Filing", detail: "We draft and file your Articles of Organization with the NY Department of State." },
      { step: "Documents", detail: "You receive the stamped Articles, Operating Agreement and EIN confirmation." },
      { step: "Publication", detail: "We coordinate the required NY publication in two designated newspapers." },
    ],
    faqs: [
      { q: "How long does formation take?", a: "Standard processing with the NY Department of State is typically 1–2 weeks. Expedited filing is available for an additional state fee." },
      { q: "Is publication included?", a: "Publication coordination is included; newspaper publication fees and the Certificate of Publication state fee are billed separately at cost." },
    ],
  },
  {
    slug: "ny-pllc-formation",
    title: "New York PLLC Formation Service",
    shortTitle: "NY PLLC Formation",
    category: "Formation",
    price: "$1,950 Flat Fee",
    summary: "Professional Service LLC formation for licensed professionals — attorneys, physicians, architects, engineers and more.",
    description: [
      "A Professional Service Limited Liability Company (PLLC) is the entity of choice for licensed professionals practicing in New York.",
      "We handle the additional licensing board consent and Department of State requirements unique to professional entities.",
    ],
    includes: [
      "Licensing board consent preparation and submission",
      "Filing of Articles of Organization for a PLLC",
      "Custom PLLC Operating Agreement",
      "EIN registration",
      "Publication coordination guidance",
    ],
  },
  {
    slug: "ny-llc-publication",
    title: "New York LLC Publication Service",
    shortTitle: "NY LLC Publication",
    category: "Compliance",
    price: "Starts at $1,500",
    summary: "Newspaper publication and Certificate of Publication filing to satisfy New York's LLC publication requirement.",
    description: [
      "Every newly-formed New York LLC must publish notice in two newspapers designated by the county clerk for six consecutive weeks and file a Certificate of Publication.",
      "We coordinate the entire process including newspaper selection in lower-cost counties where permitted.",
    ],
  },
  {
    slug: "ny-pllc-publication",
    title: "New York PLLC Publication Service",
    shortTitle: "NY PLLC Publication",
    category: "Compliance",
    price: "Starts at $1,500",
    summary: "Publication and Certificate of Publication filing for newly-formed New York Professional LLCs.",
    description: [
      "PLLCs are subject to the same publication requirement as LLCs. We handle newspaper selection, affidavits and the Certificate of Publication filing.",
    ],
  },
  {
    slug: "ny-registered-agent",
    title: "New York Registered Agent Service",
    shortTitle: "NY Registered Agent",
    category: "Compliance",
    price: "$200 / year",
    summary: "Reliable New York registered agent representation with prompt scan-and-forward of service of process.",
    description: [
      "Our registered agent service provides a professional New York address for service of process and official government correspondence with same-day scan and email delivery.",
    ],
  },
  {
    slug: "ny-dba-filing",
    title: "New York DBA Filing Service",
    shortTitle: "NY DBA Filing",
    category: "Formation",
    price: "$450 Flat Fee",
    summary: "Assumed name (DBA) registration for sole proprietors and existing entities operating under a trade name.",
    description: [
      "We prepare and file your Assumed Name Certificate with the appropriate New York county clerk or the Department of State for corporations and LLCs.",
    ],
  },
  {
    slug: "ny-corporation-formation",
    title: "New York Corporation Formation Service",
    shortTitle: "NY Corp Formation",
    category: "Formation",
    price: "$1,500 Flat Fee",
    summary: "Complete C-Corp or S-Corp formation in New York with bylaws, organizational resolutions and EIN.",
    description: [
      "Form a New York business corporation with everything required for clean operations and investor-readiness — Certificate of Incorporation, Bylaws, Initial Resolutions, Stock Ledger and EIN.",
    ],
  },
  {
    slug: "ny-foreign-business-registration",
    title: "New York Foreign Business Registration",
    shortTitle: "NY Foreign Registration",
    category: "Compliance",
    price: "$1,200 Flat Fee",
    summary: "Register your out-of-state LLC or corporation to lawfully transact business in New York.",
    description: [
      "Out-of-state entities doing business in New York must obtain authority from the NY Department of State. We prepare the Application for Authority and obtain the required Certificate of Existence.",
    ],
  },
  {
    slug: "ny-llc-name-change",
    title: "New York LLC Name Change Service",
    shortTitle: "NY LLC Name Change",
    category: "Compliance",
    price: "$600 Flat Fee",
    summary: "Amend your Articles of Organization to change your New York LLC's legal name.",
    description: [
      "We prepare and file the Certificate of Amendment to change your LLC's name on record with the NY Department of State.",
    ],
  },
  {
    slug: "ny-llc-dissolution",
    title: "New York LLC Dissolution Service",
    shortTitle: "NY LLC Dissolution",
    category: "Compliance",
    price: "$750 Flat Fee",
    summary: "Properly dissolve a New York LLC including Articles of Dissolution and tax clearance coordination.",
    description: [
      "We handle the dissolution paperwork and coordinate with the Department of Taxation and Finance where required for a clean wind-down.",
    ],
  },
  {
    slug: "ny-surrender-of-authority",
    title: "New York Surrender of Authority",
    shortTitle: "NY Surrender of Authority",
    category: "Compliance",
    price: "$750 Flat Fee",
    summary: "Withdraw a foreign entity's authority to transact business in New York.",
    description: [
      "When an out-of-state entity ceases NY operations, the Certificate of Surrender of Authority must be filed. We handle the entire process.",
    ],
  },
  {
    slug: "ny-llc-address-change",
    title: "New York LLC Address Change",
    shortTitle: "NY LLC Address Change",
    category: "Compliance",
    price: "$300 Flat Fee",
    summary: "Update the address of your New York LLC on record with the Department of State.",
    description: [
      "We file the Certificate of Change to update your LLC's address or designated agent address with the NY Department of State.",
    ],
  },
  {
    slug: "nj-llc-formation",
    title: "New Jersey LLC Formation",
    shortTitle: "NJ LLC Formation",
    category: "Formation",
    price: "$1,200 Flat Fee",
    summary: "Complete New Jersey LLC formation including state filing, operating agreement, EIN and tax registration.",
    description: [
      "We form your NJ LLC and complete the Business Registration Application (NJ-REG) required for tax compliance in New Jersey.",
    ],
  },
  {
    slug: "nj-corporation-formation",
    title: "New Jersey Corporation Formation Service",
    shortTitle: "NJ Corp Formation",
    category: "Formation",
    price: "$1,200 Flat Fee",
    summary: "New Jersey corporation formation with bylaws, organizational resolutions and tax registration.",
    description: [
      "Complete formation of a New Jersey corporation including the Certificate of Incorporation, Bylaws and NJ-REG tax registration.",
    ],
  },
  {
    slug: "nj-registered-agent",
    title: "New Jersey Registered Agent Service",
    shortTitle: "NJ Registered Agent",
    category: "Compliance",
    price: "$200 / year",
    summary: "Professional registered agent representation in New Jersey with prompt forwarding of service of process.",
    description: [
      "Our NJ registered agent service ensures you never miss a legal notice or state correspondence.",
    ],
  },
  {
    slug: "nj-alternate-name-registration",
    title: "New Jersey Alternate Name Registration",
    shortTitle: "NJ Alternate Name",
    category: "Compliance",
    price: "$450 Flat Fee",
    summary: "Register a trade name (alternate name) for your New Jersey LLC or corporation.",
    description: [
      "Operate under a brand or trade name different from your registered legal name with a properly filed NJ alternate name.",
    ],
  },
  {
    slug: "nj-foreign-business-registration",
    title: "New Jersey Foreign Business Registration",
    shortTitle: "NJ Foreign Registration",
    category: "Compliance",
    price: "$1,200 Flat Fee",
    summary: "Register your out-of-state entity to do business in New Jersey with full tax registration.",
    description: [
      "We prepare and file the Application for Authority and NJ-REG so your business can lawfully operate in New Jersey.",
    ],
  },
  {
    slug: "trademark-registration",
    title: "U.S. Trademark Registration",
    shortTitle: "Trademark Registration",
    category: "Trademark",
    price: "$950 + USPTO fees",
    summary: "Federal trademark registration with the USPTO including clearance search, application and prosecution.",
    description: [
      "Protect your brand with a federally registered trademark. Our flat fee includes a clearance search, application preparation, USPTO filing and routine correspondence through publication.",
      "Responding to substantive office actions is billed separately at our hourly rate.",
    ],
    includes: [
      "Knock-out and direct-hit clearance search",
      "Class identification and goods/services drafting",
      "USPTO TEAS Standard application filing",
      "Specimen review and submission",
      "Monitoring through publication",
    ],
    process: [
      { step: "Search", detail: "We conduct a clearance search and advise on likelihood of registration." },
      { step: "File", detail: "Application filed with the USPTO under your selected class(es)." },
      { step: "Prosecute", detail: "We handle routine USPTO correspondence and examiner communications." },
      { step: "Register", detail: "Certificate of Registration issued, typically 10–14 months after filing." },
    ],
  },
  {
    slug: "trademark-renewal",
    title: "Trademark Renewal & Maintenance",
    shortTitle: "Trademark Renewal",
    category: "Trademark",
    price: "$600 + USPTO fees",
    summary: "Section 8 declarations and Section 9 renewals to maintain your federal trademark registration.",
    description: [
      "We track and file the required maintenance documents to keep your federal trademark in force indefinitely.",
    ],
  },
  {
    slug: "contract-drafting-review",
    title: "Contract Drafting & Contract Review",
    shortTitle: "Contract Drafting / Review",
    category: "Contract",
    price: "Hourly Engagement",
    summary: "Custom contract drafting and detailed contract review for commercial agreements of all sizes.",
    description: [
      "Mr. Thomas drafts and reviews a wide range of commercial agreements including service agreements, NDAs, independent contractor agreements, licensing agreements, operating agreements, shareholder agreements and SaaS terms.",
      "Drafting and review engagements are billed hourly with a detailed itemized invoice.",
    ],
  },
  {
    slug: "delaware-business-formation",
    title: "Delaware Business Formation",
    shortTitle: "Delaware Formation",
    category: "Formation",
    price: "$1,500 Flat Fee",
    summary: "Delaware LLC or C-Corp formation — the preferred jurisdiction for startups and venture-backed companies.",
    description: [
      "We form Delaware LLCs and corporations including registered agent designation, operating documents and EIN. Ideal for fundraising and investor-ready structures.",
    ],
  },
  {
    slug: "professional-practice-formation",
    title: "Professional Practice Formation",
    shortTitle: "Professional Practice Formation",
    category: "Formation",
    price: "Quoted Per Engagement",
    summary: "Entity formation tailored for medical, dental, legal, architectural and engineering practices.",
    description: [
      "We advise licensed professionals on the appropriate entity (PLLC, PC, or partnership) and handle all licensing board and filing requirements.",
    ],
  },
  {
    slug: "business-consultation",
    title: "Business Legal Consultation",
    shortTitle: "Business Consultation",
    category: "Consultation",
    price: "Hourly Engagement",
    summary: "Strategic legal consultation for founders on entity choice, equity, contracts, IP and risk management.",
    description: [
      "Schedule a paid consultation to discuss your specific legal questions. Phone or in-person consultations are available at our New York City office.",
    ],
  },
  {
    slug: "ny-biennial-statement",
    title: "New York Biennial Statement Filing",
    shortTitle: "NY Biennial Statement",
    category: "Compliance",
    price: "$150 Flat Fee",
    summary: "Filing of the required NY biennial statement to keep your LLC or corporation in good standing.",
    description: [
      "Every NY LLC and corporation must file a Biennial Statement every two years. We prepare and submit the filing for you.",
    ],
  },
];

export const featuredServiceSlugs = [
  "trademark-registration",
  "contract-drafting-review",
  "ny-pllc-formation",
  "ny-registered-agent",
  "ny-foreign-business-registration",
  "ny-llc-formation",
];
