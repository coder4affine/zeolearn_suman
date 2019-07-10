import React from "react";
import Index from "../index";
import TodoForm from "../todoForm";
import TodoList from "../todoList";
import TodoStatus from "../todoStatus";

function setup() {
  const props = {};
  const Wrapper = shallow(<Index {...props} />);
  return {
    props,
    Wrapper
  };
}

describe("take screenshot of component", () => {
  it("screenshot", () => {
    const { Wrapper } = setup();
    expect(Wrapper).toMatchSnapshot();
  });
});

describe("test index.js", () => {
  it("description", () => {
    const { Wrapper } = setup();
    const h1 = Wrapper.find("h1");

    expect(h1.exists()).toBe(false);

    // adding error in component
    Wrapper.setState({ error: new Error("Oops! something went wrong") });
    const newH1 = Wrapper.find("h1");
    expect(newH1.exists()).toBe(true);
    expect(newH1.text()).toEqual("Oops! something went wrong");
  });

  it("test TodoForm exist?", () => {
    const { Wrapper } = setup();
    Wrapper.setState({ error: null });
    const todoForm = Wrapper.find(TodoForm);
    expect(todoForm.exists()).toBe(true);
    expect(todoForm.props()).toEqual({
      addTodo: expect.any(Function),
      todoText: "",
      changeText: expect.any(Function)
    });
  });
  it("TodoList", () => {
    const { Wrapper } = setup();
    Wrapper.setState({ error: null });
    const todoList = Wrapper.find(TodoList);
    expect(todoList.exists()).toBe(true);
    expect(todoList.props()).toEqual({
      changeTodo: expect.any(Function),
      todos: [],
      deleteTodo: expect.any(Function)
    });
  });

  it("TodoStatus", () => {
    const { Wrapper } = setup();
    Wrapper.setState({ error: null });
    const todoStatus = Wrapper.find(TodoStatus);
    expect(todoStatus.exists()).toBe(true);
    expect(todoStatus.props()).toEqual({
      changeStatus: expect.any(Function)
    });
  });
});
