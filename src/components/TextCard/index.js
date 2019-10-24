// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

// Styles
import './styles.scss';

function TextCard({ className, color, redirectRoute, text }) {
  const history = useHistory();

  function handleClick() {
    if (redirectRoute) history.push(redirectRoute);
  }

  return (
    <div
      className={`text-card${color ? ` text-card--${color}` : ''}${className ? ` ${className}` : ''}`}
      onClick={handleClick}
    >
      <h3 className="text-card__text">{text}</h3>
    </div>
  );
}

TextCard.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'green']),
  redirectRoute: PropTypes.string,
  text: PropTypes.string,
};

TextCard.defaultProps = {
  className: '',
  color: '',
  redirectRoute: '',
  text: '',
};

export default TextCard;