/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Navbar, Nav, /*NavDropdown, MenuItem*/} from 'react-bootstrap';
import NavAction from './NavAction';
import NavLink from './NavLink';
import NavBrand from './NavBrand';
import * as authActions from '../../actions/authActions';
import './Navbar.scss';

// <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//   <MenuItem eventKey={3.1}>Action</MenuItem>
//   <MenuItem eventKey={3.2}>Another action</MenuItem>
//   <MenuItem eventKey={3.3}>Something else here</MenuItem>
//   <MenuItem divider />
//   <MenuItem eventKey={3.3}>Separated link</MenuItem>
// </NavDropdown>
// <Nav>
//   <NavLink to="/">Home</NavLink>
// </Nav>
const MyNavbar = (props) => {

  let navRight;
  if(props.isAuthenticated) {
    navRight = (
      <NavAction onClick={props.logout}>Logout</NavAction>
    );
  }
  else {
    navRight = (
      <NavLink to="/login">Login</NavLink>
    );
  }

  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <NavBrand to="/">React Starter App</NavBrand>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          {navRight}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

MyNavbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: bindActionCreators(authActions.logout, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyNavbar);
