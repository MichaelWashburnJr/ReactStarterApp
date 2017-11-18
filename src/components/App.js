/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from '../containers/HomePage';
import LoginPage from '../containers/LoginPage';
import NotFoundPage from './NotFoundPage';
import '../styles.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="page-body">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
