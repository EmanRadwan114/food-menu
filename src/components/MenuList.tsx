import React, { useContext } from "react";
import MenuCard from "./MenuCard";
import { MealsContext } from "../contexts/MealsContext";

const MenuList: React.FC = () => {
  const { meals } = useContext(MealsContext);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:w-5/6 mx-auto">
      {meals.map((item) => (
        <MenuCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default MenuList;
