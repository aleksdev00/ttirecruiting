# Quick Apply delivery boundary

## Current behavior

The public recruiter-contact form validates the lead in the browser and
again at `POST /api/quick-apply`. The server builds a canonical lead shape,
but `deliverQuickApplyLead()` intentionally returns `NOT_CONFIGURED` until a
real delivery and persistence provider is selected.

The UI therefore distinguishes these states:

- **Success:** the configured provider accepted the lead.
- **Pending:** validation succeeded, but delivery is not configured.
- **Error:** validation, network, or provider delivery failed.

The current implementation must not claim that a pending lead was emailed,
stored, or assigned to a recruiter. No public document upload is part of this
flow.

## Activation contract

Before enabling delivery, configure one authoritative provider and document:

1. destination inbox or queue;
2. server-only credentials and environment variable names;
3. persistence/idempotency behavior keyed by `submissionId`;
4. retry and failure handling;
5. retention and deletion policy for contact data;
6. owner notification and operational recovery path.

The adapter should return `{ ok: true, provider }` only after the provider
confirms acceptance. Provider credentials must never be exposed to the client.

## Verification gate

Activation is not complete until a staging submission is traceable from the
API response to the configured destination, duplicate submissions are safe,
and failure recovery is demonstrated. Until then, keep the pending state and
the `501 NOT_CONFIGURED` response.
