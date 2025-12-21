import { SectionTitle } from "../../../../components/SectionTitle";
import { Skeleton } from "../../../../components/Skeleton";
import { ProductCard } from "../../../../components/ProductCard";
import { Container } from "../../../../components/Container";
import type { Product } from "../../../../types/product";

interface BestSellerProps {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export function BestSeller({ products, loading, error }: BestSellerProps) {
  return (
    <Container>
      <section>
        <SectionTitle
          title="Mais vendidos"
          description="Navegue pelos itens mais vendidos do momento"
        />

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
      </section>
    </Container>
  );
}
