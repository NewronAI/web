// TODO: replace with the real scheduling link used by the "Talk to us" CTA.
export const CONTACT_HREF = "mailto:hello@newron.ai";

// Content mirrors newron.ai, trimmed for scanning. Customers are kept separate from partners.
export const customers = ["Aditya Birla Capital", "HDFC Credila", "Fedbank", "Niwas", "Fusion", "Government of Karnataka"];

export const partners = ["NVIDIA", "Google", "IISc", "Walmart", "Sattva", "Artpark"];

export const lendingModules = [
  { id: "cam", t: "CAM Generation", s: "Memos in your bank's format, with deviation flags." },
  { id: "statements", t: "Statement Analyser", s: "12 months of statements in under 60 seconds." },
  { id: "applicant", t: "Applicant 360°", s: "Every signal and covenant on one screen." },
  { id: "video", t: "Video PD", s: "Personal discussion over video, face and address verified." },
  { id: "policy", t: "Policy Chat", s: "Answers sourced from your policy book." },
] as const;

export type LendingModuleId = (typeof lendingModules)[number]["id"];

export const artha = {
  // n: "eighth" renders the ≈1/8 figure with <Eighth />.
  claims: [
    { n: "3×", l: "faster than frontier" },
    { n: "eighth", l: "the cost per document" },
    { n: "0-shot", l: "no templates" },
  ],
  capabilities: [
    { t: "Classify", v: "5 files → 6 docs" },
    { t: "Extract", v: "fields, tables, stamps" },
    { t: "Map parties", v: "4 parties resolved" },
  ],
};

export const insurance = [
  { t: "Check", s: "Missing artefacts caught at intake" },
  { t: "File", s: "TPA-ready packets in < 90s" },
  { t: "Predict", s: "Likely denials fixed before filing" },
];

export const governance = ["Kannada handwriting OCR", "Regional text-to-speech", "Grievance triage", "Policy discovery"];

export const services = [
  { t: "Custom AI engineering", s: "Pipelines, evals and inference, built inside your team.", icon: "code" },
  { t: "Custom foundational models", s: "When off-the-shelf models won't do the job.", icon: "layers" },
  { t: "Business automation", s: "Document workflows, ops tooling and copilots.", icon: "flow" },
] as const;
