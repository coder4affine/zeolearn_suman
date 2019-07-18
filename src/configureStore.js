import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import log from './middleware/logMiddleware';
import rootReducer from './reducers';

import rootSaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, log)));

sagaMiddleware.run(rootSaga);

// store.dispatch({ type: 'LOGOUT' });
// store.dispatch({ type: 'LOGIN' });

export default store;
