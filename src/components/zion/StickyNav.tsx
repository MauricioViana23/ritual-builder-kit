import { useState, useEffect } from "react";
import CartDrawer from "./CartDrawer";

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <a href="#" className="font-display text-xl font-bold text-plum md:text-2xl">
          Zion<span className="text-pink">Fit</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#benefits" className="text-sm text-plum/70 hover:text-plum transition-colors">
            Benefícios
          </a>
          <a href="#proof" className="text-sm text-plum/70 hover:text-plum transition-colors">
            Depoimentos
          </a>
          <a href="#offer" className="text-sm text-plum/70 hover:text-plum transition-colors">
            Oferta
          </a>
          <a href="#faq" className="text-sm text-plum/70 hover:text-plum transition-colors">
            FAQ
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#offer"
            className="hidden rounded-full bg-pink px-6 py-2 text-sm font-semibold text-warm-white shadow-[0_4px_16px_hsl(var(--pink)/0.3)] transition-all hover:-translate-y-0.5 md:inline-flex"
          >
            Quero começar →
          </a>
          <CartDrawer />
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
