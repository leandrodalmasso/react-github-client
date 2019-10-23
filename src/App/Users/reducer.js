// Action types
import {
  SEARCH_USERS_REQUEST,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAIL,
  SEARCH_USERS_RESET,
} from './actionTypes';

const initialState = {
  error: null,
  fetching: false,
  users: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SEARCH_USERS_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case SEARCH_USERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        users: payload,
      };
    case SEARCH_USERS_FAIL:
      return {
        ...state,
        fetching: false,
        error: payload,
      };
    case SEARCH_USERS_RESET:
      return initialState;
    default:
      return state;
  }
}