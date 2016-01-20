'use strict'

import clientConfig from './client-config.json';

import PORT from '../server/port';
export default function (host) {
    let jsSettings = JSON.stringify(clientConfig);
    if (process.env.NODE_ENV === 'production') {
        jsSettings = jsSettings.replace(/(3001)|(8050)/g, PORT);

        //if (host.indexOf('local')===-1) {
            jsSettings = jsSettings.replace(/localhost/g, host);
        //}

    }
    return JSON.parse(jsSettings);
};

