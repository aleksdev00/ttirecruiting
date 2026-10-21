# Interaction states

## Offer state machine

`loading -> available | empty | unavailable`

`available -> selected -> published-detail -> apply-handoff`

`published-detail -> closed -> browse-or-contact`

`unverified -> withheld` (never public as a confirmed opening)

Loading skeletons do not claim counts. Empty state includes filter reset and recruiter contact. Unavailable state explains that the catalog is not ready and avoids showing stale-looking offers. Closed detail removes active application actions.

## Intake state machine

`idle -> validating -> submitting -> durably_saved`

`submitting -> validation_error | save_failed | unavailable`

`durably_saved -> notification_pending -> notified | notification_failed`

Only `durably_saved` can show a saved receipt. `notification_failed` keeps the request accepted while exposing an internal recovery state; `save_failed` says nothing was submitted. Retries carry an idempotency key and do not create duplicates.

## Admin state machine

`anonymous -> authenticating -> authorized | unauthorized | expired`

`draft -> saving -> saved -> previewing -> publish_validation -> published`

Any save/publish path may enter `conflict` or `error`; conflict shows server version, local edits, and explicit resolution. `published -> unpublished -> archived -> restore_review -> draft`; restore never silently republishes.

## Scenario-to-test map

| Scenario | Expected state/evidence |
| --- | --- |
| Empty filters | Empty state, reset, contact CTA |
| Closed offer URL | Closed state, no active apply CTA |
| W-2 handoff | Classification + external destination warning |
| 1099 entry | Recruiter-assisted message; no document upload |
| Invalid phone | Inline error + summary; safe fields preserved |
| Save failure | No receipt; retry available |
| Notification failure | Durable receipt plus recoverable internal status |
| Anonymous `/admin` | Unauthorized; no data payload |
| Nonapproved authenticated user | Unauthorized on page and API |
| Duplicate import | Unchanged/idempotent result |
| Local/source conflict | Conflict review; no silent overwrite |
| Archive/reimport | Suppressed record stays absent; restore explicit |
| Two editors | Version conflict, no blind last-write-wins |
