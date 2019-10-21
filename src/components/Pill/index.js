// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

function Pill({ ghost, text, title }) {
  return (
    <span className={`pill${ghost ? ' pill--ghost' : ''}`}>
      {title && <h3 className="pill__title">{title}</h3>}
      {text && <p className="pill__text">{text}</p>}
    </span>
  );
}

Pill.propTypes = {
  ghost: PropTypes.bool,
  text: PropTypes.string,
  title: PropTypes.string,
};

Pill.defaultProps = {
  ghost: false,
  text: '',
  title:'',
};

export default Pill;