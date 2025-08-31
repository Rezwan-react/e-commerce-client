import React from 'react'
import Filter from '../components/shop/Filter'
import ProductsCard from '../components/ProductsCard/ProductsCard'
import CategoryCard from '../components/shop/categoryCard'

function ShopPage() {
  return (
    <>
      <Filter />
      <CategoryCard />
      <ProductsCard />
    </>
  )
}

export default ShopPage