import { loginSagas } from './loginSagas';
import { all } from 'redux-saga/effects'

export default function* rootSaga () {
  yield all([
    ...loginSagas,
  ]);
};