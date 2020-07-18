// import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers/RootReducer'
import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import RootSaga from "./sagas/RootSaga";
// import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
const persistConfig = {
  key: 'data',
  storage,
  whitelist: ['Item']
}
// const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
  let persistor = persistStore(store)
  // sagaMiddleware.run(RootSaga);
  return { store, persistor }
}