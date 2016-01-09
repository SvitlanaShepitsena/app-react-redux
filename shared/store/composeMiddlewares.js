import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promiseMiddleware from '../api/promiseMiddleware';

export default () => {
    const universalMiddleware = [thunk, promiseMiddleware];

    if (process.browser) {
        /* Client Side*/
        if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
            /* Production */
            //console.log('production');

        } else {
            /* Development */
            //console.log('dev');
        }
    }
    return universalMiddleware;
};
