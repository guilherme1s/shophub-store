import { Container } from "../../components/Container";
import { ProductGrid } from "../../components/ProductGrid";
import { SectionTitle } from "../../components/SectionTitle";
import { Filter } from "./components/Filter";
import { useCatalog } from "../../hooks/useCatalog";

export function Catalog() {
  const { products, error, loading, filters, actions } = useCatalog();

  const options = [
    "Destaque",
    "Mais Vendidos",
    "Mais Recentes",
    "Menor Preço",
    "Maior Preço",
  ];

  const notFound =
    (filters.searchText !== "" && products.length === 0) ||
    (filters.selectedCategories.length !== 0 && products.length === 0);

  return (
    <main className="pb-20">
      <section className="pt-20">
        <Container>
          <SectionTitle
            title="Catálogo de Produtos"
            description={`${products.length} resultados`}
          />
        </Container>
      </section>

      <Container>
        <div className="lg:grid grid-cols-[1fr_3fr] gap-6 items-start">
          <div className="mt-10 lg:sticky lg:top-24">
            <Filter
              options={options}
              text={filters.searchText}
              value={filters.selectedOption}
              selectedCategories={filters.selectedCategories}
              onReset={actions.resetFilters}
              onType={(e) => actions.setSearchText(e.target.value)}
              onChangeRange={actions.setMaxPriceSelected}
              onChangeCategories={actions.handleChangeCategories}
              onChangeOptions={actions.setSelectedOption}
            />
          </div>

          <ProductGrid
            products={products}
            loading={loading}
            error={error}
            notFound={notFound}
          />
        </div>
      </Container>
    </main>
  );
}
