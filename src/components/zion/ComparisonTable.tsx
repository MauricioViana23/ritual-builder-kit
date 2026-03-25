const rows = [
  { label: "Sabor", zion: "Pink Lemonade 🩷", generic: "Amargo / químico", lemon: "Limão", zionGood: true, genericGood: false, lemonGood: null },
  { label: "Ritual diário", zion: "30 seg, gostoso", generic: "Varia, difícil manter", lemon: "Simples mas limitado", zionGood: true, genericGood: false, lemonGood: null },
  { label: "Benefícios completos", zion: "Detox + energia + saciedade + 7 vitaminas", generic: "1-2 benefícios isolados", lemon: "Hidratação + vitamina C", zionGood: true, genericGood: false, lemonGood: null },
  { label: "Consistência", zion: "Você QUER repetir", generic: "Abandono em ~7 dias", lemon: "Enjoa rápido", zionGood: true, genericGood: false, lemonGood: false },
  { label: "Preço/dia", zion: "~R$4,30", generic: "R$3-8", lemon: "~R$1", zionGood: true, genericGood: null, lemonGood: true },
];

const CheckIcon = () => (
  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sage-lt text-sage text-sm font-bold">✓</span>
);
const CrossIcon = () => (
  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-pink-xlt text-pink text-sm font-bold">✗</span>
);

const ComparisonTable = () => (
  <section className="bg-warm-white px-6 py-24">
    <div className="mx-auto max-w-4xl">
      <h2 className="fade-up text-center font-display text-4xl font-bold text-plum md:text-[52px]">
        Por que o <span className="text-pink">Zion Shot?</span>
      </h2>
      <p className="fade-up mt-4 text-center text-brand-gray">
        Compare e decida com clareza.
      </p>

      <div className="fade-up mt-14 overflow-x-auto rounded-brand-lg border border-brand-border">
        <table className="w-full min-w-[600px] text-sm">
          <thead>
            <tr className="border-b border-brand-border">
              <th className="p-4 text-left font-body text-xs font-semibold uppercase tracking-wider text-brand-gray">
                Critério
              </th>
              <th className="bg-pink/10 p-4 text-center font-display text-base font-bold text-pink">
                Zion Shot ⭐
              </th>
              <th className="p-4 text-center font-body text-xs font-semibold uppercase tracking-wider text-brand-gray">
                Suplemento Genérico
              </th>
              <th className="p-4 text-center font-body text-xs font-semibold uppercase tracking-wider text-brand-gray">
                Água com Limão
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-brand-border last:border-0">
                <td className="p-4 font-semibold text-plum">{r.label}</td>
                <td className="bg-pink/5 p-4 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <CheckIcon />
                    <span className="text-xs font-semibold text-plum">{r.zion}</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex flex-col items-center gap-1">
                    {r.genericGood === false ? <CrossIcon /> : r.genericGood === true ? <CheckIcon /> : null}
                    <span className="text-xs text-brand-gray">{r.generic}</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex flex-col items-center gap-1">
                    {r.lemonGood === false ? <CrossIcon /> : r.lemonGood === true ? <CheckIcon /> : null}
                    <span className="text-xs text-brand-gray">{r.lemon}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ComparisonTable;
