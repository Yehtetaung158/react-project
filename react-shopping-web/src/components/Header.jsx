import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center container mx-auto py-5">
        <a href="/" className="text-4xl font-bold text-gray-800">
          Online Shop
        </a>
        <button className="border-2 border-black px-4 py-2 font-semibold">
          <a href="/my-cart">My Cart</a>
        </button>
      </div>
    </>
  );
};

export default Header;
