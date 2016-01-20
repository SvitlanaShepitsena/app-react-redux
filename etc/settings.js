'use strict'

import clientConfig from './client-config.json';

import PORT from '../server/port';
export default function () {
    let jsSettings = JSON.stringify(clientConfig);
    if (process.env.NODE_ENV === 'production') {
        jsSettings = jsSettings.replace(/(3001)|(8050)/g, PORT);

    }
    return JSON.parse(jsSettings);
}();

