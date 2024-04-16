import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { todos: [], newTask: "" };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, actions) => {
        state.todos.push(actions.payload);
        state.newTask = ""
      },
      prepare: (task) => {
        var id = nanoid();
        return { payload: { id, task } };
      },
    },

    setNewTask: (state, actions) => {
      state.newTask = actions.payload;
    },
  },
});

export const { addTodo, setNewTask } = todoSlice.actions;

export default todoSlice.reducer;
