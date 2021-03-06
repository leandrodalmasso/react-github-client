// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import StatusMessage from '../StatusMessage';
import RepoCard from '../RepoCard';
import Button from '../Button';

// Styles
import './styles.scss'

// Other
import { getDateString } from '../../utils/helperFunctions';

function PaginatedReposList({ className, error, fetching, onLoadMoreClick, repos }) {
  let content = <StatusMessage text="Results will appear here. Search something! If nothing was found try search for something else..." />;

  if (fetching) {
    content = <StatusMessage text="Loading..." />;
  }

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
      {!!repos.length && (
        <div className="repos-list__actions">
          <Button
            disabled={fetching}
            onClick={onLoadMoreClick}
            text={fetching ? "Loading..." : "Load More"}
          />
        </div>
      )}
    </div>
  );
}

PaginatedReposList.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  fetching: PropTypes.bool,
  onLoadMoreClick: PropTypes.func,
  repos: PropTypes.array,
};

PaginatedReposList.defaultProps = {
  className: '',
  error: '',
  fetching: false,
  onLoadMoreClick: () => {},
  repos: [],
};

export default PaginatedReposList;