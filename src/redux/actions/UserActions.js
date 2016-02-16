import ActionTypes from '../ActionTypes'
import request from 'superagent'
import { USER_LOGIN } from '../api'


export function userCreateSession (form) {
  console.log(USER_LOGIN)
  return dispatch => {
    return request.post(USER_LOGIN)
      .send(form)
      .end(function (err, res) {
        dispatch(userSetSession(res.body))
      });
  }
}


function userSetSession (user) {
  return {
    type: ActionTypes.USER_CREATE_SESSION,
    payload: {
      ...user
    }
  }
}
