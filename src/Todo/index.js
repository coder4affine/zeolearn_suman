import React, { Component } from "react";
import PropTypes from "prop-types";
import "./todo.css";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import TodoStatus from "./todoStatus";

export default class index extends Component {
  static propTypes = {};

  state = {
    todoText: "",
    todoText1: "",
    todoList: [],
    updatedTodo: null,
    status: "all"
  };

  constructor(props) {
    super(props);
    this.loadData();
  }

  loadData = async () => {
    const res = await fetch("http://localhost:3004/todoList");
    const todoList = await res.json();
    this.setState({ todoList: todoList });
  };

  changeText = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();

    // fetch("http://localhost:3004/todoList", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     id: state.todoList.length,
    //     text: state.todoText,
    //     isDone: false
    //   }),
    //   headers: {
    //     accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // });
    this.setState(state => {
      return {
        todoList: [
          ...state.todoList,
          { id: state.todoList.length, text: state.todoText, isDone: false }
        ],
        todoText: "",
        status: "all"
      };
    });
  };

  deleteTodo = todo => {
    this.setState(state => {
      return {
        todoList: state.todoList.filter(x => x.id !== todo.id)
      };
    });
  };

  changeTodo = updatedTodo => {
    const { todoList } = this.state;
    const index = todoList.findIndex(x => x.id === updatedTodo.id);
    this.setState({
      todoList: [
        ...todoList.slice(0, index),
        updatedTodo,
        ...todoList.slice(index + 1)
      ]
    });
  };

  changeStatus = status => {
    this.setState({ status: status });
  };

  render() {
    const { todoText, todoList, updatedTodo, status } = this.state;
    console.log(status);

    const filteredTodos = todoList.filter(x => {
      if (status === "pending") {
        return !x.isDone;
      } else if (status === "completed") {
        return x.isDone;
      } else {
        return true;
      }
    });

    return (
      <div>
        <TodoForm
          addTodo={this.addTodo}
          todoText={todoText}
          changeText={this.changeText}
        />
        <TodoList
          todos={filteredTodos}
          changeTodo={this.changeTodo}
          deleteTodo={this.deleteTodo}
        />
        <TodoStatus changeStatus={this.changeStatus} />
      </div>
    );
  }
}
