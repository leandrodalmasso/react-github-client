// Dependencies
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

// Components
import SectionHeader from '../../components/SectionHeader';
import SearchInput from '../../components/SearchInput';
import UsersList from '../../components/UsersList';

// Actions
import { searchUsersGet, searchUsersReset } from './actions';

function Users({ error, searchUsersGet, searchUsersReset, users }) {
  const [keyword, setKeyword] = useState('');

  function handleUserSearch() {
    if (keyword) {
      if (keyword.length > 3) searchUsersGet(keyword);
    } else {
      if (users.length) searchUsersReset();
    }
  }
  useEffect(handleUserSearch, [keyword]);

  function handleClearclick() {
    searchUsersReset();
    setKeyword('');
  }

  return (
    <div className='users'>
      <SectionHeader title="Search users!" />
      <SearchInput
        onChange={setKeyword}
        onClearClick={handleClearclick}
        placeholderText="Username..."
        value={keyword}
      />
      <UsersList error={error} users={users} />
    </div>
  );
}

function mapStatetoProps({ users: { error, users } }) {
  return { error, users };
}

export default connect(
  mapStatetoProps,
  { searchUsersGet, searchUsersReset }
)(Users);