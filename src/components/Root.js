import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import { ConnectedRouter } from 'react-router-redux';
import { Provider, connect} from 'react-redux';
import App from './App';
import * as appActions from '../actions/appActions';

class Root extends React.Component {

  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  init: PropTypes.func.isRequired,
};

function mapStateToProps(/*state*/) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    init: bindActionCreators(appActions.init, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
