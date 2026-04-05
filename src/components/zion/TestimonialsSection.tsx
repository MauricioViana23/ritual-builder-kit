const testimonials = [
  {
    name: "Ana Paula",
    info: "31 anos, São Paulo",
    text: "Na primeira semana já senti a diferença no inchaço. Na segunda semana virou ritual. Agora não consigo imaginar minha manhã sem ele.",
    avatar: "/assets/avatar-ana-paula.jpg",
  },
  {
    name: "Camila",
    info: "28 anos, Belo Horizonte",
    text: "O que me ganhou foi o sabor. Parece uma limonada cor de rosa. Tomo todo dia há 2 meses e não parei uma vez.",
    avatar: "/assets/avatar-camila.jpg",
  },
  {
    name: "Juliana",
    info: "34 anos, Goiânia",
    text: "Minha pastora viu minha transformação e perguntou o que eu estava fazendo diferente. Falei: cuido do templo todo dia de manhã.",
    avatar: "/assets/avatar-juliana.jpg",
  },
];

const featured = {
  name: "Fernanda Costa",
  info: "37 anos, Curitiba",
  text: "Eu não tomo o Zion Shot pra emagrecer. Tomo porque quando eu pulo, meu dia inteiro parece que faltou algo. Isso é hábito. Isso é ritual. Isso é ZionFit.",
  photo: "/assets/featured-fernanda.jpg",
  avatar: "/assets/avatar-fernanda.jpg",
};

const TestimonialsSection = () => (
  <section id="proof" className="bg-cream px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <h2 className="fade-up text-center font-display text-4xl font-bold text-plum md:text-[52px]">
        Quem já <span className="text-pink">começou.</span>
      </h2>
      <div className="fade-up mt-4 flex items-center justify-center gap-2">
        <span className="text-pink text-base">★★★★★</span>
        <span className="rounded-full bg-pink-xlt px-3 py-1 text-xs font-bold text-pink">4.9/5</span>
        <span className="text-xs text-brand-gray">baseado em 1.247 avaliações</span>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="fade-up shimmer-card rounded-brand bg-warm-white p-8 border border-brand-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex gap-1 text-pink text-lg mb-4">★★★★★</div>
            <p className="text-sm leading-relaxed text-plum/80 italic">"{t.text}"</p>
            <div className="mt-5 border-t border-brand-border pt-4 flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-12 w-12 rounded-full object-cover shrink-0"
                loading="lazy"
                width={512}
                height={512}
              />
              <div>
                <p className="font-display text-base font-semibold text-plum">{t.name}</p>
                <p className="text-xs text-brand-gray">{t.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured */}
      <div className="fade-up mt-10 rounded-brand-lg bg-plum overflow-hidden md:grid md:grid-cols-[1fr_1.5fr]">
        <div className="relative aspect-square md:aspect-auto">
          <img
            src={featured.photo}
            alt={`Foto de ${featured.name}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            width={768}
            height={768}
          />
        </div>

        <div className="p-10 md:p-14 text-center md:text-left flex flex-col justify-center">
          <div className="flex justify-center md:justify-start gap-1 text-pink-lt text-xl mb-6">★★★★★</div>
          <p className="mx-auto md:mx-0 max-w-2xl font-display text-2xl font-medium italic leading-relaxed text-warm-white md:text-3xl">
            "{featured.text}"
          </p>
          <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
            <img
              src={featured.avatar}
              alt={featured.name}
              className="h-12 w-12 rounded-full object-cover"
              loading="lazy"
              width={512}
              height={512}
            />
            <div className="text-left">
              <p className="font-display text-lg font-semibold text-pink-lt">{featured.name}</p>
              <p className="text-sm text-warm-white/60">{featured.info}</p>
            </div>
          </div>
          <div className="mt-10">
            <p className="font-display text-6xl font-bold text-pink md:text-7xl">+1.247</p>
            <p className="mt-2 text-sm text-warm-white/70">mulheres que não pulam mais a manhã</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
