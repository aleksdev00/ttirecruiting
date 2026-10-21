# Configuration contract

## Public

- `NEXT_PUBLIC_SITE_URL`: canonical site URL.
- `NEXT_PUBLIC_FULL_APPLICATION_URL`: existing W-2 application handoff URL; still requires contract verification.

## Server-only

- `TTI_AUTH_PROVIDER`: configured identity provider name; absence keeps admin access disabled.
- `TTI_ADMIN_SUBJECT_IDS`: comma-separated immutable subject IDs for exactly Aleksa and the owner; do not use emails/domains.
- `TTI_CATALOG_DATABASE_URL`: authoritative catalog store connection; absence prevents catalog writes.
- `TTI_CATALOG_SOURCE_READ_TOKEN`: server-only read credential for the Sheet/export adapter if required.
- `TTI_INTAKE_STAGING_ENDPOINT`: staging sink for synthetic preview intake only.

All server-only values must stay out of client bundles, URLs, screenshots, analytics, and chat. Missing mandatory production configuration fails closed; optional integrations must show an honest unavailable state.
