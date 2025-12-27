import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getProducts } from "../api/products";
import type { Product } from "../types/product";

interface ProductContextProps {
  products: Product[];
  loading: boolean;
  error: string | null;
}

interface ProductContextProviderProps {
  children: ReactNode;
}

const ProductContext = createContext({} as ProductContextProps);

export function ProductProvider({ children }: ProductContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError("Erro ao carregar produtos");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);

  return context;
}
