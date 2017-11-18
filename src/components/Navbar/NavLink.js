import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const NavLink = (props) => (
  <li role="presentation">
    <button className="navlink-btn" onClick={() => props.history.push(props.to)}>
      {props.children}
    </button>
  </li>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
};

export default withRouter(NavLink);
