import { useEffect, useState } from "react";
import { storefrontApiRequest, PRODUCTS_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

/** Fetches products and returns a helper to add a variant to cart */
export function useShopifyProducts() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    storefrontApiRequest(PRODUCTS_QUERY, { first: 10 })
      .then((data) => {
        if (data?.data?.products?.edges) {
          setProducts(data.data.products.edges);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const addToCart = async (product: ShopifyProduct, variantIndex = 0) => {
    const variant = product.node.variants.edges[variantIndex]?.node;
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
  };

  return { products, loading, addToCart, isLoading };
}
