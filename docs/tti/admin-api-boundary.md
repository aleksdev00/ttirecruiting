# Admin API boundary

`/api/admin/catalog/import-preview` is intentionally fail-closed. The current
route proves the boundary behavior without exposing the synthetic fixture or
the private Sheet source.

Before implementation can return a preview, the server must:

1. Resolve a session through the approved identity provider.
2. Pass the verified immutable subject ID to `authorizeAdminSubject`.
3. Confirm the subject is one of the two configured approved identities.
4. Run the controlled read-only import preview with no browser credentials.
5. Return only sanitized preview metadata and field-level conflict values.

The route must remain `no-store`, must not accept a subject ID from request
parameters, and must not fetch the Google Sheet on behalf of anonymous users.
