import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../footer/Footer'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout