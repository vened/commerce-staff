import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import urls from '../helpers/urls';

import CoreLayout from 'layouts/CoreLayout';
import Dashboard from '../components/Dashboard/Dashboard';
import LoginPage from '../components/LoginPage/LoginPage';
import Page from '../views/Page/Page';

import List from '../components/Categories/List';

import NotFoundView from 'views/NotFoundView/NotFoundView';

import {requireAuthentication} from '../components/AuthenticatedComponent';

export default (store) => (
    <Route path='/'>
        <Route path='login' component={LoginPage}/>

        <Route name={urls.root.name} component={CoreLayout}>
            <IndexRoute component={requireAuthentication(Dashboard)}/>
            <Route path={urls.admins.url} component={requireAuthentication(Page)}/>
            <Route path={urls.categories.url} component={requireAuthentication(List)}/>
        </Route>

        <Route path='/404' component={NotFoundView}/>
        <Redirect from='*' to='/404'/>
    </Route>
);
