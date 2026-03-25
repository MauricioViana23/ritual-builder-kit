const words = [
  "DESINCHA", "ENERGIA LIMPA", "RITUAL", "PINK LEMONADE", "NATURAL",
  "SEM AÇÚCAR", "CANELA", "HIBISCO", "CHÁ VERDE", "7 VITAMINAS",
];

const TickerStrip = () => (
  <div className="overflow-hidden bg-pink-xlt py-4 border-y border-brand-border">
    <div className="animate-ticker flex whitespace-nowrap">
      {[...words, ...words, ...words, ...words].map((w, i) => (
        <span key={i} className="mx-6 text-base font-semibold uppercase tracking-[0.2em] text-plum/50 font-body">
          {w}
          <span className="mx-6 text-pink font-bold">✦</span>
        </span>
      ))}
    </div>
  </div>
);

export default TickerStrip;
