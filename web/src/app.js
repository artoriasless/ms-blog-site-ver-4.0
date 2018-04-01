'use strict';
/* eslint-disable */
const React = require('react');
const ReactDOM = require('react-dom');
const thunk = require('redux-thunk');
const { createStore, combineReducers, applyMiddleware } = require('redux');
const { Provider } = require('react-redux');
const { Router, Route, browserHistory, IndexRoute } = require('react-router');
const { syncHistoryWithStore, routerReducer } = require('react-router-redux');
/* eslint-disable */

/* App 对应总容器 */
/* Page 前缀，对应一个个页面，即不同的路由 */
const App = require('./containers/app');
const PageHome = require('./containers/page-home');
/* 引入自定义的 reducers */
const appReducer = require('./reducers');
/* 生成 store */
const store = createStore(
    combineReducers({
        appReducer,
        routing: routerReducer,
    }),
    applyMiddleware(thunk)
);

const history = syncHistoryWithStore(browserHistory, store);
const appDom = document.getElementById('app');

const router = (
    <Router history = { history }>
        <Route
            path = "/"
            component = { App }
        >
            <IndexRoute component = { PageHome }/>
        </Route>
    </Router>
);

const render = () => {
    ReactDOM.render((
        <Provider store = { store }>
            { router }
        </Provider>
    ), appDom);
};

render();
