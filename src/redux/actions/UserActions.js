import ActionTypes from '../ActionTypes';
import request from 'superagent';
import { USER_LOGIN } from '../api';

export function userCreateSession (form) {
    return dispatch => {
        return request.post(USER_LOGIN)
            .send(form)
            .end(function (err, res) {
                dispatch(userSetSession(res.body));
                console.log(err);
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
