# System map and trust boundaries

```text
Driver browser
  | public pages / no candidate field values in analytics
  v
Next.js public routes and server route handlers
  | validate + normalize
  | durable accepted event required before receipt
  +--> W-2: verified handoff to existing DriverApp (external, unverified)
  +--> 1099: recruiter-assisted private workflow (external, unverified)

Approved administrators only
  | exact two immutable identity subjects; server authorization on every request
  v
Private /admin + catalog/import APIs
  | dry-run diff, conflicts, audit events, archive suppression
  v
Application-managed catalog / sanitized public projection
  ^
  | read-only controlled import; never write back
Google Sheet source (unverified access; gid 1480331144)
```

Trust boundaries: public browser to server; server to external DriverApp; admin identity to private APIs; private Sheet source to validated staging; internal catalog to public projection. Candidate records, source-private Sheet fields, auth allowlists, and service credentials must not cross into public responses or bundles.
