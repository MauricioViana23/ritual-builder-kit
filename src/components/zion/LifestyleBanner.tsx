import { Camera } from "lucide-react";

const LifestyleBanner = () => (
  <section className="relative overflow-hidden">
    {/* Full-width photo banner placeholder */}
    <div className="relative h-[320px] md:h-[480px] bg-gradient-to-r from-sage-lt via-pink-xlt to-sage-lt border-y-2 border-dashed border-pink/20">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center p-6">
        <div className="h-16 w-16 rounded-full bg-pink-xlt flex items-center justify-center">
          <Camera className="h-7 w-7 text-pink" />
        </div>
        <p className="font-display text-xl font-semibold text-plum/60">
          Foto Lifestyle — Produto em uso
        </p>
        <p className="text-sm text-brand-gray max-w-md">
          Insira aqui uma foto grande de estilo de vida: mulher preparando o shot pela manhã,
          na cozinha, com a família, ou em momento de autocuidado.
        </p>
      </div>

      {/* Gradient overlay for when real photo is added */}
      <div className="absolute inset-0 bg-gradient-to-r from-plum/70 via-plum/30 to-transparent pointer-events-none opacity-0" />
    </div>

    {/* Overlay text — becomes visible when real photo is added */}
    <div className="absolute inset-0 hidden items-center pointer-events-none">
      <div className="mx-auto max-w-6xl px-6 w-full">
        <div className="max-w-md">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-lt">
            Ritual real
          </p>
          <h3 className="mt-3 font-display text-3xl font-bold text-warm-white md:text-4xl">
            30 segundos que
            <br />
            mudam o dia inteiro.
          </h3>
          <a
            href="#offer"
            className="mt-6 inline-flex items-center gap-2 rounded-brand bg-pink px-8 py-3 text-sm font-semibold text-warm-white shadow-lg transition-all hover:-translate-y-0.5"
          >
            Quero começar →
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default LifestyleBanner;
