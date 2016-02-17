import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import CoreLayout from 'layouts/CoreLayout/CoreLayout';
import Dashboard from 'views/Dashboard/Dashboard';
import LoginPage from '../components/LoginPage/LoginPage';
import Page from '../views/Page/Page';
import NotFoundView from 'views/NotFoundView/NotFoundView';

import {requireAuthentication} from '../components/AuthenticatedComponent';

export default (store) => (
    <Route path='/' component={CoreLayout}>
        <IndexRoute component={requireAuthentication(Dashboard)}/>
        <Route path='login' component={LoginPage}/>
        <Route path='page' component={requireAuthentication(Page)}/>

        <Route path='/404' component={NotFoundView}/>
        <Redirect from='*' to='/404'/>
    </Route>
);
