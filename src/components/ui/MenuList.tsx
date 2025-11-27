import React from "react";
import { egyptianMenu } from "../../data/menuItems";
import MenuCard from "./MenuCard";

const MenuList: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:w-5/6 mx-auto">
      {egyptianMenu.map((item) => (
        <MenuCard item={item} />
      ))}
    </div>
  );
};

export default MenuList;
