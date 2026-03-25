import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-2xl font-bold text-plum">
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
        <Button variant="nav" size="sm" asChild>
          <a href="#offer">Quero começar →</a>
        </Button>
      </div>
    </nav>
  );
};

export default StickyNav;
