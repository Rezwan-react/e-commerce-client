import axios from "axios";

// ============================= axios part start
const api = axios.create({
    baseURL: `http://localhost:8000/api/v1`,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
}, (err) => {
    return Promise.reject(err);
})

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
    updateUser: async (name, password, avatar) => {
        const res = await api.post("/auth/update", { name, password, avatar }, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        return res.data;
    },
};

export const categoryServices = {
    categoryList: async (slug) => {
        const res = await api.get(`/product/categories`);
        return res.data;
    },
};
