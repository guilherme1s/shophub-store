import { useMemo } from "react";
import type { Product } from "../types/product";
import { categoryMap } from "../utils/CategoryMap";

export interface UseProductsByCatalogProps {
  id: string;
  title: string;
  products: Product[];
}

export function useProductsByCategory(
  products: Product[]
): UseProductsByCatalogProps[] {
  return useMemo(() => {
    const grouped = products.reduce<Record<string, Product[]>>(
      (acc, product) => {
        const category = product.category;

        if (!acc[category]) {
          acc[category] = [];
        }

        acc[category].push(product);
        return acc;
      },
      {}
    );

    return Object.entries(grouped).map(([category, products]) => ({
      id: category,
      title: categoryMap[category] ?? category,
      products,
    }));
  }, [products]);
}
