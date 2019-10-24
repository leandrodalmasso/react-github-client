// Action types
import {
  USERS_BY_KEYWORD_GET,
  USERS_BY_KEYWORD_REQUEST,
  USERS_BY_KEYWORD_SUCCESS,
  USERS_BY_KEYWORD_FAIL,
  USERS_BY_KEYWORD_RESET,
} from './actionTypes';

export function usersByKeywordGet(keyword) {
  return {
    type: USERS_BY_KEYWORD_GET,
    payload: keyword,
  };
}

export function usersByKeywordRequest() {
  return {
    type: USERS_BY_KEYWORD_REQUEST,
    fetching: true,
  };
}

export function usersByKeywordSuccess(users) {
  return {
    type: USERS_BY_KEYWORD_SUCCESS,
    fetching: false,
    payload: users,
  };
}

export function usersByKeywordFail(error) {
  return {
    type: USERS_BY_KEYWORD_FAIL,
    fetching: false,
    payload: error,
  };
}

export function usersByKeywordReset() {
  return { type: USERS_BY_KEYWORD_RESET };
}