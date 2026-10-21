# UX and interaction specification

## Design targets

Layouts are specified for 360px and 390px mobile, 768px tablet, and 1440px desktop. These are design targets, not completed device tests.

## Navigation

Desktop: logo, Jobs, How it works, About, FAQ, Contact, and a persistent recruiter CTA. Mobile: logo, menu button with accessible name `Open menu`, and a full-width menu panel with the same links; Escape closes and returns focus to the trigger. No arrival modal or blocking popup.

Jobs use URL filter state such as `/jobs?driverType=regional&employment=W2&homeTime=weekly`. Back restores filter state and scroll position. Detail pages provide breadcrumbs and a visible `Back to opportunities` action. Sticky mobile actions may contain only the current real next step.

## Public wireframes

```text
390 mobile: HOME
┌──────────────────────────┐
│ TTI       [menu]         │
│ FIND A CDL-A JOB THAT    │
│ FITS YOUR EXPERIENCE     │
│ AND HOME TIME.           │
│ [Find my next job]       │
│ [Talk with recruiter]    │
│                         │
│ Choose your next step    │
│ [W-2 application]       │
│ [1099 recruiter help]    │
│                         │
│ Approved opportunities   │
│ [offer card]             │
│ [View all opportunities] │
│                         │
│ 1 Explore  2 Talk  3 Go │
│ FAQ / footer             │
└──────────────────────────┘

390 mobile: JOB RESULTS       390 mobile: JOB DETAIL
┌──────────────────────────┐  ┌──────────────────────────┐
│ Back  Opportunities       │  │ Back  Opportunities       │
│ [filters]                 │  │ REGIONAL / W-2           │
│ 3 confirmed openings     │  │ Carrier / role            │
│ [offer summary]           │  │ Hiring area               │
│ [offer summary]           │  │ Pay basis  Home time      │
│ [offer summary]           │  │ Experience / trailer      │
│ [offer summary]           │  │ Verified date              │
│ no match -> contact       │  │ [Start W-2 application]   │
└──────────────────────────┘  │ [Talk with recruiter]     │
                              │ Conditions / what unknown │
                              └──────────────────────────┘

390 mobile: APPLY ROUTER       390 mobile: CONTACT + RECEIPT
┌──────────────────────────┐  ┌──────────────────────────┐
│ How would you like to    │  │ Talk with a recruiter     │
│ continue?                │  │ Name / phone / preference │
│ [W-2 application]        │  │ consent + privacy         │
│ Existing application     │  │ [Send request]            │
│ [1099 recruiter help]    │  │ Saving... / error         │
│ Recruiter guides intake  │  │ Saved: request recorded   │
│ Never upload documents   │  │ Not a completed application│
└──────────────────────────┘  └──────────────────────────┘
```

Desktop expands the same hierarchy into a two-column results/detail layout at 1440px and a centered form panel at 768px; essential terms remain visible without carousel interaction.

## Admin wireframes

```text
1440 desktop: ADMIN DASHBOARD
┌───────────────┬───────────────────────────────────────────┐
│ TTI Admin     │ Overview                                   │
│ Dashboard     │ [companies] [published offers] [stale]    │
│ Companies     │ Last successful import / errors            │
│ Imports       │ [Add company] [Review import]               │
│ Audit         │                                             │
│ Sign out      │ Company table: status / offers / reviewed  │
└───────────────┴───────────────────────────────────────────┘

390 mobile: COMPANY EDITOR
┌──────────────────────────┐
│ Admin / Company          │
│ Status: Draft   [save]   │
│ Company facts             │
│ Offers                    │
│ Source + local overrides  │
│ [Save draft] [Preview]    │
│ [Publish] [Archive]       │
│ pending / error / conflict│
└──────────────────────────┘
```

Admin screens include login, loading, unauthorized, expired session, unsaved changes, concurrent edit conflict, dry-run import, record-level conflict, apply success/failure, archive confirmation, and restore-with-review states. Future Posts is not a clickable launch control.

## Journey acceptance

1. Facebook/referral entry preserves campaign context in server-controlled state without PII in URLs; driver can browse or contact TTI.
2. Offer-to-apply handoff displays classification and destination before any sensitive data; W-2 leaves for the existing app, 1099 goes to recruiter help.
3. Direct W-2 entry never displays the 1099 document request; direct 1099 entry never starts the long W-2 flow.
4. Returning/resume either uses an existing verified resume contract or explains that no resume feature is available; it never creates a duplicate by accident.
5. No-match and closed-offer paths offer reset/contact, never a fabricated match.
6. Invalid input returns field errors and an error summary without clearing safe input.
7. Failure after save distinguishes durable acceptance from notification/delivery failure and offers retry without duplicate creation.

## Form accessibility

Use visible labels, `autocomplete` tokens, `inputMode="tel"` for phones, native radios/selects where suitable, a linked error summary, `aria-describedby` for field errors, `aria-live="polite"` for pending/confirmed status, and `aria-live="assertive"` only for blocking errors. Focus the first invalid field; preserve input on retry. Consent identifies data recipients and separates contact request from application.

Touch targets are at least 44px where practical. Focus rings remain visible. Layouts reflow at 200% zoom, avoid horizontal scrolling, respect safe areas, and provide reduced-motion behavior.
