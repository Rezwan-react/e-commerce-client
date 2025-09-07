import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { categoryServices } from '../../services/api';

function CategoryCard() {

  const userData = useSelector((state) => state.authSlice.user);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    (async () => {
      const data = await categoryServices.categoryList();
      setCategories(data?.cateagors || []);

    })();
  }, []);

  return (
    <>
      <section className='mt-3.5 mb-6 flex flex-wrap gap-4'>
        {categories.map((item) => (
          <div
            key={item._id}
            className='w-[285px] bg-[#F4F5F7] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300'
          >
            <img
              className='w-full h-[200px]  object-cover object-top flex justify-center items-center'
              src={item.image || "/images/Products.png"}
              alt={item.name}
            />
            <div className='p-4'>
              <h2 className='text-xl font-semibold font-poppins text-primary'>
                {item.name}
              </h2>
              <p className='text-[15px] text-[#898989] font-poppins py-2 line-clamp-3'>
                {item.description || "Stylish & comfortable furniture"}
              </p>
              <button className='mt-2 py-[8px] px-[16px] bg-[#B88E2F] text-[15px] font-bold font-poppins text-white rounded-xl hover:bg-[#a6761f] transition-colors duration-300'>
                Explore
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default CategoryCard
