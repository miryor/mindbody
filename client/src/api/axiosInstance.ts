import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
    // TODO: Configure base URL, default headers, etc.
    baseURL: 'http://localhost:3001/api/v1', // Example: Point to your backend API
    withCredentials: true, // Important for sessions/cookies
    headers: {
        'Content-Type': 'application/json',
    },
});

// Optional: Add request/response interceptors if needed
// axiosInstance.interceptors.request.use(config => { ... });
// axiosInstance.interceptors.response.use(response => { ... }, error => { ... });

export default axiosInstance; 