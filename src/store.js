import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers/RootReducer'
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const persistConfig = {
  key: 'data',
  storage,
  whitelist: ['Item', 'Form']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
  let persistor = persistStore(store)
  return { store, persistor }
}