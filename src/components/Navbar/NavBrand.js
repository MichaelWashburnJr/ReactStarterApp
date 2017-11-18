import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const NavBrand = (props) => {

  let content = props.children;
  if(typeof(props.children) === 'string') {
    content = <div className="text">{content}</div>;
  } else {
    content = <div className="node">{content}</div>;
  }

  return (
    <div className="navbrand" onClick={() => props.history.push(props.to)}>
      {content}
    </div>
  );
};

NavBrand.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.node
    ]
  ).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
};

export default withRouter(NavBrand);
