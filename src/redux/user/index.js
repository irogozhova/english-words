import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    id: null,
    username: null,
    isLoading: true,
  },
  reducers: {
    getCurrentUser(state) {
      // const { id, text } = action.payload
      // state.push({ id, text, completed: false })
    },
    signin(state) {
      state.isLoading = true;
    },
    signinSuccess(state, { data }) {
      state.isLoading = false;
      state.id = data.id;
      state.username = data.username;
    },
    signup(state) {
      state.isLoading = true;
    },
    signupSuccess(state, { data }) {
      state.isLoading = false;
      state.id = data.id;
      state.username = data.username;
    },
    signout(state) {
      state.isLoading = true;
    },
    signoutSuccess(state) {
      state.id = null;
      state.username = null;
      state.isLoading = true;
    },
  },
});

export default user.reducer;
