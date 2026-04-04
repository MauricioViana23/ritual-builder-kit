import { Button } from "@/components/ui/button";
import { useShopifyProducts } from "@/hooks/useShopifyProducts";
import { Loader2 } from "lucide-react";

const FinalCTA = () => {
  const { products, addToCart, isLoading } = useShopifyProducts();
  const product = products[0];

  return (
    <section className="bg-plum px-4 py-20 md:px-6 md:py-28">
      <div className="fade-up mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold text-warm-white md:text-[56px] md:leading-[1.1]">
          Começa aqui.
          <br />
          <span className="text-pink-lt">Todo dia.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-warm-white/70 md:mt-6 md:text-base">
          Antes do café. Antes do celular. Antes de tudo.
          30 segundos que mudam o que vem depois.
        </p>
        <Button
          variant="heroDark"
          size="xl"
          className="mt-8 w-full md:mt-10 md:w-auto"
          disabled={isLoading || !product}
          onClick={() => product && addToCart(product, 1)}
        >
          {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Quero meu Zion Shot →"}
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
