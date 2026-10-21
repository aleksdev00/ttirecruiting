# TTI visual design system

## Direction

Use the existing industrial-Americana token family: warm paper, charcoal ink, one rubric-red signal, and dispatch-ledger details. The system is designed for quick scanning on mobile and trustworthy explanation before a driver commits to a route.

## Tokens

Existing CSS variables are the source of truth: `--paper`, `--paper-deep`, `--ink`, `--ink-soft`, `--ink-muted`, `--hazard`, `--hazard-deep`, `--signal`, and `--signal-deep`. Do not introduce a second accent hue. Use `--vd-display`/Anton for display, `--font-archivo` for interface text, Inter as fallback/support, and IBM Plex Mono for operational metadata.

Layout tokens: max content width 1180px; mobile page padding 20px; tablet 32px; desktop 48px; section rhythm 64px mobile / 96px desktop; controls min-height 44px; border radius uses the existing 0.5rem base and modest variants. Keep shadows quiet and use borders/surfaces for hierarchy.

## Component variants

- Navigation: default, scrolled, mobile-open, focus-visible.
- CTA: signal primary, ink secondary, text link, disabled/loading.
- Offer card: available, closed, unknown-field, loading skeleton.
- Fact row: confirmed, unknown, conditional.
- Form: default, focus, invalid, submitting, saved, save-failed.
- Status: draft, published, stale, archived, conflict, unauthorized.
- Empty state: no-match, catalog-unavailable, expired-offer.

## Accessibility and motion

Text/control pairs use the existing deep signal on paper and bright signal on ink; final contrast is still to be checked in a rendered browser. Focus rings use the existing ring token. Use 150-250ms action transitions, one restrained hero entrance, and disable nonessential motion under `prefers-reduced-motion`. Never hide required copy behind animation.
