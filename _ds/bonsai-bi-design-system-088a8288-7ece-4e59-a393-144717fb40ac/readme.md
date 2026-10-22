# Bonsai BI Design System

**Bonsai BI** is a Business Intelligence consultancy that helps companies grow through strategic data use — diagnosis, implementation, and measurable results. The brand combines minimalism, precision, and organic growth metaphors (trees, roots, branches).

## Sources

This system was built from a detailed brand brief provided by the client (6 specification documents delivered as text):
1. **Brand Brief** — web specifications, colors, typography
2. **Social Media Strategy** — copy guidelines, hashtags, content pillars
3. **Icon Descriptions** — 25+ generic icons (8 categories) + 6 brand icons
4. **Brand Icons Detail** — 6 brand icons + 8 Instagram variant descriptions
5. **Visual Style Update** — refined icon style with references
6. **Executive Summary** — complete checklist

No Figma or GitHub repository was provided. No font files were delivered (see font notes below).

---

## Content Fundamentals

**Language:** Spanish (neutral/universal). All content and UI copy defaults to Spanish.

**Voice:** First person plural — *nosotros*. Warm but precise. Never passive.
> "Acompañamos a empresas a convertir su información en ventaja competitiva real."

**Tone:** Professional + empathetic. "Datos con alma." Avoid jargon (no "paradigma", "sinergia"). Speak in outcomes.

**Headlines (League Spartan ExtraBold):** Sentence case or all-caps for short statements. Bold. Direct. Impactful.
> "Transformamos datos en decisiones." (period at end = confident)

**Subheadings (Josefin Sans Light):** All-caps, generous letter-spacing (0.12–0.18em). Used as section intro labels, not full sentences.
> "SOLUCIONES DE BUSINESS INTELLIGENCE"

**Body (Comfortaa):** Warm, approachable. Short paragraphs. 1.6–1.7 line-height. Avoid long walls of text.
> "En Bonsai BI creemos que los datos crecen como árboles — con raíces profundas y una estrategia clara."

**CTAs:** Short active verbs. Never "Click aquí".
> "Ver Caso" · "Comenzar" · "Hablar con Nosotros" · "Descargar Informe"

**Metric callouts:** Large number first. Label below. Never bury the number.
> "94% — Satisfacción cliente (primeros 90 días)"

**Emoji:** Not used in formal contexts (web, LinkedIn). May appear in Instagram Stories for engagement.

**Nature metaphors:** Trees, roots, branches, leaves, growth. Core to brand identity.
> "Datos que crecen como árboles, con raíces profundas."

---

## Visual Foundations

### Colors
- **Verde** `#16A085` — primary brand color. Used for CTAs, icons, accents, and brand highlights.
- **Negro** `#1A1A1A` — almost-black for headings, dark sections, dark mode contexts.
- **Off-White** `#F8F7F5` — warm page background. Slightly warm, not pure white.
- **Gris Claro** `#E8E6E1` — borders, dividers, subtle backgrounds.
- **Gris Oscuro** `#7A7A7A` — secondary text, labels, captions.
- Tint scale from `#0A5C4A` (darkest) to `#EDF8F5` (ghost pale) for hover/active/pale contexts.

### Typography
- **League Spartan** — display/headline. Use ExtraBold 800 for hero, Bold 700 for h2–h4. Never below 600 weight. Tight tracking (–0.02 to –0.03em). All-caps for labels.
- **Josefin Sans** — subheadings, labels, captions, UI metadata. Light 300 for large subtitles; SemiBold 600 for section intros. Wide tracking (0.08–0.18em). Usually all-caps. *(Substitute for Glacial Indifference — see below.)*
- **Comfortaa** — body text, descriptions, testimonials, cards. Regular 400 baseline. Warm and rounded feel.
- **Holla** — *Not sourced; client to provide files.* Likely an accent/signature font.

> ⚠️ **Font substitutions:** Glacial Indifference is not on Google Fonts — this system uses **Josefin Sans** as the closest geometric sans-serif match. Holla font is unknown; omitted until files are provided.

### Spacing
Base unit 4px. Generous padding — never feel cramped. Section gaps of 96–128px (--section-gap to --section-gap-lg). Cards use 24px internal padding.

### Backgrounds
Flat colors only. No gradients on web (social media templates may use subtle tonal overlays). Sections alternate between #F8F7F5, #FFFFFF, and #1A1A1A (dark sections). Verde #16A085 used for CTA/highlight sections.

### Shapes & Borders
- Card radius: 12px (--radius-md)
- Button radius: 4–8px (--radius-sm to --radius)
- Badge/pill radius: 9999px (--radius-full)
- Borders: thin (1px), warm gray #E8E6E1 — subtle, not decorative.

### Shadows
Warm gray shadows (not cold blue). Shadow intensity communicates elevation: xs for subtle separations → lg for modal/overlay. Brand shadow (rgba(22,160,133,0.25)) used on primary buttons.

### Cards
White background. 1px #E8E6E1 border. 4–16px shadow. 12px radius. Hover: slight lift (translateY –2px) + slightly stronger shadow. Dark cards: #1A1A1A bg, no border.

### Icons
Outline style. 2px stroke-width (resolves to ~3–4px at 48px display). Verde #16A085 stroke. All 33 icons: 24×24 viewBox, round linecap/join. See Iconography section.

### Animation
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out, smooth snap)
- Duration: 150ms (fast) · 250ms (default) · 400ms (slow)
- Hover states: background color shift + shadow change (buttons), translateY lift (cards)
- No infinite decorative loops

### Hover/Press States
- **Primary button:** background darkens (#16A085 → #0E8068), shadow grows.
- **Card:** translateY(–2px) + heavier shadow; border turns teal on bordered variant.
- **Nav links:** text color changes to verde.

### Transparency & Blur
Used sparingly. NavBar uses `backdrop-filter: blur(10px)` on scroll. Not used decoratively.

### Imagery
Not defined in the source brief. Assume: professional team/office photography, data visualization screenshots. Avoid generic stock. Color style likely warm, natural tones.

---

## Iconography

All icons are SVG, stored in `assets/icons/`. Style: robust outline (2px stroke-width on 24×24 viewBox ≈ 3–4px at 48px display), verde `#16A085` stroke, round linecap/join, no fill.

### Brand Icons (6) — `assets/icons/brand/`
| Icon | File | Usage |
|------|------|-------|
| Bonsai tree | `bonsai.svg` | Primary brand mark, logo, hero sections |
| Branch | `rama.svg` | Growth metaphor, process diagrams |
| Leaf | `hoja.svg` | Organic detail, nature motif |
| Heart + Data | `corazon-datos.svg` | "Data with soul" concept, empathy content |
| Heart + Bonsai | `corazon-bonsai.svg` | Brand passion, philosophy content |
| Hands + Bonsai | `manos-bonsai.svg` | Partnership, care, consulting relationship |

### Generic Icons (27) — `assets/icons/generic/`
Organized in 7 categories:

| Category | Icons |
|----------|-------|
| **Diagnóstico** | search-analysis, clipboard-check, audit, gauge |
| **Resultados** | trending-up, trophy, milestone, bar-growth |
| **Automatización** | automation-gear, workflow, process-cycle |
| **Datos** | database, bar-chart, data-table, funnel, pie-chart |
| **Personas** | person, team, consultation |
| **Empresa** | building, briefcase, org-chart |
| **Strategy** | target, lightbulb, roadmap, strategy, puzzle |

Use the `<Icon>` component: `<Icon name="generic/bar-chart" size={32} />`

### Logos — `assets/logos/`
- `logomark.svg` — Bonsai tree icon (teal, for light backgrounds)
- `logomark-white.svg` — Bonsai tree icon (white, for dark/teal backgrounds)

Full wordmark lockup (icon + "BONSAI BI" text) is rendered in HTML/CSS using League Spartan — no separate SVG wordmark file.

---

## File Manifest

```
/
├── styles.css              ← Root CSS entry; @import only
├── readme.md               ← This file
├── SKILL.md                ← Agent skill descriptor
│
├── tokens/
│   ├── colors.css          ← Brand + neutral + semantic color tokens
│   ├── typography.css      ← Font imports + type scale tokens
│   ├── spacing.css         ← Space scale, layout, radius tokens
│   ├── effects.css         ← Shadows, transitions, blur tokens
│   └── base.css            ← Global reset + body defaults
│
├── assets/
│   ├── logos/
│   │   ├── logomark.svg          ← Bonsai icon (teal)
│   │   └── logomark-white.svg    ← Bonsai icon (white)
│   └── icons/
│       ├── brand/    ← 6 brand icons
│       └── generic/  ← 27 generic icons (7 categories)
│
├── guidelines/             ← Design System tab specimen cards
│   ├── colors-brand.card.html
│   ├── colors-neutral.card.html
│   ├── colors-semantic.card.html
│   ├── type-display.card.html
│   ├── type-body.card.html
│   ├── type-sub.card.html
│   ├── type-scale.card.html
│   ├── spacing-scale.card.html
│   ├── effects-shadows.card.html
│   ├── effects-radius.card.html
│   ├── logo.card.html
│   ├── icons-brand.card.html
│   ├── icons-generic.card.html
│   └── brand-voice.card.html
│
├── components/
│   ├── core/               ← Button, Badge, Icon
│   ├── content/            ← Card, StatBlock, TestimonialCard, CaseStudyCard, SectorTag
│   ├── layout/             ← ProcessFlow, FeatureBlock, CalloutBanner, Timeline
│   └── navigation/         ← NavBar
│
├── ui_kits/
│   └── website/
│       └── index.html      ← Full Bonsai BI homepage demo
│
└── templates/
    ├── instagram-post/     ← 1080×1350 social post template (DC)
    ├── instagram-story/    ← 1080×1920 story template (DC)
    └── linkedin-post/      ← 1200×627 LinkedIn post template (DC)
```

## Components Quick Reference

All components are in `window.BonsaiBIDesignSystem_088a82`.

| Component | Props |
|-----------|-------|
| `Button` | variant (primary/secondary/ghost/outline/dark), size (sm/md/lg), disabled, fullWidth, href |
| `Badge` | variant (brand/neutral/outline/dark/verde), size (sm/md), dot |
| `Icon` | name ("generic/bar-chart" or "brand/bonsai"), size, basePath |
| `Card` | variant (default/bordered/elevated/flat/brand/dark), padding (none/sm/md/lg) |
| `StatBlock` | value, label, description, trend (up/down/neutral), compact |
| `TestimonialCard` | quote, author, role, company, sector |
| `CaseStudyCard` | title, sector, metric, metricLabel, description, tags[], onClick |
| `SectorTag` | sector, icon, variant (default/outline/dark/neutral) |
| `NavBar` | links[], ctaLabel, ctaHref, transparent |
| `ProcessFlow` | steps[] ({title, description, tag, icon, active, done}), orientation (horizontal/vertical), variant (numbered/dotted/icon), accent, lineColor |
| `FeatureBlock` | icon, title, description, tag, variant (default/brand/dark/minimal/bordered), layout (card/inline) |
| `CalloutBanner` | eyebrow, title, description, cta, ctaSecondary, variant (brand/dark/light/outline), align, size |
| `Timeline` | items[] ({title, description, date, tag, active, done}), variant (default/compact/numbered), accent, lineColor |
