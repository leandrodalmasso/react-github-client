// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

function LandingCard({ children, className, onClick }) {
  return (
    <div
      className={`landing-card${className ? ` ${className}` : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

LandingCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

LandingCard.defaultProps = {
  className: '',
  onClick: () => {},
};

export default LandingCard;