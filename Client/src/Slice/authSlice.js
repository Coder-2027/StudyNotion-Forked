import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,                  //this will contain info of user
  loading: false,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,            //trying to get data from local storage where data remains
  // stored even when we have shut our website
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;              //way to create action creators

export default authSlice.reducer;
