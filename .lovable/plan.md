

# Remove Sections + New Ritual Ingredients Section + Fix Build

## Changes Summary

### 1. Fix Build Error
The `result-mariana.jpg` files exist locally but aren't syncing to the build sandbox. We'll move these images to `public/assets/` and reference them via URL paths instead of imports, which avoids the Vite asset pipeline issue entirely.

### 2. Remove Sections from Index.tsx
Remove these 4 components from the page:
- **SocialProofBar** (fake stars + "Como visto em" logos)
- **TickerStrip** (scrolling DESINCHA ticker)
- **IngredientsSection** ("O que tem dentro")
- **VideoSection** ("Veja o ritual em 60 segundos")

### 3. New Component: RitualIngredientsSection
Replace IngredientsSection with a new mobile-first storytelling section.

**Header:**
- "O que tem dentro do seu ritual — e por que funciona"
- Subheadline about consistency

**4 Cards (stacked vertically on mobile, 2x2 grid on desktop):**
1. "desincha & leveza" - hibiscus/cranberry imagery (reuse gallery-2.jpg)
2. "energia sem pico" - green tea/matcha imagery (reuse gallery-1.jpg)
3. "ativa seu metabolismo" - ginger/cinnamon imagery (reuse gallery-4.jpg)
4. "nutrição que sustenta" - vitamins/fruit imagery (reuse gallery-3.jpg)

Each card: full-width image (220-280px height), sage green text box below, lowercase title, short 2-3 line description.

**Closing block:**
"Não é sobre o ingrediente. É sobre repetir..." pause moment with generous spacing.

**Mobile:** single column, cards stacked, immersive scroll journey.
**Desktop:** 2x2 grid layout.

### 4. Files Modified
- `src/pages/Index.tsx` — remove 4 imports/components, add new one
- `src/components/zion/RitualIngredientsSection.tsx` — new file
- `src/components/zion/RealResultsSection.tsx` — change imports to use public paths
- `src/components/zion/LifestyleBanner.tsx` — change imports to use public paths
- `src/components/zion/LifestyleGallery.tsx` — change imports to use public paths
- `src/components/zion/TestimonialsSection.tsx` — change imports to use public paths
- `src/components/zion/UGCTestimonialsGrid.tsx` — change imports to use public paths
- Move all `src/assets/*.jpg` to `public/assets/` to fix build

