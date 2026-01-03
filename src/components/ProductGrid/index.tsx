import { NavLink } from "react-router-dom";
import { NotFoundProducts } from "../../pages/catalog/components/NotFoundProducts";
import type { Product } from "../../types/product";
import { ProductCard } from "../ProductCard";
import { Skeleton } from "../Skeleton";

interface ProductGridProps {
  loading: boolean;
  error: null | string;
  notFound?: boolean;
  products: Product[];
}

export function ProductGrid({
  error,
  loading,
  notFound,
  products,
}: ProductGridProps) {
  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

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
      {notFound && (
        <div className="col-span-full">
          <NotFoundProducts />
        </div>
      )}

      {!error &&
        !loading &&
        !notFound &&
        products.map((product) => {
          return (
            <NavLink
              key={product.id}
              to={`/produto/${product.id}/${slugify(product.title)}`}
              title={product.title}
              className="flex"
            >
              <ProductCard
                src={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating.rate}
                reviews={product.rating.count}
              />
            </NavLink>
          );
        })}
    </div>
  );
}
