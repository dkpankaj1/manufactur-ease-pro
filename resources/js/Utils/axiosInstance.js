import axios from 'axios';

// Create Axios instance
const axiosInstance = axios.create({
  timeout: 10000, // Timeout of 10 seconds
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // console.log('Request Interceptor:', config);
    return config;
  },
  function (error) {
    // Do something with request error
    // console.error('Request Error Interceptor:', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Do something with response data
    // console.log('Response Interceptor:', response);
    return response;
  },
  function (error) {
    // Do something with response error
    // console.error('Response Error Interceptor:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
