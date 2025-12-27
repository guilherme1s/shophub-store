interface CategoryCheckboxProps {
  categories: Category[];
  selectedCategories: string[];
  onChangeCategory: (categories: string[]) => void;
}

interface Category {
  id: string;
  title: string;
}

export function CategoryCheckbox({
  categories,
  selectedCategories,
  onChangeCategory,
}: CategoryCheckboxProps) {
  const handleSelectCategory = (id: string) => {
    let updatedCategories: string[];

    if (selectedCategories.includes(id)) {
      updatedCategories = selectedCategories.filter((item) => item !== id);
    } else {
      updatedCategories = [...selectedCategories, id];
    }

    onChangeCategory(updatedCategories);
  };

  return (
    <div>
      <p className="text-lg font-bold mb-2">Categoria</p>

      {categories.map((category) => (
        <label key={category.id} className="flex gap-2 text-lg">
          <input
            type="checkbox"
            className="scale-120 accent-primary cursor-pointer"
            checked={selectedCategories.includes(category.id)}
            onChange={() => handleSelectCategory(category.id)}
          />
          {category.title}
        </label>
      ))}
    </div>
  );
}
