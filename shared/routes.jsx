'use strict';

import React     from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App from './containers/App.jsx';

import MainLayout from './containers/layouts/MainLayout.jsx';

import ArticlesPageContainer from './containers/pages/ArticlesPage.jsx';
import ArticlePageContainer  from './containers/pages/ArticlePage.jsx';

import UsersPageContainer from './containers/pages/UsersPage.jsx';
import UserPageContainer  from './containers/pages/UserPage.jsx';

export default (
    <Route component={App}>
        <Route component={MainLayout} path='/'>
            <Redirect from='/' to='/tutorials'/>
            <Route component={ArticlesPageContainer} path='/tutorials'/>
            <Route component={ArticlePageContainer} path='/tutorials/:id'/>

            <Route component={UsersPageContainer} path='/users'/>
            <Route component={UserPageContainer} path='/users/:id'/>
        </Route>
    </Route>
);
