const benefits = [
  { emoji: "💧", title: "Desincha de verdade", sub: "Hibisco + cranberry", desc: "Sem cortar sal. Sem sofrimento." },
  { emoji: "⚡", title: "Energia sem pico", sub: "Chá verde + canela", desc: "Sem nervosismo. Sem queda às 10h." },
  { emoji: "🍬", title: "Controla sem proibir", sub: "Gengibre natural", desc: "Não é dieta. É química natural a seu favor." },
  { emoji: "🌿", title: "Limpa por dentro", sub: "7 vitaminas + antioxidantes", desc: "Leveza real. Todo dia." },
];

const BenefitsSection = () => (
  <section id="benefits" className="bg-plum px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <h2 className="fade-up text-center font-display text-4xl font-bold text-warm-white md:text-[52px]">
        Resultado real.
        <br />
        <span className="text-pink-lt">Sem cobrar sua paz.</span>
      </h2>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="fade-up shimmer-card group rounded-brand border border-warm-white/10 bg-warm-white/5 p-8 transition-all duration-300 hover:bg-warm-white/10 hover:border-pink/30"
          >
            <span className="text-3xl">{b.emoji}</span>
            <h3 className="mt-4 font-display text-2xl font-semibold text-warm-white">{b.title}</h3>
            <p className="mt-1 text-sm font-medium text-pink-lt">{b.sub}</p>
            <p className="mt-3 text-sm text-warm-white/70">{b.desc}</p>
          </div>
        ))}
      </div>
      <div className="fade-up mt-12 text-center">
        <a
          href="#offer"
          className="inline-flex items-center gap-2 rounded-brand bg-pink px-10 py-4 text-base font-semibold text-warm-white shadow-[0_8px_24px_hsl(var(--pink)/0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_hsl(var(--pink)/0.55)]"
        >
          Quero começar meu ritual →
        </a>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
