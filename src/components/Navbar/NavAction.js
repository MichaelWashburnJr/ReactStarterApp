import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const NavAction = (props) => (
  <li role="presentation">
    <button className="navlink-btn" onClick={props.onClick}>
      {props.children}
    </button>
  </li>
);

NavAction.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
};

export default withRouter(NavAction);
