import ActionTypes from '../ActionTypes';
import ApiClient from '../utils/ApiClient';
import { API_USERS_GET_LIST } from '../api';

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
        data
    };
}
