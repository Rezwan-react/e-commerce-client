import axios from "axios";

// ============================= axios part start
const api = axios.create({
    baseURL: `http://localhost:8000/api/v1`,
    headers: {
        "Content-Type": "application/json",
    },
});

// ============================== authServices part start
export const authServices = {
    registration: async (userData) => {
        const res = await api.post("/auth/registration", userData);
        return res.data;
    },
    verifyOtp: async (email, otp) => {
        const res = await api.post("/auth/verifyEmail", { email, otp })
        return res.data;
    },
    loginUser: async (userData) => {
        const res = await api.post("/auth/login", userData);
        if (res.data.accessToken) {
            localStorage.setItem("token", res.data.accessToken);
            localStorage.setItem("loggedUser", JSON.stringify(res.data.user));
        }
        return res.data;
    },
    updateUser: async (fullName, password, avatar) => {
        const res = await api.post("/auth/update", { fullName, password, avatar }, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        return res.data;
    },
};