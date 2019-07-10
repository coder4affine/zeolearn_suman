import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import TodoStatus from "./todoStatus";
import { API } from "../utils";

export default class index extends Component {
  static propTypes = {};

  state = {
    todoText: "",
    todoText1: "",
    todoList: [],
    updatedTodo: null,
    status: "all",
    error: null
  };

  constructor(props) {
    super(props);
    this.loadData();
  }

  loadData = async () => {
    try {
      const todoList = await API({ uri: "http://localhost:3004/todoList" });
      this.setState({ todoList: todoList });
      //   throw new Error("Load data fail");
    } catch (error) {
      this.setState({ error });
    }
  };

  changeText = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = async event => {
    try {
      event.preventDefault();

      const { todoText } = this.state;
      const todo = await API({
        uri: "http://localhost:3004/todoList",
        method: "POST",
        body: {
          text: todoText,
          isDone: false
        }
      });

      this.setState(state => {
        return {
          todoList: [...state.todoList, todo],
          todoText: "",
          status: "all"
        };
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  deleteTodo = async todo => {
    try {
      await API({
        uri: `http://localhost:3004/todoList/${todo.id}`,
        method: "DELETE"
      });

      this.setState(state => {
        return {
          todoList: state.todoList.filter(x => x.id !== todo.id)
        };
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  changeTodo = async updatedTodo => {
    try {
      const todo = await API({
        uri: `http://localhost:3004/todoList/${updatedTodo.id}`,
        method: "PUT",
        body: updatedTodo
      });

      const { todoList } = this.state;

      const index = todoList.findIndex(x => x.id === updatedTodo.id);
      this.setState({
        todoList: [
          ...todoList.slice(0, index),
          todo,
          ...todoList.slice(index + 1)
        ]
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  changeStatus = status => {
    this.setState({ status: status });
  };

  render() {
    const { todoText, todoList, updatedTodo, status, error } = this.state;
    console.log(status);

    if (error) {
      return <h1>{error.message}</h1>;
    }

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
