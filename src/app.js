import React, { Component } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

export default class app extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <Todo />;
  }
}
