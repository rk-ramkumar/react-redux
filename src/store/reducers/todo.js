import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { todos: [], newTask: "", isLoading: false };

export const fetchTodo = createAsyncThunk("todo/fetchTodos",async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");

      return res.json
    })

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, actions) => {
        state.todos.push(actions.payload);
        state.newTask = "";
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

  extraReducers: {
    [fetchTodo.pending]:(state)=>{
      state.isLoading = true
    }
  }
});

export const { addTodo, setNewTask } = todoSlice.actions;

export default todoSlice.reducer;
