/* eslint no-underscore-dangle: 0 */
/* eslint operator-linebreak: 0 */

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

const middleWares = [];

const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

    }) : compose;

const composedEnhancers = composeEnhancers(
    applyMiddleware(...middleWares),
);

export default initialState => createStore(
    rootReducer,
    initialState,
    composedEnhancers,
);
