// Dependencies
import { takeLatest, call, put } from "redux-saga/effects";

// Action types
import { USERS_BY_KEYWORD_GET } from './actionTypes';

// Actions
import { usersByKeywordRequest, usersByKeywordSuccess, usersByKeywordFail } from './actions';

// Api
import usersByKeywordApi from './api';

function* workerSaga({ payload: keyword }) {
  yield put(usersByKeywordRequest());
  try {
    const users = yield call(usersByKeywordApi, keyword);
    yield put(usersByKeywordSuccess(users))
  } catch (error) {
    const { message = '' } = error;
    yield put(usersByKeywordFail(message));
  }
}

export default function* watcherSaga() {
  yield takeLatest(USERS_BY_KEYWORD_GET, workerSaga);
}