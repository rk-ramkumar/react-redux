import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { todos: [], todo: "" };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      state.todos.push(actions.payload);
    },
    typeTodo:(state, actions)=>{
      state.todo = actions.payload
    }
  },
  prepare: (text) => {
    var id = nanoid();
    return { payload: { id, text } };
  },
});

export const { addTodo, typeTodo } = todoSlice.actions;

export default todoSlice.reducer;
