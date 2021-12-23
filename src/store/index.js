import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { value: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: 'authenticated',
  initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
