import { apiInstance } from "../apiService";

export const login = async ({ email, password }) => {
  try {
    const api = apiInstance();
    const response = await api.post("/login", { email, password });
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};
