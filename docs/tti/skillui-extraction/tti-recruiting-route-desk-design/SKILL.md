---
name: TTI Recruiting Route Desk-design
description: Design system skill for TTI Recruiting Route Desk. Activate when building UI components, pages, or any visual elements. Provides exact color tokens, typography scale, spacing grid, component patterns, and craft rules. Read references/DESIGN.md before writing any CSS or JSX.
---

# TTI Recruiting Route Desk Design System

You are building UI for **TTI Recruiting Route Desk**. Light-themed, neutral palette, sans-serif typography (sans-serif), compact density on a 4px grid, flat elevation (no shadows), expressive motion.

## Design Philosophy

- **Solid colors only** — no gradients anywhere. Every surface is a single flat color.
- **Single typeface** — sans-serif carries all text. Hierarchy comes from size, weight, and color — never font mixing.
- **compact density** — 4px base grid. Every dimension is a multiple of 4.
- **neutral palette** — the color temperature runs neutral, matching the sans-serif typography.
- **Expressive motion** — animations are an integral part of the experience. Use spring physics and layout animations.
- **Lucide icons** — use Lucide for all iconography. Do not mix icon libraries.

## Color System

### Core Palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Background | `--background` | `#ffffff` | Page/app background |

### CSS Variable Tokens

```css
--color-background: var(--background);
--color-foreground: var(--foreground);
--color-primary: var(--primary);
--color-primary-foreground: var(--primary-foreground);
--color-secondary: var(--secondary);
--color-secondary-foreground: var(--secondary-foreground);
--color-muted: var(--muted);
--color-muted-foreground: var(--muted-foreground);
--color-accent: var(--accent);
--color-accent-foreground: var(--accent-foreground);
--color-destructive: var(--destructive);
--color-card: var(--card);
--color-card-foreground: var(--card-foreground);
--color-popover: var(--popover);
--color-popover-foreground: var(--popover-foreground);
--color-border: var(--border);
--color-sidebar-border: var(--sidebar-border);
--color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
--color-sidebar-accent: var(--sidebar-accent);
--color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
```

## Typography

### Font Stack

- **sans-serif** — Heading 1, Heading 2, Heading 3, Body, Caption

### Type Scale

| Role | Family | Size | Weight |
|------|--------|------|--------|
| Heading 1 | sans-serif | clamp(3.6rem,8vw,8.5rem) | 700 |
| Heading 2 | sans-serif | clamp(3rem,5vw,5.4rem) | 700 |
| Heading 3 | sans-serif | clamp(1.8rem,3vw,3rem) | 700 |
| Body | sans-serif | 1.3rem | 400 |
| Caption | sans-serif | 1rem | 400 |

### Typography Rules

- All text uses **sans-serif** — never add another font family
- Max 3-4 font sizes per screen
- Headings: weight 600-700, body: weight 400
- Use color and opacity for text hierarchy, not additional font sizes
- Line height: 1.5 for body, 1.2 for headings

## Spacing & Layout

### Base Grid: 4px

Every dimension (margin, padding, gap, width, height) must be a multiple of **4px**.

### Spacing Scale

`2, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28` px

### Spacing as Meaning

| Spacing | Use |
|---------|-----|
| 4-8px | Tight: related items (icon + label, avatar + name) |
| 12-16px | Medium: between groups within a section |
| 24-32px | Wide: between distinct sections |
| 48px+ | Vast: major page section breaks |

### Border Radius

Scale: `8px, 12px, 999px`
Default: `12px`

### Container

Max-width: `1120px`, centered with auto margins.

## Component Patterns

### Card

```css
.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
}
```

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

### Button

```css
/* Primary */
.btn-primary {
  background: #cccccc;
  color: #cccccc;
  border-radius: 12px;
  padding: 8px 16px;
  font-weight: 500;
  transition: opacity 150ms ease;
}
.btn-primary:hover { opacity: 0.9; }

/* Ghost */
.btn-ghost {
  background: transparent;
  border: 1px solid #cccccc;
  color: #cccccc;
  border-radius: 12px;
  padding: 8px 16px;
}
```

```html
<button class="btn-primary">Get Started</button>
<button class="btn-ghost">Learn More</button>
```

### Input

```css
.input {
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 12px;
  padding: 8px 12px;
  color: #cccccc;
  font-size: 14px;
}
.input:focus { border-color: var(--accent); outline: none; }
```

```html
<input class="input" type="text" placeholder="Search..." />
```

### Badge / Chip

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  background: #ffffff;
  color: #6b7280;
}
```

```html
<span class="badge">New</span>
<span class="badge">Beta</span>
```

### Modal / Dialog

```css
.modal-backdrop { background: rgba(0, 0, 0, 0.6); }
.modal {
  background: #ffffff;
  border-radius: 999px;
  padding: 24px;
  max-width: 480px;
  width: 90vw;
}
```

```html
<div class="modal-backdrop">
  <div class="modal">
    <h2>Dialog Title</h2>
    <p>Dialog content.</p>
    <button class="btn-primary">Confirm</button>
    <button class="btn-ghost">Cancel</button>
  </div>
</div>
```

### Table

```css
.table { width: 100%; border-collapse: collapse; }
.table th {
  text-align: left;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 12px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #cccccc;
}
.table td {
  padding: 12px;
  border-bottom: 1px solid #cccccc;
}
```

```html
<table class="table">
  <thead><tr><th>Name</th><th>Status</th><th>Date</th></tr></thead>
  <tbody>
    <tr><td>Item One</td><td>Active</td><td>Jan 1</td></tr>
    <tr><td>Item Two</td><td>Pending</td><td>Jan 2</td></tr>
  </tbody>
</table>
```

### Navigation

```css
.nav {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
}
.nav-link {
  color: #6b7280;
  padding: 8px 12px;
  border-radius: 12px;
  transition: color 150ms;
}
```

```html
<nav class="nav">
  <a href="/" class="nav-link active">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/pricing" class="nav-link">Pricing</a>
  <button class="btn-primary" style="margin-left: auto">Get Started</button>
</nav>
```

### Extracted Components

These components were found in the codebase:

**ContentPage** (`src/components/site/content-page.tsx`)
- Props: `eyebrow`, `title`, `intro`, `children`
- Styles: `bg-[var(--paper)]`, `border-b`, `mx-auto`, `text-[var(--ink)]`

**V3Faq** (`src/components/site/v3-faq.tsx`)
- Styles: `bg-paper-deep`, `border-b`, `mx-auto`, `text-ink`

**V3Footer** (`src/components/site/v3-footer.tsx`)
- Styles: `bg-paper`, `border-t`, `mx-auto`, `text-ink`

**V3Home** (`src/components/site/v3-home.tsx`)

**V3PageHeader** (`src/components/site/v3-page-header.tsx`)
- Styles: `border-y`, `mx-auto`, `font-ledger`

**V3QuickApply** (`src/components/site/v3-quick-apply.tsx`)
- Variants: `No`, `Open`, `Company`, `W2`, `Yes`, `Resolved`, `Lease`, `1099`
- Props: `control`, `name`
- Styles: `bg-ink`, `border-t`, `gap-2`, `text-paper`

**V3SiteNav** (`src/components/site/v3-site-nav.tsx`)
- Styles: `bg-paper`, `border-b`, `mx-auto`, `text-ink`

**Accordion** (`src/components/ui/accordion.tsx`)
- Styles: `rounded-lg`, `py-2.5`, `text-sm`

**Badge** (`src/components/ui/badge.tsx`)
- Variants: `variant`, `default`, `hover`, `secondary`, `destructive`, `visible`, `dark`, `outline`, `ghost`, `link`
- Props: `variant`
- Styles: `rounded-4xl`, `gap-1`, `text-xs`

**Button** (`src/components/ui/button.tsx`)
- Variants: `variant`, `default`, `hover`, `outline`, `expanded`, `dark`, `secondary`, `ghost`, `destructive`, `visible`, `link`, `size`
- Props: `variant`, `size`, `className`
- Styles: `bg-clip-padding`, `rounded-lg`, `text-sm`

## Animation & Motion

This project uses **expressive motion**. Animations are part of the design language.

### CSS Animations

- `v3-mask-down`
- `v3-mask-up`
- `v3-fade-out`
- `v3-up-in`
- `v3-grow`

### Motion Tokens

- **Duration scale:** `200ms`
- **Easing functions:** `ease`
- **Animated properties:** `color`

### Motion Guidelines

- **Duration:** Use values from the duration scale above. Short (200ms) for micro-interactions, long (200ms) for page transitions
- **Easing:** Use `ease` as the default easing curve
- **Direction:** Elements enter from bottom/right, exit to top/left
- **Reduced motion:** Always respect `prefers-reduced-motion` — disable animations when set

## Dark Mode

This project supports **light and dark mode** via CSS variables.

### Token Mapping

| Variable | Light | Dark |
|----------|-------|------|
| `--background` | `oklch(0.965 0.008 92)` | `oklch(0.16 0.008 45)` |
| `--foreground` | `oklch(0.19 0.008 40)` | `oklch(0.94 0.006 90)` |
| `--card` | `oklch(1 0 0)` | `oklch(0.2 0.008 45)` |
| `--card-foreground` | `oklch(0.19 0.008 40)` | `oklch(0.94 0.006 90)` |
| `--popover` | `oklch(1 0 0)` | `oklch(0.2 0.008 45)` |
| `--popover-foreground` | `oklch(0.19 0.008 40)` | `oklch(0.94 0.006 90)` |
| `--primary` | `var(--hazard-deep)` | `var(--hazard)` |
| `--secondary` | `oklch(0.92 0.008 90)` | `oklch(0.27 0.01 45)` |
| `--secondary-foreground` | `oklch(0.24 0.008 40)` | `oklch(0.94 0.006 90)` |
| `--muted` | `oklch(0.93 0.006 90)` | `oklch(0.25 0.008 45)` |
| `--muted-foreground` | `oklch(0.45 0.01 50)` | `oklch(0.68 0.01 60)` |
| `--accent` | `oklch(0.92 0.012 80)` | `oklch(0.28 0.02 45)` |
| `--accent-foreground` | `oklch(0.24 0.015 30)` | `oklch(0.94 0.006 90)` |
| `--destructive` | `oklch(0.55 0.2 24)` | `oklch(0.6 0.2 24)` |
| `--border` | `oklch(0.86 0.01 85)` | `oklch(0.28 0.008 45)` |

### Implementation

- Toggle via `.dark` class on `<html>` or `[data-theme="dark"]`
- Always use CSS variables for colors — never hardcode hex values
- Test both modes for contrast and readability

## Depth & Elevation

This design uses **flat elevation** — no box-shadows anywhere.

### Elevation Strategy

| Level | Technique | Use |
|-------|-----------|-----|
| 0 — Base | Background color | Page background |
| 1 — Raised | Lighter surface + subtle border | Cards, panels |
| 2 — Floating | Even lighter surface + stronger border | Dropdowns, popovers |
| 3 — Overlay | Backdrop + modal surface | Modals, dialogs |

### Z-Index Scale

`1, 5`

Use these exact values — never invent z-index values.

## Anti-Patterns (Never Do)

- **No box-shadow** on any element — use borders and surface colors for depth
- **No gradients** — solid colors only, everywhere
- **No zebra striping** — tables and lists use borders for separation
- **No invented colors** — every hex value must come from the palette above
- **No arbitrary spacing** — every dimension is a multiple of 4px
- **No extra fonts** — only sans-serif are allowed
- **No arbitrary border-radius** — use the scale: 8px, 12px, 999px
- **No opacity for disabled states** — use muted colors instead
- **No pill shapes** — this design doesn't use rounded-full / 9999px radius

## Workflow

1. **Read** `references/DESIGN.md` before writing any UI code
2. **Pick colors** from the Color System section — never invent new ones
3. **Set typography** — sans-serif only, using the type scale
4. **Build layout** on the 4px grid — check every margin, padding, gap
5. **Match components** to patterns above before creating new ones
6. **Apply elevation** — flat, surface color shifts only
7. **Validate** — every value traces back to a design token. No magic numbers.

## Brand Spec

- **Brand typeface:** sans-serif

## Quick Reference

```
Background:     #ffffff
Surface:        (not extracted)
Text:           (not extracted) / (not extracted)
Accent:         (not extracted)
Border:         (not extracted)
Font:           sans-serif
Spacing:        4px grid
Radius:         12px
Frameworks:     Tailwind CSS, React, Next.js
Icons:          Lucide
Components:     19 detected
```

## When to Trigger

Activate this skill when:
- Creating new components, pages, or visual elements for TTI Recruiting Route Desk
- Writing CSS, Tailwind classes, styled-components, or inline styles
- Building page layouts, templates, or responsive designs
- Reviewing UI code for design consistency
- The user mentions "TTI Recruiting Route Desk" design, style, UI, or theme
- Generating mockups, wireframes, or visual prototypes

---

# Full Reference Files

> Every output file is embedded below. Claude has full design system context from /skills alone.

## Design System Tokens (DESIGN.md)

# TTI Recruiting Route Desk DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: Tailwind CSS 4 + React 19.2.8 + Next.js 16.3.5
> Colors: 1 · Fonts: 1 · Components: 19
> Icon library: Lucide · State: not detected
> Primary theme: light · Dark mode toggle: yes · Motion: expressive

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a neutral, approachable feel. The light background emphasizes content clarity. Typography uses **sans-serif** throughout — a clean, modern choice that maintains consistency. Spacing follows a **4px base grid** (compact density), with scale: 2, 8, 10, 12, 14, 16, 18, 20px. Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| background | `#ffffff` | background | Page background, darkest surface |

### Dark Mode Token Mapping

| Variable | Light | Dark |
|---|---|---|
| `--background` | `oklch(0.965 0.008 92)` | `oklch(0.16 0.008 45)` |
| `--foreground` | `oklch(0.19 0.008 40)` | `oklch(0.94 0.006 90)` |
| `--card` | `oklch(1 0 0)` | `oklch(0.2 0.008 45)` |
| `--card-foreground` | `oklch(0.19 0.008 40)` | `oklch(0.94 0.006 90)` |
| `--popover` | `oklch(1 0 0)` | `oklch(0.2 0.008 45)` |
| `--popover-foreground` | `oklch(0.19 0.008 40)` | `oklch(0.94 0.006 90)` |
| `--primary` | `var(--hazard-deep)` | `var(--hazard)` |
| `--secondary` | `oklch(0.92 0.008 90)` | `oklch(0.27 0.01 45)` |
| `--secondary-foreground` | `oklch(0.24 0.008 40)` | `oklch(0.94 0.006 90)` |
| `--muted` | `oklch(0.93 0.006 90)` | `oklch(0.25 0.008 45)` |
| `--muted-foreground` | `oklch(0.45 0.01 50)` | `oklch(0.68 0.01 60)` |
| `--accent` | `oklch(0.92 0.012 80)` | `oklch(0.28 0.02 45)` |
| `--accent-foreground` | `oklch(0.24 0.015 30)` | `oklch(0.94 0.006 90)` |
| `--destructive` | `oklch(0.55 0.2 24)` | `oklch(0.6 0.2 24)` |
| `--border` | `oklch(0.86 0.01 85)` | `oklch(0.28 0.008 45)` |
| `--input` | `oklch(0.86 0.01 85)` | `oklch(0.28 0.008 45)` |
| `--ring` | `var(--hazard)` | `oklch(0.6 0.16 27)` |
| `--sidebar` | `oklch(0.965 0.008 92)` | `oklch(0.16 0.008 45)` |
| `--sidebar-foreground` | `oklch(0.19 0.008 40)` | `oklch(0.94 0.006 90)` |
| `--sidebar-primary` | `var(--hazard-deep)` | `var(--hazard)` |

### CSS Variable Tokens

```css
--color-background: var(--background);
--color-foreground: var(--foreground);
--color-primary: var(--primary);
--color-primary-foreground: var(--primary-foreground);
--color-secondary: var(--secondary);
--color-secondary-foreground: var(--secondary-foreground);
--color-muted: var(--muted);
--color-muted-foreground: var(--muted-foreground);
--color-accent: var(--accent);
--color-accent-foreground: var(--accent-foreground);
--color-destructive: var(--destructive);
--color-card: var(--card);
--color-card-foreground: var(--card-foreground);
--color-popover: var(--popover);
--color-popover-foreground: var(--popover-foreground);
--color-border: var(--border);
--color-sidebar-border: var(--sidebar-border);
--color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
--color-sidebar-accent: var(--sidebar-accent);
--color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
```


---

## 3. Typography Rules

**Font Stack:**
- **sans-serif** — Heading 1, Heading 2, Heading 3, Body, Caption

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | sans-serif | clamp(3.6rem,8vw,8.5rem) | 700 |
| Heading 2 | sans-serif | clamp(3rem,5vw,5.4rem) | 700 |
| Heading 3 | sans-serif | clamp(1.8rem,3vw,3rem) | 700 |
| Body | sans-serif | 1.3rem | 400 |
| Caption | sans-serif | 1rem | 400 |

**Typographic Rules:**
- Use **sans-serif** for all text — do not mix font families
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Layout (2)

**V3PageHeader** — `src/components/site/v3-page-header.tsx`
- Key Styles: `border-y`, `mx-auto`, `text-xs`, `font-ledger`

```tsx
<div className="mx-auto w-full max-w-[1440px] px-4 pb-10 pt-10 sm:px-6 lg:px-10 lg:pt-14">
      <div className="flex items-center justify-between border-y border-ink/20 py-3 font-ledger text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint">
        <p>The Dispatch</p>
        <p className="hidden sm:inline">Hiring desk</p>
        <p>Kansas City, MO</p>
      </div>
      <p className="mt-8 font-ledger text-xs font-semibold uppercase tracking-[0.3em] text-signal-deep">
        {kicker}
      </p>
      <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.8rem,6.5vw,6.5rem
```

**Button** — `src/components/ui/button.tsx`
- Variants: `variant`, `default`, `hover`, `outline`, `expanded`, `dark`, `secondary`, `ghost`, `destructive`, `visible`, `link`, `size`
- Props: `variant`, `size`, `className`
- Key Styles: `rounded-lg`, `bg-clip-padding`, `text-sm`, `font-medium`, `select-none`
- Animation: tw-transitions: transition-all

```tsx
<Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }
```

### Navigation (5)

**ContentPage** — `src/components/site/content-page.tsx`
- Props: `eyebrow`, `title`, `intro`, `children`
- Key Styles: `rounded-full`, `border-[var(--ink)]/15`, `bg-[var(--paper)]`, `mx-auto`, `text-xl`, `font-[var(--vd-display)]`, `hover:text-[var(--signal-deep)]`

```tsx
<main className="min-h-screen bg-[var(--paper
```

**V3Faq** — `src/components/site/v3-faq.tsx`
- Key Styles: `border-ink/15`, `bg-paper-deep`, `mx-auto`, `text-xs`, `font-ledger`, `group-hover:text-signal-deep`
- Animation: tw-animate-accordion-down, tw-animate-accordion-up, tw-animate-none

```tsx
<section
      id="faq"
      className="v3-sheet scroll-mt-16 border-b border-ink/15 bg-paper-deep text-ink"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-14 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-28">
        <div className="lg:col-span-5">
          <p className="v3-word font-ledger text-xs font-semibold uppercase tracking-[0.3em] text-signal-deep">
            FAQ
          </p>
          <h2
            id="faq-heading"
```

**V3Footer** — `src/components/site/v3-footer.tsx`
- Key Styles: `border-ink/15`, `bg-paper`, `mx-auto`, `text-3xl`, `font-display`, `hover:text-signal-deep`
- Animation: tw-transitions: transition-colors

```tsx
<footer className="border-t border-ink/15 bg-paper text-ink">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-8 pt-14 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <p className="flex items-baseline gap-3">
              <span className="block h-4 w-2 bg-signal-deep" aria-hidden="true" />
              <span className="font-display text-3xl uppercase leading-none">
                {BRAND.shortName}
              </span>
            </p>
            <p className="mt-3 font-ledger text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-faint">
              {BRAND.tagline}
```

**V3Home** — `src/components/site/v3-home.tsx`

```tsx
<main className="route-desk">
      <section className="route-hero">
        <header className="route-header">
          <Link href="/" className="route-logo" aria-label="TTI Recruiting home"><span className="route-logo-mark">TTI</span><span className="route-logo-copy">Recruiting</span></Link>
          <nav className="route-nav" aria-label="Primary navigation"><Link href="/jobs">Opportunities</Link><Link href="/how-it-works">How it works</Link><Link href="/faq">Questions</Link><Link href="/contact" className="route-nav-cta">Talk with a recruiter <span aria-hidden>↗</span></Link></nav>
          <details className="route-mobile-menu"><summary aria-label="Open navigation menu"><span aria-hidden>Menu</span><span aria-hidden>+</span></summary><nav aria-label="Mobile navigation"><Link href="/jobs">Opportunities</Link><Link href="/how-it-works">How it works</Link><Link href="/faq">Questions</Link><Link href="/contact">Talk with a recruiter</Link></nav></details>
        </header>

        <div className="route-hero-grid"><div className="route-hero-copy"><p className="route-kicker"><span className="route-kicker-dot" aria-hidden />The driver desk / U.S. market</p><h1>Find the lane that fits <em>your life.</em></h1><p className="route-hero-intro">TTI Recruiting helps CDL-A drivers understand real next steps — from the kind of work you want to the application that actually fits.</p><div className="route-actions"><Link href="/jobs" className="route-button route-button-primary">Explore opportunities <span aria-hidden>↗</span></Link><Link href="/contact" className="route-button route-button-quiet">Talk with a recruiter</Link></div><p className="route-fine-print">TTI is the recruiter/intermediary. The hiring carrier makes the final employment decision.</p></div><div className="route-hero-board" aria-label="The route desk at a glance"><div className="route-board-top"><span>Route desk</span><span>01 / 03</span></div><div className="route-board-line" aria-hidden /><div className="route-board-main"><span className="route-board-label">Start with what matters</span><strong>Home time</strong><span className="route-board-arrow" aria-hidden>→</span></div><div className="route-board-facts"><span>Experience</span><span>Equipment</span><span>Employment path</span></div><div className="route-board-footer"><span>One clear next step</span><span aria-hidden>✦</span></div></div></div>
        <div className="route-hero-rail" aria-hidden><span /><span /><span /><span /></div><div className="route-hero-meta"><span>OTR</span><span>Regional</span><span>Local</span><span>Dedicated</span></div>
      </section>
```

**V3SiteNav** — `src/components/site/v3-site-nav.tsx`
- Key Styles: `border-ink/15`, `bg-paper`, `mx-auto`, `text-2xl`, `font-display`
- Animation: tw-transitions: transition-colors
- State: useState, useRef

### Data Display (3)

**Accordion** — `src/components/ui/accordion.tsx`
- Key Styles: `rounded-lg`, `py-2.5`, `text-sm`, `font-medium`, `pointer-events-none`
- Animation: tw-animate-accordion-down, tw-animate-accordion-up, tw-transitions: transition-all

```tsx
<AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className
```

**Badge** — `src/components/ui/badge.tsx`
- Variants: `variant`, `default`, `hover`, `secondary`, `destructive`, `visible`, `dark`, `outline`, `ghost`, `link`
- Props: `variant`
- Key Styles: `rounded-4xl`, `gap-1`, `text-xs`, `font-medium`
- Animation: tw-transitions: transition-all

```tsx
<Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }
```

**Card** — `src/components/ui/card.tsx`
- Variants: `default`, `sm`
- Key Styles: `rounded-xl`, `bg-card`, `gap-(--card-spacing)`, `text-sm`, `font-heading`, `group-data-[size=sm]/card:text-sm`

```tsx
<div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-(--card-spacing
```

### Data Input (6)

**V3QuickApply** — `src/components/site/v3-quick-apply.tsx`
- Variants: `No`, `Open`, `Company`, `W2`, `Yes`, `Resolved`, `Lease`, `1099`
- Props: `control`, `name`
- Key Styles: `border-paper/25`, `bg-ink`, `gap-2`, `text-xs`, `font-ledger`, `hover:text-paper`
- Animation: tw-transitions: transition-colors, transition-transform, hover-transforms
- State: useState, react-hook-form

```tsx
<div role="radiogroup" className="flex flex-wrap gap-2">
      {options.map((opt
```

**Checkbox** — `src/components/ui/checkbox.tsx`
- Key Styles: `rounded-[4px]`, `border-input`, `group-has-disabled/field:opacity-50`
- Animation: tw-transitions: transition-colors, transition-none

```tsx
<CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 group-has-[:focus-visible]/field-label:ring-0 group-has-[:focus-visible]/field-label:not-data-checked:border-input after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-primary dark:data-checked:bg-primary",
        className
```

**Input** — `src/components/ui/input.tsx`
- Key Styles: `rounded-lg`, `border-input`, `bg-transparent`, `px-2.5`, `text-base`, `disabled:pointer-events-none`
- Animation: tw-transitions: transition-colors

```tsx
<input
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
```

**RadioGroup** — `src/components/ui/radio-group.tsx`
- Key Styles: `rounded-full`, `border-input`, `bg-primary-foreground`, `gap-2`, `group-has-[:focus-visible]/field-label:ring-0`

```tsx
<RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid w-full gap-2", className
```

**Select** — `src/components/ui/select.tsx`
- Variants: `sm`, `default`
- Key Styles: `rounded-lg`, `border-input`, `bg-transparent`, `p-1`, `text-sm`, `shadow-md`, `pointer-events-none`
- Animation: tw-animate-none, tw-animate-in, tw-animate-out

```tsx
<SelectPrimitive.Group
      data-slot="select-group"
      className={cn("scroll-my-1 p-1", className
```

**Textarea** — `src/components/ui/textarea.tsx`
- Key Styles: `rounded-lg`, `border-input`, `bg-transparent`, `px-2.5`, `text-base`, `disabled:cursor-not-allowed`
- Animation: tw-transitions: transition-colors

```tsx
<textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
```

### Overlay (1)

**Sheet** — `src/components/ui/sheet.tsx`
- Variants: `top`, `right`, `bottom`, `left`
- Key Styles: `bg-black/10`, `gap-4`, `text-sm`, `font-heading`, `shadow-lg`
- Animation: tw-animate-in, tw-animate-out, tw-transitions: duration-100, duration-200, ease-in-out

```tsx
<SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
```

### Typography (1)

**Label** — `src/components/ui/label.tsx`
- Key Styles: `gap-2`, `text-sm`, `font-medium`, `select-none`

```tsx
<LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
```

### Other (1)

**Separator** — `src/components/ui/separator.tsx`
- Key Styles: `bg-border`

```tsx
<SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className
```



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28
- **Border radius:** 8px, 12px, 999px
- **Max content width:** 1120px
- **Container:** Tailwind `container` class with responsive padding

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

No box-shadow values detected. The design appears to use a flat visual style.

**Z-Index Scale:** `1, 5`


---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes v3-mask-down`
- `@keyframes v3-mask-up`
- `@keyframes v3-fade-out`
- `@keyframes v3-up-in`
- `@keyframes v3-grow`
- `@keyframes v3-photo-parallax`
- `@keyframes animate-accordion-down`
- `@keyframes animate-accordion-up`

### Animated Components

- **V3Faq**: tw-animate-accordion-down, tw-animate-accordion-up, tw-animate-none
- **V3Footer**: tw-transitions: transition-colors
- **V3QuickApply**: tw-transitions: transition-colors, transition-transform, hover-transforms
- **V3SiteNav**: tw-transitions: transition-colors
- **Accordion**: tw-animate-accordion-down, tw-animate-accordion-up, tw-transitions: transition-all

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#ffffff` as the primary page background
- Use **sans-serif** for all UI text
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use border and background shifts for elevation — not shadows
- Use border-radius from the scale: 8px, 12px, 999px
- Reuse existing components from Section 4 before creating new ones
- Use **Lucide** for all icons
- Always use CSS variables for colors — never hardcode hex
- Test both light and dark modes for contrast

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't mix font families — use sans-serif consistently
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't add box-shadow — this design system uses flat elevation
- Don't use gradients — the design uses solid colors only
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't mix icon libraries — consistency matters

### Anti-Patterns (detected from codebase)

- No box-shadow on any element
- No gradient backgrounds
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

No breakpoints detected. Consider adding responsive breakpoints to the design system.

---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #ffffff
Border: 1px solid var(--border)
Radius: 12px
Padding: 16px
Font: sans-serif
No shadows — use borders and surface colors for depth.
```

### Build a Button

```
Primary: bg var(--accent), text white
Ghost: bg transparent, border var(--border)
Padding: 8px 16px
Radius: 12px
Hover: opacity 0.9 or lighter shade
Focus: ring with var(--accent)
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 1120px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #ffffff
Label: var(--text-muted) (muted, 12px, uppercase)
Value: var(--text-primary) (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid var(--border)
Focus: border-color var(--accent)
Label: var(--text-muted) 12px
Spacing: 16px between fields
Radius: 12px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: sans-serif, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: flat, surface shifts
```

