import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: "",
    firstName: null,
    lastName: null,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.error = null;
    },
    profileSuccess: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.token = "";
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = "";
      state.firstName = null;
      state.lastName = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, profileSuccess, loginFailure, logout, updateUsername } = authSlice.actions;
export default authSlice.reducer;