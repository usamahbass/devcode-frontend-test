import axios from "axios";

export const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

request.interceptors.request.use((config) => {
  if (config.method === "get") {
    config.params = {
      ...config.params,
      email: import.meta.env.VITE_EMAIL_URL,
    };
  }

  if (config.method === "post") {
    config.data = {
      ...config.data,
      email: import.meta.env.VITE_EMAIL_URL,
    };
  }

  return config;
});
