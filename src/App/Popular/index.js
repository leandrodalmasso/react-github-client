// Dependencies
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

// Styles
import './styles.scss';

// Components
import SectionHeader from '../../components/SectionHeader';
import PaginatedReposList from '../../components/PaginatedReposList';
import ScrollToTop from '../../components/ScrollToTop';

// Actions
import { popularReposGet, popularReposReset } from './actions';

function Popular({ error, fetching, popularReposGet, popularReposReset, repos }) {
  const [pageCount, setPageCount] = useState(1);

  function handleReposGet() {
    if (!repos.length && !error) {
      popularReposGet(pageCount);
      if (pageCount === 1) setPageCount(pageCount => pageCount + 1);
    };

    return () => { popularReposReset(); }
  }
  useEffect(handleReposGet, []);

  function handleLoadMoreClick() {
    setPageCount(pageCount => pageCount + 1);
    popularReposGet(pageCount);
  }

  return (
    <div className='popular'>
      <ScrollToTop />
      <SectionHeader
        title="These are the most popular repos on GitHub!"
        subtitle="Ordered by stars..."
      />
      <PaginatedReposList
        error={error}
        fetching={fetching}
        onLoadMoreClick={handleLoadMoreClick}
        repos={repos}
      />
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