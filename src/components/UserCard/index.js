// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import LandingCard from '../LandingCard';
import CardImageHeader from '../CardImageHeader';

// Styles
import './styles.scss';

// Assets
import logo from '../../assets/images/logo192.png';

function UserCard({ image, onClick, subtitle, title }) {
  return (
    <LandingCard className="user-card" onClick={onClick}>
      <CardImageHeader
        image={image}
        subtitle={subtitle}
        title={title}
      />
    </LandingCard>
  );
}

UserCard.defaultProps = {
  image: logo,
  onClick: () => {},
  subtitle: '',
  title: '',
};

UserCard.propTypes = {
  image: PropTypes.string,
  onClick: PropTypes.func,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default UserCard;