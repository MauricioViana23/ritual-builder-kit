import { useState, useEffect } from "react";
import { useShopifyProducts } from "@/hooks/useShopifyProducts";
import { useCartStore } from "@/stores/cartStore";
import { Loader2 } from "lucide-react";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const { products, addToCart, isLoading } = useShopifyProducts();
  const totalItems = useCartStore((s) => s.items.reduce((sum, i) => sum + i.quantity, 0));
  const product = products[0];
  const featuredVariantIndex = 1; // "Ritual Completo" - 2 potes

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-border bg-warm-white/95 px-4 py-3 backdrop-blur-md md:hidden">
      <button
        disabled={isLoading || !product}
        onClick={() => product && addToCart(product, featuredVariantIndex)}
        className="flex w-full items-center justify-center gap-2 rounded-brand bg-pink py-3.5 text-center text-sm font-semibold text-warm-white shadow-[0_-4px_20px_hsl(var(--pink)/0.3)] transition-all hover:-translate-y-0.5 disabled:opacity-50"
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            Começar meu ritual — R$239
            {totalItems > 0 && (
              <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-warm-white text-[10px] font-bold text-pink">
                {totalItems}
              </span>
            )}
            <span>→</span>
          </>
        )}
      </button>
    </div>
  );
};

export default StickyMobileCTA;
