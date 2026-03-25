import CountdownTimer from "./CountdownTimer";

const tiers = [
  {
    name: "Experimente",
    desc: "1 pote",
    oldPrice: "R$149",
    price: "R$129",
    installment: "ou 3x de R$43 sem juros",
    perks: ["~30 doses", "Frete calculado"],
    featured: false,
  },
  {
    name: "Ritual Completo",
    desc: "2 potes",
    oldPrice: "R$298",
    price: "R$239",
    installment: "ou 6x de R$39,83 sem juros",
    perks: ["~60 doses", "Guia digital grátis", "Frete grátis"],
    featured: true,
    badge: "⭐ Mais escolhido",
  },
  {
    name: "Movimento",
    desc: "3 potes",
    oldPrice: "R$447",
    price: "R$329",
    installment: "ou 6x de R$54,83 sem juros",
    perks: ["~90 doses", "Guia digital grátis", "Morning Club VIP", "Frete grátis"],
    featured: false,
  },
];

const PricingSection = () => (
  <section id="offer" className="bg-cream px-6 py-24">
    <div className="mx-auto max-w-5xl">
      <h2 className="fade-up text-center font-display text-4xl font-bold text-plum md:text-[52px]">
        Escolha seu <span className="text-pink">ritual.</span>
      </h2>
      <p className="fade-up mt-4 text-center text-brand-gray">
        Garantia de 15 dias. Sem burocracia. Sem julgamento.
      </p>

      <div className="mt-14">
        <CountdownTimer />
      </div>

      <div className="grid gap-6 md:grid-cols-3 items-start">
        {tiers.map((t, i) => (
          <div
            key={i}
            className={`fade-up relative rounded-brand-lg border p-8 transition-all duration-300 hover:-translate-y-1 ${
              t.featured
                ? "scale-100 md:scale-[1.04] bg-warm-white border-pink shadow-[0_12px_40px_hsl(var(--pink)/0.2)] z-10"
                : "bg-warm-white border-brand-border hover:shadow-lg"
            }`}
          >
            {t.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-pink px-5 py-1.5 text-xs font-semibold text-warm-white shadow-md">
                {t.badge}
              </span>
            )}
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-gray">
              {t.name}
            </p>
            <p className="mt-1 text-xs text-brand-gray">{t.desc}</p>
            <div className="mt-5">
              <span className="text-sm text-brand-gray line-through">{t.oldPrice}</span>
              <span className="ml-2 font-display text-4xl font-bold text-plum">{t.price}</span>
            </div>
            <p className="mt-2 text-base font-bold text-pink">{t.installment}</p>
            <ul className="mt-6 space-y-2.5">
              {t.perks.map((p, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-plum/80">
                  <span className="text-sage">✓</span> {p}
                </li>
              ))}
            </ul>
            <a
              href="#offer"
              className={`mt-8 block w-full rounded-brand py-3.5 text-center text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                t.featured
                  ? "bg-pink text-warm-white shadow-[0_8px_24px_hsl(var(--pink)/0.35)]"
                  : "bg-plum text-warm-white hover:bg-plum/90"
              }`}
            >
              Quero esse →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
