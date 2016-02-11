import ActionTypes from '../ActionTypes'
import {createReducer} from '../utils/createReducer'

const initialState = {
  access_token: null,
  email: null,
  user_id: null
}

export default createReducer(initialState, {
  [ActionTypes.USER_CREATE_SESSION]: (state, user) => {
    console.log(user)
    return Object.assign({}, state, {
      ...state
    })
  }
})
