import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import session from './modules/session'

export default combineReducers({
  counter,
  session,
  router
})
