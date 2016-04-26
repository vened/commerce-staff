import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import urls from '../helpers/urls';

import CoreLayout from 'layouts/CoreLayout';
import Dashboard from '../components/Dashboard/Dashboard';
import LoginPage from '../components/LoginPage/LoginPage';
import Page from '../views/Page/Page';

import Categories from '../components/Categories/Categories';
import CategoriesForm from '../components/Categories/CategoriesForm';
import CategoriesEdit from '../components/Categories/CategoriesEdit';

import NotFoundView from 'views/NotFoundView/NotFoundView';

import {requireAuthentication} from '../components/AuthenticatedComponent';

export default (store) => (
    <Route path='/'>
        <Route path='login' component={LoginPage}/>

        <Route name={urls.root.name} component={CoreLayout}>

            <IndexRoute component={requireAuthentication(Dashboard)}/>

            <Route path={urls.categories.list.url} component={requireAuthentication(Categories)}/>
            <Route path={urls.categories.create.url} component={requireAuthentication(CategoriesForm)}/>
            <Route path={`${urls.categories.edit.url}/:id`} component={requireAuthentication(CategoriesEdit)}/>

            <Route path={urls.admins.url} component={requireAuthentication(Page)}/>

        </Route>

        <Route path='/404' component={NotFoundView}/>
        <Redirect from='*' to='/404'/>
    </Route>
);
