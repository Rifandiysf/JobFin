import api from "../axiosInstance";


export async function updateHomeAddress(homeAddress) {
    const { data } = await api.put("/users/me/home-address", { homeAddress });
    return data.data
}

export async function updateTheme(theme) {
    const { data } = await api.put("/users/me/theme", { theme })
    return data.data
}

export async function changePassword({ currentPassword, newPassword }) {
    const { data } = await api.put("/users/me/change-password", {
        currentPassword,
        newPassword
    })
    return data
}