// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import LandingCard from '../LandingCard';
import CardHeader from '../CardHeader';
import ExternalRedirect from '../ExternalRedirect';

// Styles
import './styles.scss';

// Assets
import logo from '../../assets/images/logo192.png';

function UserCard({ image, subtitle, title, url }) {
  return (
    <ExternalRedirect url={url}>
      <LandingCard className="user-card">
        <CardHeader
          image={image}
          subtitle={subtitle}
          title={title}
        />
      </LandingCard>
    </ExternalRedirect>
  );
}

UserCard.propTypes = {
  image: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
};

UserCard.defaultProps = {
  image: logo,
  subtitle: '',
  title: '',
  url: '',
};

export default UserCard;