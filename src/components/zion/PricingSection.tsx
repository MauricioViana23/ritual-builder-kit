import { useShopifyProducts } from "@/hooks/useShopifyProducts";
import { Loader2 } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const tierMeta = [
  { name: "Experimente", desc: "1 pote", installment: "ou 3x de R$43 sem juros", perks: ["~30 doses", "Frete calculado"], featured: false },
  { name: "Ritual Completo", desc: "2 potes", installment: "ou 6x de R$39,83 sem juros", perks: ["~60 doses", "Guia digital grátis", "Frete grátis"], featured: true, badge: "⭐ Mais escolhido" },
  { name: "Movimento", desc: "3 potes", installment: "ou 6x de R$54,83 sem juros", perks: ["~90 doses", "Guia digital grátis", "Morning Club VIP", "Frete grátis"], featured: false },
];

const PricingSection = () => {
  const { products, loading, addToCart, isLoading } = useShopifyProducts();
  const product = products[0];
  const variants = product?.node.variants.edges || [];

  return (
    <section id="offer" className="bg-cream px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="fade-up text-center font-display text-3xl font-bold text-plum md:text-[52px]">
          Escolha seu <span className="text-pink">ritual.</span>
        </h2>
        <p className="fade-up mt-4 text-center text-sm text-brand-gray md:text-base">
          Garantia de 15 dias. Sem burocracia. Sem julgamento.
        </p>

        <div className="mt-10 md:mt-14">
          <CountdownTimer />
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-pink" />
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3 items-start">
            {tierMeta.map((t, i) => {
              const variant = variants[i]?.node;
              const price = variant ? `R$${parseFloat(variant.price.amount).toFixed(0)}` : "—";
              const oldPrice = variant?.compareAtPrice ? `R$${parseFloat(variant.compareAtPrice.amount).toFixed(0)}` : "";

              return (
                <div
                  key={i}
                  className={`fade-up relative rounded-brand-lg border p-6 transition-all duration-300 hover:-translate-y-1 md:p-8 ${
                    t.featured
                      ? "order-first scale-100 border-pink bg-warm-white shadow-[0_12px_40px_hsl(var(--pink)/0.2)] md:order-none md:scale-[1.04] z-10"
                      : "bg-warm-white border-brand-border hover:shadow-lg"
                  }`}
                >
                  {t.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-pink px-5 py-1.5 text-xs font-semibold text-warm-white shadow-md">
                      {t.badge}
                    </span>
                  )}
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-gray">{t.name}</p>
                  <p className="mt-1 text-xs text-brand-gray">{t.desc}</p>
                  <div className="mt-5">
                    {oldPrice && <span className="text-sm text-brand-gray line-through">{oldPrice}</span>}
                    <span className="ml-2 font-display text-3xl font-bold text-plum md:text-4xl">{price}</span>
                  </div>
                  <p className="mt-2 text-sm font-bold text-pink md:text-base">{t.installment}</p>
                  <ul className="mt-5 space-y-2.5 md:mt-6">
                    {t.perks.map((p, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-plum/80">
                        <span className="text-sage">✓</span> {p}
                      </li>
                    ))}
                  </ul>
                  <button
                    disabled={isLoading || !product}
                    onClick={() => product && addToCart(product, i)}
                    className={`mt-6 block w-full rounded-brand py-3.5 text-center text-sm font-semibold transition-all hover:-translate-y-0.5 disabled:opacity-50 md:mt-8 ${
                      t.featured
                        ? "bg-pink text-warm-white shadow-[0_8px_24px_hsl(var(--pink)/0.35)]"
                        : "bg-plum text-warm-white hover:bg-plum/90"
                    }`}
                  >
                    {isLoading ? <Loader2 className="mx-auto h-5 w-5 animate-spin" /> : "Quero esse →"}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
