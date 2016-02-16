import ActionTypes from '../ActionTypes'
import {createReducer} from '../utils/createReducer'

const initialState = {
  access_token: null,
  email: null,
  user_id: null,
  isAuthenticated: false
}

export default createReducer(initialState, {
  [ActionTypes.USER_CREATE_SESSION]: (state, user) => {
    return Object.assign({}, state, {
      ...state
    })
  }
})
