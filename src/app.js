import React, { Component } from 'react';
import Child from './child';

class App extends Component {
  state = {
    message: '',
    user: {
      name: 'yagnesh',
    },
  };

  render() {
    const { message, user } = this.state;
    console.log(user);
    console.log('parent component');
    return (
      <div>
        <h1>Hello from parent</h1>
        <span>{message}</span>
        <button
          type="button"
          onClick={() => {
            user.name = 'yagnesh modh';
            this.setState({ user });
          }}
        >
          Click Me
        </button>

        <Child user={user} />
      </div>
    );
  }
}

App.propTypes = {};

export default App;
