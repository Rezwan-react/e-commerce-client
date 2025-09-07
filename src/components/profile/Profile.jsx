import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../store/slices/authSlice";

function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [preview, setPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authSlice.user);

  const [formData, setFormData] = useState({
    name: user.name || "",
    password: "",
    // phone: user?.phone || "",
    // address: user?.address || "",
    avatar: null,
  });

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateUserData(formData));
    setEditMode(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full p-8 bg-white rounded-2xl shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-800">My Profile</h2>
          <button
            type="button"
            onClick={() => setEditMode(!editMode)}
            className="py-2 px-4 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
          >
            {editMode ? "Cancel" : "Edit"}
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSave} >
          {/* Profile Picture */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2 rounded-full overflow-hidden bg-gray-200">
              {preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
              ) : user?.avatar ? (
                <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="text-6xl font-bold text-black flex items-center justify-center h-full">
                  {user?.name?.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            {editMode && (
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setFormData((prev) => ({ ...prev, avatar: file }));
                    setPreview(URL.createObjectURL(file));
                  }
                }}
              />
            )}
          </div>

          {/* Name */}
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            value={editMode ? formData.name : user?.name}
            placeholder="Name"
            readOnly={!editMode}
            className={`w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition ${!editMode ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={user?.email}
            placeholder="Email"
            readOnly
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 cursor-not-allowed"
          />

          {/* Password */}
          {editMode && (
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                value={formData.password}
                placeholder="New Password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              />
              <span
                className="absolute right-4 top-3 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          )}

          {/* Phone */}
          <input
            type="text"
            name="phone"
            // onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
            value={user?.phone}
            placeholder="Phone"
            readOnly={!editMode}
            className={`w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition ${!editMode ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
          />

          {/* Address */}
          <input
            type="text"
            name="address"
            // onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
            value={user?.address}
            placeholder="Address"
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
