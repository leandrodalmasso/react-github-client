// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

// Components
import LandingCard from '../LandingCard';
import CardHeader from '../CardHeader';
import Pill from '../Pill';
import ExternalRedirect from '../ExternalRedirect';

// Assets
import logo from '../../assets/images/logo192.png';

// Others
import { isEmpty } from '../../utils/helperFunctions';

function RepoCard({ description, image, pills, subtitle, title, url }) {
  return (
    <ExternalRedirect url={url}>
      <LandingCard className="repo-card">
        <CardHeader
          className="repo-card__header"
          image={image}
          subtitle={subtitle}
          title={title}
        />
        {!isEmpty(pills) && (
          <div className="repo-card__pills">
            {Object.keys(pills).map(key => (
              <Pill
                key={`${key}Pill`}
                text={pills[key]}
                title={key}
              />
            ))}
          </div>
        )}
        {description && <p className="repo-card__desc">{description}</p>}
      </LandingCard>
    </ExternalRedirect>
  );
}

RepoCard.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  pills: PropTypes.object,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
};

RepoCard.defaultProps = {
  description: '',
  image: logo,
  pills: {},
  subtitle: '',
  title: '',
  url: '',
};

export default RepoCard;