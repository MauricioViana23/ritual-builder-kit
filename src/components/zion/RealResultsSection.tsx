import { ArrowRight } from "lucide-react";

const results = [
  {
    name: "Mariana S.",
    age: "29 anos",
    quote: "Em 21 dias, minha barriga desinchada sem mudar a alimentação.",
    days: "21 dias",
    photo: "/assets/result-mariana.jpg",
    avatar: "/assets/avatar-mariana.jpg",
  },
  {
    name: "Patrícia R.",
    age: "35 anos",
    quote: "Energia o dia todo, sem aquela queda das 15h. Tomo religiosamente.",
    days: "30 dias",
    photo: "/assets/result-patricia.jpg",
    avatar: "/assets/avatar-patricia.jpg",
  },
  {
    name: "Gabriela M.",
    age: "42 anos",
    quote: "Minha pele mudou. Minha disposição mudou. Eu mudei.",
    days: "45 dias",
    photo: "/assets/result-gabriela.jpg",
    avatar: "/assets/avatar-gabriela.jpg",
  },
];

const RealResultsSection = () => (
  <section className="bg-cream px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <div className="fade-up text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-pink">
          Resultados reais
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold text-plum md:text-[52px]">
          Transformações de <span className="text-pink">verdade.</span>
        </h2>
        <p className="mt-4 text-brand-gray max-w-lg mx-auto">
          Fotos enviadas por nossas clientes. Sem filtro. Sem edição.
        </p>
      </div>

      <div className="fade-up grid gap-8 md:grid-cols-3">
        {results.map((r, i) => (
          <div
            key={i}
            className="group rounded-brand-lg bg-warm-white border border-brand-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[3/4]">
              <img
                src={r.photo}
                alt={`Resultado de ${r.name}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={600}
                height={800}
              />
              <div className="absolute top-3 right-3 rounded-full bg-pink px-3 py-1 text-xs font-bold text-warm-white">
                {r.days}
              </div>
            </div>

            <div className="p-6">
              <div className="flex gap-1 text-pink text-sm mb-2">★★★★★</div>
              <p className="text-sm italic text-plum/80 leading-relaxed">"{r.quote}"</p>
              <div className="mt-4 flex items-center gap-3 border-t border-brand-border pt-4">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                  width={512}
                  height={512}
                />
                <div>
                  <p className="font-display text-sm font-semibold text-plum">{r.name}</p>
                  <p className="text-xs text-brand-gray">{r.age}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fade-up mt-12 text-center">
        <a
          href="#offer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-pink hover:text-pink/80 transition-colors"
        >
          Ver mais resultados <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

export default RealResultsSection;
