import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import users from './reducers/users'

export default combineReducers({
  users,
  router
})
