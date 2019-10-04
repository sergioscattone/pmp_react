import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';

export function* login() {
  try {
    AsyncStorage.setItem('jwt', 'elAltoToken')
    const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
        .then(response => response.json(), )
    if (response.error_code === 0) {
        yield put({
            type: t.USER_IS_LOGGED,
            data: response.payload
        })
    } else if (response.error_code === 2) {
        yield put({
            type: t.LOGIN_SAVE_RECOVERY_KEY,
            data: response.payload
        })
    } else {
        yield put({
            type: t.LOGIN_AUTHENTICATION_FAILED
        })
        action.reject({
            _error: response.message,
            password: response.message,
            email: '   '
            /*do not delete the email error, otherwise the field won't appear red*/
        })
    }
  }
  catch (error) {
    console.log(error);
  }
}