// Dependencies
import { takeLatest, call, put } from "redux-saga/effects";

// Action types
import { POPULAR_REPOS_GET } from './actionTypes';

// Actions
import { popularReposRequest, popularReposSuccess, popularReposFail } from './actions';

// Api
import popularReposApi from './api';

function* workerSaga() {
  yield put(popularReposRequest());
  try {
    const popularRepos = yield call(popularReposApi);
    yield put(popularReposSuccess(popularRepos))
  } catch (error) {
    const { message = '' } = error;
    yield put(popularReposFail(message));
  }
}

export default function* watcherSaga() {
  yield takeLatest(POPULAR_REPOS_GET, workerSaga);
}