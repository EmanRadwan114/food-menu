import React from "react";
import Search from "./Search";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white fixed top-0 w-full shadow-md py-4 px-3 sm:px-5 md:px-10 lg:px-20 z-100">
      <nav className="flex flex-col sm:flex-row items-center sm:justify-between sm:items-center gap-3 ">
        <h1 className="font-extrabold text-3xl text-orange-700">
          🥘Egyptian Food
        </h1>
        <Search />
      </nav>
    </header>
  );
};

export default Navbar;
