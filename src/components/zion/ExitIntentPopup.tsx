import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const trigger = useCallback(() => {
    if (!dismissed) setShow(true);
  }, [dismissed]);

  useEffect(() => {
    // Desktop: mouse leave
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };
    document.addEventListener("mouseleave", onMouseLeave);

    // Mobile: 30s timer
    const timer = setTimeout(trigger, 30000);

    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      clearTimeout(timer);
    };
  }, [trigger]);

  const close = () => {
    setShow(false);
    setDismissed(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-plum/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-brand-lg border border-pink bg-cream p-8 shadow-2xl animate-scale-in">
        <button
          onClick={close}
          className="absolute right-4 top-4 text-2xl text-brand-gray hover:text-plum transition-colors"
          aria-label="Fechar"
        >
          ×
        </button>

        <p className="text-center text-xs font-semibold uppercase tracking-widest text-pink">
          Presente pra você
        </p>
        <h3 className="mt-3 text-center font-display text-3xl font-bold text-plum">
          Guia grátis:<br />30 Manhãs ZionFit
        </h3>
        <p className="mt-3 text-center text-sm text-brand-gray leading-relaxed">
          30 dias de ritual matinal com dicas, intenções e receitas.
          Receba agora no seu e-mail.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            close();
          }}
          className="mt-6 space-y-3"
        >
          <Input
            type="email"
            placeholder="Seu melhor e-mail"
            className="rounded-brand border-brand-border bg-warm-white text-plum placeholder:text-brand-gray"
            required
          />
          <Button variant="hero" size="lg" className="w-full" type="submit">
            Quero meu guia grátis →
          </Button>
        </form>

        <p className="mt-4 text-center text-xs text-brand-gray">
          Sem spam. Só conteúdo que importa.
        </p>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
