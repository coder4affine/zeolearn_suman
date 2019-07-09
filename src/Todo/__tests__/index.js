import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
import Index from "../index";

function setup() {
  const props = {};
  const Wrapper = shallow(<Index {...props} />);
  return {
    props,
    Wrapper
  };
}

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
});
