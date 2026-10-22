# Phase 07 report: Offer catalog and publishing

## Status

Status: BLOCKED / partial implementation.

The catalog boundary remains typed and fail-closed. The admin visual experience now has a marketplace-aligned workspace, protected state screens, company review surface, import conflict review, and a future-post extension point. Production catalog activation remains blocked because the real Sheet schema, persistence provider, and exact authorized identity subjects are not verified.

## Implemented

- Marketplace-aligned admin preview at `/admin/preview` using clearly labelled synthetic records.
- Login, unauthorized, and expired-session states at `/admin/login`, `/admin/unauthorized`, and `/admin/session-expired`.
- Company list, status badges, search surface, dashboard counts, import dry-run metrics, conflict warning, and future Posts boundary.
- Real `/admin` route remains server-side fail-closed and unlinked from public navigation.

## Verification

- `npm.cmd run typecheck`: passed.
- `npm.cmd run lint`: passed.
- `npm.cmd run build`: passed; 22 routes generated.
- `git diff --check`: passed.
- No live catalog data, Sheet rows, production credentials, or admin identity allowlist were exposed.

## Blocking dependencies

1. Read-only access to the supplied workbook and gid `1480331144`.
2. Actual identity-provider session contract and exactly two immutable approved subject IDs.
3. Authoritative catalog persistence configuration; no second candidate database should be created.

Synthetic fixtures and importer tests can proceed after the repository test harness and persistence contract are selected. Production catalog activation remains disabled.
