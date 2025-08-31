import React from 'react'

function CategoryCard() {
  return (
    <>
      <section className='mt-3.5 mb-6'>
        <div className='w-[285px] bg-[#F4F5F7] rounded-lg shadow-md overflow-hidden'>
        {/* Category Image */}
        <img 
          className='w-full h-[200px] object-cover' 
          src="image/Products.png"
          alt="Category" 
        />

        {/* Category Content */}
        <div className='p-4'>
          <h2 className='text-xl font-semibold font-poppins text-primary'>
            Living Room
          </h2>
          <p className='text-[15px] text-[#898989] font-poppins py-2'>
            Stylish & comfortable furniture
          </p>

          {/* Button */}
          <button 
            className='mt-2 py-[8px] px-[16px] bg-[#B88E2F] text-[15px] font-bold font-poppins text-white rounded-xl'
          >
            Explore
          </button>
        </div>
      </div>
      </section>
    </>
  )
}

export default CategoryCard
