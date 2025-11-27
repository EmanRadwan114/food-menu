import React, { useContext, useEffect } from "react";
import MenuCard from "./MenuCard";
import { MealsContext } from "../contexts/MealsContext";
import { egyptianMenu } from "../data/menuItems";
import { AnimatePresence } from "motion/react";

const MenuList: React.FC = () => {
  const { meals, selectedCategory, setMeals } = useContext(MealsContext);

  useEffect(() => {
    const filteredMeals =
      selectedCategory !== "all"
        ? egyptianMenu.filter((item) => item.category === selectedCategory)
        : egyptianMenu;

    setMeals(filteredMeals);
  }, [selectedCategory, setMeals]);

  return (
    <AnimatePresence>
      {meals.length ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:w-5/6 mx-auto">
          {meals.map((item) => (
            <MenuCard item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <p className="text-orange-700 text-xl text-center mt-5 font-semibold">
          No Meals Found
        </p>
      )}
    </AnimatePresence>
  );
};

export default MenuList;
