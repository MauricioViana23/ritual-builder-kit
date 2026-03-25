import { useState } from "react";

const faqs = [
  {
    q: "Em quanto tempo vou sentir diferença?",
    a: "Leveza e menos inchaço na primeira semana. Metabolismo em 2-3 semanas. O ritual precisa ser todo dia — o corpo responde à consistência.",
  },
  {
    q: "Precisa tomar em jejum?",
    a: "Em jejum potencializa absorção e detox. Mas qualquer horário traz benefícios.",
  },
  {
    q: "Tem gosto de remédio?",
    a: "Pink Lemonade. Natural. Sem açúcar. Gostoso de verdade. Nenhuma força de vontade necessária.",
  },
  {
    q: "Qual a diferença pro copo de água com limão?",
    a: "Limão hidrata. O Zion Shot faz isso + metabolismo + retenção + 7 vitaminas. Podem coexistir. Mas só um tem Pink Lemonade 😉",
  },
  {
    q: "Tem açúcar, lactose ou glúten?",
    a: "Não, não e não.",
  },
  {
    q: "Quantas doses por pote?",
    a: "~30 doses. Um mês completo de ritual.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="fade-up text-center font-display text-4xl font-bold text-plum md:text-[52px]">
          Dúvidas<span className="text-pink">?</span>
        </h2>
        <div className="mt-14 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="fade-up rounded-brand border border-brand-border bg-warm-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-display text-lg font-semibold text-plum pr-4">{faq.q}</span>
                <span
                  className={`shrink-0 text-2xl text-pink transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`faq-answer px-6 ${openIndex === i ? "open pb-6" : ""}`}
                style={{ maxHeight: openIndex === i ? "300px" : "0" }}
              >
                <p className="text-sm leading-relaxed text-brand-gray">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
