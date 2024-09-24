import { apiInstance } from "../apiService";

export const fetchProductsService = async () => {
  try {
    const api = apiInstance();
    const result = await api.get("/products");
    if (result.data) return result.data;
  } catch (error) {
    throw error;
  }
};
