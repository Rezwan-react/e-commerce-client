import React from 'react'

function Footer() {
    return (
        <>
            <footer className="bg-gray-100 py-10 px-10 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    <div>
                        <h3 className="font-bold text-lg">Funiro.</h3>
                        <p className="mt-2 text-gray-600">
                            400 University Drive Suite 200 Coral Gables, FL 33134 USA
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Links</h4>
                        <ul className="mt-2 space-y-2">
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold">Help</h4>
                        <ul className="mt-2 space-y-2">
                            <li>Payment Options</li>
                            <li>Returns</li>
                            <li>Privacy Policies</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold">Newsletter</h4>
                        <div className="flex mt-2">
                            <input
                                type="text"
                                placeholder="Enter Your Email Address"
                                className="border border-gray-400 px-3 py-2 w-full rounded-l"
                            />
                            <button className="bg-yellow-700 text-white px-4 rounded-r">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <p className="text-center text-gray-500 text-sm mt-10">
                    2023 Funiro. All rights reserved
                </p>
            </footer>
        </>
    )
}

export default Footer