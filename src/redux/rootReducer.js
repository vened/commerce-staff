import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import user from './reducers/userReducer'

export default combineReducers({
  user,
  routing: routeReducer
})
