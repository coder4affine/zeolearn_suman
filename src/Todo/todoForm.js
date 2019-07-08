import React from "react";

const todoForm = ({ addTodo, todoText, changeText }) => {
  return (
    <div className="container">
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          name="todoText"
          value={todoText}
          onChange={changeText}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default todoForm;
