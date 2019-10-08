import * as action_types from '../actions/types';
import appState from '../constants/initialState';
import { AsyncStorage } from 'react-native';

const loginReducer = (state = appState.login, action) => {
    switch (action.type) {
        case action_types.USER_IS_LOGGED:
            AsyncStorage.setItem('jwt', 'elAltoToken')
            return { ...state, ...{ jwt: action.jwt } }
        case action_types.LOGIN_AUTHENTICATION_FAILED:
            return { ...state, ...{ message: 'autentificacion fallida' } }
        default:
            return state
    }
}
export default loginReducer