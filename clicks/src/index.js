import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxLogger from 'redux-logger';

import App from "./components/App";
import reducers from "./reducers";

//You can put these in a seperate file if you want to
// const logColors = {
// 	title: () => 'inherit',
// 	prevState: () => '#9E9E9E',
// 	action: () => '#03A9F4',
// 	nextState: () => '#4CAF50',
// 	error: () => '#F20404'
// };
// const reduxLogger = createLogger({
// 	level: 'log',
// 	colors: logColors,
// 	logErrors: true,
// 	timestamp: true,
// 	stateTransformer: state => state,
// 	actionTransformer: action => action,
// 	errorTransformer: error => error
// });

// This will activate the Redux tool in Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancher = composeEnhancers(applyMiddleware(reduxLogger));

ReactDOM.render(
    <Provider store={createStore(reducers, {}, enhancher)}>
        <App/>
    </Provider>,
    document.querySelector("#root")
);