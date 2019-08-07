/* eslint-disable react/no-unused-state */
import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

// export const myContext = createContext({
//   name: 'yagnesh',
// });

export default class themeContext extends Component {
  state = {
    theme: 'light',
    changeTheme: theme => this.setState({ theme }),
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    return <ThemeContext.Provider value={this.state}>{children}</ThemeContext.Provider>;
  }
}
