import axios from 'axios';

const API = axios.create({ 
    baseURL: process.env.REACT_APP_API_BASE_URL, 
  });

  // You can add interceptors here for things like adding authentication headers
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default API;