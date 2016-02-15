import ActionTypes from '../ActionTypes'
import request from 'superagent'
import { USER_LOGIN } from '../api'

/*
 * генераторы действий
 */
//export function userCreateSession (name) {
//  return {
//    type: ActionTypes.USER_CREATE_SESSION,
//    name
//  }
//}

export function userCreateSession (form) {
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
    user: user
  }
}
