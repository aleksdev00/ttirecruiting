# Offer schema and public/private boundary

## Company

Private/internal fields: stable ID, source key, source workbook/gid, source hash/version, imported values, local overrides, conflict state, archive suppression, audit history, private notes, and actor timestamps.

Publicly eligible fields: display name, approved description, approved service area, approved contact route, publication status, and a sanitized list of published offers.

## Offer

Required typed fields: stable ID, company ID, slug, driver type, employment classification (`W2`, `1099`, or `unknown`), solo/team, trailer, hiring area, minimum experience in months, pay amount, pay unit/basis, team split basis where applicable, material conditions, home time, equipment, status, publisher, reviewer, reviewed date, next-review/expiry date, source provenance, and version.

Public fields are only the approved subset of those fields. Private source notes, contact details, payout scripts, internal urgency, matching rules, auth identities, and unreviewed terms never enter the public projection.

Publication rules: drafts may be incomplete; verified published offers must have classification, material pay basis, hiring area, review metadata, and a truthful next step. Archive/unpublish is reversible and suppresses direct public access. Restore never republishes automatically.

## Import/conflict rules

Stable source keys are preferred; fuzzy company-name matches are quarantined. Identical reimports are idempotent. Source changes that conflict with a local edit show source value, last imported value, local value, and the selected result. Missing source rows stage a review action and never hard-delete or resurrect archived records. Failed/empty fetches keep the last known-good public snapshot.

## Future posts boundary

Reserve a Posts module with stable ID, slug, title, excerpt, structured body/format, featured image/alt text, author display, draft/published status, publication/update dates, SEO fields, and future preview/scheduling fields. Reuse the exact two-account authorization/audit primitives. No rich-text editor, media library, scheduling engine, or public blog ships in this scope.
