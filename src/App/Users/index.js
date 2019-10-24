// Dependencies
import React from 'react';
import { connect } from "react-redux";

// Styles
import './styles.scss';

// Components
import SectionHeader from '../../components/SectionHeader';
import SearchInput from '../../components/SearchInput';
import UsersList from '../../components/UsersList';

// Actions
import { usersByKeywordGet, usersByKeywordReset } from './actions';

// Hooks
import { useSearch } from '../../utils/hooks';

function Users({ error, fetching, users, usersByKeywordGet, usersByKeywordReset }) {
  const [keyword, setKeyword, handleClear] = useSearch(usersByKeywordGet, usersByKeywordReset, users);

  return (
    <div className='users'>
      <SectionHeader title="Search users!" />
      <SearchInput
        onChange={setKeyword}
        onClearClick={handleClear}
        placeholderText="Username?"
        value={keyword}
      />
      <UsersList error={error} fetching={fetching} users={users} />
    </div>
  );
}

function mapStatetoProps({ users: { error, fetching, users } }) {
  return { error, fetching, users };
}

export default connect(
  mapStatetoProps,
  { usersByKeywordGet, usersByKeywordReset }
)(Users);