import React, { useContext, useRef, useState } from "react";
import { MealsContext } from "../contexts/MealsContext";
import { debounce } from "../utils/helperFns";
import { egyptianMenu } from "../data/menuItems";

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { setMeals } = useContext(MealsContext);

  //———————————————————————————————— debouncing search ————————————————————————————————
  const debouncedSearch = useRef(
    debounce((val) => {
      const filteredMeals = egyptianMenu.filter(
        (item) =>
          item.title.toLowerCase().includes(val.toLowerCase()) ||
          item.description.toLowerCase().includes(val.toLowerCase())
      );

      setMeals(filteredMeals);
    }, 500)
  ).current;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="search"
      placeholder="Search a Meal..."
      className="px-3 py-1 border-2 border-orange-700 rounded-md w-full sm:w-[40%] lg:w-[30%] xl:w-[20%] focus-within:outline-gray-500"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default Search;
