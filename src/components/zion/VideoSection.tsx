const VideoSection = () => (
  <section className="bg-cream px-6 py-24">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="fade-up font-display text-4xl font-bold text-plum md:text-[52px]">
        Veja o ritual em <span className="text-pink">60 segundos.</span>
      </h2>
      <div className="fade-up mt-10 overflow-hidden rounded-brand-lg">
        <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-plum via-plum to-pink/20 animate-gradient-shift">
          {/* Badge */}
          <span className="absolute top-4 right-4 rounded-full bg-warm-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-warm-white/60 backdrop-blur-sm border border-warm-white/10">
            Em breve
          </span>
          <button
            className="flex h-20 w-20 items-center justify-center rounded-full bg-pink text-warm-white shadow-[0_8px_30px_hsl(var(--pink)/0.5)] transition-all hover:scale-110 hover:shadow-[0_12px_40px_hsl(var(--pink)/0.6)]"
            aria-label="Reproduzir vídeo"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
      <p className="mt-4 text-sm text-brand-gray">Clique para assistir</p>
    </div>
  </section>
);

export default VideoSection;
