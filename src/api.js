
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
})

export const createCalc = payload => api.post(`/cal-cal-cal`, payload)
export const updateCalc = (id, payload) => api.put(`/cal-cal-cal/${id}`, payload)
export const getCalc = _id => api.get(`/cal-cal-cal/${_id}`)

const apis = {
    createCalc,
    updateCalc,
    getCalc,
}

export default apis