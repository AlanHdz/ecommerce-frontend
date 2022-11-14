import axios from 'axios'
import { app } from '../main'

const api = axios.create({
    baseURL: process.env.BASE_URL || 'http://localhost'
})

api.interceptors.response.use(response => response, error => {
    if (error.response.status === 401) {

    }
    return Promise.reject(error)
})

api.interceptors.request.use((config) => {
    const xsrfToken = app.$cookies.get('XSRF-TOKEN')

    if (xsrfToken) {
        config.headers['X-XSRF-TOKEN'] = xsrfToken 
    }

    return config
})

export default api