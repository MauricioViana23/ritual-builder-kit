import { Button } from "@/components/ui/button";
import productImg from "@/assets/zion-shot-product.png";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-cream px-6 pb-20 pt-12 md:pt-20">
    {/* Subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-pink-xlt/40 via-transparent to-sage-lt/30 pointer-events-none" />

    <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
      {/* Text */}
      <div className="fade-up">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-pink">
          Ritual Matinal
        </p>
        <h1 className="font-display text-5xl font-bold leading-[1.1] text-plum md:text-[64px]">
          Antes do café.
          <br />
          Antes do celular.
          <br />
          <span className="text-pink">Antes de tudo.</span>
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-brand-gray">
          30 segundos em jejum. O Zion Shot limpa, desincha e ativa seu corpo
          para o que vem depois. Natural. Gostoso de verdade. Todo dia.
        </p>
        <div className="mt-8 flex flex-col items-start gap-3">
          <Button variant="hero" size="xl" className="animate-[pulse_2.5s_ease-in-out_infinite]" asChild>
            <a href="#offer">Quero começar meu ritual →</a>
          </Button>
          <a
            href="#proof"
            className="text-sm text-pink hover:text-pink/80 transition-colors underline underline-offset-4"
          >
            Ver depoimentos ↓
          </a>
        </div>
        {/* Trust pills */}
        <div className="mt-6 flex flex-wrap gap-3">
          {["✓ 100% Natural", "✓ Sem açúcar", "✓ Sem lactose", "✓ ~30 doses"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-pink/20 bg-sage-lt px-4 py-1.5 text-xs font-medium text-plum/80"
            >
              {t}
            </span>
          ))}
        </div>
        {/* Micro social proof */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-pink text-sm">★★★★★</span>
          <span className="text-xs font-semibold text-plum">4.9</span>
          <span className="text-xs text-brand-gray">— 1.247 avaliações</span>
        </div>
      </div>

      {/* Product Card */}
      <div className="fade-up relative flex items-center justify-center">
        <div className="relative rounded-brand-lg bg-pink-xlt p-10 shadow-lg">
          {/* Floating bubbles */}
          <div className="animate-float absolute -top-4 -left-4 h-14 w-14 rounded-full bg-sage/40 flex items-center justify-center text-xs font-semibold text-plum">
            Canela
          </div>
          <div className="animate-float-delay absolute -top-2 right-6 h-12 w-12 rounded-full bg-pink-lt/60 flex items-center justify-center text-xs font-semibold text-plum">
            Hibisco
          </div>
          <div className="animate-float-delay-2 absolute -bottom-3 -left-2 h-11 w-11 rounded-full bg-sage-lt flex items-center justify-center text-[10px] font-semibold text-plum">
            Chá Verde
          </div>
          <div className="animate-float absolute -bottom-4 right-4 h-12 w-12 rounded-full bg-pink-lt/50 flex items-center justify-center text-[10px] font-semibold text-plum">
            Gengibre
          </div>

          <img
            src={productImg}
            alt="Zion Shot — Shot Matinal Diário sabor Pink Lemonade"
            className="mx-auto w-64 drop-shadow-xl md:w-72"
          />

          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-1 text-pink">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} className="text-lg">{s}</span>
              ))}
            </div>
            <p className="mt-1 text-xs text-brand-gray">
              +1.247 mulheres já começaram
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
