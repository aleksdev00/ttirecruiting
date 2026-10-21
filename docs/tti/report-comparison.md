# Research report comparison

The prompt pack identifies both supplied PDFs as historical research inputs dated 21 October 2026. Full page rendering/extraction could not be completed in this environment; the page references below come from the pack's source notes and are retained as evidence pointers, not as a claim of fresh production verification.

| Topic | Report 1: detailed | Report 2: concise | Reconciled implication |
| --- | --- | --- | --- |
| Framework | Detailed implementation baseline; pages 30-34 discuss architecture and integrations. | Recommends a predominantly static Astro frontend; page 3 states limits. | Keep the existing Next.js stack because the repository already has App Router, typed route handlers, and an integrated intake handoff. |
| Public experience | Pages 26-29 cover existing entries, copy, layout, and nine scenarios. | Pages 4-10 cover reference sites, structure, and journeys. | Use the evidence for information architecture and journey coverage, not as proof that current job facts or competitor content are reusable. |
| Reliability | Pages 30-39 cover integrations, privacy, measurement, acceptance, and costs. | Pages 11-14 cover architecture, delivery, measurement, costs, and open questions. | Durable storage, clear receipt semantics, retry/idempotency, and staged integrations are launch requirements. |
| Offer data | Page 26 records historical TTI entries. | Page 23 provides an offer checklist/schema. | Treat all historical offers as unverified. The supplied Sheet and owner-approved catalog must govern publication. |
| Verification gaps | Page 41 lists unresolved verification. | Pages 12-14 preserve open questions and limits. | No claims of mobile QA, current availability, production submission, vendor pricing, or conversion lift are established. |

Shared findings: current offer metadata may be stale; driver journeys need clearer routing; forms and accessibility matter; the existing full DriverApp and shorter inquiry should not be conflated; deployment and intake verification are separate acceptance concerns.

Contradiction: Report 1's integrated Next.js direction and Report 2's static-first Astro recommendation. Repository evidence resolves the choice in favor of retaining Next.js; measured performance and actual integration constraints should still guide later optimization.
