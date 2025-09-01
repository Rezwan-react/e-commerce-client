import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../footer/Footer'

function Layout() {
    return (
        <>
            <div className='container mx-auto'>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default Layout