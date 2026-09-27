// TODO: replace with the real scheduling link used by the "Book a demo" CTA.
export const CONTACT_HREF = "mailto:hello@newron.ai";

// Customers only. Programs and partners are listed separately so the proof row isn't inflated.
export const customers = [
  "Aditya Birla Capital",
  "Fedbank",
  "HDFC Credila",
  "Niwas",
  "Fusion",
  "Government of Karnataka",
];

export const partners = ["NVIDIA Inception", "Google", "IISc"];

export type Team = "Credit" | "Insurance" | "Public sector" | "Documents" | "Compliance";

export type Agent = {
  id: string;
  mark: string;
  name: string;
  job: string;
  team: Team;
  tools: string[];
  scopes: string[];
  approval: string;
  proof?: string;
};

// First-party agents, built from Newron's shipping products.
export const agents: Agent[] = [
  {
    id: "cam-writer",
    mark: "CW",
    name: "CAM Writer",
    job: "Drafts the credit appraisal memo from the full application file.",
    team: "Credit",
    tools: ["LOS", "DMS", "Bureau"],
    scopes: ["read:application", "write:cam-draft"],
    approval: "Credit officer sign-off",
    proof: "3 weeks of review → 40-min QC",
  },
  {
    id: "statement-analyst",
    mark: "SA",
    name: "Statement Analyst",
    job: "Parses bank statements into balances, obligations and red flags.",
    team: "Credit",
    tools: ["DMS", "Account Aggregator"],
    scopes: ["read:statements"],
    approval: "Auto, flags to reviewer",
    proof: "12 months parsed in < 60s",
  },
  {
    id: "applicant-360",
    mark: "A3",
    name: "Applicant 360°",
    job: "Resolves every party, entity and relationship on a loan file.",
    team: "Credit",
    tools: ["LOS", "Bureau", "MCA"],
    scopes: ["read:application", "read:bureau"],
    approval: "Auto, flags to reviewer",
  },
  {
    id: "claims-filer",
    mark: "CF",
    name: "Claims Filer",
    job: "Checks eligibility and files the claim with every document attached.",
    team: "Insurance",
    tools: ["Policy admin", "DMS", "Email"],
    scopes: ["read:policy", "write:claim"],
    approval: "Claims handler sign-off",
    proof: "Claims filed in < 90s",
  },
  {
    id: "denial-risk",
    mark: "DR",
    name: "Denial Risk Scorer",
    job: "Predicts denial risk before submission and names the missing evidence.",
    team: "Insurance",
    tools: ["Policy admin", "Claims history"],
    scopes: ["read:claim"],
    approval: "Advisory only",
  },
  {
    id: "grievance-triage",
    mark: "GT",
    name: "Grievance Triage",
    job: "Routes citizen grievances in Kannada and English to the right department.",
    team: "Public sector",
    tools: ["Grievance portal", "SMS"],
    scopes: ["read:grievance", "write:routing"],
    approval: "Officer review on escalation",
  },
  {
    id: "artha-extract",
    mark: "AX",
    name: "Artha Extract",
    job: "Classifies and extracts fields, tables and stamps from Indian financial documents.",
    team: "Documents",
    tools: ["DMS", "SFTP", "API"],
    scopes: ["read:documents"],
    approval: "Auto",
    proof: "≈⅛ the cost of frontier models",
  },
  {
    id: "policy-chat",
    mark: "PC",
    name: "Policy Chat",
    job: "Answers credit and ops questions with citations to your current policy.",
    team: "Compliance",
    tools: ["Policy library", "Slack", "Teams"],
    scopes: ["read:policy-library"],
    approval: "Cited answers only",
  },
];

// TODO: confirm the connector list with the platform team before launch.
export const integrations = [
  { group: "Lending", items: ["Loan origination (LOS)", "Loan management", "Credit bureaus", "Account Aggregator"] },
  { group: "Insurance", items: ["Policy administration", "Claims systems", "TPA portals"] },
  { group: "Documents", items: ["DMS", "SharePoint", "SFTP drops", "Email inboxes"] },
  { group: "Work", items: ["Slack", "Microsoft Teams", "Ticketing", "SMS"] },
];

export const protocols = ["REST API", "MCP", "Webhooks", "SFTP"];
