const steps = [
  { num: "1", title: "Coloque", desc: "1 colher em 200ml de água gelada" },
  { num: "2", title: "Misture", desc: "Agite 10 segundos. Pink Lemonade perfeito." },
  { num: "3", title: "Tome em jejum", desc: "Antes de tudo. O dia começa diferente." },
];

const HowToUseSection = () => (
  <section className="bg-warm-white px-6 py-24">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="fade-up font-display text-4xl font-bold text-plum md:text-[52px]">
        Simples assim<span className="text-pink">.</span>
      </h2>
      <p className="fade-up mt-4 text-brand-gray">3 passos. 30 segundos. Todo dia.</p>
      <div className="fade-up mt-14 grid gap-8 md:grid-cols-3 relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-brand-border" />
        {steps.map((s) => (
          <div key={s.num} className="relative flex flex-col items-center">
            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-pink-xlt">
              <span className="font-display text-3xl font-bold text-pink">{s.num}</span>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-plum">{s.title}</h3>
            <p className="mt-2 text-sm text-brand-gray">{s.desc}</p>
          </div>
        ))}
      </div>
      <a
        href="#offer"
        className="fade-up mt-12 inline-flex items-center gap-2 rounded-brand bg-pink px-10 py-4 text-base font-semibold text-warm-white shadow-[0_8px_24px_hsl(var(--pink)/0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_hsl(var(--pink)/0.55)]"
      >
        Quero começar meu ritual →
      </a>
    </div>
  </section>
);

export default HowToUseSection;
