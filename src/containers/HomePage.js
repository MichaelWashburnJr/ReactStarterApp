import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class HomePage extends React.Component {

  render() {
    return (
      <div className="container">
        <h1>Home</h1>
      </div>
    );
  }
}

HomePage.propTypes = {
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
