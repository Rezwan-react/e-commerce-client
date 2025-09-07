import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegWindowClose } from "react-icons/fa";
import { Link } from "react-router";

function CardSidebar({ productList = [] }) {
    const [open, setOpen] = useState(true); // sidebar is open initially

    const totalPrice = productList.reduce((total, product) => total + product.total, 0);

    if (!open) return null; // if closed, nothing is rendered

    return (
        <section className="fixed bottom-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] z-50 flex justify-end">
            <div className="w-[400px] py-7 bg-white flex flex-col max-h-full overflow-y-auto shadow-lg">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-10 pb-6 border-b px-6">
                    <h2 className="text-2xl font-semibold font-poppins text-black">
                        Shopping Cart
                    </h2>
                    <button onClick={() => setOpen(false)}>
                        <IoMdCloseCircleOutline
                            className="text-[#666666] cursor-pointer text-2xl hover:text-black transition"
                        />
                    </button>
                </div>

                {/* Products */}
                {productList.length > 0 ? (
                    productList.map((data) => (
                        <div
                            key={data.id}
                            className="flex items-center pb-5 border-b px-6 hover:bg-gray-50 transition rounded-lg"
                        >
                            <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                                <img
                                    src={data.images}
                                    className="w-full h-full object-cover"
                                    alt={data.title}
                                />
                            </div>
                            <div className="ml-4 flex-1">
                                <h3 className="font-semibold text-base text-black truncate">
                                    {data.title}
                                </h3>
                                <p className="text-sm text-gray-700">
                                    {data.quantity} x{" "}
                                    <span className="text-brand font-medium">BDT {data.total}</span>
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 px-6 py-10">
                        Your cart is empty.
                    </p>
                )}

                {/* Footer */}
                {productList.length > 0 && (
                    <div className="flex items-center justify-between px-6 mt-auto pt-6 border-t">
                        <span className="font-medium text-lg">Total: BDT {totalPrice}</span>
                        <Link
                            to="/checkout"
                            className="h-fit py-2 px-6 bg-brand text-white rounded-full font-normal text-xs hover:bg-brand-dark transition"
                        >
                            Order
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}

export default CardSidebar;
