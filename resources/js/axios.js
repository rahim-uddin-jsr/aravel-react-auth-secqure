import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api", // Your API base URL
    withCredentials: true, // Ensures cookies are sent with requests
});
axiosInstance.defaults.headers.common["Accept"] = "application/json";
export default axiosInstance;
