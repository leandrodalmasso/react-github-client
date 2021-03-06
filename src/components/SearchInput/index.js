// Dependencies
import React from 'react'
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

// Assets
import clearIcon from '../../assets/icons/clear.svg';

function SearchInput({ onClearClick, onChange, placeholderText, value }) {
  return (
    <div className="search-input">
      <input
        className="search-input__input"
        onChange={e => onChange(e.target.value)}
        placeholder={placeholderText}
        type="text"
        value={value}
      />
      <img
        className="search-input__clear"
        onClick={onClearClick}
        src={clearIcon} alt=""
      />
    </div>
  );
}

SearchInput.propTypes = {
  onClearClick: PropTypes.func,
  onChange: PropTypes.func,
  placeholderText: PropTypes.string,
  value: PropTypes.string,
};

SearchInput.defaultProps = {
  onClearClick: () => {},
  onChange: () => {},
  placeholderText: '',
  value: '',
};

export default SearchInput;