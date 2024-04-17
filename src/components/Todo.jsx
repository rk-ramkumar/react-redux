import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodo, setNewTask } from "../store/reducers/todo";

const Todo = () => {
  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  function handleAddTodo() {
    dispatch(addTodo(state.newTask));
  }

  return (
    <div>
      <input
        placeholder="Enter your task..."
        value={state.newTask}
        onChange={({ target: { value } }) => dispatch(setNewTask(value))}
      />
      <button onClick={handleAddTodo}>Add</button>

      <div>
        {state.todos.map((todo, idx) => (
          <div key={idx}> {todo.title} </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
