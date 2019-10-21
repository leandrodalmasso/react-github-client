// Dependencies
import React, { Component } from 'react';
import { connect } from "react-redux";

// Components
import SectionHeader from '../../components/SectionHeader';
import ReposList from '../../components/ReposList';

// Actions
import { popularReposGet, popularReposReset } from './actions';

class Popular extends Component {
  componentDidMount() {
    const { popularReposGet, repos } = this.props;

    if (!repos.length) popularReposGet();
  }

  render() {
    const { error, repos } = this.props;
    const title = 'These are the most popular repos on GitHub!';

    return (
      <div className='popular'>
        <SectionHeader title={title} />
        <ReposList error={error} repos={repos} />
      </div>
    );
  }
}

function mapStatetoProps({ popular: { error, repos } }) {
  return { error, repos };
}

export default connect(
  mapStatetoProps,
  { popularReposGet, popularReposReset }
)(Popular);