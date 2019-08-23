import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const store = createStore(reducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

serviceWorker.unregister();