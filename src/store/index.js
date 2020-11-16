// gkc_hash_code : 01DP36WG44VRF7TRHPZB9Z7766
import { fromJS } from 'immutable';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducers';
import rootSaga from './rootSagas';

console.log(rootReducer);

const bindMiddleware = (middleware) => {
    const composeEnhancers = process.env.APP_ENV !== 'production'
            && typeof window === 'object'
            && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

    return composeEnhancers(
        applyMiddleware(...middleware),
    )
}

export default function (initialState = fromJS({})) {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        initialState,
        bindMiddleware([sagaMiddleware]),
    )

    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store
}
