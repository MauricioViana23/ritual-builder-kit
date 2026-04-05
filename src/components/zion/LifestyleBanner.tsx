import lifestyleBannerImg from "@/assets/lifestyle-banner.jpg";

const LifestyleBanner = () => (
  <section className="relative overflow-hidden">
    <div className="relative h-[320px] md:h-[480px]">
      <img
        src={lifestyleBannerImg}
        alt="Produto ZionFit em uma cozinha moderna com limonada rosa"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={1080}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-plum/70 via-plum/30 to-transparent pointer-events-none" />
    </div>

    {/* Overlay text */}
    <div className="absolute inset-0 flex items-center pointer-events-none">
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
            className="pointer-events-auto mt-6 inline-flex items-center gap-2 rounded-brand bg-pink px-8 py-3 text-sm font-semibold text-warm-white shadow-lg transition-all hover:-translate-y-0.5"
          >
            Quero começar →
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default LifestyleBanner;
