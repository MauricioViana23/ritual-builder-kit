import { Camera } from "lucide-react";

const galleryItems = [
  { label: "Manhã com Zion Shot", aspect: "aspect-square" },
  { label: "Preparando o ritual", aspect: "aspect-[4/5]" },
  { label: "Na cozinha", aspect: "aspect-square" },
  { label: "Resultado real", aspect: "aspect-[4/5]" },
  { label: "Estilo de vida", aspect: "aspect-square" },
  { label: "Minha rotina", aspect: "aspect-square" },
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

      {/* Masonry-style grid */}
      <div className="fade-up grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className={`group relative ${item.aspect} overflow-hidden rounded-brand bg-sage-lt border-2 border-dashed border-pink/20 hover:border-pink/50 transition-all duration-300`}
          >
            {/* Placeholder — substitute by <img> with the real photo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center p-4">
              <div className="h-12 w-12 rounded-full bg-pink-xlt flex items-center justify-center">
                <Camera className="h-5 w-5 text-pink" />
              </div>
              <p className="text-xs font-semibold text-plum/60">{item.label}</p>
              <p className="text-[10px] text-brand-gray">Insira foto aqui</p>
            </div>

            {/* Hover overlay for when real photos are added */}
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
