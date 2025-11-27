import React, { createContext, useState, type ReactNode } from "react";
import type { IMenuItem } from "../types/interfaces";
import { egyptianMenu } from "../data/menuItems";

interface IMealsContext {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  meals: IMenuItem[];
  setMeals: React.Dispatch<React.SetStateAction<IMenuItem[]>>;
}

interface IProps {
  children: ReactNode;
}

const MealsContext = createContext<IMealsContext>({
  selectedCategory: "",
  setSelectedCategory: () => {},
  meals: [],
  setMeals: () => {},
});

const MealsContextProvider: React.FC<IProps> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [meals, setMeals] = useState<IMenuItem[]>(egyptianMenu);

  return (
    <MealsContext.Provider
      value={{ selectedCategory, setSelectedCategory, meals, setMeals }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export { MealsContext, MealsContextProvider };
