

# Generate All Placeholder Images with Nano Banana 2

Here are all the images needed across your ZionFit landing page, with ready-to-use prompts for the `google/gemini-3.1-flash-image-preview` model.

---

## Complete Image List (22 images total)

### 1. Lifestyle Banner (1 image)
**File:** `lifestyle-banner.png` (1920×480, wide banner)
> **Prompt:** "Lifestyle product photography, a beautiful Brazilian woman in her 30s in a bright modern kitchen at golden hour morning light, preparing a pink lemonade health shot drink, pouring powder into a glass of water, natural soft lighting, warm tones with soft pink and sage green accents, editorial style, high-end wellness brand aesthetic, wide cinematic composition, no text"

---

### 2. Lifestyle Gallery (6 images)
**File:** `gallery-1.png` — "Manhã com Zion Shot" (square)
> **Prompt:** "Lifestyle photography, young Brazilian woman stretching by a sunlit window in the morning holding a small glass of pink drink, cozy minimalist apartment, soft natural light, warm pastel tones, wellness aesthetic, square crop, no text"

**File:** `gallery-2.png` — "Preparando o ritual" (4:5 portrait)
> **Prompt:** "Overhead flat lay of morning ritual preparation: a pink powdered supplement sachet, a glass of pink lemonade drink, a spoon, sliced lemon, and fresh ginger on a marble countertop, soft morning light, pastel pink and sage green tones, clean editorial style, portrait orientation 4:5, no text"

**File:** `gallery-3.png` — "Na cozinha" (square)
> **Prompt:** "Brazilian woman in a modern white kitchen smiling while mixing a pink health drink in a glass, natural daylight, wearing casual comfortable clothes, warm and inviting atmosphere, wellness lifestyle brand photography, square crop, no text"

**File:** `gallery-4.png` — "Resultado real" (4:5 portrait)
> **Prompt:** "Close-up portrait of a glowing healthy Brazilian woman in her 30s, radiant clear skin, soft natural makeup, touching her face gently, soft pink and warm lighting, beauty and wellness editorial style, portrait orientation 4:5, no text"

**File:** `gallery-5.png` — "Estilo de vida" (square)
> **Prompt:** "Brazilian woman doing yoga on a mat in a bright airy living room with plants, a pink drink on a side table nearby, morning light streaming through windows, wellness lifestyle photography, soft pastel tones, square crop, no text"

**File:** `gallery-6.png` — "Minha rotina" (square)
> **Prompt:** "Brazilian woman journaling at a minimalist desk with a glass of pink lemonade drink beside her, morning sunlight, cozy and peaceful atmosphere, wellness lifestyle brand photography, warm tones with pink accents, square crop, no text"

---

### 3. Real Results Section (3 result photos + 3 avatars = 6 images)

**File:** `result-mariana.png` (3:4 portrait)
> **Prompt:** "Full body lifestyle portrait of a confident Brazilian woman age 29, fit and healthy looking, wearing casual athleisure, standing in a bright room with natural light, genuine happy smile, wellness transformation photography, warm soft lighting, portrait orientation 3:4, no text"

**File:** `result-patricia.png` (3:4 portrait)
> **Prompt:** "Full body lifestyle portrait of an energetic Brazilian woman age 35, healthy and vibrant, wearing comfortable casual clothes, in a bright modern living space, warm natural light, genuine confident expression, wellness brand photography, portrait orientation 3:4, no text"

**File:** `result-gabriela.png` (3:4 portrait)
> **Prompt:** "Full body lifestyle portrait of an elegant Brazilian woman age 42, glowing healthy skin, wearing a simple stylish outfit, standing in a sun-filled room with plants, warm golden hour light, genuine serene smile, wellness transformation photography, portrait orientation 3:4, no text"

**File:** `avatar-mariana.png` (square, small)
> **Prompt:** "Headshot portrait of a friendly Brazilian woman age 29, warm genuine smile, natural makeup, soft studio lighting, clean neutral background, wellness brand style, square crop, no text"

**File:** `avatar-patricia.png` (square, small)
> **Prompt:** "Headshot portrait of a friendly Brazilian woman age 35, warm genuine smile, natural makeup, soft studio lighting, clean neutral background, wellness brand style, square crop, no text"

**File:** `avatar-gabriela.png` (square, small)
> **Prompt:** "Headshot portrait of a friendly Brazilian woman age 42, warm genuine smile, natural makeup, soft studio lighting, clean neutral background, wellness brand style, square crop, no text"

---

### 4. Testimonials Section (3 avatars + 1 featured photo + 1 featured avatar = 5 images)

**File:** `avatar-ana-paula.png` (square, small)
> **Prompt:** "Headshot portrait of a cheerful Brazilian woman age 31, natural look, warm smile, soft lighting, clean background, wellness lifestyle aesthetic, square crop, no text"

**File:** `avatar-camila.png` (square, small)
> **Prompt:** "Headshot portrait of a young Brazilian woman age 28, bright smile, natural beauty, soft studio lighting, clean background, wellness brand style, square crop, no text"

**File:** `avatar-juliana.png` (square, small)
> **Prompt:** "Headshot portrait of a warm Brazilian woman age 34, genuine smile, natural makeup, soft lighting, clean background, wellness lifestyle aesthetic, square crop, no text"

**File:** `featured-fernanda.png` (square, large)
> **Prompt:** "Editorial lifestyle portrait of a confident Brazilian woman age 37, holding a glass of pink lemonade health drink, wearing a casual white top, soft natural morning light, warm tones, serene and empowered expression, wellness brand photography, square crop, no text"

**File:** `avatar-fernanda.png` (square, small)
> **Prompt:** "Headshot portrait of a confident Brazilian woman age 37, warm genuine smile, natural makeup, soft studio lighting, clean background, wellness brand style, square crop, no text"

---

### 5. UGC Instagram Grid (4 images)

**File:** `ugc-ana-fit.png` (square)
> **Prompt:** "Instagram-style photo of a Brazilian fitness woman taking a selfie in her kitchen holding up a pink health drink, casual athletic wear, bright natural light, authentic social media aesthetic, slightly warm filter, square crop, no text no watermark"

**File:** `ugc-camila-wellness.png` (square)
> **Prompt:** "Instagram-style flat lay photo of a pink lemonade drink in a beautiful glass with lemon slices and flowers on a white marble surface, aesthetic wellness content creator style, bright and airy, square crop, no text no watermark"

**File:** `ugc-ju-lifestyle.png` (square)
> **Prompt:** "Instagram-style photo of a young Brazilian woman outdoors in activewear, holding a pink drink bottle, morning sun, urban park background, authentic social media lifestyle content, warm tones, square crop, no text no watermark"

**File:** `ugc-fer-bianchini.png` (square)
> **Prompt:** "Instagram-style photo of a Brazilian woman in a cozy robe at a breakfast table with a pink health shot drink, croissant, and fresh fruits, morning light through curtains, aesthetic lifestyle content, square crop, no text no watermark"

---

## Implementation Plan

1. **Run a script** that calls the Nano Banana 2 API (`google/gemini-3.1-flash-image-preview`) with each prompt above, saving all 22 images to `src/assets/` or a storage bucket
2. **Update each component** to import and display the generated images in place of the Camera icon placeholders
3. **Optimize** images for web (compress to reasonable sizes)

### Technical Notes
- Model: `google/gemini-3.1-flash-image-preview` (Nano Banana 2)
- All prompts end with "no text" to avoid baked-in text artifacts
- Images use the ZionFit brand palette direction: warm tones, pink, sage green, soft natural lighting
- Brazilian women of various ages to match the testimonial data already in the code

