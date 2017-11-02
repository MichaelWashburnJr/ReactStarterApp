/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, /*NavLink,*/ Route } from 'react-router-dom';
import HomePage from '../containers/HomePage';
import NotFoundPage from './NotFoundPage';
import '../styles.scss';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
        // <div>
        //   <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
        //   {' | '}
        //   <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
        //   {' | '}
        //   <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        // </div>
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
