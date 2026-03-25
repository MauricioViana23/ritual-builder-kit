const logos = ["Folha", "Glamour", "Vogue", "GQ Wellness", "Marie Claire"];

const SocialProofBar = () => (
  <div className="bg-warm-white py-10">
    <div className="mx-auto max-w-4xl px-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px flex-1 bg-brand-border" />
        <div className="flex items-center gap-2">
          <span className="text-pink text-sm">★★★★★</span>
          <span className="text-xs font-bold text-plum">4.9/5</span>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">
          Como visto em
        </p>
        <div className="h-px flex-1 bg-brand-border" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 px-6 opacity-50">
        {logos.map((name) => (
          <span
            key={name}
            className="font-display text-xl font-semibold italic text-plum md:text-2xl"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default SocialProofBar;
