import React from 'react'
import products from '../Products';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { ProductId }= useParams();
  const currentProduct = products.find((product)=> product.id == ProductId);
  console.log(currentProduct);
  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default ProductDetail