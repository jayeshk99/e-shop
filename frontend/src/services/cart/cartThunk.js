import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCart } from "./cartService";

export const fetchCart = createAsyncThunk(
  "cart/fetch",
  async ({ userId }, { rejectWithValue }) => {
    try {
      const result = await getCart(userId);
      console.log("cart --- result:", result);
      return result;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// export const updateCart = createAsyncThunk("cart/update", async());
