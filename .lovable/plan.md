

# Transform ZionFit Landing Page into a Shopify Store

Your Shopify development store is connected and ready. You have **0 products** currently — we'll need to create the Zion Shot product first, then wire up the full e-commerce flow.

---

## What We'll Build

### 1. Create Zion Shot Product in Shopify
- Create the real product with 3 variants matching your current pricing tiers:
  - **1 pote (Experimente)** — R$129
  - **2 potes (Ritual Completo)** — R$239
  - **3 potes (Movimento)** — R$329
- Add product description and images

### 2. Set Up Storefront API + Cart System
- Create `src/lib/shopify.ts` with Storefront API config (domain, token, GraphQL queries)
- Create `src/stores/cartStore.ts` with Zustand for persistent cart state
- Create `src/hooks/useCartSync.ts` for cart synchronization after checkout
- Install `zustand` dependency

### 3. Build Cart Drawer Component
- Create `src/components/zion/CartDrawer.tsx` — slide-out cart with quantity controls
- Add cart icon with item count badge to `StickyNav`
- Checkout button opens Shopify checkout in new tab via Storefront API

### 4. Connect All CTAs to Real Checkout
- **PricingSection**: "Quero esse →" buttons add the correct variant to cart and open cart drawer
- **StickyMobileCTA**: Add featured variant to cart on tap
- **HeroSection / BenefitsSection / FinalCTA**: "Quero começar meu ritual →" adds featured variant to cart
- All `href="#offer"` links either scroll to pricing or add to cart directly

### 5. Mobile-First Responsive Polish
- Ensure cart drawer is full-width on mobile
- Touch-friendly quantity controls (44px min tap targets)
- StickyMobileCTA shows cart count badge
- All pricing cards stack properly on mobile (featured card first)

---

## Technical Details

### New files:
- `src/lib/shopify.ts` — API config, `storefrontApiRequest()`, cart mutations
- `src/stores/cartStore.ts` — Zustand cart store with Shopify sync
- `src/hooks/useCartSync.ts` — Visibility-change cart sync hook
- `src/components/zion/CartDrawer.tsx` — Cart UI component

### Modified files:
- `src/App.tsx` — Add `useCartSync` hook
- `src/components/zion/StickyNav.tsx` — Add CartDrawer to nav
- `src/components/zion/PricingSection.tsx` — Fetch product from Shopify, wire buy buttons
- `src/components/zion/StickyMobileCTA.tsx` — Add to cart action
- `src/components/zion/HeroSection.tsx` — Wire CTA to cart
- `src/components/zion/BenefitsSection.tsx` — Wire CTA to cart
- `src/components/zion/FinalCTA.tsx` — Wire CTA to cart

### Constants:
- Store domain: `remix-of-remix-of-landing-page-lab-3emx3.myshopify.com`
- Storefront token: `cc7c1e28b9abcb2aa1a5e20e1b65d352`
- API version: `2025-07`

### New dependency:
- `zustand` (for cart state management)

