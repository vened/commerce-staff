import ActionTypes from '../ActionTypes';
import { createReducer } from '../utils/createReducer';

const initialState = {
    access_token: null,
    email: null,
    user_id: null,
    isAuthenticated: false
};

export default createReducer(initialState, {
    [ActionTypes.USER_CREATE_SESSION]: (state, payload) => {
        return Object.assign({}, state, {
            ...payload
        });
    }
});
