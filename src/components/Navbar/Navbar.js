/* eslint-disable import/no-named-as-default */
import React from 'react';
// import PropTypes from 'prop-types';
// import {NavLink} from 'react-router-dom';
import {Navbar, Nav, /*NavDropdown, MenuItem*/} from 'react-bootstrap';
import NavLink from './NavLink';
import NavBrand from './NavBrand';
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
const MyNavbar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <NavBrand to="/">React Starter App</NavBrand>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavLink to="/login">Login</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavbar;
