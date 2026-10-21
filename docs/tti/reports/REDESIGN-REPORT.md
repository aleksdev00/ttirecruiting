# Public redesign report

## Direction

The former editorial “dispatch” homepage was replaced with a route-desk composition: near-black hero, signal-red action color, large type-led hierarchy, route taxonomy, application-path cards, process steps, and an explicit catalog refresh state. The design makes the driver’s decision visible before asking for an application.

## Skill use

`pro-design` was applied for brand-first review, pattern selection, token reuse, motion/reduced-motion behavior, accessible focus states, and the browser verification checklist. The provided SkillUI CLI was built from source and used to scan this repository; its generated extraction is preserved under `docs/tti/skillui-extraction/`. A global npm install was blocked by the environment's `esbuild` postinstall spawn failure.

## Verification

Typecheck, lint, and production build pass. Browser rendering at 1440px and 390px remains outstanding because the browser skill failed to bootstrap. No image-generation asset was added because no approved authentic TTI photography or visual proof was available.
