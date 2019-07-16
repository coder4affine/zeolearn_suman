import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import route from './route';
import PrivateRoute from './components/privateRoute';
import ThemeContext from './context/themeContext';

const AsyncHeader = loadable(() => import('./components/header'), {
  fallback: <div>Loading...</div>,
});

class App extends PureComponent {
  state = {};

  render() {
    return (
      <Router>
        <AsyncHeader />
        <ThemeContext>
          <Switch>
            {route.map(props => (
              <PrivateRoute key={props.path || 0} {...props} />
            ))}
          </Switch>
        </ThemeContext>
      </Router>
    );
  }
}

App.propTypes = {};

export default App;
