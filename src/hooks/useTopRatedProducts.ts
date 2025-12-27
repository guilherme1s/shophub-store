import { useMemo } from "react";
import { useProduct } from "../contexts/ProductContext";

export function useTopRatedProducts() {
  const { products } = useProduct();

  return useMemo(() => {
    return [...products]
      .sort((a, b) => b.rating.count - a.rating.count)
      .slice(0, 5);
  }, [products]);
}
