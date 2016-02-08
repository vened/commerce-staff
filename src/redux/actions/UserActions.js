import ActionTypes from '../constants/ActionTypes';

export function userCreateSession (name) {
  return {
    type: ActionTypes.USER_CREATE_SESSION,
    name
  };
}
