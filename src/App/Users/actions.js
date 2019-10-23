// Action types
import {
  SEARCH_USERS_GET,
  SEARCH_USERS_REQUEST,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAIL,
  SEARCH_USERS_RESET,
} from './actionTypes';

export function searchUsersGet(keyword) {
  return {
    type: SEARCH_USERS_GET,
    payload: keyword,
  };
}

export function searchUsersRequest() {
  return {
    type: SEARCH_USERS_REQUEST,
    fetching: true,
  };
}

export function searchUsersSuccess(users) {
  return {
    type: SEARCH_USERS_SUCCESS,
    fetching: false,
    payload: users,
  };
}

export function searchUsersFail(error) {
  return {
    type: SEARCH_USERS_FAIL,
    fetching: false,
    payload: error,
  };
}

export function searchUsersReset() {
  return { type: SEARCH_USERS_RESET };
}