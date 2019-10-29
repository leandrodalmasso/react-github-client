// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

function Button({ className, disabled, onClick, text }) {
  return (
    <button
      className={`button${className ? ` ${className}` : ''}`}
      disabled={disabled}
      onClick={e => onClick(e)}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  disabled: false,
  onClick: () => {},
  text: '',
};

export default Button;