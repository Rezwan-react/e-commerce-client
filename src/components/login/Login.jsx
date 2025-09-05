import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router";
import { authServices } from "../../services/api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loggedUser } from "../../store/slices/authSlice";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",

    });

    //============================= handel function 
    const handelLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await authServices.loginUser(loginData)
            toast.success(res.success);
            dispatch(loggedUser(res.user));
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error) {
            toast.error(error.response.data.error);
        }

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-500">
            <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-extrabold mb-8 text-gray-800 text-center">
                    Login
                </h2>
                <form onSubmit={handelLogin} className="space-y-5">
                    {/* Email */}
                    <div>
                        <input
                            onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                        />

                    </div>

                    {/* Password */}
                    <div className="relative">
                        <input
                            onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                        />
                        <span
                            className="absolute right-4 top-3 cursor-pointer text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>

                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg hover:scale-105 hover:shadow-xl transition transform"
                    >
                        Login
                    </button>

                    <p className="text-center text-gray-700 mt-3">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="text-pink-500 hover:text-pink-600 font-semibold transition"
                        >
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
