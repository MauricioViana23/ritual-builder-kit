const cards = [
  {
    title: "desincha & leveza",
    desc: "Hibisco e cranberry trabalham juntos como diuréticos naturais — reduzindo o inchaço sem desconforto, com leveza desde a primeira semana.",
    img: "/assets/gallery-2.jpg",
  },
  {
    title: "energia sem pico",
    desc: "Chá verde libera energia de forma sustentada, sem aquele pico seguido de queda. Você se sente acordada de verdade.",
    img: "/assets/gallery-1.jpg",
  },
  {
    title: "ativa seu metabolismo",
    desc: "Gengibre e canela são termogênicos naturais que aceleram seu metabolismo logo cedo — quando o corpo mais precisa.",
    img: "/assets/gallery-4.jpg",
  },
  {
    title: "nutrição que sustenta",
    desc: "7 vitaminas essenciais que garantem que seu corpo tenha o que precisa pra funcionar bem, todos os dias.",
    img: "/assets/gallery-3.jpg",
  },
];

const RitualIngredientsSection = () => (
  <section className="bg-warm-white px-5 py-10 md:py-24">
    <div className="mx-auto max-w-5xl">
      {/* Header */}
      <div className="fade-up text-center mb-10 md:mb-16 px-2">
        <h2 className="font-display text-3xl font-bold text-plum md:text-[44px] md:leading-tight">
          O que tem dentro do seu ritual — e por que funciona
        </h2>
        <p className="mt-4 text-sm text-brand-gray max-w-md mx-auto leading-relaxed md:text-base">
          Cada ingrediente foi escolhido para fazer seu corpo responder desde a manhã — sem extremos, sem esforço, com consistência.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-7 md:grid md:grid-cols-2 md:gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="fade-up overflow-hidden rounded-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-warm-white"
          >
            <div className="relative h-[240px] md:h-[260px] overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover scale-105"
                loading="lazy"
                width={768}
                height={512}
              />
            </div>
            <div className="bg-[#CFE3C8] px-5 py-5 md:px-6 md:py-6">
              <h3 className="font-display text-lg font-medium text-plum lowercase">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-plum/70 leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Closing block */}
      <div className="fade-up mt-14 md:mt-20 text-center px-4 py-10 md:py-14">
        <p className="font-display text-xl font-medium text-plum leading-relaxed md:text-2xl max-w-lg mx-auto">
          Não é sobre o ingrediente.{" "}
          <span className="text-pink">É sobre repetir.</span>
        </p>
        <p className="mt-4 text-sm text-brand-gray max-w-md mx-auto leading-relaxed">
          Um ritual simples, com sabor leve e fácil de manter — porque o que transforma seu corpo não é intensidade… é consistência.
        </p>
      </div>
    </div>
  </section>
);

export default RitualIngredientsSection;
