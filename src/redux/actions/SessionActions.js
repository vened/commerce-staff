import ActionTypes from '../ActionTypes';
import ApiClient from '../utils/ApiClient';
import { API_CREATE_SESSION } from '../api';

export function createSession (form) {
    return dispatch => {
        return ApiClient.post(API_CREATE_SESSION, form)
            .then((data) => {
                dispatch(setSession(data));
            }).catch((err, data) => {
                console.log(`error ${API_CREATE_SESSION} - ${err}`);
            });
    };
}

function setSession (data) {
    return {
        type: ActionTypes.CREATE_SESSION,
        payload: {
            ...data
        }
    };
}
