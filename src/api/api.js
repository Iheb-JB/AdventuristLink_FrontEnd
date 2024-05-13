import axios from "axios";

const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
});

api.interceptors.request.use(function (config) {
    const storedData = localStorage.getItem('adventur-user');
    if (storedData) {
        const { token } = JSON.parse(storedData);
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default api;