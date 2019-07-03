import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./app";

class Index extends Component {
  state = {
    type: "password",
    show: true
  };

  render() {
    return (
      <>
        {this.state.show && (
          <App type={this.state.type}>Hello from Children</App>
        )}
        <button
          type="button"
          onClick={() => this.setState({ type: "text", show: false })}
        >
          Click Parent
        </button>
      </>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
