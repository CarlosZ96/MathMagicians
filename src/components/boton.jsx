import '../StyleSheets/boton.css';
import PropTypes from 'prop-types';
import React from 'react';

function Button({ className, onClick, children }) {
  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
