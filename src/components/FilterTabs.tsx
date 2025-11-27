import React, { useContext, useEffect } from "react";
import Tab from "./ui/Tab";
import { MealsContext } from "../contexts/MealsContext";
import { egyptianMenu } from "../data/menuItems";

const filters: string[] = ["all", "breakfast", "lunch", "dinner", "dessert"];

const FilterTabs: React.FC = () => {
  const { selectedCategory, setMeals } = useContext(MealsContext);

  useEffect(() => {
    const filteredMeals =
      selectedCategory !== "all"
        ? egyptianMenu.filter((item) => item.category === selectedCategory)
        : egyptianMenu;

    setMeals(filteredMeals);
  }, [selectedCategory, setMeals]);

  return (
    <div className="flex gap-x-2 gap-y-3 flex-wrap justify-center items-center">
      {filters.map((item) => (
        <Tab filter={item} key={item} />
      ))}
    </div>
  );
};

export default FilterTabs;
