import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import urls from '../helpers/urls';

import CoreLayout from 'layouts/CoreLayout';
import Dashboard from 'views/Dashboard/Dashboard';
import LoginPage from '../components/LoginPage/LoginPage';
import Page from '../views/Page/Page';

import Categories from '../components/Categories';

import NotFoundView from 'views/NotFoundView/NotFoundView';

import {requireAuthentication} from '../components/AuthenticatedComponent';

export default (store) => (
    <Route path='/'>
        <Route path='login' component={LoginPage}/>

        <Route name={urls.root.name} component={CoreLayout}>
            <IndexRoute component={requireAuthentication(Dashboard)}/>
        </Route>

        <Route name={urls.admins.name} component={CoreLayout}>
            <Route path={urls.admins.url} component={requireAuthentication(Page)}/>
        </Route>

        <Route name={urls.categories.name} component={CoreLayout}>
            <Route path={urls.categories.url} component={requireAuthentication(Categories)}/>
        </Route>

        <Route path='/404' component={NotFoundView}/>
        <Redirect from='*' to='/404'/>
    </Route>
);
