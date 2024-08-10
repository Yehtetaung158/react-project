import React, { useState } from 'react'
import useCart from '../Zustand/useState';

const MyCart = () => {
  const {cart} = useCart();
  return (
    <div>
      {cart.length > 0 ? <h1 className='text-3xl text-gray-700'>My Cart</h1> : <h1>No Item in Cart</h1>}
      {cart.map((item) => <p key={item.id}>{item.title}</p>)}
    </div>
  )
}

export default MyCart