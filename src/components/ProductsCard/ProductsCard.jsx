import React from 'react'

function ProductsCard() {
    return (
        <>
            <div className='w-[285px]'>
                <img className='w-full' src="image/Products.png" alt="Products" />
                <div className='px-[18px] pt-4 pb-8 bg-[#F4F5F7]'>
                    <h2 className='text-2xl font-semibold font-poppins text-primary '>Syltherine</h2>
                    <p className='text-[16px] font-medium font-poppins text-[#898989] py-2'>Stylish cafe chair</p>
                    <div className='flex justify-between '>
                        <p className='text-[20px] font-semibold font-poppins text-[#3A3A3A] '>Rp 2.500.000</p>
                        <p className='text-[16px] font-normal font-poppins text-[#B0B0B0] line-through '>Rp 3.500.000</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsCard