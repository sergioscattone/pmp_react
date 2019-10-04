import * as types from '../actions/types';
import appState from '../constants/initialState';
import { AsyncStorage } from 'react-native';

const loginReducer = (state = appState.login, action) => {
    switch (action.type) {
        case types.LOGIN:
            return { ...state, ...{ userInfo: action.data } }
        default:
            return state
    }
}
export default loginReducer