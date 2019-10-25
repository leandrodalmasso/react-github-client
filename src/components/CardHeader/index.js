// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

// Assets
import logo from '../../assets/images/logo192.png';

function CardHeader({ className, image, subtitle, title }) {
  return (
    <div className={`card-header${className ? ` ${className}` : ''}`}>
      <img
        alt=""
        className="card-header__img"
        src={image}
      />
      <div className="card-header__info">
        {title && <h3 className="card-header__info-title">{title}</h3>}
        {subtitle && <h4 className="card-header__info-subtitle">{subtitle}</h4>}
      </div>
    </div>
  );
}

CardHeader.defaultProps = {
  className: '',
  image: logo,
  subtitle: '',
  title: '',
};

CardHeader.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default CardHeader;