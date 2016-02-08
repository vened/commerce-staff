import ActionTypes from '../constants/ActionTypes';
import {createReducer} from '../utils/createReducer'

const initialState = {
  token: null,
  userName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null
}

export default createReducer(initialState, {
  [ActionTypes.USER_CREATE_SESSION]: (state, payload) => {
    return Object.assign({}, state, {
      'isAuthenticating': true,
      'statusText': null
    })
  }
})
