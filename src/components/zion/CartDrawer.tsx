import { useEffect } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Minus, Plus, Trash2, ExternalLink, Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";

const CartDrawer = () => {
  const { items, isLoading, isSyncing, isOpen, setOpen, updateQuantity, removeItem, getCheckoutUrl, syncCart } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (parseFloat(item.price.amount) * item.quantity), 0);

  useEffect(() => {
    if (isOpen) syncCart();
  }, [isOpen, syncCart]);

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank');
      setOpen(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-warm-white text-plum transition-colors hover:bg-cream">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-pink text-[10px] font-bold text-warm-white">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="flex h-full w-full flex-col bg-warm-white sm:max-w-lg">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="font-display text-xl text-plum">Seu carrinho</SheetTitle>
          <SheetDescription className="text-brand-gray">
            {totalItems === 0 ? "Seu carrinho está vazio" : `${totalItems} item${totalItems !== 1 ? 's' : ''} no carrinho`}
          </SheetDescription>
        </SheetHeader>

        <div className="flex min-h-0 flex-1 flex-col pt-6">
          {items.length === 0 ? (
            <div className="flex flex-1 items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="mx-auto mb-4 h-12 w-12 text-brand-gray/40" />
                <p className="text-brand-gray">Seu carrinho está vazio</p>
              </div>
            </div>
          ) : (
            <>
              <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.variantId} className="flex gap-4 rounded-brand border border-brand-border bg-cream p-3">
                    <div className="flex min-w-0 flex-1 flex-col">
                      <h4 className="truncate font-semibold text-plum">{item.product.node.title}</h4>
                      <p className="text-sm text-brand-gray">{item.variantTitle}</p>
                      <p className="mt-1 font-display text-lg font-bold text-plum">
                        R${parseFloat(item.price.amount).toFixed(0)}
                      </p>
                    </div>
                    <div className="flex flex-shrink-0 flex-col items-end gap-2">
                      <button
                        onClick={() => removeItem(item.variantId)}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-brand-gray transition-colors hover:bg-pink/10 hover:text-pink"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-border text-plum transition-colors hover:bg-cream"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold text-plum">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-border text-plum transition-colors hover:bg-cream"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex-shrink-0 space-y-4 border-t border-brand-border bg-warm-white pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-plum">Total</span>
                  <span className="font-display text-2xl font-bold text-plum">R${totalPrice.toFixed(0)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={items.length === 0 || isLoading || isSyncing}
                  className="flex w-full items-center justify-center gap-2 rounded-brand bg-pink py-4 text-base font-semibold text-warm-white shadow-[0_8px_24px_hsl(var(--pink)/0.35)] transition-all hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {isLoading || isSyncing ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      <ExternalLink className="h-4 w-4" />
                      Finalizar compra
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
