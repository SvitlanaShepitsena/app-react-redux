'use strict';
import Promise     from 'bluebird';
import geoip       from 'geoip-lite';
import strformat   from 'strformat';

import clientConfig                     from '../etc/client-config.json';
import { getSupportedLocales, sprintf } from '../shared/utils';

export function fetchComponentsData(dispatch, components, params, query) {
    // Select components that have assync request for the specific route
    const promises = components.map(current => {
        const component = current.WrappedComponent ? current.WrappedComponent : current;
        return component.fetchData
            ? component.fetchData(dispatch, params, query)
            : null;
    });
    return Promise.all(promises);
}

export function getMetaDataFromState({ route, state, lang = 'en' }) {
    if (route === '/articles/:id') {
        const { name, message, pictureURL } = state.currentArticle.article;
        return {
            title: name,
            siteName: "Company Name",
            image: pictureURL ? pictureURL.replace('svg', 'png') : '',
            description: message
        };
    }

    if (route === '/result/:id/:userId' && state.currentArticle.article) {
        const sharePhrases = {
            ru: 'Я сдал тест "{name}" на {score}%',
            uk: 'Я склав тест "{name}" на {score}%',
            en: 'I have passed test "{name}" and gained {score}%'
        };

        const { isPassed, name, pictureURL, message } = state.currentArticle.article;

        return {
            title: strformat(sharePhrases[lang], {name}),
            siteName: "Company Name",
            image: pictureURL ? pictureURL.replace('svg', 'png') : '',
            description: message
        };
    }

    return {
        title: 'Company Wall',
        siteName: 'Company Name',
        image: 'http://res.cloudinary.com/svitlana/image/upload/v1452030293/chicago-app/logo.png',
        description: 'React with Redux Isomorphic App Boilerplate  ...'
    };
}

export function makeRedirectUrl({originalUrl}) {
    const UIWallPath = `${clientConfig.embedOrigin}/companywall`;
    return `${UIWallPath}${originalUrl}`;
}

export function detectLocale(req) {
    // Take locale passed by user
    const passedLocale = ( req.query.locale || req.cookies.locale || '' ).toLowerCase();
    if (getSupportedLocales().indexOf(passedLocale) >= 0) {
        return passedLocale;
    }

    // Detect locale by ip
    const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip);
    const country = ( geo && geo.country );

    return {
            'UA': 'uk',
            'RU': 'ru'
        }[country] || 'en';
}

