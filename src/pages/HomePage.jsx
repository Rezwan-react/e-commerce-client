import React from 'react'
import Banner from '../components/home/banner'
import Browse from '../components/home/Browse'
import ProductsCard from '../components/ProductsCard/ProductsCard'
import Products from '../components/home/Products'
import Setup from '../components/home/Setup'

function HomePage() {
    return (
        <>
            <Banner />
            <Browse />
            <Products />
            <Setup />
        </>
    )
}

export default HomePage