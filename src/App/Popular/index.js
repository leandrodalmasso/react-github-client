// Dependencies
import React, { useEffect } from 'react';
import { connect } from "react-redux";

// Components
import SectionHeader from '../../components/SectionHeader';
import ReposList from '../../components/ReposList';

// Actions
import { popularReposGet, popularReposReset } from './actions';

function Popular({ error, popularReposGet, repos }) {
  function handleReposGet() {
    if (!repos.length) popularReposGet();
  }
  useEffect(handleReposGet);

  return (
    <div className='popular'>
      <SectionHeader
        title="These are the most popular repos on GitHub!"
      />
      <ReposList error={error} repos={repos} />
    </div>
  );
}

function mapStatetoProps({ popular: { error, repos } }) {
  return { error, repos };
}

export default connect(
  mapStatetoProps,
  { popularReposGet, popularReposReset }
)(Popular);