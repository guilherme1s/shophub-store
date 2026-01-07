import { SectionTitle } from "../../../Components/SectionTitle";
import { Container } from "../../../Components/Container";
import type { Product } from "../../../types/product";
import { ProductGrid } from "../../../Components/product/ProductGrid";

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

        <ProductGrid error={error} loading={loading} products={products} />
      </section>
    </Container>
  );
}
