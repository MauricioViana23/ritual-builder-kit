import { Camera, ArrowRight } from "lucide-react";

const results = [
  {
    name: "Mariana S.",
    age: "29 anos",
    quote: "Em 21 dias, minha barriga desinchada sem mudar a alimentação.",
    days: "21 dias",
  },
  {
    name: "Patrícia R.",
    age: "35 anos",
    quote: "Energia o dia todo, sem aquela queda das 15h. Tomo religiosamente.",
    days: "30 dias",
  },
  {
    name: "Gabriela M.",
    age: "42 anos",
    quote: "Minha pele mudou. Minha disposição mudou. Eu mudei.",
    days: "45 dias",
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
            {/* Photo placeholder — replace with real before/after */}
            <div className="relative aspect-[3/4] bg-sage-lt border-b border-dashed border-pink/20">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                <div className="h-14 w-14 rounded-full bg-pink-xlt flex items-center justify-center">
                  <Camera className="h-6 w-6 text-pink" />
                </div>
                <p className="text-sm font-semibold text-plum/60">Foto de {r.name}</p>
                <p className="text-[10px] text-brand-gray">Insira foto real aqui</p>
              </div>

              {/* Days badge */}
              <div className="absolute top-3 right-3 rounded-full bg-pink px-3 py-1 text-xs font-bold text-warm-white">
                {r.days}
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <div className="flex gap-1 text-pink text-sm mb-2">★★★★★</div>
              <p className="text-sm italic text-plum/80 leading-relaxed">"{r.quote}"</p>
              <div className="mt-4 flex items-center gap-3 border-t border-brand-border pt-4">
                {/* Avatar placeholder */}
                <div className="h-10 w-10 rounded-full bg-pink-lt border-2 border-dashed border-pink/30 flex items-center justify-center">
                  <Camera className="h-4 w-4 text-pink/50" />
                </div>
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
