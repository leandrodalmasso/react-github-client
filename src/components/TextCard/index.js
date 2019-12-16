// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

// Styles
import './styles.scss';

function TextCard({ className, redirectRoute, text }) {
  const history = useHistory();

  function handleClick() {
    if (redirectRoute) history.push(redirectRoute);
  }

  return (
    <div
      className={`text-card${className ? ` ${className}` : ''}`}
      onClick={handleClick}
    >
      <h3 className="text-card__text">{text}</h3>
    </div>
  );
}

TextCard.propTypes = {
  className: PropTypes.string,
  redirectRoute: PropTypes.string,
  text: PropTypes.string,
};

TextCard.defaultProps = {
  className: '',
  redirectRoute: '',
  text: '',
};

export default TextCard;