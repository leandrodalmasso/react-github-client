// Action types
import {
  POPULAR_REPOS_REQUEST,
  POPULAR_REPOS_SUCCESS,
  POPULAR_REPOS_FAIL,
  POPULAR_REPOS_RESET,
} from './actionTypes';

const initialState = {
  error: null,
  fetching: false,
  repos: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case POPULAR_REPOS_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case POPULAR_REPOS_SUCCESS:
      return {
        ...state,
        fetching: false,
        repos: [...state.repos, ...payload],
      };
    case POPULAR_REPOS_FAIL:
      return {
        ...state,
        fetching: false,
        error: payload,
      };
    case POPULAR_REPOS_RESET:
      return initialState;
    default:
      return state;
  }
}