import { combineReducers } from 'redux';
import { routeReducer as router } from 'react-router-redux';
import session from './reducers/sessionReducer';
import users from './reducers/userReducer';

export default combineReducers({
    session,
    users,
    router
});
