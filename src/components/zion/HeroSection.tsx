import { Button } from "@/components/ui/button";
import { useShopifyProducts } from "@/hooks/useShopifyProducts";
import { Loader2 } from "lucide-react";
import productImg from "@/assets/zion-shot-product.png";

const HeroSection = () => {
  const { products, addToCart, isLoading } = useShopifyProducts();
  const product = products[0];
  const featuredVariantIndex = 1;

  return (
    <section className="relative overflow-hidden bg-cream px-4 pb-16 pt-10 md:px-6 md:pb-20 md:pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-xlt/40 via-transparent to-sage-lt/30 pointer-events-none" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">
        <div className="fade-up">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-pink md:mb-4 md:text-sm">
            Ritual Matinal
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-plum md:text-[64px]">
            Antes do café.
            <br />
            Antes do celular.
            <br />
            <span className="text-pink">Antes de tudo.</span>
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-gray md:mt-6 md:text-base">
            30 segundos em jejum. O Zion Shot limpa, desincha e ativa seu corpo
            para o que vem depois. Natural. Gostoso de verdade. Todo dia.
          </p>
          <div className="mt-6 flex flex-col items-start gap-3 md:mt-8">
            <Button
              variant="hero"
              size="xl"
              className="w-full animate-[pulse_2.5s_ease-in-out_infinite] md:w-auto"
              disabled={isLoading || !product}
              onClick={() => product && addToCart(product, featuredVariantIndex)}
            >
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Quero começar meu ritual →"}
            </Button>
            <a
              href="#proof"
              className="text-sm text-pink hover:text-pink/80 transition-colors underline underline-offset-4"
            >
              Ver depoimentos ↓
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-2 md:mt-6 md:gap-3">
            {["✓ 100% Natural", "✓ Sem açúcar", "✓ Sem lactose", "✓ ~30 doses"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-pink/20 bg-sage-lt px-3 py-1 text-[11px] font-medium text-plum/80 md:px-4 md:py-1.5 md:text-xs"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 md:mt-4">
            <span className="text-pink text-sm">★★★★★</span>
            <span className="text-xs font-semibold text-plum">4.9</span>
            <span className="text-xs text-brand-gray">— 1.247 avaliações</span>
          </div>
        </div>

        <div className="fade-up relative flex items-center justify-center">
          <div className="relative rounded-brand-lg bg-pink-xlt p-6 shadow-lg md:p-10">
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
              className="mx-auto w-52 drop-shadow-xl md:w-72"
            />

            <div className="mt-4 text-center md:mt-6">
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
};

export default HeroSection;
