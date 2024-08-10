import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center container mx-auto py-5">
        <a href="/" className="text-4xl font-bold text-gray-800">
          Online Shop
        </a>
        <button className="border-2 border-black px-4 py-2 font-semibold hover:bg-black hover:text-white transition-all duration-300">
          <Link to={"/my-cart"}>My Cart</Link>
        </button>
      </div>
    </>
  );
};

export default Header;
