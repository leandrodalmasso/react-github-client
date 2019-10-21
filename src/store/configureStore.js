// Dependencies
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
