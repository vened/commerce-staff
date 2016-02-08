import ActionTypes from '../ActionTypes'

/*
 * генераторы действий
 */
export function userCreateSession (name) {
  return {
    type: ActionTypes.USER_CREATE_SESSION,
    name
  }
}
