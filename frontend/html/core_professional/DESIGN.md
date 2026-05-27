---
name: Core Professional
colors:
  surface: '#faf9ff'
  surface-dim: '#ccdaff'
  surface-bright: '#faf9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8ff'
  surface-container-highest: '#d8e2ff'
  on-surface: '#051a3e'
  on-surface-variant: '#434654'
  inverse-surface: '#1d3054'
  inverse-on-surface: '#edf0ff'
  outline: '#737685'
  outline-variant: '#c3c6d6'
  surface-tint: '#0c56d0'
  primary: '#003d9b'
  on-primary: '#ffffff'
  primary-container: '#0052cc'
  on-primary-container: '#c4d2ff'
  inverse-primary: '#b2c5ff'
  secondary: '#535f73'
  on-secondary: '#ffffff'
  secondary-container: '#d4e0f8'
  on-secondary-container: '#576377'
  tertiary: '#00418a'
  on-tertiary: '#ffffff'
  tertiary-container: '#0058b6'
  on-tertiary-container: '#bfd3ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#0040a2'
  secondary-fixed: '#d7e3fb'
  secondary-fixed-dim: '#bbc7de'
  on-secondary-fixed: '#101c2d'
  on-secondary-fixed-variant: '#3b475b'
  tertiary-fixed: '#d7e2ff'
  tertiary-fixed-dim: '#abc7ff'
  on-tertiary-fixed: '#001b3f'
  on-tertiary-fixed-variant: '#004590'
  background: '#faf9ff'
  on-background: '#051a3e'
  surface-variant: '#d8e2ff'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  gutter: 24px
  margin: 32px
---

## Brand & Style

The brand personality is authoritative yet accessible, designed for high-utility Enterprise SaaS environments where clarity and efficiency are paramount. The design system follows a **Modern Corporate** aesthetic, prioritizing functional minimalism and systematic consistency over decorative flair.

The UI evokes a sense of reliability and precision. By utilizing generous whitespace and a restricted color palette, the system reduces cognitive load for power users handling complex data workflows. The visual language is grounded in logic, utilizing a structured grid and clear information hierarchy to ensure users feel in control of their secure environment.

## Colors

This design system utilizes a palette of trustworthy blues and a range of sophisticated grays to establish a professional atmosphere.

- **Primary (#0052CC):** A deep, vibrant blue used for primary actions, active states, and brand presence.
- **Secondary (#6B778C):** A muted slate gray used for secondary icons, supporting text, and subtle UI elements.
- **Tertiary (#2684FF):** A lighter, communicative blue used for links and informational highlights.
- **Neutral (#091E42):** A high-contrast navy used for headings and primary text to ensure maximum legibility.
- **Backgrounds:** Use `#FFFFFF` for primary surfaces and `#F4F5F7` for secondary background fills to create distinct tonal layering.
- **Status:** Standardize on Green (#36B37E) for success, Red (#FF5630) for errors, and Yellow (#FFAB00) for warnings.

## Typography

The typography system relies exclusively on **Inter** to provide a highly readable, systematic appearance across all platforms.

- **Scale:** Use `body-md` (14px) as the default size for most dashboard content and data tables to maximize information density without sacrificing legibility.
- **Hierarchy:** Reserve `headline-lg` for primary page titles. Use `label-md` for form labels and table headers to provide a clear distinction from data.
- **Optimization:** For mobile devices, large headlines scale down to ensure content fits within the viewport. All text uses a slight negative letter-spacing on larger sizes to maintain a tight, professional look.

## Layout & Spacing

The layout is built on a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. The system uses a 4px base unit to ensure consistent proportions.

- **Desktop (1440px+):** Max-width container of 1280px, 24px gutters, 32px margins.
- **Tablet (768px - 1439px):** Fluid width, 24px gutters, 24px margins.
- **Mobile (Up to 767px):** Fluid width, 16px gutters, 16px margins.
- **Density:** Use `md` (16px) for standard padding within cards and containers. Use `sm` (8px) for tightly coupled elements like label-input pairs or button groups.

## Elevation & Depth

This design system uses a combination of **low-contrast outlines** and **ambient shadows** to create a structured hierarchy.

- **Level 0 (Base):** Used for the main canvas background. No shadow.
- **Level 1 (Cards/Containers):** A 1px border (#DFE1E6) with a very soft, diffused shadow: `0px 1px 3px rgba(9, 30, 66, 0.13)`.
- **Level 2 (Dropdowns/Modals):** A more pronounced shadow to indicate significant elevation: `0px 8px 16px -4px rgba(9, 30, 66, 0.25)`.
- **Interactions:** On hover, interactive cards may transition from Level 1 to a slightly deeper shadow, but movement should be subtle (2px vertical shift).

## Shapes

The shape language is consistent and approachable, utilizing a **8px (0.5rem)** standard corner radius.

- **Standard (8px):** Applied to buttons, input fields, cards, and primary containers.
- **Large (16px):** Applied to modals and large empty-state illustrations.
- **Small (4px):** Used for tooltips and nested elements like tags/chips.
- **Pill:** Reserved exclusively for status badges (e.g., "Active", "Pending") to differentiate them from interactive buttons.

## Components

### Buttons
- **Primary:** Solid `#0052CC` fill with white text. 8px radius.
- **Secondary:** Subtle `#F4F5F7` fill with `#42526E` text. No border.
- **Outline:** 1px border (#DFE1E6) with transparent background.

### Input Fields
- **Default State:** 1px border (#DFE1E6), 8px radius, 12px horizontal padding.
- **Focus State:** 2px border (#4C9AFF), no glow, just a crisp color change.
- **Validation:** Error states use a red border (#FF5630) with a supportive icon.

### Data Tables
- **Headers:** `#F4F5F7` background, `label-sm` typography, uppercase.
- **Rows:** 1px bottom border (#DFE1E6), 16px vertical padding. Use zebra striping only for tables exceeding 20 rows.
- **Alignment:** Numerical data is right-aligned; text is left-aligned.

### Cards
- White background, 1px border (#DFE1E6), 8px radius, Level 1 shadow. Header sections within cards should be separated by a light horizontal rule.

### Navigation
- **Side Nav:** Dark theme option (#091E42) to provide high contrast against the main content area. Active states indicated by a primary-colored vertical bar on the left edge.