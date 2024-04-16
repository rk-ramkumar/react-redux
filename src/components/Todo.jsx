import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { typeTodo } from "../store/reducers/todo";

const Todo = () => {
  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  function handleAddTodo() {}

  return (
    <div>
      <input
        placeholder="Enter your task..."
        onChange={({ target: { value } }) => dispatch(typeTodo(value))}
      />
      <button onClick={handleAddTodo}>Add</button>

      <div>
        {state.todos.map((todo, idx) => (
          <div key={idx}> todo </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
