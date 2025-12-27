import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProduct } from "../contexts/ProductContext";

export function useCatalog() {
  const { products, error, loading } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchText, setSearchText] = useState("");
  const [maxPriceSelected, setMaxPriceSelected] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState("Destaque");

  useEffect(() => {
    const categoriesFromUrl = searchParams.get("categoria");
    setSelectedCategories(
      categoriesFromUrl ? categoriesFromUrl.split(",") : []
    );
  }, [searchParams]);

  const handleChangeCategories = (categories: string[]) => {
    setSelectedCategories(categories);

    setSearchParams(
      categories.length > 0 ? { categoria: categories.join(",") } : {}
    );
  };

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryOk =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const textOk =
        !searchText ||
        product.title.toLowerCase().includes(searchText.toLowerCase());

      const priceOk =
        maxPriceSelected === null || product.price <= maxPriceSelected;

      return categoryOk && textOk && priceOk;
    });

    const sortMap: Record<string, (a: any, b: any) => number> = {
      "Menor Preço": (a, b) => a.price - b.price,
      "Maior Preço": (a, b) => b.price - a.price,
      "Mais Recentes": (a, b) => b.id - a.id,
      "Mais Vendidos": (a, b) => b.rating.count - a.rating.count,
    };

    return sortMap[selectedOption]
      ? [...filtered].sort(sortMap[selectedOption])
      : filtered;
  }, [
    products,
    selectedCategories,
    searchText,
    maxPriceSelected,
    selectedOption,
  ]);

  const resetFilters = () => {
    setSearchParams({});
    setSearchText("");
    setMaxPriceSelected(null);
    setSelectedOption("Destaque");
  };

  return {
    products: filteredProducts,
    error,
    loading,
    filters: {
      selectedCategories,
      searchText,
      selectedOption,
    },
    actions: {
      setSearchText,
      setSelectedOption,
      setMaxPriceSelected,
      handleChangeCategories,
      resetFilters,
    },
  };
}
