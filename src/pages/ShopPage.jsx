import React from 'react'
import Filter from '../components/shop/Filter'
import ProductsCard from '../components/ProductsCard/ProductsCard'
import CategoryCard from '../components/shop/categoryCard'
import GlobalBanner from '../components/globalBanner/GlobalBanner'

function ShopPage() {
  return (
    <>
      <GlobalBanner title='Shop' />
      <Filter />
      <CategoryCard />
      <ProductsCard />
    </>
  )
}

export default ShopPage