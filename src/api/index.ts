import axios, { AxiosRequestConfig } from "axios";

const API_URL:string = 'http://localhost:8080/api';

const api = axios.create({
  baseURL:API_URL,
})

api.interceptors.request.use((config:AxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
  
});

export default api;