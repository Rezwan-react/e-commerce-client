import React from 'react'
import ProductsCard from '../ProductsCard/ProductsCard'
import { Link } from 'react-router'

function Products() {
    return (
        <>
            <section className='pb-[69px]'>
                <div className="container">
                    <div>
                        <h2 className='text-[40px] font-bold font-poppins text-primary text-center pb-8'>Our Products</h2>
                    </div>
                    <div className='grid grid-cols-4 gap-8'>
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                    </div>
                    <div className='flex justify-center pt-8'>
                        <Link className='px-[78px] py-[12px] text-[16px] font-semibold font-poppins text-barnd border-[1px] border-barnd mt-[32px]' to='/shop'>Show More</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products