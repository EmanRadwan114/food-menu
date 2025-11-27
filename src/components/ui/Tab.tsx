import React, { useContext } from "react";
import { MealsContext } from "../../contexts/MealsContext";

interface IProps {
  filter: string;
}

const Tab: React.FC<IProps> = ({ filter }) => {
  const { selectedCategory, setSelectedCategory } = useContext(MealsContext);

  return (
    <button
      onClick={() => setSelectedCategory(filter)}
      className={`px-5 py-1 rounded-md text-gray-800 cursor-pointer ${
        selectedCategory === filter ? "bg-lime-950 text-white" : "bg-lime-100"
      }`}
    >
      <span className="capitalize font-semibold">{filter}</span>
    </button>
  );
};

export default Tab;
