// TODO: replace with the real scheduling link used by the "Talk to us" CTA.
export const CONTACT_HREF = "mailto:hello@newron.ai";

// Content mirrors newron.ai. Customers are kept separate from partners so the proof row isn't inflated.
export const customers = ["Aditya Birla Capital", "HDFC Credila", "Fedbank", "Niwas", "Fusion", "Government of Karnataka"];

export const partners = ["NVIDIA", "Google", "IISc", "Walmart", "Sattva", "Artpark"];

export const lending = {
  commercial: ["Loan against property", "Overdraft", "Gold loan", "Equipment finance", "Revenue-based finance", "Line of credit"],
  consumer: ["Home loan", "Auto loan", "Loan against securities", "Personal loan", "Education loan", "Credit card"],
  modules: [
    { t: "CAM Generation", d: "Compose Credit Approval Memos in your bank's format, with deviation flags and policy citations." },
    { t: "Statement Analyser", d: "12 months of bank statements parsed in under 60 seconds." },
    { t: "Applicant 360°", d: "Every signal, every covenant, every prior decision — on one screen." },
    { t: "Video PD", d: "Hold the personal discussion over video — face and address verified." },
    { t: "Policy Chat", d: "Underwriters ask, Newron answers — sourced from your policy book." },
  ],
};

export const artha = {
  claims: [
    { n: "3×", l: "Up to 3× faster" },
    { n: "≈⅛", l: "the cost of frontier models" },
    { n: "Frontier", l: "comparable accuracy" },
    { n: "Self-host", l: "Licensable and self-hostable" },
  ],
  capabilities: [
    {
      t: "Classification",
      v: "5 files → 6 docs",
      d: "Filenames are noise, and one PDF can hold four documents. Artha names each one and splits the batch.",
    },
    {
      t: "Extraction",
      v: "0-shot · no templates",
      d: "Reads the fields credit actually underwrites on — issuer, period, balances, identifiers — from scans, phone photographs and regional-language forms.",
    },
    {
      t: "Party mapping",
      v: "4 parties resolved",
      d: "Resolves every party in the file and attaches each document to the right one.",
    },
  ],
};

export const insurance = [
  { t: "Eligibility check", d: "Policy retrieval + document understanding flags missing artefacts and ineligible claims at intake." },
  { t: "Automated claim filing", d: "Forms, supporting documents and metadata assembled into TPA-ready packets in under 90 seconds." },
  { t: "Denial risk & remediation", d: "Predicts likely denial reasons against historical adjudication data; suggests remediation pre-emptively." },
];

export const governance = ["Custom OCR · Kannada", "Regional TTS", "Grievance triage", "Policy discovery"];

export const services = [
  {
    t: "Custom AI engineering",
    d: "We sit inside your team to design data pipelines, eval harnesses and the inference path. Scope to production in 8–12 weeks.",
  },
  { t: "Custom foundational models", d: "When off-the-shelf models won't do the job, we build them." },
  { t: "Business automation with AI", d: "Document workflows, ops tooling, and customer-facing copilots." },
];
