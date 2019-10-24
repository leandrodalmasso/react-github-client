// Action types
import {
  REPOS_BY_KEYWORD_REQUEST,
  REPOS_BY_KEYWORD_SUCCESS,
  REPOS_BY_KEYWORD_FAIL,
  REPOS_BY_KEYWORD_RESET,
} from './actionTypes';

const initialState = {
  error: null,
  fetching: false,
  repos: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case REPOS_BY_KEYWORD_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case REPOS_BY_KEYWORD_SUCCESS:
      return {
        ...state,
        fetching: false,
        repos: payload,
      };
    case REPOS_BY_KEYWORD_FAIL:
      return {
        ...state,
        fetching: false,
        error: payload,
      };
    case REPOS_BY_KEYWORD_RESET:
      return initialState;
    default:
      return state;
  }
}