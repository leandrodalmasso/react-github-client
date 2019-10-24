// Dependencies
import React from 'react';
import { connect } from "react-redux";

// Styles
import './styles.scss';

// Components
import SectionHeader from '../../components/SectionHeader';
import SearchInput from '../../components/SearchInput';
import ReposList from '../../components/ReposList';

// Actions
import { reposByKeywordGet, reposByKeywordReset } from './actions';

// Hooks
import { useSearch } from '../../utils/hooks';

function Repos({ error, fetching, repos, reposByKeywordGet, reposByKeywordReset }) {
  const [keyword, setKeyword, handleClear] = useSearch(reposByKeywordGet, reposByKeywordReset, repos);

  return (
    <div className='repos'>
      <SectionHeader title="Search repos!" />
      <SearchInput
        onChange={setKeyword}
        onClearClick={handleClear}
        placeholderText="What do you like?"
        value={keyword}
      />
      <ReposList error={error} fetching={fetching} repos={repos} />
    </div>
  );
}

function mapStatetoProps({ repos: { error, fetching, repos } }) {
  return { error, fetching, repos };
}

export default connect(
  mapStatetoProps,
  { reposByKeywordGet, reposByKeywordReset }
)(Repos);