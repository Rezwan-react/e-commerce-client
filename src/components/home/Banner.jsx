import React from 'react'
import Button from '../button/Button'

function Banner() {
    return (
        <>
            <section className='pt-[157px] pb-[117px] bg-[url("image/banner.png")] bg-no-repeat bg-cover bg-center'>
                <div className="container">
                    <div className='w-[643px] bg-[#FFF3E3] pl-[41px] pt-[62px] pb-[37px] ml-auto rounded-[10px]  '>
                        <h1 className='text-[16px] font-semibold font-poppins text-primary tracking-[3px] '>New Arrival</h1>
                        <h2 className='w-[402px] text-[52px] font-semibold font-poppins text-barnd '>Discover OurNew Collection</h2>
                        <p className='w-[546px] text-[18px] font-medium font-poppins text-secondary pt-[17px] pb-[46px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        <Button path="/shop " title="BUY Now" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner