import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const ProductDetails = () => {
    const [selectedImage, setSelectedImage] = useState("/images/sofa1.png");
    const [quantity, setQuantity] = useState(1);

    const productImages = [
        "/images/sofa1.png",
        "/images/sofa2.png",
        "/images/sofa3.png",
        "/images/sofa4.png",
    ];

    return (
        <section>
            <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Side - Images */}
                <div className="flex gap-6">
                    <div className="flex flex-col gap-4">
                        {productImages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt="product"
                                onClick={() => setSelectedImage(img)}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${selectedImage === img ? "border-gray-900" : "border-gray-200"
                                    }`}
                            />
                        ))}
                    </div>
                    <div className="flex-1">
                        <img
                            src={selectedImage}
                            alt="Main Product"
                            className="w-full rounded-xl bg-[#fdf5ee] p-6"
                        />
                    </div>
                </div>

                {/* Right Side - Details */}
                <div>
                    <h1 className="text-3xl font-bold">Asgaard sofa</h1>
                    <p className="text-2xl text-gray-600 mt-2">Rs. 250,000.00</p>

                    {/* Rating */}
                    <div className="flex items-center mt-2">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStarHalfAlt className="text-yellow-500" />
                        <span className="ml-2 text-gray-500 text-sm">5 Customer Review</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mt-4">
                        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                    </p>

                    {/* Sizes */}
                    <div className="mt-6">
                        <p className="font-medium">Size</p>
                        <div className="flex gap-3 mt-2">
                            <span className="px-4 py-2 rounded-md bg-yellow-600 text-white cursor-pointer">L</span>
                            <span className="px-4 py-2 rounded-md border cursor-pointer">XL</span>
                            <span className="px-4 py-2 rounded-md border cursor-pointer">XS</span>
                        </div>
                    </div>

                    {/* Colors */}
                    <div className="mt-6">
                        <p className="font-medium">Color</p>
                        <div className="flex gap-3 mt-2">
                            <span className="w-8 h-8 rounded-full bg-purple-500 cursor-pointer"></span>
                            <span className="w-8 h-8 rounded-full bg-black cursor-pointer"></span>
                            <span className="w-8 h-8 rounded-full bg-yellow-600 cursor-pointer"></span>
                        </div>
                    </div>

                    {/* Quantity and Buttons */}
                    <div className="flex items-center gap-4 mt-8">
                        <div className="flex items-center border rounded-lg">
                            <button
                                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                                className="px-3 py-2"
                            >
                                -
                            </button>
                            <span className="px-4">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="px-3 py-2"
                            >
                                +
                            </button>
                        </div>
                        <button className="px-6 py-3 border rounded-lg hover:bg-black hover:text-white transition">
                            Add To Cart
                        </button>
                        <button className="px-6 py-3 border rounded-lg hover:bg-black hover:text-white transition">
                            + Compare
                        </button>
                    </div>

                    {/* Info */}
                    <div className="mt-8 border-t pt-6 text-gray-600 text-sm space-y-2">
                        <p>
                            <span className="font-medium">SKU:</span> SS001
                        </p>
                        <p>
                            <span className="font-medium">Category:</span> Sofas
                        </p>
                        <p>
                            <span className="font-medium">Tags:</span> Sofa, Chair, Home, Shop
                        </p>
                        <p className="flex items-center gap-3">
                            <span className="font-medium">Share:</span>
                            <FaFacebook className="cursor-pointer hover:text-black" />
                            <FaLinkedin className="cursor-pointer hover:text-black" />
                            <FaTwitter className="cursor-pointer hover:text-black" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
