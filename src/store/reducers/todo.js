import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { todos: [], newTask: "", isLoading: false };

export const fetchTodo = createAsyncThunk("todo/fetchTodos", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return data;
});

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
        return { payload: { id, title: task } };
      },
    },

    setNewTask: (state, actions) => {
      state.newTask = actions.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodo.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.todos = actions.payload;
    });
  },
});

export const { addTodo, setNewTask } = todoSlice.actions;

export default todoSlice.reducer;
