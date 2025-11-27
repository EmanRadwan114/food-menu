import type { TCategory } from "./types";

export interface IMenuItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  category: TCategory;
  ingredients: string[];
}
