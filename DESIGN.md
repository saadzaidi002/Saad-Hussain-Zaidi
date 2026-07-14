---
name: Kinetic Engineering
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bdcabe'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#889489'
  outline-variant: '#3e4a40'
  surface-tint: '#73db9a'
  primary: '#dbffe2'
  on-primary: '#00391d'
  primary-container: '#86efac'
  on-primary-container: '#006d3e'
  inverse-primary: '#006d3e'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#f4f6ff'
  on-tertiary: '#263143'
  tertiary-container: '#cfdaf2'
  on-tertiary-container: '#545f74'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#8ff8b4'
  primary-fixed-dim: '#73db9a'
  on-primary-fixed: '#00210f'
  on-primary-fixed-variant: '#00522d'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  section-padding: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is built for a Full-Stack IoT & Software Engineer, emphasizing high-tech precision, engineering excellence, and modern developer aesthetics. The brand personality is **technical, sophisticated, and reliable**, striking a balance between heavy-duty systems engineering and polished software delivery.

The visual style is **Corporate / Modern** with a slight **Technical** edge. It utilizes a deep, monochromatic foundation with subtle accents of slate and cyan to evoke the feeling of a high-end IDE or a dashboard. Precision is communicated through consistent alignment, generous whitespace to allow complex information to breathe, and high-quality sans-serif typography that ensures technical clarity across all documentation and project showcases.

## Colors

The palette is rooted in a **Dark Navy** and **Slate Blue** foundation, designed to reduce eye strain and provide a professional backdrop for technical content. 

- **Primary:** A bright Mint/Cyan used sparingly for high-visibility actions, status indicators, and terminal-style accents.
- **Secondary:** A Sky Blue for secondary links, icons, and subtle text highlights.
- **Neutral/Background:** The core background is a deep `#0F172A`, providing maximum contrast for text.
- **Surfaces:** Cards and containers use `#1E293B` to create a tiered visual hierarchy.
- **Borders:** Low-contrast borders in `#334155` define structure without creating visual clutter.

## Typography

The typography strategy leverages three distinct sans-serif families to organize information:
- **Hanken Grotesk (Headlines):** Used for impactful titles and section headers. Its sharp, contemporary geometry feels engineered and modern.
- **Inter (Body):** Selected for its exceptional legibility in long-form text, experience descriptions, and project summaries.
- **Geist (Labels/Code):** A monospaced/technical-leaning face used for metadata, tags, and technical specs, reinforcing the developer-centric nature of the portfolio.

Line heights are kept generous (1.6 for body) to ensure technical documentation is easy to scan.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a strict 8px base unit. 
- **Desktop:** 12-column grid with 24px gutters. Sections are separated by 120px of vertical padding to ensure a premium, spacious feel.
- **Tablet:** 8-column grid with 20px gutters. Vertical spacing scales down to 80px.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins. 

The design prioritizes "white space as a separator" rather than heavy lines. Content is grouped into logical blocks with internal padding of 32px (stack-lg) to allow for complex technical metadata to be presented clearly.

## Elevation & Depth

This design system uses **Tonal Layers** and **Low-Contrast Outlines** rather than traditional drop shadows to maintain a sleek, flat, high-tech aesthetic.

1.  **Level 0 (Background):** Base navy color for the main canvas.
2.  **Level 1 (Surfaces):** Cards and content blocks use a slightly lighter slate blue with a 1px solid border in a subtle accent color.
3.  **Level 2 (Hover/Active):** When interacting with cards or buttons, the border intensity increases, and a very subtle inner glow (cyan) may be applied to simulate "powered on" hardware.
4.  **Glassmorphism:** Use a light background blur (12px) for sticky navigation bars and modal overlays to maintain context of the content beneath.

## Shapes

The shape language is **Soft** and restrained. In a technical portfolio, overly rounded corners can feel too "consumer" or "playful." 
- **Standard UI elements:** (Input fields, Chips) use a 4px (0.25rem) radius.
- **Cards & Containers:** Use an 8px (0.5rem) radius to feel structured yet approachable.
- **Buttons:** Maintain the 4px radius for a precise, "switch-like" appearance.

## Components

### Buttons
- **Primary:** Solid Mint/Cyan background with dark text. 4px radius. High contrast.
- **Secondary:** Ghost style with a Slate Blue border and light text.
- **Icon Buttons:** Circular or slightly rounded squares used for social links and technical actions.

### Chips/Tags
- Small, Geist-based typography. 
- Backgrounds should be a semi-transparent version of the primary color with a subtle border. Used for identifying programming languages (e.g., Python, C++, React).

### Cards
- Interactive project cards with a 1px border. 
- Headers inside cards should use `headline-sm`.
- Include a "link out" icon in the top right to signal external project repositories.

### Input Fields
- Dark background (level 0 color) with a level 1 border.
- Focus state should change the border color to the Primary Mint and add a subtle outer glow.

### Lists
- For experience and education, use custom bullets (e.g., a small cyan chevron or square) to reinforce the technical theme.