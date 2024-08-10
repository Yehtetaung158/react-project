import React, { useState } from "react";
import CategoryButton from "./CategoryButton";

const Categories = () => {
  const [Category, setCategory] = useState([
    { cate: "All", showOff: true, id: 0 },
    { cate: "Electronics", showOff: false, id: 1 },
    { cate: "Men's clothes", showOff: false, id: 2 },
    { cate: "Woman's clothes", showOff: false, id: 3 },
    { cate: "Jewelry", showOff: false, id: 4 },
  ]);
  const handleChangeShowOff = (id) => {
    setCategory(Category.map((el) =>
        el.id === id ? { ...el, showOff: !el.showOff } : el
    ));
};
  return (
    <div className="flex gap-4 pb-3 container mx-auto flex-nowrap overflow-scroll categories-btn-gp">
      
      {Category.map((el) => (
        <CategoryButton key={el.id} name={el} handleChangeShowOff={handleChangeShowOff} />
      ))}
    </div>
  );
};

export default Categories;
