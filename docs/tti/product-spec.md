# Product specification

## Product promise

TTI Recruiting helps CDL-A drivers understand available driving opportunities and enter the correct next step. TTI is a recruiter/intermediary; the hiring carrier makes the employment decision. Public copy must never imply that TTI itself guarantees hiring, pay, placement, or approval.

## Conversion vocabulary

| Event | Meaning | Public receipt rule |
| --- | --- | --- |
| Explore | Driver views a published offer or filters the catalog. | No candidate record required. |
| Contact request | Driver asks TTI to contact them. | Confirm only after durable storage. |
| Application start | Driver is handed to the existing W-2 application or begins an approved recruiter-assisted 1099 intake. | Never call this completed. |
| Draft saved | An authorized system has safely stored an incomplete application. | Show resume/recovery only if the real system supports it. |
| Completed application | The authoritative application system confirms all required fields/documents. | Do not infer from a click or email. |
| Qualified review | Recruiter/carrier reviews eligibility. | Private operational state. |
| Notification | An approved internal recipient receives a durable notification event. | Email success alone is insufficient. |
| Carrier submission | An authorized downstream transfer is accepted. | Never perform automatically without contract and authorization. |
| Placement | Carrier confirms hire/placement. | Private and outside public conversion claims. |

## Visitor journeys

| Visitor | Question | Primary action | Recovery |
| --- | --- | --- | --- |
| Mobile/referral lead | What work might fit me? | Find a driving job -> `/jobs` | Talk with a recruiter -> `/contact` |
| Ready W-2 driver | Where do I complete the application? | Start W-2 application -> verified external DriverApp | Explain handoff and return to `/contact` if unavailable |
| 1099 driver | Can someone walk me through it? | Request recruiter help -> `/contact?type=1099` | No public document upload; recruiter follow-up path |
| No-match driver | What if no offer fits? | Request a conversation -> `/contact` | Preserve selected filters without claiming a match |
| Returning driver | How do I continue? | Existing application link or recruiter contact | Do not create a duplicate application |
| Partner carrier | How can I discuss recruiting support? | `/for-carriers` when approved | Use `/contact` until carrier page is maintained |

## Launch scope

Must-have: homepage, maintained offer catalog/detail pages, clear W-2/1099 routing, contact request, existing application handoff, privacy/terms, accessible loading/error/empty/expired states, and private two-person company/offer CRUD plus controlled Sheet import review/publish flow.

Next: referral token preservation, durable contact/application event storage, staging notification recovery, import conflict resolver, audit log, and public catalog freshness indicators.

Deferred: full blog/editor, public driver accounts, AI chat, carrier auto-forwarding, duplicate applicant database, automated document collection, and broad admin roles.

## Admin product states

Required screens: login, loading, expired session, unauthorized, dashboard, company list/search/filter, company editor, offer editor, import preview/conflict review, publish/unpublish, archive confirmation, archive list/restore, unsaved changes, concurrent edit conflict, success/error/pending save. Future Posts is shown only in documentation, not as a dead clickable control.

## Success criteria

Success means a driver can understand TTI's role, select a real next step, avoid an incorrect W-2/1099 route, and receive only a truthful confirmation. Catalog success means an approved administrator can safely stage, review, publish, unpublish, archive, and restore company offers without source reimports erasing local decisions.
