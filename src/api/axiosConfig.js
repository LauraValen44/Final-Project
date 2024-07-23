// src/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

// Puedes agregar interceptores aquí si los necesitas
instance.interceptors.request.use(
  config => {
    // Agregar lógica antes de enviar cada solicitud
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => response,
  error => {
    // Manejar errores de respuesta aquí
    return Promise.reject(error);
  }
);

export default instance;
