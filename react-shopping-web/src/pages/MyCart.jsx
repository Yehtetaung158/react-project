import React, { useState } from 'react'
import useCart from '../Zustand/useState';

const MyCart = () => {
  const {cart, removeFromCart, id} = useCart();
  const handleRemove = (id)=> {
    console.log(id);
    removeFromCart(id);
  }
  return (
    <div className='flex flex-col items-start justify-start container mx-auto'>
      {cart.length > 0 ? <h1 className='text-3xl text-gray-700'>My Cart</h1> : <h1>No Item in Cart</h1>}
      {cart.map((item) => <p key={item.id}>{item.title}</p>)}
      {cart.map((el)=> <button key={el.id} onClick={handleRemove(el.id)}>Remove</button>)}
    </div>
  )
}

export default MyCart