import type { ReactElement } from "react";
import { NavLink } from "react-router-dom";

interface ShopCategoryPros {
  content: CategoryContent[];
}

type CategoryColor = "blue" | "pink" | "amber" | "green" | "purple" | "red";

export interface CategoryContent {
  id: number;
  icon: ReactElement;
  title: string;
  color: CategoryColor;
  url: string;
  redirectTitle?: string;
}

export function ShopCategory({ content }: ShopCategoryPros) {
  const colorMap: Record<CategoryColor, string> = {
    blue: "bg-blue-100 text-blue-700",
    pink: "bg-pink-100 text-pink-700",
    amber: "bg-amber-100 text-amber-700",
    green: "bg-green-100 text-green-700",
    purple: "bg-purple-100 text-purple-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-12">
      {content.map((item) => {
        return (
          <NavLink to={item.url} title={item.redirectTitle}>
            <div
              key={item.id}
              className={`flex flex-col items-center p-10 rounded-2xl hover:shadow-md transition ${
                colorMap[item.color]
              }`}
            >
              <span>{item.icon}</span>
              <p className="text-md mt-1 font-bold">{item.title}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}
