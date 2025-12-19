import type { ReactElement } from "react";
import { NavLink } from "react-router-dom";
type CategoryColor = "blue" | "pink" | "amber" | "green" | "purple" | "red";

export interface CardProps {
  title: string;
  redirectUrl: string;
  icon: ReactElement;
  titleCard?: string;
  color: CategoryColor;
}

export function Card({
  title,
  redirectUrl,
  icon,
  titleCard,
  color,
}: CardProps) {
  const colorMap: Record<CategoryColor, string> = {
    blue: "bg-blue-100 text-blue-700",
    pink: "bg-pink-100 text-pink-700",
    amber: "bg-amber-100 text-amber-700",
    green: "bg-green-100 text-green-700",
    purple: "bg-purple-100 text-purple-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <NavLink
      to={redirectUrl}
      title={title}
      className={`flex flex-col items-center p-10 rounded-2xl hover:shadow-md transition ${colorMap[color]}`}
    >
      <span>{icon}</span>
      <p className="text-md mt-1 font-bold">{titleCard}</p>
    </NavLink>
  );
}
