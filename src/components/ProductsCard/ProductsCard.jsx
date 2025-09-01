import React from 'react'

function ProductsCard() {
    return (
        <>
            <section>
                <div className="container">
                    <div className='w-[285px]'>
                        <img className='w-full' src="image/Products.png" alt="Products" />
                        <div className='px-[18px] pt-4 pb-8 bg-[#F4F5F7]'>
                            <h2 className='text-2xl font-semibold font-poppins text-primary '>Syltherine</h2>
                            <p className='text-[16px] font-medium font-poppins text-[#898989] py-2'>Stylish cafe chair</p>

                            <div className='flex items-center justify-between'>
                                <p className='text-[20px] font-semibold font-poppins text-[#3A3A3A]'>Rp 2.500.000</p>
                                <div className="ml-auto">
                                    <button className='py-[10px] px-[10px] bg-[#B88E2F] text-[16px] font-bold font-poppins text-[#fff] rounded-2xl'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductsCard
