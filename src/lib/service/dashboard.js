import api from "../axiosInstance";

export async function GetDashboardSummary() {
    const { data } = await api.get("/dashboard/summary")
    return data.data
}