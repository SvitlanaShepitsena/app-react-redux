import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default () => {
    const universalMiddleware = [thunk];

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
