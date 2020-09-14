import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store";
import { PersistGate } from 'redux-persist/integration/react'


import Login from './containers/Login'
const { store, persistor } = configureStore();
console.log(`Environment : ${process.env.REACT_APP_ENV}`)
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
