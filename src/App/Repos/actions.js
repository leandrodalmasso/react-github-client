// Action types
import {
  REPOS_BY_KEYWORD_GET,
  REPOS_BY_KEYWORD_REQUEST,
  REPOS_BY_KEYWORD_SUCCESS,
  REPOS_BY_KEYWORD_FAIL,
  REPOS_BY_KEYWORD_RESET,
} from './actionTypes';

export function reposByKeywordGet(keyword) {
  return {
    type: REPOS_BY_KEYWORD_GET,
    payload: keyword,
  };
}

export function reposByKeywordRequest() {
  return {
    type: REPOS_BY_KEYWORD_REQUEST,
    fetching: true,
  };
}

export function reposByKeywordSuccess(repos) {
  return {
    type: REPOS_BY_KEYWORD_SUCCESS,
    fetching: false,
    payload: repos,
  };
}

export function reposByKeywordFail(error) {
  return {
    type: REPOS_BY_KEYWORD_FAIL,
    fetching: false,
    payload: error,
  };
}

export function reposByKeywordReset() {
  return { type: REPOS_BY_KEYWORD_RESET };
}