// Dependencies
import React, { useEffect } from 'react';
import { connect } from "react-redux";

// Styles
import './styles.scss';

// Components
import SectionHeader from '../../components/SectionHeader';
import ReposList from '../../components/ReposList';
import ScrollToTop from '../../components/ScrollToTop';

// Actions
import { popularReposGet, popularReposReset } from './actions';

function Popular({ error, fetching, popularReposGet, repos }) {
  function handleReposGet() {
    if (!repos.length) popularReposGet();
  }
  useEffect(handleReposGet);

  return (
    <div className='popular'>
      <ScrollToTop />
      <SectionHeader
        title="These are the most popular repos on GitHub!"
      />
      <ReposList error={error} fetching={fetching} repos={repos} />
    </div>
  );
}

function mapStatetoProps({ popular: { error, fetching, repos } }) {
  return { error, fetching, repos };
}

export default connect(
  mapStatetoProps,
  { popularReposGet, popularReposReset }
)(Popular);