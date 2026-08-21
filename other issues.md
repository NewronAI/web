The site has strong domain knowledge, but too much of the apparent depth comes from repeating the same metrics, deployment claims, FAQs, and anonymous testimonials. The highest-value fix is to reduce repetition and attach evidence to every quantitative or trust claim.

## Site-wide priorities

1. **Stop repeating the same proof.** The 66% TAT, 200% productivity, 65k hours, 40-minute CAM quote, insurance quote, and Karnataka quote appear across multiple pages. Publish one canonical case study for each and link to it.

2. **Qualify every metric.** Add baseline, sample size, workflow, measurement period, and source. “200% productivity uplift” is especially ambiguous.

3. **Treat anonymous quotes carefully.** A role and industry are insufficient when the same quote appears repeatedly. Name the customer with permission or add deployment scope, date, and a real case-study link.

4. **Differentiate solution and industry pages.**
   - Solution pages: product mechanics, integrations, inputs, evaluation and limitations.
   - Industry pages: buyer concerns, implementation path, compliance and industry-specific outcomes.

5. **Remove generic enterprise-AI language:** “SOTA,” “frontier-grade,” “hardest problem,” “built for regulated buyers,” “the controls your team expects,” and “production systems” add little unless followed by evidence.

6. **Clarify relationship and certification labels.** Customer names, NVIDIA status, ISO status and SOC 2 status are currently presented inconsistently.

## Page-by-page review

### Homepage

[components/home.tsx](/Users/shubham/WebstormProjects/web/components/home.tsx:102)

- Replace “& many more” in the hero—it weakens an otherwise focused proposition.
- Suggested lead: “Newron builds auditable AI for Indian lenders, insurers and public agencies—automating underwriting, claims and citizen-service workflows inside their infrastructure.”
- “Posting success stories at” suggests every marquee organisation is a customer. Use “Selected customers and collaborators” and label each relationship accurately.
- The simulated product interfaces use “LIVE,” realistic IDs and confidence scores. Label them “Illustrative workflow” unless they are genuine anonymised examples.
- Artha’s “frontier-grade” and “≈1/8 the cost” claims need a benchmark link, model comparison, dataset and cost basis. [components/home.tsx](/Users/shubham/WebstormProjects/web/components/home.tsx:483)
- “Read the case study” points to `#`. Publish the study or remove the CTA. [components/home.tsx](/Users/shubham/WebstormProjects/web/components/home.tsx:715)
- “See Newron on your data, in a week” conflicts with the quarter-long production timelines elsewhere. Call it a “one-week evaluation” and separately state the typical production timeline.

### Lending Intelligence

[app/lending-intelligence/page.tsx](/Users/shubham/WebstormProjects/web/app/lending-intelligence/page.tsx:35)

- “The credit officer’s second brain” is familiar AI copy. Replace with the actual outcome: “Turn application files into a cited, decision-ready CAM.”
- “Built for products you actually originate” adds attitude, not information. Use “Commercial and consumer products supported today.”
- The metrics need a named or anonymised case-study scope, not “what teams see in production.”
- The testimonial is reused on the homepage and NBFC page. Keep it once and link to the underlying study.
- “Within striking distance of frontier systems” should be replaced with task-level accuracy, benchmark methodology and cost per document.

### Banks

[app/banks/page.tsx](/Users/shubham/WebstormProjects/web/app/banks/page.tsx:17)

- “AI that respects the regulator” is broad. Better: “Policy-cited credit workflows that run inside your bank’s environment.”
- KYC, reconciliation and RM copilots are listed without examples or results. Add one demonstrated workflow for each or remove the unsupported breadth.
- Lending metrics are described as covering “credit and operations deployments.” Scope them precisely; otherwise they imply evidence across all three use cases.
- The security section largely repeats the Security page. Keep two bank-specific requirements—maker-checker and policy overrides—and link to the full security pack.

### NBFCs

[app/nbfcs/page.tsx](/Users/shubham/WebstormProjects/web/app/nbfcs/page.tsx:17)

- “The same suite that powers banks” does not explain why it fits NBFCs. Replace it with product onboarding, co-lending audit, branch consistency and thin-file evaluation details.
- “Thin-file friendly” and “tuned for Indian thin-file lending” need validation data or a description of the signals and fallback behaviour.
- The same CAM quote appears here, on Lending and on the homepage. Use one case study.
- “Pilot on a slice of your live pipeline” conflicts with the Terms page’s warning against live regulated data in evaluations. Use “historical, de-identified files” unless a production-data agreement is in place.

### Insurance AI

[app/insurance-ai/page.tsx](/Users/shubham/WebstormProjects/web/app/insurance-ai/page.tsx:17)

- “Settle claims before they’re filed” is memorable but logically misleading. Better: “Catch eligibility and denial issues before filing.”
- A median denial-risk score of `0.18` is not an outcome without calibration context. Replace it with avoidable-denial reduction, precision/recall, or claims correctly escalated.
- “4.2d settlement SLA” needs to say whether it is a target or measured result and show the prior baseline.
- “Generalising to other lines” is speculative. Say which lines are validated, in pilot, or planned.
- The testimonial and most FAQs are duplicated on the Insurance industry page.

### Insurance industry

[app/industry-insurance/page.tsx](/Users/shubham/WebstormProjects/web/app/industry-insurance/page.tsx:17)

- This page is too close to Insurance AI. Remove the duplicated pipeline, metrics, quote and FAQs.
- Rebuild it around industry buyers: claims operations, underwriting, TPA integration, privacy, implementation sequence and line-specific coverage.
- Keep a single outcome section, but use insurer-specific economics such as handling cost, straight-through rate, reopen rate and avoidable denials.

### Governance AI

[app/governance-ai/page.tsx](/Users/shubham/WebstormProjects/web/app/governance-ai/page.tsx:18)

- “22+ dialects supported” conflicts with the FAQ saying Kannada is in production and other languages are architectural extensions. State exactly what is production, piloted and experimental.
- `04:12` is ambiguous: four minutes twelve seconds or 4.12 seconds. Write `4 min 12 sec`.
- “Newron removes both” language and literacy barriers is absolute. Say it “reduces reliance on English-language forms.”
- The Karnataka quote is repeated on the Public Sector page. Keep it with a fuller deployment story in one place.

### Public Sector

[app/public-sector/page.tsx](/Users/shubham/WebstormProjects/web/app/public-sector/page.tsx:17)

- This is effectively a second Governance AI page. Differentiate it around procurement, data-centre deployment, accessibility, officer accountability and phased rollout.
- “Reach everyone” and “language is never the barrier” are absolutes. Replace with measurable accessibility coverage.
- “100% cases audit-logged” is a system property, not an impact metric. Present it under controls and use an operational outcome in the metric band.
- The “single grievance category” pilot CTA is specific and valuable—keep it.

### Custom AI Engineering

[app/custom-ai-engineering/page.tsx](/Users/shubham/WebstormProjects/web/app/custom-ai-engineering/page.tsx:17)

- “Ex-research and ex-platform engineers” is generic without organisations, publications, systems shipped or team profiles.
- Replace “SOTA,” “frontier,” and “1/8 cost” with a representative evaluation table.
- Clarify IP language: “You own it” and “models are licensed to you” are legally different.
- “How small a problem is worth an engagement?” receives a non-answer. Give a minimum duration, scope, team requirement or budget range.
- The anonymous eleven-week testimonial needs a case-study link or more implementation detail.

### About

[app/about/page.tsx](/Users/shubham/WebstormProjects/web/app/about/page.tsx:10)

- The hero repeats the homepage’s “wrong answers have consequences” narrative.
- Replace some philosophy with evidence: founders, team size, relevant experience, deployment count, research, offices and customer categories.
- “3 live practice areas” is a taxonomy, not an achievement. “2023 NVIDIA Inception” is also weak as a headline metric. Replace both with operating scale.
- Remove the quote attributed to “The Newron team.” A self-authored testimonial adds no proof.
- The history needs specific milestones and scale, not only new product categories.

### Careers

[app/careers/page.tsx](/Users/shubham/WebstormProjects/web/app/careers/page.tsx:40)

- The opening has personality, but “the work is hard, the stakes are real” is generic recruiting language.
- Add team size, reporting structure, working hours expectations, office model, stack and examples of recent work.
- Every role currently links to the generic contact form. Each needs a job description and a role-specific application route.
- Clarify how the paid working exercise is compensated and how long it takes.
- “Get in touch” should become “Apply with your work” and specify required materials.

### Open Source

[app/open-source/page.tsx](/Users/shubham/WebstormProjects/web/app/open-source/page.tsx:38)

- Three repository entries point only to the GitHub organisation root rather than their named repository. Link the actual repo or remove the entry.
- Show licence, release status, last release and maintenance status on every project card.
- “Give back to the stack” and “the rent we pay” are familiar open-source clichés. Replace with what Newron maintains and what contributors can expect.
- “Typically MIT or Apache” is vague; state the exact licence per project.

### Press

[app/press/page.tsx](/Users/shubham/WebstormProjects/web/app/press/page.tsx:40)

- Announcements all link to the contact form instead of an announcement.
- “In the press” cards have no outlet, author, date or external URL. Do not present them as coverage without those details; otherwise relabel them as “Suggested story angles.”
- “Download press kit” only scrolls to a section. Provide a real ZIP or change it to “View press resources.”
- Company boilerplate and imagery cards also route to contact. Make assets directly downloadable.
- Provide a dedicated media email rather than a generic sales form.

### Security

[app/security/page.tsx](/Users/shubham/WebstormProjects/web/app/security/page.tsx:31)

- Highest-priority credibility issue: the section says “Independently checked,” every card says “Certified,” but the copy says ISO-aligned and SOC 2 is in progress. Use exact statuses and remove “Certified” where untrue. [app/security/page.tsx](/Users/shubham/WebstormProjects/web/app/security/page.tsx:53)
- Replace “strong encryption,” “regular review” and “risk-based schedule” with precise standards and cadences—only where verified.
- Absolute claims such as “we never see it” and “hold no copy” need documented exceptions for support access, logs, telemetry and backups.
- Responsible disclosure needs an actual security email, acknowledgement target and remediation communication process.

### Responsible AI

[app/responsible-ai/page.tsx](/Users/shubham/WebstormProjects/web/app/responsible-ai/page.tsx:25)

- The “wrong answer” and “I’m not sure” idea is repeated in the hero, principles, prose, FAQ, About and Press.
- Keep the principle once; use the remaining space for evidence: evaluation reports, model cards, abstention thresholds, fairness metrics and incident handling.
- The principles, long-form content and FAQs restate one another. Remove the FAQ or make it answer operational questions not covered above.
- “Owned by the same people who build the systems” may weaken the governance message. Explain independent review, approval authority and escalation.
- “We test for disparate impact” needs methodology, groups evaluated, cadence and reporting.

### Privacy

[app/privacy/page.tsx](/Users/shubham/WebstormProjects/web/app/privacy/page.tsx:25)

- “Handled the way we’d want ours to be” and “written to be read, not just filed” are pleasant but low-value. Lead immediately with scope and data categories.
- “Reviewed periodically and deleted when no longer relevant” is too vague. Add retention periods by category.
- List actual service-provider categories or link to a maintained subprocessor list.
- Give a privacy email and expected response period rather than only a general contact page.
- Keep customer-deployment claims aligned with the qualified language on the Security page.

### Terms

[app/terms/page.tsx](/Users/shubham/WebstormProjects/web/app/terms/page.tsx:25)

- “The agreement, in plain language” is generic; the lead beneath it already communicates the useful distinction.
- The hero lead, lede and Acceptance section repeat the same point. Combine them.
- Provide a legal contact email rather than a general sales/contact route.
- Ensure the “live regulated data” restriction is consistent with CTAs elsewhere that offer pilots on live pipelines.
- Legal counsel should validate the substantive provisions; this review only addresses clarity and duplication.

## Recommended editing order

1. Correct certification/status language and unsupported proof claims.
2. Fix broken or placeholder case-study, press, repository and career links.
3. Consolidate the three duplicated proof clusters: lending, insurance and government.
4. Differentiate solution pages from industry pages.
5. Tighten the homepage, About and Responsible AI narratives.
6. Make legal and trust pages operationally specific.

No source files were changed during this review.