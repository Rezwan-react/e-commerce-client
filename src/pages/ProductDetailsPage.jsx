import React from 'react'
import ProductDetails from '../components/productDetails/ProductDetails'
import GlobalBanner from '../components/globalBanner/GlobalBanner'

function ProductDetailsPage() {
  return (
    <>
    <GlobalBanner title="Details" />
    <ProductDetails/>
    </>
  )
}

export default ProductDetailsPage