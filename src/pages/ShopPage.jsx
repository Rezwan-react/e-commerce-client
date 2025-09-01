import React from 'react'
import Filter from '../components/shop/Filter'
import CategoryCard from '../components/shop/categoryCard'
import GlobalBanner from '../components/globalBanner/GlobalBanner'
import Pagination from '../components/shop/pagination'

function ShopPage() {
  return (
    <>
      <GlobalBanner title='Shop' />
      <Filter />
      <CategoryCard />
      <Pagination />
    </>
  )
}

export default ShopPage