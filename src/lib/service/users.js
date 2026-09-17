import api from "../axiosInstance";

export async function getProfile() {
    const { data } = await api.get("/users/me");
    return data.data
}