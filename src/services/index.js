import axios from "axios";
// import router from '@/router'

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_DOMAIN,
});

// Add a response interceptor to catch 401 errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle 401 errors here
      // router.push('/login')
      console.warn("Error: " + error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
