const cards = [
  {
    title: "Você acorda cansada",
    text: "Dormiu, mas o corpo ainda parece pesado. Inchado. Como se a noite não tivesse descansado de verdade.",
    emoji: "😔",
  },
  {
    title: "Você começa. Para. Recomeça.",
    text: "Já tentou suplemento antes. Funciona por uma semana. Depois some na gaveta. O problema não é você — é o produto.",
    emoji: "🔄",
  },
  {
    title: "Energia que não dura",
    text: "Café da manhã, energia até as 10h. Depois, aquela queda. Sem foco. Como se o dia já tivesse te vencido.",
    emoji: "⚡",
  },
];

const TensionSection = () => (
  <section className="bg-cream px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <h2 className="fade-up text-center font-display text-4xl font-bold text-plum md:text-[52px]">
        Você não precisa de mais
        <br />
        <span className="text-pink">força de vontade.</span>
      </h2>
      <p className="fade-up mx-auto mt-4 max-w-lg text-center text-brand-gray">
        Precisa de um ritual que seja bom o suficiente pra você querer fazer amanhã de novo.
      </p>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <div
            key={i}
            className="fade-up group rounded-brand bg-warm-white p-8 border border-brand-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_hsl(var(--pink)/0.12)]"
          >
            <span className="text-4xl">{c.emoji}</span>
            <h3 className="mt-4 font-display text-xl font-semibold text-plum">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-gray">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TensionSection;
