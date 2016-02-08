import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import user from './reducers/userReducer'

export default combineReducers({
  user,
  router
})
