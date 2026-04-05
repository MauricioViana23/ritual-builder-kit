const galleryItems = [
  { label: "Manhã com Zion Shot", aspect: "aspect-square", img: "/assets/gallery-1.jpg" },
  { label: "Preparando o ritual", aspect: "aspect-[4/5]", img: "/assets/gallery-2.jpg" },
  { label: "Na cozinha", aspect: "aspect-square", img: "/assets/gallery-3.jpg" },
  { label: "Resultado real", aspect: "aspect-[4/5]", img: "/assets/gallery-4.jpg" },
  { label: "Estilo de vida", aspect: "aspect-square", img: "/assets/gallery-5.jpg" },
  { label: "Minha rotina", aspect: "aspect-square", img: "/assets/gallery-6.jpg" },
];

const LifestyleGallery = () => (
  <section className="bg-warm-white px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <div className="fade-up text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-pink">
          #ZionFitNaRotina
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold text-plum md:text-[52px]">
          Elas já vivem o ritual.
        </h2>
        <p className="mt-4 text-brand-gray max-w-md mx-auto">
          Fotos reais de quem fez do Zion Shot parte da manhã.
        </p>
      </div>

      <div className="fade-up grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className={`group relative ${item.aspect} overflow-hidden rounded-brand transition-all duration-300`}
          >
            <img
              src={item.img}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={768}
              height={768}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs font-semibold text-warm-white">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="fade-up mt-10 text-center">
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

export default LifestyleGallery;
