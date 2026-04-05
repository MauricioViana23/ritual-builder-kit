import { Droplets, Zap, Flame, Heart } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "menos inchaço, mais leveza",
    desc: "hibisco reduzindo retenção sem sofrimento",
    side: "left" as const,
  },
  {
    icon: Flame,
    title: "menos fome, mais controle",
    desc: "gengibre + canela ativando saciedade natural",
    side: "left" as const,
  },
  {
    icon: Zap,
    title: "mais disposição o dia inteiro",
    desc: "chá verde + guaraná sem pico, sem queda",
    side: "right" as const,
  },
  {
    icon: Heart,
    title: "metabolismo funcionando como deveria",
    desc: "vitaminas e antioxidantes",
    side: "right" as const,
  },
];

const BenefitsHeroSection = () => {
  const left = benefits.filter((b) => b.side === "left");
  const right = benefits.filter((b) => b.side === "right");

  return (
    <section className="bg-[#F7F6F2] px-5 py-16 md:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="fade-up text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-[44px] font-bold leading-tight text-plum">
            finalmente, um <span className="font-extrabold">corpo leve</span>
            <br className="hidden md:block" />{" "}
            que acompanha seu dia ✨
          </h2>
          <p className="mt-4 text-sm md:text-base text-brand-gray max-w-lg mx-auto">
            um ritual simples que reduz inchaço, melhora disposição e regula seu organismo
          </p>
        </div>

        {/* Mobile: stacked layout */}
        <div className="fade-up md:hidden flex flex-col items-center gap-8">
          {/* Circular image */}
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)] border-4 border-warm-white">
            <img
              src="/assets/benefits-hero.jpg"
              alt="Mulher brasileira com drink rosa e suplemento ZionFit"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>

          {/* Benefits stacked */}
          <div className="w-full space-y-6">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-4 px-2">
                <div className="shrink-0 mt-1 h-10 w-10 rounded-full bg-sage-lt/60 flex items-center justify-center">
                  <b.icon className="h-5 w-5 text-plum/70" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-plum">{b.title}</p>
                  <p className="mt-1 text-sm text-brand-gray leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: left - circle - right */}
        <div className="fade-up hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-10 lg:gap-16">
          {/* Left benefits */}
          <div className="space-y-10">
            {left.map((b, i) => (
              <div key={i} className="text-right flex flex-col items-end">
                <div className="flex items-center gap-3 mb-2">
                  <p className="font-display text-lg font-semibold text-plum">{b.title}</p>
                  <div className="h-10 w-10 rounded-full bg-sage-lt/60 flex items-center justify-center shrink-0">
                    <b.icon className="h-5 w-5 text-plum/70" strokeWidth={1.5} />
                  </div>
                </div>
                <p className="text-sm text-brand-gray max-w-[240px] ml-auto">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Center circle */}
          <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-[0_12px_50px_rgba(0,0,0,0.08)] border-4 border-warm-white">
            <img
              src="/assets/benefits-hero.jpg"
              alt="Mulher brasileira com drink rosa e suplemento ZionFit"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>

          {/* Right benefits */}
          <div className="space-y-10">
            {right.map((b, i) => (
              <div key={i} className="text-left flex flex-col items-start">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-sage-lt/60 flex items-center justify-center shrink-0">
                    <b.icon className="h-5 w-5 text-plum/70" strokeWidth={1.5} />
                  </div>
                  <p className="font-display text-lg font-semibold text-plum">{b.title}</p>
                </div>
                <p className="text-sm text-brand-gray max-w-[240px]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="fade-up mt-14 md:mt-20 text-center space-y-3">
          <p className="text-sm font-medium text-plum/70">
            +2.000 pessoas já começaram esse ritual matinal
          </p>
          <p className="font-display text-base md:text-lg italic text-plum/50">
            cuidar do corpo é honrar o propósito que Deus te deu
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsHeroSection;
