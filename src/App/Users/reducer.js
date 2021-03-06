// Action types
import {
  USERS_BY_KEYWORD_REQUEST,
  USERS_BY_KEYWORD_SUCCESS,
  USERS_BY_KEYWORD_FAIL,
  USERS_BY_KEYWORD_RESET,
} from './actionTypes';

const initialState = {
  error: null,
  fetching: false,
  users: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case USERS_BY_KEYWORD_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case USERS_BY_KEYWORD_SUCCESS:
      return {
        ...state,
        fetching: false,
        users: payload,
      };
    case USERS_BY_KEYWORD_FAIL:
      return {
        ...state,
        fetching: false,
        error: payload,
      };
    case USERS_BY_KEYWORD_RESET:
      return initialState;
    default:
      return state;
  }
}