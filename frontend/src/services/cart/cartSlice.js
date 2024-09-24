import { createSlice } from "@reduxjs/toolkit";
import { fetchCart } from "./cartThunk";
const initialState = {
  cartQty: 0,
  cartItems: [],
  cart: [],
  itemQty: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseQty: (state, action) => {
      const productId = action.payload;
      let index = state.cartItems.findIndex((item) => item._id === productId);
      if (index >= 0) {
        state.cart[index].quantity += 1;
        state.itemQty[index] += 1;
        state.cartQty += 1;
      }
    },
    decreaseQty: (state, action) => {
      const productId = action.payload;
      let index = state.cartItems.findIndex((item) => item._id === productId);
      if (index >= 0 && state.cartQty > 1) {
        state.cart[index].quantity -= 1;
        state.itemQty[index] -= 1;
        state.cartQty -= 1;
      }
    },
    deleteCartItem: (state, action) => {
      const productId = action.payload;
      let index = state.cartItems.findIndex((item) => item._id === productId);
      if (index >= 0) {
        state.cartQty -= state.itemQty[index];
        state.cartItems.splice(index, 1);
        state.cart.splice(index, 1);
        state.itemQty.splice(index, 1);
      }
    },
  },
  extraReducers: {
    [fetchCart.fulfilled]: (state, action) => {
      state.cartQty = action.payload.qty;
      state.cartItems = action.payload.cartitems;
      state.cart = action.payload.cart;
      state.itemQty = action.payload.itemQty;
    },
  },
});
export const { decreaseQty, increaseQty, deleteCartItem } = cartSlice.actions;
export default cartSlice;
