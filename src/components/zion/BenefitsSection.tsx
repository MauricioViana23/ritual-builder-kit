import { useShopifyProducts } from "@/hooks/useShopifyProducts";
import { Loader2 } from "lucide-react";

const benefits = [
  { emoji: "💧", title: "Desincha de verdade", sub: "Hibisco + cranberry", desc: "Sem cortar sal. Sem sofrimento." },
  { emoji: "⚡", title: "Energia sem pico", sub: "Chá verde + canela", desc: "Sem nervosismo. Sem queda às 10h." },
  { emoji: "🍬", title: "Controla sem proibir", sub: "Gengibre natural", desc: "Não é dieta. É química natural a seu favor." },
  { emoji: "🌿", title: "Limpa por dentro", sub: "7 vitaminas + antioxidantes", desc: "Leveza real. Todo dia." },
];

const BenefitsSection = () => {
  const { products, addToCart, isLoading } = useShopifyProducts();
  const product = products[0];

  return (
    <section id="benefits" className="bg-plum px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="fade-up text-center font-display text-3xl font-bold text-warm-white md:text-[52px]">
          Resultado real.
          <br />
          <span className="text-pink-lt">Sem cobrar sua paz.</span>
        </h2>
        <div className="mt-10 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="fade-up shimmer-card group rounded-brand border border-warm-white/10 bg-warm-white/5 p-6 transition-all duration-300 hover:bg-warm-white/10 hover:border-pink/30 md:p-8"
            >
              <span className="text-3xl">{b.emoji}</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-warm-white md:mt-4 md:text-2xl">{b.title}</h3>
              <p className="mt-1 text-sm font-medium text-pink-lt">{b.sub}</p>
              <p className="mt-2 text-sm text-warm-white/70 md:mt-3">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="fade-up mt-10 text-center md:mt-12">
          <button
            disabled={isLoading || !product}
            onClick={() => product && addToCart(product, 1)}
            className="inline-flex items-center gap-2 rounded-brand bg-pink px-8 py-3.5 text-sm font-semibold text-warm-white shadow-[0_8px_24px_hsl(var(--pink)/0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_hsl(var(--pink)/0.55)] disabled:opacity-50 md:px-10 md:py-4 md:text-base"
          >
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Quero começar meu ritual →"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
