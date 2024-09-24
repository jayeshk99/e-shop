import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authThunk";

const userToken = localStorage.getItem("userToken") || null;

const initialState = {
  isAuthenticated: false,
  user: {},
  accessToken: userToken,
  refreshToken: "",
  error: null,
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout(state) {
      state = initialState;
    },
  },
  extraReducers: {
    // [userLogin.pending]: (state)=>{
    // }
    [userLogin.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    [userLogin.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default loginSlice;
