import React, { Component } from "react";
import PropTypes from "prop-types";

class todoList extends Component {
  state = {
    update: null
  };

  updateTodo = todo => {
    this.setState({ update: todo });
  };

  changeUpdatedTodoText = event => {
    const { update } = this.state;
    this.setState({
      update: { ...update, text: event.target.value }
    });
  };

  render() {
    const { todos, changeTodo, deleteTodo } = this.props;
    const { update } = this.state;
    return (
      <>
        {todos.map(todo => (
          <div key={todo.id} style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => changeTodo({ ...todo, isDone: !todo.isDone })}
            />
            {update && update.id === todo.id ? (
              <input
                style={{ flex: 1 }}
                type="text"
                value={update.text}
                onChange={this.changeUpdatedTodoText}
                onBlur={() => {
                  changeTodo(update);
                  this.updateTodo(null);
                }}
              />
            ) : (
              <span
                style={{
                  flex: 1,
                  wordBreak: "break-word",
                  padding: 10
                }}
              >
                {todo.text}
              </span>
            )}
            <button type="button" onClick={() => this.updateTodo(todo)}>
              Update
            </button>
            <button type="button" onClick={() => deleteTodo(todo)}>
              Delete
            </button>
          </div>
        ))}
      </>
    );
  }
}

export default todoList;
