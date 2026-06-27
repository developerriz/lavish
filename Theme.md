# LAVISH FURNITURE — Theme Guide

## Light Theme Configuration
- The app uses a **Light Theme** exclusively with a bold editorial aesthetic.
- The color palette is high-contrast and minimal: black, white, and teal (#00BFA5).
- Use `Poppins` as the **only font** across the entire project.
- Backgrounds must be pure white (#ffffff). No off-whites or creams.
- Text colors: pure black (#0a0a0a) for headings, neutral-500 (#737373) for body text.

## Design Tokens
| Token | Value | Usage |
|-------|-------|-------|
| **Primary** | `#0a0a0a` | Headings, bold text, primary CTAs |
| **Accent** | `#00BFA5` | Teal highlights, active states, CTAs, badges |
| **Accent Dark** | `#00A98F` | Hover states for teal elements |
| **Background** | `#ffffff` | All backgrounds |
| **Surface** | `#f5f5f5` | Neutral-50 surfaces, product image areas |
| **Border** | `#e5e5e5` | Section dividers, grid borders |
| **Text Primary** | `#0a0a0a` | Headings, labels |
| **Text Secondary** | `#737373` | Body text, descriptions |
| **Text Muted** | `#a3a3a3` | Captions, placeholders |

## Typography
- **Font**: Poppins (weights: 300–900)
- **Headings**: font-black (900), uppercase, tight tracking, leading-[0.9]
- **Body**: font-normal (400) or font-medium (500)
- **Labels**: font-bold (700), uppercase, wide tracking (tracking-[0.2em])
- **Sizes**: Headings are oversized (text-5xl to text-8xl), body is text-sm

## Layout & Spacing
- **Max width**: `max-w-[1400px]` with `px-6 lg:px-10`
- **Section padding**: `py-20 lg:py-28`
- **Section dividers**: `border-t border-neutral-200` (thin top borders)
- **Grid gaps**: Use `gap-px` with `bg-neutral-200` for 1px border grids
- **Border radius**: None. All elements use sharp square edges. No rounded corners.

## Visual Style
- **Editorial/magazine** aesthetic — bold, typographic, high contrast
- **No rounded corners** — everything is square/sharp
- **No shadows** — flat design, use borders for definition
- **No gradients** — flat solid colors only
- **No decorative elements** — no blobs, circles, or ornaments
- Product images on neutral-50 (#fafafa) backgrounds
- Hover effects: scale, opacity, color change (not shadow or elevation)

## Micro-Animations
- Scroll-triggered fade-in-up with cubic-bezier easing
- Accordion expand/collapse with max-height transition
- Hover: image scale (group-hover:scale-105), color shifts, underline extensions
- Transitions: `transition-all duration-300` or `duration-500`

## Component Guidelines
- **Headers**: Bold uppercase text, not traditional navigation menus
- **Buttons**: Flat, square, uppercase text, teal background or black background
- **Cards**: No borders by default, defined by parent grid borders (gap-px)
- **Icons**: Lucide React, thin stroke (strokeWidth 1.5)
- **Images**: Square/rectangular, no rounded corners, object-cover or object-contain
- **Accordion**: Plus/Minus toggle, numbered items, teal active state
- **Social Icons**: Inline SVG (no lucide brand icons), square bordered containers

## Rules for Agents
1. Use Poppins as the only font. No serif fonts, no other sans-serif fonts.
2. Never use rounded corners (rounded-*, rounded-xl, etc). All elements are square.
3. Never use box shadows. Use borders for definition.
4. Never use gradients. Use flat colors.
5. Accent color is teal (#00BFA5). Use sparingly for emphasis.
6. Headings must be font-black, uppercase, with tight tracking.
7. All sections separated by thin top borders (`border-t border-neutral-200`).
8. Maximum content width is 1400px.
9. Never use dark mode classes.
