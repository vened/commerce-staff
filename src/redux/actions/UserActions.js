import ActionTypes from '../ActionTypes'
import request from 'superagent'

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
    return request.post('//localhost:3000/api/v1/login')
      .send(form)
      .end(function (err, res) {
        dispatch(userSetSession(res.body))
      });
  }
}


function userSetSession (user) {
  console.log(user)

  return {
    type: ActionTypes.USER_CREATE_SESSION,
    user: user
  }
}

function fetchAuthedUser (accessToken, shouldShowStream) {
  return dispatch => {
    return fetch(`//api.soundcloud.com/me?oauth_token=${accessToken}`)
      .then(response => response.json())
      .then(json => dispatch(receiveAuthedUserPre(accessToken, json, shouldShowStream)))
      .catch(err => {
        throw err;
      });
  };
}
