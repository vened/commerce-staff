import ActionTypes from '../ActionTypes';
import ApiClient from '../utils/ApiClient';
import { USER_LOGIN } from '../api';

export function userCreateSession (form) {
    return dispatch => {
        return apiClient.post(USER_LOGIN, form)
            .then((data) => {
                dispatch(userSetSession(data));
            }).catch((err, data)=> {

            })
    };
}

function userSetSession (user) {
    return {
        type: ActionTypes.USER_CREATE_SESSION,
        payload: {
            ...user
        }
    };
}
