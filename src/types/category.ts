import type { ReactElement } from "react";

export type CategoryColor =
  | "blue"
  | "pink"
  | "amber"
  | "green"
  | "purple"
  | "red";

export interface Category {
  id: number;
  title: string;
  icon: ReactElement;
  color: CategoryColor;
  url: string;
  redirectTitle?: string;
}
