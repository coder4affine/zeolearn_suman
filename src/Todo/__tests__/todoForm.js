import React from "react";
import TodoForm from "../todoForm";

function setup() {
  const props = {
    addTodo: jest.fn(),
    todoText: "",
    changeText: jest.fn()
  };

  const Wrapper = shallow(<TodoForm {...props} />);
  return {
    props,
    Wrapper
  };
}

describe("take snap shot", () => {
  it("snapshot", () => {
    const { Wrapper } = setup();
    expect(Wrapper).toMatchSnapshot();
  });
});

describe("test component exist or not", () => {
  it("description", () => {
    const { Wrapper } = setup();
    expect(Wrapper.find("div").exists()).toBe(true);
    expect(Wrapper.find("div").hasClass("container")).toBe(true);

    expect(Wrapper.find("form").exists()).toBe(true);
    expect(Wrapper.find("form").prop("onSubmit")).toEqual(expect.any(Function));

    expect(Wrapper.find("input").exists()).toBe(true);
    expect(Wrapper.find("input").props()).toEqual({
      type: "text",
      name: "todoText",
      value: "",
      onChange: expect.any(Function),
      required: true
    });

    expect(Wrapper.find("button").exists()).toBe(true);
    expect(Wrapper.find("button").prop("type")).toEqual("submit");
    expect(Wrapper.find("button").text()).toEqual("Add Todo");
  });

  it("simulate onsubmit event", () => {
    const { Wrapper, props } = setup();
    const form = Wrapper.find("form");
    form.simulate("submit");
    form.simulate("submit");
    expect(props.addTodo.mock.calls.length).toEqual(2);
  });

  it("simulate onChange event", () => {
    const { Wrapper, props } = setup();
    const input = Wrapper.find("input");
    input.simulate("change");
    input.simulate("change");
    expect(props.changeText.mock.calls.length).toEqual(2);
  });
});
