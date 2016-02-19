import { combineReducers } from 'redux';
import { routeReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import session from './reducers/sessionReducer';
import users from './reducers/userReducer';
import categories from './reducers/categoryReducer';

export default combineReducers({
    session,
    users,
    categories,
    form: formReducer,
    router
});


