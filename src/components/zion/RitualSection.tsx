const steps = [
  { time: "06:30", title: "Acorda", desc: "Antes do celular. Esse momento é seu." },
  { time: "06:31", title: "Gratidão", desc: "30 segundos de intenção. Oração. Presença." },
  { time: "06:32", title: "Zion Shot", desc: "Em jejum. Pink Lemonade. Natural. O corpo ativa." },
  { time: "O dia", title: "Energia limpa", desc: "Sem inchaço. Corpo e mente no lugar." },
  { time: "Resultado", title: "Consistência", desc: "O corpo responde à consistência — não à força de vontade." },
];

const RitualSection = () => (
  <section className="bg-warm-white px-6 py-24">
    <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2">
      <div className="fade-up">
        <p className="text-sm font-semibold uppercase tracking-widest text-sage">Como funciona</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-plum md:text-[52px] md:leading-[1.1]">
          Seu novo ritual
          <br />
          <span className="text-pink">matinal.</span>
        </h2>
        <p className="mt-4 max-w-sm text-brand-gray">
          Não é dieta. Não é treino. É um gesto simples que organiza o resto do seu dia.
        </p>
        <a
          href="#offer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-pink hover:text-pink/80 transition-colors"
        >
          Começar meu ritual → 
        </a>
      </div>
      <div className="fade-up space-y-0">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-5 pb-8 relative">
            {/* Timeline line */}
            {i < steps.length - 1 && (
              <div className="absolute left-5 top-10 w-px h-full bg-brand-border" />
            )}
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-xlt text-xs font-bold text-pink">
              {s.time.length <= 5 ? s.time : "✓"}
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-plum">{s.title}</h4>
              <p className="mt-1 text-sm text-brand-gray">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RitualSection;
