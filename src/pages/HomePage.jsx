import React from 'react'
import Banner from '../components/home/banner'
import ProductsCard from '../components/ProductsCard/ProductsCard'
import Products from '../components/home/Products'
import Setup from '../components/home/Setup'
import Category from '../components/home/Category'

function HomePage() {
    return (
        <>
            <Banner />
            <Category />
            <Products />
            <Setup />
        </>
    )
}

export default HomePage