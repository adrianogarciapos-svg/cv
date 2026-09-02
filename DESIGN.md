---
name: Cyber-Professional Resume
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#b9c8de'
  on-tertiary: '#233143'
  tertiary-container: '#8392a6'
  on-tertiary-container: '#1c2b3c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d4e4fa'
  tertiary-fixed-dim: '#b9c8de'
  on-tertiary-fixed: '#0d1c2d'
  on-tertiary-fixed-variant: '#39485a'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system targets the modern IT professional. It balances technical precision with a high-end, contemporary aesthetic. The personality is authoritative, innovative, and focused, aiming to evoke a sense of reliability and cutting-edge expertise in hiring managers and recruiters.

The visual style is a hybrid of **Corporate Modern** and **Glassmorphism**. It utilizes a dark-mode first approach to highlight technical seniority, using semi-transparent layers and vibrant accent glows to create a "command center" feel. Information is organized through high-contrast surfaces and crisp, intentional whitespace.

## Colors

The palette is anchored in **Deep Slate (#0f172a)** for the primary background to provide a sophisticated, low-strain canvas. **Electric Blue (#3b82f6)** serves as the "action" color, used for primary buttons, active states, and critical data highlights.

**Subtle Silver (#94a3b8)** is used for secondary text and borders to maintain a metallic, technical feel without the harshness of pure white. For highest-level readability on dark surfaces, **Off-White (#f8fafc)** is reserved for body text and headings. Semantic colors (success, error) should be muted to avoid clashing with the electric blue primary.

## Typography

This design system utilizes **Inter** as the primary typeface for its exceptional legibility and neutral, professional character. To reinforce the "IT/Technical" narrative, **JetBrains Mono** is introduced for labels, dates, and skill badges, providing a subtle nod to code and engineering environments.

Hierarchy is established through significant weight variance rather than just size. Headlines should use "Extra Bold" or "Bold" to anchor sections, while body text remains "Regular" for long-form reading. Mobile typography shifts to slightly tighter line heights and reduced display sizes to maintain impact on smaller viewports.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop (max-width 1200px) with a 12-column structure. Experience timelines and profile summaries should occupy a 2/3 width column, while contact info and technical skills inhabit a 1/3 sidebar.

Spacing follows an 8px (base 4px) rhythmic scale. Use `lg` (40px) spacing between major resume sections (Experience, Education, Skills) and `sm` (16px) for internal card padding. On mobile, the grid collapses to a single column, with margins reducing to 20px and gutters to 16px to maximize content area.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and tonal layering rather than traditional shadows. 

1.  **Base Surface:** Deep Slate (#0f172a) solid.
2.  **Card Level:** Semi-transparent white (5-8% opacity) with a `backdrop-filter: blur(12px)`.
3.  **Accent Elevation:** Cards feature a 1px border with a linear gradient (top-left to bottom-right) starting at `white / 15%` and ending at `white / 5%`.
4.  **Shadows:** When used, shadows are extremely soft and large (e.g., `0 20px 50px rgba(0,0,0,0.3)`), intended to feel like an ambient glow rather than a hard drop shadow.

Interactive elements (buttons) should utilize a subtle outer glow using the primary electric blue color when hovered.

## Shapes

The shape language is "Modern Rounded." Standard UI containers and cards utilize a **0.5rem (8px)** radius to feel approachable yet precise. Interactive elements like skill badges and primary buttons use **Pill-shaped** (full radius) geometry to distinguish them as clickable or categorical elements. Timeline nodes should be perfect circles.

## Components

### Buttons
- **Primary:** Solid Electric Blue with white text. Pill-shaped. Subtle 10px blue glow on hover.
- **Secondary/Ghost:** 1px Silver border, transparent background.

### Status Badges (Skills)
- Small, pill-shaped tags with a JetBrains Mono font. 
- Background: 10% opacity primary color; Text: Primary color.
- Grouped in a flex-wrap container with 8px gaps.

### Timeline (Experience)
- A vertical 2px silver line (20% opacity).
- **Nodes:** 12px circular dots using the Primary color, featuring a 4px outer glow.
- **Content:** Experience details placed in glassmorphic cards to the right of the line.

### Input Fields / Contact
- Background: 5% white overlay. 
- Bottom-border only (2px) in Silver, turning Electric Blue on focus.

### Cards
- Standard glassmorphic treatment as defined in Elevation. 
- Internal padding: 24px. 
- Title and subtitle should have a clear 4px vertical gap.