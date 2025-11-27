import React from "react";
import type { IMenuItem } from "../types/interfaces";
import { motion } from "motion/react";
interface IProps {
  item: IMenuItem;
}

const MenuCard: React.FC<IProps> = ({ item }) => {
  return (
    <motion.div
      className="bg-white shadow-md rounded-md overflow-hidden"
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileInView="visible"
      layout
    >
      {/* img & category*/}
      <div className="relative">
        <motion.img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-64 rounded-t-md"
          variants={{ rest: { scale: 1 }, hover: { scale: 1.1 } }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="absolute top-4 end-4 bg-orange-700 px-3 py-0.5 rounded-2xl text-white z-50">
          <span className="capitalize">{item.category}</span>
        </div>
      </div>
      {/* content */}
      <div className="p-5">
        <h3 className="font-semibold capitalize text-lg md:text-xl mb-1 text-gray-800">
          {item.title}
        </h3>
        <p className="text-gray-600 mb-3">{item.description}</p>
        {/* ingredients */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.ingredients.map((ingredient) => (
            <div
              className="rounded-md py-0.5 px-3 bg-lime-100"
              key={ingredient}
            >
              <span className="capitalize text-sm text-gray-800">
                {ingredient}
              </span>
            </div>
          ))}
        </div>
        {/* price */}
        <span className="font-semibold bg-orange-700 px-3 py-1.5 rounded-md text-white ">
          {item.price} EGP
        </span>
      </div>
    </motion.div>
  );
};

export default MenuCard;
