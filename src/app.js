import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./app.css";

//mounting

// constructor
// getDeriveStateFromProps
// render
// componentDidMount

// updating

//

export default class app extends PureComponent {
  constructor(props) {
    super(props);
    console.log("constructor");
    // console.log(this.buttonRef.innerHTML);
  }

  state = {
    test: "test string"
  };

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return {
      ...state,
      abc: "abc",
      type: props.type
    };
  }

  componentDidMount() {
    // console.log(this.buttonRef.innerHTML);
    document.addEventListener("copy", this.copyText);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("shouldComponentUpdate");
    if (this.state.test !== nextState.test) {
      return true;
    }
    return false;
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   return prevState.test;
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    document.removeEventListener("copy", this.copyText);
  }

  copyText = () => {
    console.log("copy");
  };

  clickMe = () => {
    throw new Error("error generated on click");
  };

  // static propTypes = {};
  render() {
    console.log("render");
    const { children } = this.props;
    const { type, test, abc } = this.state;
    return (
      <>
        <h1>App Component</h1>
        <h1>{type}</h1>
        <h1>{children}</h1>
        <h1>{abc}</h1>
        <h1>{test}</h1>
        <button ref={ref => (this.buttonRef = ref)} onClick={this.clickMe}>
          Click Me
        </button>
      </>
    );
  }
}

// import React from "react";

// const app = ({ type, children }) => {
//   return (
//     <div className="container">
//       <h1>App Component</h1>
//       <h1>{type}</h1>
//       <h1>{children}</h1>
//       <input type="password" />
//     </div>
//   );
// };

// export default app;
