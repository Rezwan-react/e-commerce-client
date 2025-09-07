import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { CiHeart, CiSearch, CiShoppingCart } from 'react-icons/ci'
import { LiaUserEditSolid } from 'react-icons/lia'
import { Link } from 'react-router' // should be react-router-dom
import CardSidebar from '../card/CardSidebar'

function Navbar() {
    const [sideCard, setSideCard] = useState(false);

    return (
        <>
            <nav className='px-[54px] py-[29px] bg-[#fff] '>
                <div className="container flex items-center justify-between">
                    {/* Logo */}
                    <div className='w-[185px]'>
                        <img src="/image/logo.png" alt="logo" />
                    </div>

                    {/* Menu */}
                    <div>
                        <ul className="flex items-center gap-[75px] text-[16px] font-medium font-poppins text-[#000] ">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Icons */}
                    <div>
                        <ul className='flex items-center gap-11 text-2xl'>
                            <li><Link to='/profile'><CgProfile /></Link></li>
                            <li><Link to='/login'><LiaUserEditSolid /></Link></li>
                            <li><Link to='#'><CiSearch /></Link></li>
                            <li><Link to='#'><CiHeart /></Link></li>
                            <button onClick={() => setSideCard(!sideCard)}>
                                <CiShoppingCart className="text-2xl" />
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Show sidebar only if sideCard = true */}
            {sideCard && <CardSidebar />}
        </>
    )
}

export default Navbar
