import { createSlice, configureStore } from "@reduxjs/toolkit";

const couterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increament, decrement } = couterSlice.actions;

const store = configureStore({
  reducer: couterSlice.reducer,
});

export default store;
