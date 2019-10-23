// Dependencies
import { takeLatest, call, put } from "redux-saga/effects";

// Action types
import { SEARCH_USERS_GET } from './actionTypes';

// Actions
import { searchUsersRequest, searchUsersSuccess, searchUsersFail } from './actions';

// Api
import getUsersByName from './api';

function* workerSaga({ payload: keyword }) {
  yield put(searchUsersRequest());
  try {
    const users = yield call(getUsersByName, keyword);
    yield put(searchUsersSuccess(users))
  } catch (error) {
    const { message = '' } = error;
    yield put(searchUsersFail(message));
  }
}

export default function* watcherSaga() {
  yield takeLatest(SEARCH_USERS_GET, workerSaga);
}