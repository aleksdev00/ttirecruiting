# Catalog import conflict policy

This is the contract for the future controlled Sheet import. It does not
assume the Sheet headers are known and does not authorize live imports.

Each conflict must show:

- the source value from the selected workbook and gid;
- the current local catalog value;
- the last imported value; and
- an explicit resolution: keep local, use source, or quarantine.

Rules:

- Re-importing the same source snapshot is idempotent.
- Local edits are never silently overwritten.
- An archived company or offer is not resurrected by a source row.
- A missing source row is staged for review, not hard-deleted.
- Empty, malformed, inaccessible, or wrong-tab imports retain the last known
  good published snapshot.
- Applying a resolution requires an authorized admin session, a version check,
  an audit event, and an atomic catalog update where supported.

The public projection may expose only reviewed, publishable fields. Raw source
notes, private contacts, recruiter payouts, scripts, and internal urgency stay
inside the protected admin boundary.
