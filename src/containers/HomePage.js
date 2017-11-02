import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.actions.getData();
  }

  render() {
    return (
      <div className="container">
        <h1>Home</h1>
        <p>Reddit {this.props.isFetching ? 'is loading...' : 'loaded.'}</p>
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state.reddit.data,
    isFetching: state.reddit.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
