import axios from "axios";

export const apiInstance = () => {
  const token = localStorage.getItem("userToken") || null;
  let config = {
    baseURL: "http://localhost:3002/",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  if (token) config.headers.Authorization = `Bearer ${token}`;
  const axiosInstance = axios.create(config);

  return axiosInstance;
};
