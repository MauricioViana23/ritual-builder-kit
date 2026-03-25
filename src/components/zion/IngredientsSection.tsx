const ingredients = [
  { name: "Canela", desc: "Regula glicose e potencializa metabolismo energético.", emoji: "🟤" },
  { name: "Gengibre", desc: "Termogênico natural. Reduz inchaço e melhora digestão.", emoji: "🫚" },
  { name: "Chá Verde", desc: "Energia sustentada sem pico. Antioxidante poderoso.", emoji: "🍵" },
  { name: "Hibisco", desc: "Diurético natural. Ajuda a desinchar com leveza.", emoji: "🌺" },
  { name: "Cranberry", desc: "Proteção antioxidante e suporte ao trato urinário.", emoji: "🫐" },
  { name: "7 Vitaminas", desc: "Complexo essencial para energia, imunidade e vitalidade.", emoji: "💊" },
];

const IngredientsSection = () => (
  <section className="bg-warm-white px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <h2 className="fade-up text-center font-display text-4xl font-bold text-plum md:text-[52px]">
        O que tem <span className="text-pink">dentro.</span>
      </h2>
      <p className="fade-up mx-auto mt-4 max-w-md text-center text-brand-gray">
        Cada ingrediente foi escolhido por um motivo. Sem enrolação, sem enchimento.
      </p>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {ingredients.map((ing, i) => (
          <div
            key={i}
            className="fade-up shimmer-card group rounded-brand border border-brand-border bg-cream/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-pink/40 hover:shadow-[0_8px_30px_hsl(var(--pink)/0.12)]"
          >
            <span className="text-3xl">{ing.emoji}</span>
            <h3 className="mt-3 font-display text-xl font-semibold text-plum">{ing.name}</h3>
            <p className="mt-2 text-sm text-brand-gray">{ing.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IngredientsSection;
