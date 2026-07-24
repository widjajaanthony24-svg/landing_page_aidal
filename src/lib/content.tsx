export const jurisdictions = [
  {
    flag: "id",
    country: "Indonesia",
    name: "OJK Indonesia",
    items: [
      "OJK AI governance guidance (2025)",
      "Explainability recommended",
      "5-year record retention",
      "Risk classification logging",
    ],
    retention: "5 yr retention",
  },
  {
    flag: "sg",
    country: "Singapore",
    name: "MAS FEAT Singapore",
    items: [
      "Fairness checks per decision",
      "Ethics documentation",
      "Accountability trail",
      "Transparency reporting",
    ],
    retention: "5 yr retention",
  },
  {
    flag: "eu",
    country: "European Union",
    name: "EU AI Act",
    items: [
      "Art 12 automatic logging",
      "Art 13 plain-language explanation",
      "Human oversight records",
      "High-risk system classification",
    ],
    retention: "10 yr retention",
  },
  {
    flag: "ae",
    country: "UAE",
    name: "VARA UAE",
    items: [
      "AI risk classification",
      "Crypto & fintech audit trail",
      "AI governance documentation",
      "VARA 2024 framework mapped",
    ],
    retention: "7 yr retention",
  },
  {
    flag: "gb",
    country: "United Kingdom",
    name: "FCA United Kingdom",
    items: [
      "SYSC 3 explainability required",
      "SM&CR senior manager accountability",
      "PS 22/3 bias & fairness testing",
      "SR 11/9 model documentation",
    ],
    retention: "7 yr retention",
  },
  {
    flag: "us",
    country: "United States",
    name: "CFPB United States",
    items: [
      "ECOA Reg B adverse action notice",
      "CFPB Circular 2023-03 explainability",
      "Disparate impact testing",
      "Fair Credit Reporting Act (FCRA)",
    ],
    retention: "5 yr retention",
  },
  {
    flag: "au",
    country: "Australia",
    name: "APRA Australia",
    items: [
      "CPS 234 AI model inventory",
      "CPS 230 audit trail for critical ops",
      "Board-level AI governance",
      "Post-deployment monitoring",
    ],
    retention: "7 yr retention",
  },
];

export const legalCards = [
  { title: "OJK AI Governance — Indonesia", tag: "Guidance mapped (2025)", body: "Aligns with OJK's 2025 AI governance guidance for banks (non-binding) and POJK No. 11/POJK.03/2022's binding IT-governance and retention rules." },
  { title: "MAS FEAT — Singapore", tag: "Principles mapped", body: "Checks Fairness, Ethics, Accountability, and Transparency on every financial AI decision." },
  { title: "EU AI Act — Articles 9–17", tag: "Articles mapped", body: "Article 12 automatic logging and Article 13 plain-language explanations on every decision." },
  { title: "VARA 2024 — UAE", tag: "Framework mapped", body: "VARA 2024 AI & Technology Governance Framework requirements fully implemented." },
  { title: "FCA — United Kingdom", tag: "Framework mapped", body: "SYSC 3 explainability, SM&CR senior-manager accountability, PS 22/3 bias testing, and SR 11/9 model documentation implemented." },
  { title: "CFPB — United States", tag: "Circulars mapped", body: "ECOA Regulation B, CFPB Circulars 2022-03 & 2023-03, and Fair Credit Reporting Act adverse-action requirements implemented." },
  { title: "APRA — Australia", tag: "Standards mapped", body: "CPS 234 information security, CPS 230 operational risk, and ASIC's 2026 AI Governance Letter requirements implemented." },
];

export const faqItems = [
  { q: "Is AIDAL a law firm? Does using it make us legally compliant?", a: <>No. AIDAL provides <strong>technical audit infrastructure</strong> — tamper-proof logs, cryptographic proofs, and automatic compliance field-checking based on the actual regulation text. Confirm full compliance with a licensed lawyer.</> },
  { q: "Will AIDAL audit logs be accepted as evidence in regulatory proceedings?", a: <>AIDAL produces cryptographically verifiable records — the same SHA-256 hash chain structure used in blockchain forensics accepted by financial regulators globally. The log is <strong>independently verifiable</strong> by any third party without relying on AIDAL&apos;s servers. Whether a specific regulator in a specific proceeding accepts it depends on jurisdiction; consult a licensed compliance lawyer. The cryptographic proof is substantively stronger than a database printout.</> },
  { q: "Does AIDAL have access to our AI model's data or decision logic?", a: <>No. You control what you send to AIDAL. The API accepts the <strong>output and metadata</strong> of your AI decisions — not your model weights, training data, or internal logic. You can pseudonymise customer identifiers before sending. We never have access to your underlying model or its training data.</> },
  { q: "How does AIDAL interact with our existing data governance framework?", a: <>AIDAL is a <strong>lightweight append-only logger</strong> — it sits downstream of your model and upstream of your compliance team. It does not replace your data warehouse, model registry, or DPO processes. Most teams integrate it in one afternoon without touching existing infrastructure.</> },
  { q: "Can we self-host AIDAL for data sovereignty requirements?", a: <><strong>Yes — on the Enterprise plan.</strong> We offer an on-premise deployment option for organisations with data residency requirements (e.g. Indonesia POJK data localisation, EU data sovereignty mandates). Contact us at anthony@tryaidal.com to discuss your requirements.</> },
  { q: "What happens if AIDAL shuts down?", a: <>Nothing. Every day AIDAL publishes a master hash to a <strong>public GitHub repository</strong> independent of AIDAL&apos;s servers. Your records can be cryptographically verified forever, even if AIDAL disappears.</> },
  { q: "We already log decisions in our database. Why AIDAL?", a: <>Your database can be edited — a regulator knows this. AIDAL&apos;s SHA-256 hash chain makes tampering <strong>mathematically detectable</strong>. It also adds AI explanations, compliance checking, and a regulator-ready PDF.</> },
  { q: "Does the hash chain prove every decision was logged, or just that logged decisions weren't altered?", a: <>Just the latter, today. The hash chain makes it <strong>mathematically detectable</strong> if a decision that was submitted to AIDAL is later altered or deleted — that&apos;s tamper-evidence, not completeness. It does not currently prove your system sent AIDAL every decision it made. If you need submission-completeness guarantees — reconciling your internal decision count against AIDAL&apos;s logged count — talk to us; reconciliation reporting is on our roadmap.</> },
  { q: "Who audits AIDAL itself — SOC 2, penetration testing, bug bounty?", a: <>Honest answer: not yet, beyond what&apos;s below. <strong>True today:</strong> daily SHA-256 anchors published to a <a href="https://github.com/widjajaanthony24-svg/aidal-anchors" target="_blank" rel="noopener" className="underline underline-offset-2">public GitHub log</a>, AES-256 encryption at rest, TLS 1.3 in transit, and per-tenant data isolation — see our <a href="/security.html" className="underline underline-offset-2">Security page</a>. <strong>Roadmap, not done:</strong> a SOC 2 audit of AIDAL&apos;s own infrastructure, an independent penetration test, and a bug bounty program. (Our AI subprocessor, Groq, holds SOC 2 Type II — that covers Groq, not AIDAL.) We&apos;ll update this the day any of those change.</> },
  { q: "How long does integration actually take?", a: <><strong>Under 30 minutes.</strong> One API call after your model runs. No SDK, no infrastructure. <a href="https://aidal-production.up.railway.app/docs" target="_blank" rel="noopener" className="underline underline-offset-2">API docs →</a></> },
  { q: "We're not regulated yet. Should we still use AIDAL?", a: <>Regulation is coming. Retrofitting an audit trail after a regulator asks for it is significantly harder. Beta is free. The cost of starting today is zero.</> },
];

export const pricingTiers = [
  {
    label: "Free",
    price: "$0",
    unit: "forever · 1,000 decisions/month",
    integration: "→ Integrate in 30 minutes",
    features: ["Full API access", "AI-generated explanations", "Tamper-proof audit log", "7 jurisdiction modules", "Public verify page"],
    cta: "Get API key free",
    featured: false,
  },
  {
    label: "Starter",
    price: "$299",
    unit: "per month · 50,000 decisions",
    integration: "→ Integrate in 30 minutes",
    features: ["Everything in Free", "Compliance dashboard", "Human oversight tracking", "Model registry", "Email support"],
    cta: "Get started",
    featured: false,
  },
  {
    label: "Professional",
    price: "$2,500",
    unit: "per month · 500,000 decisions",
    integration: "→ Integrate in 30 minutes",
    features: ["Everything in Starter", "Regulator-ready PDF reports", "Fairness detection", "Incident reporting", "Priority support + SLA"],
    cta: "Get started",
    featured: true,
  },
  {
    label: "Enterprise",
    price: "Custom",
    unit: "unlimited · white-label · SOC2",
    integration: "→ Dedicated onboarding",
    features: ["Everything in Professional", "White-label deployment", "On-premise option", "Custom jurisdiction modules", "Dedicated team"],
    cta: "Contact us",
    featured: false,
    href: "mailto:anthony@tryaidal.com?subject=AIDAL%20Enterprise",
  },
];

export const comparisonRows = [
  { label: "Integration time", aidal: "30 minutes", alt: "6–12 months", altSub: "Engineering + legal + QA" },
  { label: "Cost", aidal: "From $0/mo", alt: "$50k–$200k+", altSub: "Initial build, ongoing maintenance" },
  { label: "Proof type", aidal: "Cryptographic hash", alt: "Database record", altSub: "Editable, not independently verifiable" },
  { label: "Explainability", aidal: "AI-generated, per decision", alt: "Manual write-up", altSub: "Per incident, not per decision" },
  { label: "Jurisdiction compliance", aidal: "7 modules live", alt: "Hire a lawyer per region", altSub: "MAS FEAT ≠ OJK ≠ EU AI Act" },
  { label: "Regulator PDF", aidal: "One-click download", alt: "Custom built", altSub: "Months of compliance ops work" },
];
