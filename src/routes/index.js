import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import Dashboard from 'views/Dashboard/Dashboard'
import Page from '../views/Page/Page'
import NotFoundView from 'views/NotFoundView/NotFoundView'

import {requireAuthentication} from '../components/AuthenticatedComponent'

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={Dashboard}/>
    <Route path='page' component={requireAuthentication(Page)}/>
    <Route path='login' component={Dashboard}/>
    <Route path='/404' component={NotFoundView}/>
    <Redirect from='*' to='/404'/>
  </Route>
)
