import { Hero } from "../../pages/home/components/Hero";
import { ProductCard } from "../../components/ProductCard";
import { PromoSection } from "../../pages/home/components/PromoSection";
import { SectionTitle } from "../../components/SectionTitle";
import { ShopCategory } from "./components/ShopCategory";
import { categories } from "../../data/categories";

import { Container } from "../../components/Container";

export function Home() {
  return (
    <main>
      <Hero src="#" />

      <section className="py-8 mb-20 border-b border-gray-300">
        <Container>
          <PromoSection />
        </Container>
      </section>

      <Container>
        <section>
          <SectionTitle
            title="Mais vendidos"
            description="Navegue pelos itens mais vendidos do momento"
          />

          <div className="mt-10 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <ProductCard
              src=""
              title="Produto Exemplo"
              price={200}
              rating={4.5}
            />
          </div>
        </section>
      </Container>

      <ShopCategory content={categories} title="Compre por categoria" />
    </main>
  );
}
