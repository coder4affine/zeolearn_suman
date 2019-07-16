/* eslint-disable react/no-unused-state */
import React, { Component, createContext } from 'react';

export const { Provider: ThemeProvider, Consumer: ThemeConsumer } = createContext();

export default class themeContext extends Component {
  state = {
    theme: 'light',
    changeTheme: theme => this.setState({ theme }),
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    return <ThemeProvider value={this.state}>{children}</ThemeProvider>;
  }
}
