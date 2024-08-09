import React from "react";
import products from "../Products";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";

const ProductDetail = () => {
  const { id } = useParams();
  const currentProduct = products.find((product) => product.id == id);
  return (
    <div className="flex items-center flex-col container mx-auto gap-5 justify-center max-w-3xl mb-10">
      <div>
        <img src={currentProduct.image} alt="" className="h-56" />
      </div>
      <div className="flex flex-col gap-3">
        <p>Category: {currentProduct.category}</p>
        <h1 className="text-xl text-gray-800 font-semibold">{currentProduct.title}</h1>
        <p className="text-gray-700 text-sm">{currentProduct.description}</p>
        <Rating rate={currentProduct.rating.rate} />
        <p>Price: {currentProduct.price}</p>
        <button className="border-2 border-black px-4 py-2 font-semibold hover:bg-black hover:text-white transition-all duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
