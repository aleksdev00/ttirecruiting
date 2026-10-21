# Public and admin redesign report

## Direction

Two concise directions were considered using the same content:

1. A photo-led highway landing page with a large search module.
2. A route-desk interface built around route fit, home time, employment path, and a clear handoff.

Direction 2 was selected because the source sheet is not currently available for verified public offers, and it keeps the product honest while still giving drivers a confident path forward. The public homepage now uses a near-black hero, signal-red action color, type-led hierarchy, route taxonomy, application-path cards, process steps, and an explicit catalog refresh state.

## Skill use

`pro-design` was applied for brand-first review, pattern selection, token reuse, motion/reduced-motion behavior, accessible focus states, and the browser verification checklist. React best-practices guidance was read and applied to the route components, App Router boundaries, and icon usage. The SkillUI CLI was built from source and used to scan this repository; its generated extraction is preserved under `docs/tti/skillui-extraction/`. The named `skillui` Codex skill is unavailable in the installed catalog; the CLI is a separate tool and is documented separately.

## Implemented

- Reworked the public homepage around a driver-first route desk and the exact primary CTA `Find My Next Driving Job`.
- Added responsive opportunities filters and explicit unavailable/no-match catalog states.
- Added an opportunity detail state for closed, expired, or unavailable links.
- Added a responsive synthetic admin preview covering dashboard, companies, import review, and auth boundary messaging. It is not connected to live data or authorization.
- Removed duplicate legacy navigation and footer from the redesigned homepage and content routes.

## Changed files

- `src/components/site/v3-home.tsx`
- `src/components/site/v3-site-nav.tsx`
- `src/components/site/v3-footer.tsx`
- `src/app/(site)/jobs/page.tsx`
- `src/app/(site)/jobs/[slug]/page.tsx`
- `src/app/admin/preview/page.tsx`

## Verification

Typecheck, lint, `git diff --check`, production build, and local HTTP checks pass for `/`, `/jobs`, `/jobs/example`, `/apply`, `/how-it-works`, `/faq`, `/admin`, and `/admin/preview`. The homepage HTML was checked for duplicate legacy chrome and the old CTA; neither remained.

Browser screenshot rendering at 1440px and 390px remains outstanding: the in-app browser failed to bootstrap, and the installed Playwright npm wrapper did not produce a usable browser session. No real-device test was performed. No image-generation asset was added because no approved authentic TTI photography or visual proof was available.

## Limitations and next actions

The public catalog remains intentionally unavailable until the Google Sheet schema and approval workflow are connected. `/admin/preview` is a visual design fixture only; `/admin` remains fail-closed until exact authorized subject IDs and a real session provider are configured. Next phase should wire the catalog read model, admin authorization, import conflict review, and browser screenshot QA.
