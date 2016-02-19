import ActionTypes from '../ActionTypes';
import ApiClient from '../utils/ApiClient';
import { API_CATEGORIES_GET_LIST } from '../api';

export function categoryGetList (form) {
    return dispatch => {
        return ApiClient.get(API_CATEGORIES_GET_LIST, form)
            .then((data) => {
                dispatch(categorySetList(data));
            }).catch((err, data) => {
                console.log(`error ${API_CATEGORIES_GET_LIST} - ${err}`);
            });
    };
}

function categorySetList (data) {
    return {
        type: ActionTypes.API_CATEGORIES_GET_LIST,
        data
    };
}
