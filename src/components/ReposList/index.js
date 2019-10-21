// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import StatusMessage from '../StatusMessage';
import RepoCard from '../RepoCard';

// Other
import { getDateString } from '../../utils/helperFunctions';

function ReposList({ className, error, repos }) {
  let content = <StatusMessage text="Loading..." />;

  if (error) {
    content = <StatusMessage text={`${error}. Please try again or reload the page.`} />
  }

  if (repos.length) {
    content = repos.map(repo => {
      const {
        description = '',
        forks = 0,
        html_url: url = '',
        id = 0,
        name: repoName = '',
        owner: { avatar_url: avatarImage = '', login: ownerName = '' } = {},
        stargazers_count: stars = 0,
        updated_at: updated = '',
      } = repo;

      const pills = {
        stars: `${stars}`,
        forks: `${forks}`,
        updated: `${getDateString(updated)}`
      }

      return (
        <RepoCard
          description={description}
          image={avatarImage}
          key={id}
          pills={pills}
          subtitle={ownerName}
          title={repoName}
          url={url}
        />
      );
    });
  }

  return (
    <div className={`repos-list${className ? ` ${className}` : ''}`}>
      {content}
    </div>
  );
}

ReposList.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  repos: PropTypes.array,
};

ReposList.defaultProps = {
  className: '',
  error: '',
  repos: [],
};

export default ReposList;