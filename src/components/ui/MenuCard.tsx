import React from "react";
import type { IMenuItem } from "../../types/interfaces";

interface IProps {
  item: IMenuItem;
}

const MenuCard: React.FC<IProps> = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded-md group overflow-hidden">
      {/* img & category*/}
      <div className="relative">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-64 rounded-t-md group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/15">
          <div className="absolute top-4 end-4 bg-orange-700 px-3 py-0.5 rounded-2xl text-white">
            <span className="capitalize">{item.category}</span>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="p-5">
        <h3 className="font-semibold capitalize text-lg md:text-xl mb-1 text-gray-800">
          {item.title}
        </h3>
        <p className="text-gray-600 mb-3">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.ingredients.map((ingredient) => (
            <div className="rounded-md py-0.5 px-3 bg-lime-100">
              <span className="capitalize text-sm text-gray-800">
                {ingredient}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
