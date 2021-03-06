import axios from "axios";
import { userName } from "../constants";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 5000,
 //   params: { userName }
});

// Add a request interceptor
axiosInstance.interceptors.request.use(config => {
    // Do something before request is sent
    return config;
  }, error => {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosInstance;
