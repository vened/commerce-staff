import ActionTypes from '../ActionTypes';
import { createReducer } from '../utils/createReducer';
import { setSessionStorage, getSessionStorage } from '../utils/sessionStorage';

let user = getSessionStorage('user');
let initialState = user ? { ...user } : { isAuthenticated: false };

export default createReducer(initialState, {
    [ActionTypes.USER_CREATE_SESSION]: (state, payload) => {
        setSessionStorage('user', payload);
        return Object.assign({}, state, {
            ...payload
        });
    },
    [ActionTypes.USERS_GET_LIST]: (state, payload) => {
        return Object.assign({}, state, {
            users: {...payload}
        });
    }
});
