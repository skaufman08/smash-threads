# Punk Rock T-Shirt Store Design Guidelines

## Design Approach
**Reference-Based: Underground Zine/Punk Aesthetic**
Drawing inspiration from 1980s-90s punk zines, DIY music magazines, and street culture collage art. Think photocopied flyers, ransom note typography, and raw cut-and-paste aesthetics.

## Typography System

**Primary Headlines (Product Names, Page Titles)**
- Mix of distressed sans-serif fonts with varying weights
- Rotate text slightly (2-8 degrees) for uneven, pasted appearance
- Use transform utilities for tilted effect
- Layer multiple text shadows for depth and photocopy effect

**Body Text (Descriptions, Cart Info)**
- Simple sans-serif for readability (system fonts work great here)
- Occasional ALL CAPS for emphasis
- Tight line-height for dense, zine-like text blocks

**Accent Text (Prices, CTAs, Labels)**
- Bold, condensed fonts
- Mix of sizes within same component for ransom-note effect
- Underlines, strikethroughs, and hand-drawn style borders

## Layout System

**Spacing: Intentionally Chaotic**
- Primary spacing units: p-3, p-6, p-8, p-12
- Deliberately break alignment occasionally for authentic DIY feel
- Use negative margins (e.g., -m-2) to overlap elements like stickers

**Grid Structure**
- Product catalog: 2 columns mobile, 3 columns tablet, 3-4 columns desktop (grid-cols-2 md:grid-cols-3 lg:grid-cols-4)
- Intentional slight misalignment between grid items
- Random rotation on product cards (rotate-1, -rotate-2)

## Component Library

**Navigation**
- Sticky header with torn-edge border effect
- Logo area with stacked, overlapping text
- Cart icon with rough, hand-drawn badge for item count
- Navigation links appear as torn paper strips or stickers

**Product Cards**
- Polaroid-style frames or torn edge borders
- Product images with slight rotation
- Overlapping tape graphics in corners
- Price tags appear as adhesive stickers
- "Add to Cart" button styled as stamped/spray-painted element

**Shopping Cart**
- Slide-in panel from right side
- Items displayed with rough dividers (torn paper effect)
- Quantity controls styled as punk stickers/badges
- Remove button as X mark or crossed-out aesthetic
- Subtotal with distressed typography

**Checkout Form**
- Form fields with rough, hand-drawn borders
- Labels positioned irregularly (slight offsets)
- Input fields styled like filled-in zine forms
- Section headers appear as cut-out magazine headlines
- Progress indicators as stamped checkmarks

**Order Confirmation**
- Success message in large, bold, tilted typography
- Order details in structured but distressed table format
- Confirmation number in prominent stamp-style badge

## Decorative Elements

**Texture & Effects**
- Subtle grain/noise overlay on entire page background
- Torn paper edges on section dividers
- Random sticker/badge graphics scattered throughout
- Photocopy artifacts (ink splatters, smudges)
- Safety pin, tape, and staple graphics as UI accents

**Interactive States**
- Hover: Slight scale increase with added rotation
- Active: Deeper shadow, enhanced grain effect
- Focus: Bold, irregular outline (not standard browser focus ring)

## Images

**Product Images**
- 6-8 punk band t-shirt mockups showing designs clearly
- Each image should show t-shirt on model or flat lay
- High contrast photography with slight overexposure (zine photocopy aesthetic)
- Images placed at slight angles within product cards

**Hero Section**
- Large collage-style banner with overlapping band flyer elements
- Featured product or band imagery with cutout treatment
- Typography layered over images with high contrast
- Buttons with blurred/semi-transparent backgrounds for readability

**Background Elements**
- Repeating pattern of photocopied texture
- Random punk stickers/graphics in footer and margins
- Magazine cutout style imagery in checkout confirmation

## Responsive Behavior

**Mobile (base)**
- Single column cart drawer
- 2-column product grid
- Stacked form layout
- Full-width CTAs

**Tablet (md:)**
- 3-column product grid
- Side-by-side cart summary
- 2-column checkout form sections

**Desktop (lg:)**
- 3-4 column product grid
- Expanded cart panel
- Multi-column checkout with visual separation

## Key Interaction Patterns

- Cart updates with rough animated transitions (not smooth)
- Product "add to cart" creates scattered sticker effect
- Checkout steps revealed with ripping paper transition
- Form validation errors appear as hand-written corrections
- Loading states use distressed spinner or punk imagery

**Accessibility**: Maintain WCAG AA contrast despite punk aesthetic by ensuring text readability against backgrounds. All interactive elements must have proper focus states and semantic HTML despite visual chaos.