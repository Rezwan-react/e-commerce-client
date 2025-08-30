import React from 'react'
import { CiHeart, CiSearch, CiShoppingCart } from 'react-icons/ci'
import { LiaUserEditSolid } from 'react-icons/lia'
import { Link } from 'react-router'

function Navbar() {
    return (
        <>
            <nav className='px-[54px] py-[29px] bg-[#fff] '>
                <div className="container flex items-center justify-between">
                    <div className='w-[185px]'>
                        <img src="/image/logo.png" alt="logo" />
                    </div>
                    <div>
                        <ul className="flex items-center gap-[75px] text-[16px] font-medium font-poppins text-[#000] ">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex items-center gap-11 text-2xl'>
                            <li><Link to='#'><LiaUserEditSolid /></Link></li>
                            <li><Link to='#'><CiSearch /></Link></li>
                            <li><Link to='#'><CiHeart /></Link></li>
                            <li><Link to='#'><CiShoppingCart /></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar