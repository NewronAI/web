import about from "./about";
import banks from "./banks";
import careers from "./careers";
import customAiEngineering from "./custom-ai-engineering";
import governanceAi from "./governance-ai";
import industryInsurance from "./industry-insurance";
import insuranceAi from "./insurance-ai";
import lendingIntelligence from "./lending-intelligence";
import nbfcs from "./nbfcs";
import openSource from "./open-source";
import press from "./press";
import privacy from "./privacy";
import publicSector from "./public-sector";
import responsibleAi from "./responsible-ai";
import security from "./security";
import terms from "./terms";
import type { PageContent } from "./types";

// Every inner page, keyed by its URL slug.
export const pages: Record<string, PageContent> = Object.fromEntries(
  [
    lendingIntelligence,
    insuranceAi,
    governanceAi,
    customAiEngineering,
    banks,
    nbfcs,
    industryInsurance,
    publicSector,
    about,
    careers,
    press,
    openSource,
    security,
    responsibleAi,
    privacy,
    terms,
  ].map((p) => [p.slug, p]),
);
