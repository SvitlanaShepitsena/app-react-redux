'use strict'

import clientConfig from './client-config.json';

import PORT from '../server/port';
export default function () {

    return JSON.parse(JSON.stringify(clientConfig).replace(/3001/g, PORT));
}();

