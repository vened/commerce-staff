import ActionTypes from '../ActionTypes';
import { createReducer } from '../utils/createReducer';
import { setSessionStorage, getSessionStorage } from '../utils/sessionStorage';

let session = getSessionStorage('session');
let initialState = session ? { ...session } : { isAuthenticated: false };

export default createReducer(initialState, {
    [ActionTypes.CREATE_SESSION]: (state, payload) => {
        setSessionStorage('session', payload);
        return Object.assign({}, state, {
            ...payload
        });
    }
});
