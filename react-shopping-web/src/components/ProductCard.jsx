import React from "react";
import Rating from "./Rating";
import { Link } from 'react-router-dom';
const ProductCard = ({
  product: {
    title,
    id,
    price,
    image,
    rating: { rate },
  },
}) => {
  return (
    <>
        <Link to={`/product-detail/${id}`} className="w-full flex flex-col border-2 border-black items-start p-3" key={id}>
        <img src={image} alt="" className="h-40" />
        <h1 className="text-gray-800 font-bold line-clamp-2">{title}</h1>
        <Rating rate={rate} />
        <div className="flex justify-between items-center w-full ">
          <p className="text-gray-700">Price: ({price})</p>
          <button className="border-2 border-black px-4 py-2 font-semibold hover:bg-black hover:text-white transition-all duration-300">
            Add to Cart
          </button>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
