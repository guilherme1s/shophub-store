import { Hero } from "../../pages/home/components/Hero";
import { PromoSection } from "../../pages/home/components/PromoSection";
import { ShopCategory } from "./components/ShopCategory";
import { categories } from "../../data/categories";

import { Container } from "../../components/Container";
import { useProduct } from "../../contexts/ProductContext";
import { useEffect, useState } from "react";
import { BestSeller } from "./components/BestSeller";
import { useTopRatedProducts } from "../../hooks/useTopRatedProducts";

export function Home() {
  const { products, error, loading } = useProduct();
  const [randomIndex, setRandomIndex] = useState(0);
  const topRatedPRoducts = useTopRatedProducts();

  useEffect(() => {
    if (products.length === 0) return;

    const productsCount = Math.floor(Math.random() * products.length);
    setRandomIndex(productsCount);
  }, [products]);

  const heroImage = products[randomIndex];
  const heroImageData = heroImage
    ? {
        id: heroImage.id,
        image: heroImage.image,
        title: heroImage.title,
      }
    : { id: "", image: "", title: "" };

  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  return (
    <main>
      <Hero
        src={heroImageData.image}
        isLoading={loading}
        isError={!error}
        title={heroImageData.title}
        url={`/produto/${heroImageData.id}/${slugify(heroImageData.title)}`}
      />

      <section className="py-8 mb-20 border-b border-gray-300">
        <Container>
          <PromoSection />
        </Container>
      </section>

      <BestSeller loading={loading} products={topRatedPRoducts} error={error} />

      <ShopCategory content={categories} title="Compre por categoria" />
    </main>
  );
}
