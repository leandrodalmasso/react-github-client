// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

function SectionHeader({ className, title, subtitle }) {
  return (
    <header className={`section-header${className ? ` ${className}` : ''}`}>
      {title && <h2 className="section-header__title">{title}</h2>}
      {subtitle && <h2 className="section-header__subtitle">{subtitle}</h2>}
    </header>
  );
}

SectionHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

SectionHeader.defaultProps = {
  className: '',
  title: '',
  subtitle: '',
}

export default SectionHeader;