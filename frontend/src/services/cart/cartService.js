import { apiInstance } from "../apiService";

export const getCart = async (userId) => {
  try {
    const api = apiInstance();
    const result = await api.get(`/cart/items/${userId}`);
    if (result.data) return result.data;
  } catch (error) {
    throw error;
  }
};

export const updateCart = async (cartItem) => {
  try {
    const api = apiInstance();
    const result = await api.patch(`/cart/items/update/${cartItem._id}`, {
      ...cartItem,
    });
    if (result.data) return result.data;
  } catch (error) {
    throw error;
  }
};
export const addToCart = async () => {
  try {
  } catch (error) {
    throw error;
  }
};
