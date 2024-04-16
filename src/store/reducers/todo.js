import { createSlice, nanoid } from "@reduxjs/toolkit";


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

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer