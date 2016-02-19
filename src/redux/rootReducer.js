import { combineReducers } from 'redux';
import { routeReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import config from './reducers/configReducer';
import session from './reducers/sessionReducer';
import users from './reducers/userReducer';
import categories from './reducers/categoryReducer';

export default combineReducers({
    config,
    session,
    users,
    categories,
    form: formReducer,
    router
});
