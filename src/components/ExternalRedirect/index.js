// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

function ExternalRedirect({ children, url }) {
  return (
    <a
      className="external-redirect"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

ExternalRedirect.propTypes = {
  children: PropTypes.node,
  url: PropTypes.string.isRequired,
};

ExternalRedirect.defaultProps = {
  url: ''
};

export default ExternalRedirect;