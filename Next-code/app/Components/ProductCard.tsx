import React from 'react'
import AddToCart from './AddToCart';



const ProductCard = () => {
  return (
    <div className = 'p-6 my-5 bg-sky-400 text-white text-xl hover: bg-sky-600'>
      <AddToCart />
    </div>
  )
}

export default ProductCard
