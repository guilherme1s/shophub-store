import { Container } from "../../../../components/Container";
import { Card } from "../Card";
import { categories } from "../../../../data/categories";
import type { Category } from "../../../../types/category";

interface ShopCategoryProps {
  title: string;
  content: Category[];
}

export function ShopCategory({ title }: ShopCategoryProps) {
  return (
    <div className="bg-gray my-20 py-12 md:py-20">
      <Container>
        <h2 className="text-3xl font-bold mb-12">{title}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              title={category.title}
              redirectUrl={category.url}
              icon={category.icon}
              titleCard={category.title}
              color={category.color}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
