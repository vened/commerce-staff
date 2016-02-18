import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import urls from '../helpers/urls';

import CoreLayout from 'layouts/CoreLayout';
import Dashboard from 'views/Dashboard/Dashboard';
import LoginPage from '../components/LoginPage/LoginPage';
import Page from '../views/Page/Page';
import NotFoundView from 'views/NotFoundView/NotFoundView';

import {requireAuthentication} from '../components/AuthenticatedComponent';

export default (store) => (
    <Route path='/'>
        <Route path='login' component={LoginPage}/>

        <Route name="Dashboard" component={CoreLayout}>
            <IndexRoute component={requireAuthentication(Dashboard)}/>
        </Route>

        <Route name="Admin" component={CoreLayout}>
            <Route path={urls.admins} component={requireAuthentication(Page)}/>
        </Route>

        <Route path='/404' component={NotFoundView}/>
        <Redirect from='*' to='/404'/>
    </Route>
);
