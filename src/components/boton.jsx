import '../StyleSheets/boton.css';
import PropTypes from 'prop-types';
import React from 'react'; 

function Button({ className, children }) {
  return (
    <button className={className} type="button">{children}</button>
  );
}

Button.propTypes = {
  className: PropTypes.string, // Add prop-type validation for className
  children: PropTypes.node.isRequired, // Add prop-type validation for children
};

export default Button;