import React from "react";
import Rating from "./Rating";

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
      <a
        className="border-2 border-black p-5 flex flex-col items-start gap-5"
        href={`/product-detail/${id}`}
      >
        <img src={image} alt="" className="h-40" />
        <h1 className="text-gray-800 font-bold line-clamp-2">{title}</h1>
        <Rating rate={rate} />
        <div className="flex justify-between items-center w-full ">
          <p className="text-gray-700">Price: ({price})</p>
          <button className="border-[1px] border-black px-4 py-2 font-semibold">
            Add to Cart
          </button>
        </div>
      </a>
    </>
  );
};

export default ProductCard;
