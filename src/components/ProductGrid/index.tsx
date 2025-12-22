import type { Product } from "../../types/product";
import { ProductCard } from "../ProductCard";
import { Skeleton } from "../Skeleton";

interface ProductGridProps {
  loading: boolean;
  error: null | string;
  products: Product[];
}

export function ProductGrid({ error, loading, products }: ProductGridProps) {
  return (
    <div
      className={
        !loading
          ? `mt-10 grid gap-6 gap-y-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`
          : "w-full h-60 pt-10"
      }
    >
      {error && <p className="text-md">Erro ao obter os produtos</p>}
      {loading && <Skeleton />}

      {!error &&
        !loading &&
        products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              src={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating.rate}
              reviews={product.rating.count}
            />
          );
        })}
    </div>
  );
}
