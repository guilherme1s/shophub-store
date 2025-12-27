import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { useProductsByCategory } from "../../../../hooks/useProductsByCategory";
import { useProduct } from "../../../../contexts/ProductContext";
import { CategoryCheckbox } from "../CategoryCheckbox";
import { SearchBox } from "../SearchBox";
import { PriceRange } from "../PriceRange";
import { OrderBy } from "../OrderBy";

interface FilterProps {
  text: string;
  options: string[];
  value: string;
  selectedCategories: string[];
  onReset: () => void;
  onType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCategories: (categories: string[]) => void;
  onChangeRange: (price: number) => void;
  onChangeOptions: (value: string) => void;
}

export function Filter({
  text,
  options,
  value,
  selectedCategories,
  onReset,
  onChangeCategories,
  onType,
  onChangeRange,
  onChangeOptions,
}: FilterProps) {
  const { products } = useProduct();
  const productsByCategory = useProductsByCategory(products);

  const categories = productsByCategory.map((category) => ({
    id: category.id,
    title: category.title,
  }));

  const prices = products.map((product) => {
    return product.price;
  });

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return (
    <main className="bg-gray p-8 rounded-xl flex flex-col gap-4">
      <section className="flex gap-2">
        <TuneOutlinedIcon className="text-primary" fontSize="medium" />
        <h4 className="text-xl font-bold">Filtros</h4>
      </section>

      <SearchBox onType={onType} text={text} />

      <CategoryCheckbox
        categories={categories}
        selectedCategories={selectedCategories}
        onChangeCategory={onChangeCategories}
      />

      <PriceRange min={minPrice} max={maxPrice} onChangeRange={onChangeRange} />
      <OrderBy options={options} onChange={onChangeOptions} value={value} />

      <div className="py-2 cursor-pointer hover:text-primary transition">
        <button onClick={onReset} className="cursor-pointer">
          Limpar filtros
        </button>
      </div>
    </main>
  );
}
