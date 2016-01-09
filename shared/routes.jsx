'use strict';

import React     from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App from './containers/App.jsx';

import MainLayout from './containers/layouts/MainLayout.jsx';

import ArticlesPageContainer from './containers/pages/ArticlesPage.jsx';

export default (
    <Route component={App}>
        <Route component={MainLayout} path='/'>
            <Redirect from='/' to='/tutorials'/>
            <Route component={ArticlesPageContainer} path='/tutorials'/>
        </Route>
    </Route>
);
