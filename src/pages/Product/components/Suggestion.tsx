import { ProductGrid } from "../../../Components/product/ProductGrid";
import { SectionTitle } from "../../../Components/SectionTitle";
import { useCatalog } from "../../../hooks/useCatalog";

interface SuggestionProps {
  category: string;
  productId: number;
}

export function Suggestion({ category, productId }: SuggestionProps) {
  const { products, error, loading } = useCatalog();

  const productsByCategory = products
    .filter(
      (product) => product.category === category && product.id !== productId
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div>
      <SectionTitle title="Produtos semelhantes" />

      <ProductGrid
        products={productsByCategory}
        error={error}
        loading={loading}
      />
    </div>
  );
}
