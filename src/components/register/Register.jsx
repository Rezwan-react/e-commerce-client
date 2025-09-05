import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { authServices } from "../../services/api";

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
    });

    //============================= handel function 
    const handelRegister = async (e) => {
        e.preventDefault();
        try {
        const res = await authServices.registration(registerData)
        toast.success(res.success);
        setTimeout(() => {
            navigate(`/otpVerify/${registerData.email}`);
        }, 2000);
        console.log(res);
        } catch (error) {
            toast.error(error.response.data.error);
            console.log(error.response);

        }
    }    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-500">
            <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-extrabold mb-8 text-gray-800 text-center">
                    Register
                </h2>
                <form onSubmit={handelRegister} className="space-y-5">
                    {/* Name */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            onChange={(e) => setRegisterData((prev) => ({ ...prev, name: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                        />

                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            onChange={(e) => setRegisterData((prev) => ({ ...prev, email: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                        />

                    </div>

                    {/* Password */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            required
                            onChange={(e) => setRegisterData((prev) => ({ ...prev, password: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                        />
                        <span
                            className="absolute right-4 top-3 cursor-pointer text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>

                    </div>

                    {/* Confirm Password */}
                    {/* <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={(e) => setRegisterData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                        />
                        <span
                            className="absolute right-4 top-3 cursor-pointer text-gray-600"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? (
                                <AiOutlineEyeInvisible />
                            ) : (
                                <AiOutlineEye />
                            )}
                        </span>

                    </div> */}

                    {/* Address */}
                    <div>
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            required
                            onChange={(e) => setRegisterData((prev) => ({ ...prev, address: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                        />

                    </div>

                    {/* Phone */}
                    <div>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            required
                            onChange={(e) => setRegisterData((prev) => ({ ...prev, phone: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                        />

                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg hover:scale-105 hover:shadow-xl transition transform"
                    >
                        Register
                    </button>

                    <p className="text-center text-gray-700 mt-3">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-pink-500 hover:text-pink-600 font-semibold transition"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;
