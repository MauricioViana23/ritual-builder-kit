

# Shopify Integration + Mobile-First Redesign

## Phase 1: Enable Shopify (New Store)
- Call `shopify--enable` with `store_type: "new"` to create a development store
- After creation, call `shopify--claim_store` so you can claim or skip
- Once enabled, follow Shopify tooling to set up products, collections, and checkout

## Phase 2: Mobile-First Redesign
After Shopify is enabled and its tools/knowledge become available:

### 2a. Mobile-First Layout Overhaul
- Audit all sections for mobile breakpoints (currently `md:` prefix used everywhere)
- Ensure all grids collapse to single-column on mobile with proper spacing
- Hero: stack text above product image, reduce heading sizes, full-width CTA
- Pricing cards: stack vertically with featured card first on mobile
- Navigation: ensure hamburger menu works smoothly on small screens

### 2b. Mobile Checkout Optimization
- Integrate Shopify checkout flow with mobile-optimized CTAs
- Replace all `#offer` placeholder links with Shopify checkout URLs
- StickyMobileCTA: connect to Shopify cart/checkout instead of anchor link
- Ensure checkout redirects work seamlessly on mobile browsers

### 2c. Responsive Polish
- Touch targets: ensure all buttons/links meet 44px minimum tap target
- Typography scaling: fluid type sizes between mobile and desktop
- Image optimization: responsive images with appropriate sizes
- Spacing adjustments: tighter padding on mobile, breathing room on desktop
- Test all interactive elements (accordion, FAQ, popups) on mobile viewports

## Technical Details

### Files to modify:
- **All `src/components/zion/*.tsx`** — Mobile-first responsive classes
- **`src/components/zion/StickyMobileCTA.tsx`** — Connect to Shopify checkout
- **`src/components/zion/PricingSection.tsx`** — Shopify product integration + mobile stack order
- **`src/components/zion/HeroSection.tsx`** — Mobile layout, fluid typography
- **`src/components/zion/StickyNav.tsx`** — Mobile navigation improvements
- **`src/index.css` / `tailwind.config.ts`** — Fluid type utilities, touch-target classes
- **New edge function** — Shopify checkout/cart API integration

### Approach:
- CSS-first: use Tailwind's mobile-first defaults (base = mobile, `md:` = tablet+, `lg:` = desktop)
- No new dependencies needed for responsive work
- Shopify integration via edge functions + Shopify Storefront API

