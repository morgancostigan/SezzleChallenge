
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
})

export const createCalc = payload => api.post(`/calcs`, payload)
export const updateCalc = (id, payload) => api.put(`/calcs/${id}`, payload)
export const getCalc = id => api.get(`/calcs/${id}`)

const apis = {
    createCalc,
    updateCalc,
    getCalc,
}

export default apis