# Phase 01 discovery baseline

Updated: 2026-10-21
Status: PARTIAL

## Repository identity

- Repository: `https://github.com/aleksdev00/ttirecruiting.git`
- Local root: `E:\ttirecruiting_New_website\ttirecruiting`
- Initial branch: `main`
- Discovery branch: `codex/phase-01-discovery`
- Initial HEAD: `40060a5913351655d832630a684262131a80af37` (`fix: make site URL configuration deployment-safe`)
- Working tree before discovery artifacts: clean
- Framework: Next.js `16.3.5`, React `19.2.8`, TypeScript, App Router
- Package manager: npm; `package-lock.json` is present

## Baseline verification

- `npm.cmd install`: completed; npm reported 13 audit findings (1 moderate, 11 high, 1 critical). No automatic remediation was applied.
- `npm.cmd run lint`: passed with no reported errors.
- `npm.cmd run build`: compiled and produced `.next/BUILD_ID`; a concurrent duplicate build invocation then hit Next's build lock. The successful build output was not captured in full, so this is recorded as a partial baseline until rerun cleanly.

## Existing route and integration inventory

Public routes currently present: `/`, `/about`, `/contact`, `/privacy`, `/terms`, plus framework-generated `/robots.txt`, `/sitemap.xml`, and the not-found/error/loading states. No `/jobs`, `/apply`, `/how-it-works`, `/faq`, `/for-carriers`, or `/admin` route exists.

The only application endpoint is `POST /api/quick-apply`. It validates a short lead payload with Zod and builds a canonical lead object. `deliverQuickApplyLead` currently returns `NOT_CONFIGURED`; there is no durable write, email delivery, recruiter assignment, referral persistence, idempotency store, or downstream carrier submission. The UI and API therefore must not claim a completed application or delivered recruiter notification.

The code contains a separate `FULL_APPLICATION_URL` configuration pointing to `https://apply.ttirecruiting.us`. This is a handoff target, not an inspected or verified integration contract.

## W-2 / 1099 / lease reconciliation

The current quick-apply schema offers `Company` vs `Lease` and `W2` vs `1099`. The project brief requires W-2 drivers to use the existing driver application and 1099 drivers to use recruiter-assisted intake with authorized private document handling. The current form/schema has no verified routing contract and may expose Lease without approved current offers. This is a launch-critical decision for later phases.

## Catalog and admin discovery

No catalog persistence, company/offer model, import adapter, auth provider, admin route, or admin API is present in the repository. The supplied Sheet remains the declared initial source:

- Spreadsheet ID: `1wC_EScBRSJOqfS3KFlFlargOlTNT65cOJOhDzEGQ-TE`
- Worksheet gid: `1480331144`
- Mode: read-only controlled import into an application-managed catalog

The Sheet export and public TTI URLs could not be reached from this session. Headers, rows, access method, source key, and actual offer values are therefore unverified. Production admin activation is blocked until the exact immutable identities for Aleksa and the owner are configured and verified.

## Architecture recommendation

Retain the existing Next.js App Router rather than migrate to Astro. The repository already uses server-rendered routes, typed route handlers, and client components; an integrated admin boundary, server authorization, controlled catalog persistence, and existing application handoff benefit from one framework. Do not add a second candidate database. The minimum missing persistence is a catalog/auth/audit store, to be selected after inspecting deployment and existing Supabase configuration.

Recommended flow: public site -> server-validated intake boundary -> durable accepted event -> existing W-2 application handoff or recruiter-assisted 1099 flow. Separately: controlled Sheet import -> validated staging diff -> two-person admin approval -> sanitized public catalog projection. Keep candidate data separate from company catalog data.

## Phase 01 blockers

1. Full PDF text/layout extraction was not completed because Poppler, Python, and the in-app browser fallback were unavailable. The prompt-pack source notes provide page references but are not a substitute for full PDF inspection.
2. The supplied Google Sheet could not be fetched; live schema and mapping remain unknown.
3. Public TTI and DriverApp URLs were not reachable; routing and intake ownership remain unverified.
4. No auth/database/staging integration is present in the repository.
5. Exact two approved immutable auth subject IDs are not available.

Independent implementation can continue with synthetic catalog fixtures and protected-boundary design, but live catalog import and production admin activation must remain disabled.
