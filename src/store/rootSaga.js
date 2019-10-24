// Dependencies
import { all, fork } from 'redux-saga/effects';

// Sagas
import popular from '../App/Popular/sagas';
import users from '../App/Users/sagas';
import repos from '../App/Repos/sagas';

export default function* rootSaga() {
  yield all([
    fork(popular),
    fork(users),
    fork(repos),
  ]);
}