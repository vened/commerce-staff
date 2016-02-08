import ActionTypes from '../ActionTypes';

export function userCreateSession (name) {
  return {
    type: ActionTypes.USER_CREATE_SESSION,
    name
  };
}
