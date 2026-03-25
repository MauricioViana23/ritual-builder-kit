import { useState, useEffect } from "react";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-border bg-warm-white/95 px-4 py-3 backdrop-blur-md md:hidden">
      <a
        href="#offer"
        className="block w-full rounded-brand bg-pink py-3.5 text-center text-sm font-semibold text-warm-white shadow-[0_-4px_20px_hsl(var(--pink)/0.3)] transition-all hover:-translate-y-0.5"
      >
        Começar meu ritual — R$129 →
      </a>
    </div>
  );
};

export default StickyMobileCTA;
