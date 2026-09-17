import api from "../axiosInstance";

export async function registerUser({ name, email, password }) {
    const { data } = await api.post("/auth/register", { name, email, password });
    return data.data
}

export async function loginUser({ email, password }) {
    const { data } = await api.post("/auth/login", { email, password });
    return data.data
}

export async function loginWithGoogle() {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`
}