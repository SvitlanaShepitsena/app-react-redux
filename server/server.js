'use strict';

import express from 'express';
import cookieParser from 'cookie-parser';

import React                     from 'react';
import ReactDOM                  from 'react-dom/server';
import {Provider}              from 'react-redux';
import {RoutingContext, match} from 'react-router';
import escapeHTML                from 'lodash/string/escape';
import Helmet from "react-helmet";

import passportConfig from './config/passport';

import {
    fetchComponentsData,
    getMetaDataFromState,
    makeRedirectUrl,
    detectLocale
} from './utils';

import routes         from '../shared/routes.js';
import configureStore from '../shared/store/configureStore';
import i18n           from '../shared/i18n';

import clientConfig from '../etc/settings';
import PORT from './port';

// Initialize localization
import ruLocaleData from '../public/static/lang/ru.json';
import ukLocaleData from '../public/static/lang/uk.json';
import enLocaleData from '../public/static/lang/en.json';

const i18nToolsRegistry = {
    ru: new i18n.Tools({localeData: ruLocaleData, locale: 'ru'}),
    en: new i18n.Tools({localeData: enLocaleData, locale: 'en'}),
    uk: new i18n.Tools({localeData: ukLocaleData, locale: 'uk'})
};

/* Authentication*/
import passport from 'passport';
import configPassport from './config/passport';
import configExpress from './config/express';
import configRoutes from './config/routes';
import fs from 'fs';

/* Mongoose */
//import connect from './config/db';
//connect();
//mongoose.connection.on('error', console.error);
//mongoose.connection.on('disconnected', connect);
//
//fs.readdirSync(__dirname + '/models').forEach(function (file) {
//    if (~file.indexOf('.js')) require(__dirname + '/models/' + file);
//});
const app = express();
app.use('/static', express.static('public/static'));
app.use(cookieParser());

configPassport(app, passport);
//configExpress(app, passport);
configRoutes(app, passport);

app.use((req, res) => {
    // Process old links like /en/articles

    if (req.url.match(/\/[a-z]{2}\//i)) {
        const noLangUrl = req.url.replace(/^\/[a-z]{2}/i, '');
        return res.redirect(302, noLangUrl);
    }

    // If user is authenticated redirect him to the wall embedded into the main app
    if (req.cookies.authenticated && !req.url.match('embed')) {
        const redirectUrl = makeRedirectUrl({originalUrl: req.url});
        return res.redirect(302, redirectUrl);
    }

    const locale = detectLocale(req);
    if (req.user) {
        console.log(req.user);
    }
    const store = configureStore({user: req.user});
    let helmet = Helmet.rewind();

    const i18nTools = i18nToolsRegistry[locale];
    // Method of React-router that provides renderProp with property components consisting of all components for the particular view
    match({routes: routes, location: req.url},
        (error, redirectLocation, renderProps) => {
            if (redirectLocation) {
                res.redirect(301, redirectLocation.pathname + redirectLocation.search);
            } else if (error) {
                res.status(500).send(error.message);
            } else if (!renderProps) {
                res.status(404).send('Not found');
            } else {
                fetchComponentsData(
                    store.dispatch,
                    renderProps.components,
                    renderProps.params,
                    renderProps.location.query
                )
                    .then(() => {
                        const componentHTML = ReactDOM.renderToString(
                            <Provider store={store}>
                                <i18n.Provider i18n={i18nTools}>
                                    <RoutingContext {...renderProps}/>
                                </i18n.Provider>
                            </Provider>
                        );

                        const initialState = store.getState();
                        const metaData = getMetaDataFromState({
                            lang: locale,
                            route: renderProps.routes[renderProps.routes.length - 1].path,
                            state: initialState
                        });

                        return renderHTML(helmet,
                            {
                                componentHTML,
                                initialState,
                                metaData,
                                config: clientConfig(req.hostname)
                            });
                    })
                    .then(html => {
                        res.cookie('locale', locale, {maxAge: 900000});
                        res.end(html);
                    })
                    .catch(err => res.end(err.message));
            }
        });
});

function renderHTML(helmet, {componentHTML, initialState, metaData, config}) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="shortcut icon" href="/static/favicon.ico"/>
            ${helmet.title}
            ${helmet.meta}
            <meta property="fb:app_id" content="${escapeHTML(config.facebookAppId)}" />

            <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.6/material.blue-pink.min.css"/>
            <link rel="stylesheet" href="//cdn.materialdesignicons.com/1.2.65/css/materialdesignicons.min.css">
            <link rel="stylesheet" href="${config.staticUrl}/static/build/main.css">
            <script src="https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js"></script>
            <script>
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            </script>

            <script src="https://apis.google.com/js/api:client.js"></script>
        </head>
        <body>
        <div id="react-view">${componentHTML}</div>
          <script type="application/javascript">
            window.__CONFIG__ = ${JSON.stringify(config)};
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          </script>

          <script type="application/javascript" src="${config.staticUrl}/static/build/main.js"></script>
        </body>
        </html>
    `;
}

app.listen(PORT, () => {
    console.log('Server listening on: ' + PORT);
});
