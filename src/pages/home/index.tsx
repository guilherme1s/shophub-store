import { Hero } from "../../pages/home/components/Hero";
import { PromoSection } from "../../pages/home/components/PromoSection";
import { ShopCategory } from "./components/ShopCategory";
import { categories } from "../../data/categories";

import { Container } from "../../components/Container";
import { useProduct } from "../../hooks/useProduct";
import { useEffect, useMemo, useState } from "react";
import { BestSeller } from "./components/BestSeller";

export function Home() {
  const { products, error, loading } = useProduct();
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    if (products.length === 0) return;

    const productsCount = Math.floor(Math.random() * products.length);
    setRandomIndex(productsCount);
  }, [products]);

  const heroImage = products[randomIndex]?.image;

  const getBestSellerProducts = useMemo(() => {
    return [...products]
      .sort((a, b) => b.rating.count - a.rating.count)
      .slice(0, 5);
  }, [products]);
  
  return (
    <main>
      <Hero src={heroImage} isLoading={loading} isError={!error} />

      <section className="py-8 mb-20 border-b border-gray-300">
        <Container>
          <PromoSection />
        </Container>
      </section>

      <BestSeller
        loading={loading}
        products={getBestSellerProducts}
        error={error}
      />

      <ShopCategory content={categories} title="Compre por categoria" />
    </main>
  );
}
