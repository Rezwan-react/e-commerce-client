import React from 'react'
import { FaChevronRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router';

function GlobalBanner({ title }) {
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    return (
        <>
            <section className="pt-[121px] pb-[97px] px-[658px] bg-[url('image/globalBanner.png')]">
                <div className="container">
                    <h2 className='text-5xl font-medium font-poppins text-[#000] text-center'>{title}</h2>
                    <div>
                        <ul className="flex items-center justify-center gap-6 mt-3">
                            <li>
                                <Link to="/" className="text-[16px] font-medium font-poppins text-[#000]">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <FaChevronRight />
                            </li>
                            <li>
                                <Link
                                    to={`/${path}`}
                                    className="text-[16px] font-light font-poppins text-[#000] capitalize"
                                >
                                    {path}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GlobalBanner