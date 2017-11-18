import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/authActions';
import LoginForm from '../../components/forms/LoginForm';
import './LoginPage.scss';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      alert: undefined
    };
  }

  submit(values) {
    const email = values.email;
    const password = values.password
    this.props.actions.login(email, password).then((response) => {
      //TODO: Navigate to landing page for authenticated users
    }, (error) => {
      this.setState({alert: error});
    });
  }

  render() {
    return (
      <LoginForm onSubmit={this.submit} alert={this.state.alert}/>
    );
  }
}

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    // data: state.reddit.data,
    // isFetching: state.reddit.isFetching,
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
)(LoginPage);
