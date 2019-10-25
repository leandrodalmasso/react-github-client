// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

function StatusMessage({ text }) {
  return <h3 className='status-message'>{text}</h3>;
}

StatusMessage.propTypes = { text: PropTypes.string };

StatusMessage.defaultProps = { text: '' };

export default StatusMessage;