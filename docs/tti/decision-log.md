# Decision log

| ID | Decision | Basis | Status |
| --- | --- | --- | --- |
| ADR-01 | Retain Next.js App Router. | Existing repository already has Next.js routes, typed handlers, and client/server boundaries; migration adds risk without measured benefit. | Accepted for discovery |
| ADR-02 | Treat the supplied Sheet as read-only source, not public authority. | Prompt-pack contract requires controlled staging and admin-approved application catalog. | Accepted |
| ADR-03 | Separate Company and Offer entities and preserve import provenance/history. | A company may have multiple offers and publication states; row position is not durable identity. | Accepted for design |
| ADR-04 | Do not activate admin access until exactly two immutable identity subjects are verified. | Admin specification forbids guessed emails, domain-wide access, or generic admin roles. | Blocking production |
| ADR-05 | Do not claim quick-apply completion until durable storage exists. | Current adapter only validates and returns NOT_CONFIGURED. | Accepted |
| ADR-06 | W-2 and 1099 flows remain distinct; Lease stays unapproved until offer/routing facts are verified. | Project brief and current schema are not a verified routing contract. | Open for UX/content |
