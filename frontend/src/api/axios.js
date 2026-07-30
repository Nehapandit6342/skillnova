import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

const api = axios.create({
  baseURL: "http://localhost:5001/api",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    api.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized request");

      // optional:
      // localStorage.removeItem("token");
      // localStorage.removeItem("user");
    }

    return Promise.reject(error);
  },
);

export default api;
