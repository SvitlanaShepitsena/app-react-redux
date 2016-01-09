import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import middlewares from './composeMiddlewares';

const finalCreateStore = compose(
    // Middleware you want to use in development:
    applyMiddleware(...middlewares()),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/rootReducer', () => {
            const nextRootReducer = require('../reducers/rootReducer');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
