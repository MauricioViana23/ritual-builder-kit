import { Instagram } from "lucide-react";

const ugcItems = [
  { name: "@ana.fit", caption: "Meu ritual de toda manhã 💕", likes: "342", img: "/assets/ugc-ana-fit.jpg" },
  { name: "@camilawellness", caption: "Pink lemonade que cura a alma ✨", likes: "518", img: "/assets/ugc-camila-wellness.jpg" },
  { name: "@ju.lifestyle", caption: "Dia 30 e não paro mais!", likes: "289", img: "/assets/ugc-ju-lifestyle.jpg" },
  { name: "@ferbianchini", caption: "O segredo da minha manhã 🌸", likes: "456", img: "/assets/ugc-fer-bianchini.jpg" },
];

const UGCTestimonialsGrid = () => (
  <section className="bg-plum px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <div className="fade-up text-center mb-14">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Instagram className="h-5 w-5 text-pink-lt" />
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-lt">
            Da comunidade
          </p>
        </div>
        <h2 className="font-display text-4xl font-bold text-warm-white md:text-[52px]">
          Direto do <span className="text-pink-lt">Instagram.</span>
        </h2>
        <p className="mt-4 text-warm-white/60 max-w-md mx-auto">
          Postagens reais de quem vive o ritual ZionFit todo dia.
        </p>
      </div>

      <div className="fade-up grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {ugcItems.map((item, i) => (
          <div
            key={i}
            className="group relative aspect-square overflow-hidden rounded-brand transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={768}
              height={768}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs font-bold text-warm-white">{item.name}</p>
              <p className="text-[10px] text-warm-white/70 mt-0.5">{item.caption}</p>
              <p className="text-[10px] text-pink-lt mt-1">❤️ {item.likes}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="fade-up mt-10 text-center">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-brand border border-warm-white/20 px-8 py-3 text-sm font-semibold text-warm-white hover:bg-warm-white/10 transition-all"
        >
          <Instagram className="h-4 w-4" />
          Siga @zionfit no Instagram
        </a>
      </div>
    </div>
  </section>
);

export default UGCTestimonialsGrid;
