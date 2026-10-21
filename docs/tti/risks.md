# Risks and blockers

| Risk | Severity | Impact | Owner / next action | Status |
| --- | --- | --- | --- | --- |
| No durable intake persistence or delivery provider | Critical | Leads can be validated but are not safely accepted or delivered | Implement/confirm authoritative store and staging delivery contract | Open |
| Sheet access and schema unavailable | Critical | Cannot validate or publish company offers | Provide read access or XLSX/CSV export; inspect gid 1480331144 | Blocked |
| Exact admin identity subjects unavailable | Critical | Production admin activation cannot be authorized safely | Verify immutable provider subject IDs for Aleksa and owner | Blocked |
| Public/DriverApp routes inaccessible from session | High | W-2 handoff and current route boundaries unverified | Provide authorized access or inspect from a reachable environment | Open |
| Current quick-apply exposes Lease and 1099 without verified routing | High | Driver may be sent into an incorrect process | Reconcile route contract before activating copy | Open |
| npm audit reports 13 findings | High | Dependency supply-chain risk | Review advisories and upgrade in a dedicated change | Open |
| No browser visual QA capability | Medium | Rendered responsive/accessibility verification incomplete | Restore browser skill or use authorized external preview workflow | Blocked |
