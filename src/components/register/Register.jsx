import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        phone: "",
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";

        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Email is invalid";

        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";

        if (!formData.confirmPassword)
            newErrors.confirmPassword = "Confirm your password";
        else if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";

        if (!formData.address.trim()) newErrors.address = "Address is required";

        if (!formData.phone.trim()) newErrors.phone = "Phone is required";
        else if (!/^\d{10,15}$/.test(formData.phone))
            newErrors.phone = "Phone number is invalid";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Registration Successful!");
            setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                address: "",
                phone: "",
            });
            setErrors({});
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-500">
            <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-extrabold mb-8 text-gray-800 text-center">
                    Register
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                        />
                        {errors.name && (
                            <p className="text-red-500 mt-1 text-sm">{errors.name}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                        />
                        {errors.email && (
                            <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                        />
                        <span
                            className="absolute right-4 top-3 cursor-pointer text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                        {errors.password && (
                            <p className="text-red-500 mt-1 text-sm">{errors.password}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
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
                        {errors.confirmPassword && (
                            <p className="text-red-500 mt-1 text-sm">{errors.confirmPassword}</p>
                        )}
                    </div>

                    {/* Address */}
                    <div>
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                        />
                        {errors.address && (
                            <p className="text-red-500 mt-1 text-sm">{errors.address}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                        />
                        {errors.phone && (
                            <p className="text-red-500 mt-1 text-sm">{errors.phone}</p>
                        )}
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
