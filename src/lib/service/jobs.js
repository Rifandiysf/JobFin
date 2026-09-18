import api from "../axiosInstance";

export async function getJobs({ page = 1, limit = 10, status, search } = {}) {
    const params = { page, limit };
    if ( status && status !== "all" ) params.status = status
    if ( search ) params.search = search;

    const { data } = await api.get("/jobs", { params });
    return { items: data.data, meta: data.meta }
}

export async function createJob(payload) {
    const { data } = await api.post("/jobs", payload)
    return data.data
}

export async function getJobById(id) {
    const { data } = await api.get(`/jobs/${id}`)
    return data.data
}

export async function updateJob(id, payload) {
    const { data } = await api.put(`/jobs/${id}`, payload)
    return data.data
}

export async function deleteJob(id) {
    await api.delete(`/jobs/${id}`)
}