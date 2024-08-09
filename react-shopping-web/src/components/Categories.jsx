import React from "react";
import CategoryButton from "./CategoryButton";

const Categories = () => {
  const category = [
    "Electronics",
    "Men's clothes",
    "Woman's clothes",
    "Jewelry",
  ];
  return (
    <div className="flex gap-4 pb-3 container mx-auto flex-nowrap overflow-scroll categories-btn-gp">
      {category.map((category) => (
        <CategoryButton key={category} name={category} />
      ))}
    </div>
  );
};

export default Categories;
