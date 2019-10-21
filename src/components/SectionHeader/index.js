// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

function SectionHeader({ className, title, text }) {
  return (
    <header className={`section-header${className ? ` ${className}` : ''}`}>
      {title && <h2 className="section-header__title">{title}</h2>}
      {text && <p className="section-header__text">{text}</p>}
    </header>
  );
}

SectionHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}

SectionHeader.defaultProps = {
  className: '',
  title: '',
  text: '',
}

export default SectionHeader;