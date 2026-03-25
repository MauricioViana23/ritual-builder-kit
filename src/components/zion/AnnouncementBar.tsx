const items = [
  "🚚 Frete grátis acima de R$199",
  "🔥 Último lote com preço especial",
  "🛡️ Garantia de 15 dias",
  "💗 +500 mulheres já começaram",
];

const AnnouncementBar = () => (
  <div className="bg-plum overflow-hidden py-2.5">
    <div className="animate-ticker flex whitespace-nowrap">
      {[...items, ...items, ...items, ...items].map((item, i) => (
        <span key={i} className="mx-8 text-sm font-body text-warm-white/90">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default AnnouncementBar;
