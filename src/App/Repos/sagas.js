// Dependencies
import { takeLatest, call, put } from "redux-saga/effects";

// Action types
import { REPOS_BY_KEYWORD_GET } from './actionTypes';

// Actions
import { reposByKeywordRequest, reposByKeywordSuccess, reposByKeywordFail } from './actions';

// Api
import reposByKeywordApi from './api';

function* workerSaga({ payload: keyword }) {
  yield put(reposByKeywordRequest());
  try {
    const repos = yield call(reposByKeywordApi, keyword);
    yield put(reposByKeywordSuccess(repos))
  } catch (error) {
    const { message = '' } = error;
    yield put(reposByKeywordFail(message));
  }
}

export default function* watcherSaga() {
  yield takeLatest(REPOS_BY_KEYWORD_GET, workerSaga);
}