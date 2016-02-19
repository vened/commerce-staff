import ActionTypes from '../ActionTypes';
import ApiClient from '../utils/ApiClient';
import { API_CATEGORIES } from '../api';

export function categoryGetList () {
    return dispatch => {
        return ApiClient.get(API_CATEGORIES)
            .then((data) => {
                dispatch(categorySetList(data));
            }).catch((err, data) => {
                console.log(`error ${API_CATEGORIES} - ${err}`);
            });
    };
}

function categorySetList (data) {
    return {
        type: ActionTypes.API_CATEGORIES_GET_LIST,
        data
    };
}

export function categoryCreate (form) {
    console.log('categoryCreate')
    console.log(form)
    return dispatch => {
        return ApiClient.post(API_CATEGORIES, form)
            .then((data) => {
                dispatch(categoryGetList());
            }).catch((err, data) => {
                console.log(`error ${API_CATEGORIES} - ${err}`);
            });
    };
}
