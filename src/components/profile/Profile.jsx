import React, { useState } from "react";

function Profile() {
    const [userData, setUserData] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        password: "password123",
        address: "123 Main St",
        phone: "0123456789",
        profilePic: null,
    });

    const [editMode, setEditMode] = useState(false);
    const [preview, setPreview] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setUserData({ ...userData, profilePic: file });
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Profile Updated Successfully!");
        setEditMode(false);
        console.log(userData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-lg w-full p-8 bg-white rounded-2xl shadow-xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-extrabold text-gray-800">My Profile</h2>
                    <button
                        onClick={() => setEditMode(!editMode)}
                        className="py-2 px-4 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
                    >
                        {editMode ? "Cancel" : "Edit"}
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Profile Picture */}
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 mb-2 rounded-full overflow-hidden bg-gray-200">
                            {preview ? (
                                <img
                                    src={preview}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            ) : userData.profilePic ? (
                                <img
                                    src={URL.createObjectURL(userData.profilePic)}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-gray-400 flex items-center justify-center h-full">
                                    No Image
                                </span>
                            )}
                        </div>
                        {editMode && (
                            <input type="file" accept="image/*" onChange={handleFileChange} />
                        )}
                    </div>

                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        readOnly={!editMode}
                        className={`w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition ${!editMode ? "bg-gray-100 cursor-not-allowed" : ""
                            }`}
                    />

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        readOnly={!editMode}
                        className={`w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition ${!editMode ? "bg-gray-100 cursor-not-allowed" : ""
                            }`}
                    />

                    {/* Password */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            readOnly={!editMode}
                            className={`w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition ${!editMode ? "bg-gray-100 cursor-not-allowed" : ""
                                }`}
                        />
                        {editMode && (
                            <span
                                className="absolute right-4 top-3 cursor-pointer text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </span>
                        )}
                    </div>

                    {/* Address */}
                    <input
                        type="text"
                        name="address"
                        value={userData.address}
                        onChange={handleChange}
                        readOnly={!editMode}
                        className={`w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition ${!editMode ? "bg-gray-100 cursor-not-allowed" : ""
                            }`}
                    />

                    {/* Phone */}
                    <input
                        type="text"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        readOnly={!editMode}
                        className={`w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition ${!editMode ? "bg-gray-100 cursor-not-allowed" : ""
                            }`}
                    />

                    {/* Submit */}
                    {editMode && (
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg hover:scale-105 hover:shadow-xl transition transform"
                        >
                            Save Changes
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Profile;
