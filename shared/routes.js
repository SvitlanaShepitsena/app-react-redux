'use strict';

import React     from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';

import App from './containers/App.js';

import AppLayout from './containers/AppLayoutSmart.js';

import UserProfilePage from './containers/pages/UserProfilePage';
import ArticlesPageContainer from './containers/pages/ArticlesPage.js';
import ProjectsPageContainer from './containers/pages/ProjectsPage.js';
import ContactsPageContainer from './containers/pages/ContactsPage.js';
import HomePage from './containers/pages/HomePage';
import AboutPage from './containers/pages/AboutPage';
import LoginPage from './containers/pages/LoginPage.js';

export default (
    <Route component={App}>
        <Route component={AppLayout}>
            <Route component={HomePage} path='/'/>
            <Route component={ArticlesPageContainer} path='/tutorials'/>
            <Route component={ProjectsPageContainer} path='/projects'/>
            <Route component={ContactsPageContainer} path='/contacts'/>
            <Route component={LoginPage} path='/login'/>
            <Route component={UserProfilePage} path='/profile'/>
            <Route component={AboutPage} path='/about'/>
        </Route>
    </Route>
);
