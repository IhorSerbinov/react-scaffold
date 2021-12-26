import { createStore, applyMiddleware, compose } from 'redux';
import { multiClientMiddleware } from 'redux-axios-middleware';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage'; 
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from '_reducers';
import client from './apiClient';

const apiMiddlewareOptions = {
  returnRejectedPromiseOnError: true,
  successSuffix: 'SUCCESS',
  errorSuffix: 'FAILURE',
};

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

export default () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(thunkMiddleware, multiClientMiddleware(client, apiMiddlewareOptions))
    )
  );

  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};
