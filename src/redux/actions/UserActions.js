import ActionTypes from '../ActionTypes';
import ApiClient from '../utils/ApiClient';
import { API_USER_LOGIN, API_USERS_GET_LIST } from '../api';

export function userCreateSession (form) {
    return dispatch => {
        return ApiClient.post(API_USER_LOGIN, form)
            .then((data) => {
                dispatch(userSetSession(data));
            }).catch((err, data) => {
                console.log(`error ${API_USER_LOGIN} - ${err}`);
            });
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

export function userGetList (form) {
    return dispatch => {
        return ApiClient.get(API_USERS_GET_LIST, form)
            .then((data) => {
                dispatch(usersSetList(data));
            }).catch((err, data) => {
                console.log(`error ${API_USERS_GET_LIST} - ${err}`);
            });
    };
}

function usersSetList (data) {
    return {
        type: ActionTypes.USERS_GET_LIST,
        payload: {
            ...data
        }
    };
}
