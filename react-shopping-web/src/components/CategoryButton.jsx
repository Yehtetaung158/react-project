import React from "react";

const CategoryButton = ({ name }) => {
  return (
    <button className="border-2 border-black px-4 py-2 font-semibold text-nowrap">
      {name}
    </button>
  );
};

export default CategoryButton;
