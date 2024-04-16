import {
  createSlice,
  configureStore,
  nanoid,
} from "@reduxjs/toolkit";

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

const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [] },
  reducers: {
    addTodo: (state, actions) => {
      state.todos.push(actions.payload);
    },
  },
  prepare: (text) => {
    var id = nanoid();
    return { payload: { id, text } };
  },
});

export const { increament, decrement } = couterSlice.actions;
export const { add } = todoSlice.actions;


const store = configureStore({
  reducer: couterSlice.reducer,
  reducer: todoSlice.reducer,
});

export default store;
