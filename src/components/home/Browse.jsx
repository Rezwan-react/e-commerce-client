import React from 'react'

function Browse() {
    return (
        <>
            <section className='py-14'>
                <div className="container">
                    <div className='text-center  pb-[62px]'>
                        <h2 className='text-3xl font-bold font-poppins text-primary '>Browse The Range</h2>
                        <p className='text-[20px] font-normal font-poppins text-secondary '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='flex gap-5 justify-center '>
                        <div className='w-[381px]'>
                            <img className='w-full' src="image/Dining.png" alt="Dining" />
                            <p className='text-2xl font-semibold font-poppins text-primary pt-[30px] text-center '>Dining</p>
                        </div>
                        <div className='w-[381px]'>
                            <img className='w-full' src="image/Living.png" alt="Living" />
                            <p className='text-2xl font-semibold font-poppins text-primary pt-[30px] text-center '>Living</p>
                        </div>
                        <div className='w-[381px]'>
                            <img className='w-full' src="image/Bedroom.png" alt="Bedroom" />
                            <p className='text-2xl font-semibold font-poppins text-primary pt-[30px] text-center '>Bedroom</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Browse