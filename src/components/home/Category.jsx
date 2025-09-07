import React from 'react'
import CategoryCard from '../shop/categoryCard'

function Category() {
    return (
        <>
            <section className='py-14'>
                <div className="container">
                    <div className='text-center  pb-[62px]'>
                        <h2 className='text-3xl font-bold font-poppins text-primary '>Category</h2>
                        <p className='text-[20px] font-normal font-poppins text-secondary '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='flex gap-5 justify-center '>
                        <CategoryCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category