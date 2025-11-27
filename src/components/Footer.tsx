import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-center items-center bg-gray-950 py-3 px-1">
      <p className="text-white capitalize font-semibold">
        all rights reserved &copy; Egyptian Food {year}
      </p>
      ;
    </div>
  );
};

export default Footer;
