import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../services/auth/authSlice";
import cartSlice from "../services/cart/cartSlice";
export const store = configureStore({
  reducer: { login: loginSlice.reducer, cart: cartSlice.reducer },
});
