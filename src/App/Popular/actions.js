// Action types
import {
  POPULAR_REPOS_GET,
  POPULAR_REPOS_REQUEST,
  POPULAR_REPOS_SUCCESS,
  POPULAR_REPOS_FAIL,
  POPULAR_REPOS_RESET,
} from './actionTypes';

export function popularReposGet(pageNumber) {
  return {
    type: POPULAR_REPOS_GET,
    pageNumber
  };
}

export function popularReposRequest() {
  return {
    type: POPULAR_REPOS_REQUEST,
    fetching: true,
  };
}

export function popularReposSuccess(repos) {
  return {
    type: POPULAR_REPOS_SUCCESS,
    fetching: false,
    payload: repos,
  };
}

export function popularReposFail(error) {
  return {
    type: POPULAR_REPOS_FAIL,
    fetching: false,
    payload: error,
  };
}

export function popularReposReset() {
  return { type: POPULAR_REPOS_RESET };
}