import '../StyleSheets/boton.css';
import PropTypes from 'prop-types';
import React from 'react';

function Button({ className, children }) {
  return (
    <button className={className} type="button">{children}</button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultTypes = {
  className: "",
}

export default Button;
