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

export async function forgotPassword(email) {
    const { data } = await api.post("/auth/forgot-password", { email });
    return data;
}

export async function resetPassword({ token, newPassword }) {
    const { data } = await api.post("/auth/reset-password", { token, newPassword });
    return data;
}