import * as actionTypes from '../actions/types';
import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects'
import axios from 'axios'
import { nodeApiUrl } from '../constants/config'

function* login(action) {
    try {
        const loginApi = axios.post(nodeApiUrl, {
            username: action.username,
            password: action.password,
        })
        const { data } = yield call(loginApi);
        if (data.error_code === 0) {
            yield put({
                type: actionTypes.USER_IS_LOGGED,
                data: response.payload
            })
        } else {
            yield put({
                type: actionTypes.LOGIN_AUTHENTICATION_FAILED
            })
            action.reject({
                _error: response.message,
                password: response.message,
                email: '   '
            })
        }
    }
    catch (error) {
        console.log(error);
    }
}

export const loginSagas = [
    takeEvery(actionTypes.LOGIN, login),
]