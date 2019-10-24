// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import StatusMessage from '../StatusMessage';
import UserCard from '../UserCard';

function UsersList({ className, error, fetching, users }) {
  let content = <StatusMessage text="Results will appear here. Search something!" />;

  if (fetching) {
    content = <StatusMessage text="Loading..." />;
  }

  if (error) {
    content = <StatusMessage text={`${error}. Please try again or reload the page.`} />
  }

  if (users.length) {
    content = users.map(repo => {
      const {
        avatar_url: avatarImage = '',
        html_url: url = '',
        id = 0,
        login: name = '',
      } = repo;

      return (
        <UserCard
          image={avatarImage}
          key={id}
          title={name}
          url={url}
        />
      );
    });
  }

  return (
    <div className={`users-list${className ? ` ${className}` : ''}`}>
      {content}
    </div>
  );
}

UsersList.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  fetching: PropTypes.bool,
  users: PropTypes.array,
};

UsersList.defaultProps = {
  className: '',
  error: '',
  fetching: false,
  users: [],
};

export default UsersList;