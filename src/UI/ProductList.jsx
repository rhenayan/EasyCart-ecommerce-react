import React from 'react'
import ProductCard from './ProductCard'



const ProductList = ({products}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-2 md:px-8 lg:px-16 lg:mb-10'>
        {products?.map((prod) => (
          <ProductCard product={prod} key={prod.id} />
        ))}

    </div>
  )
}

export default ProductList