// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

// Assets
import logo from '../../assets/images/logo192.png';

function CardImageHeader({ className, image, subtitle, title }) {
  return (
    <div className={`card-image-header${className ? ` ${className}` : ''}`}>
      <img
        alt=""
        className="card-image-header__img"
        src={image}
      />
      <div className="card-image-header__info">
        {title && <h3 className="card-image-header__info__title">{title}</h3>}
        {subtitle && <h4 className="card-image-header__info__subtitle">{subtitle}</h4>}
      </div>
    </div>
  );
}

CardImageHeader.defaultProps = {
  className: '',
  image: logo,
  subtitle: '',
  title: '',
};

CardImageHeader.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default CardImageHeader;