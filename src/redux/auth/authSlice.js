import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [authOperations.fetchCurrentUser.pending](state, action) {
      state.isRefreshing = true;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },
    [authOperations.register.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },
    [authOperations.logIn.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },
    [authOperations.logOut.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
