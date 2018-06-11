'use strict';
/* eslint-disable */
const React = require('react');
const ReactDOM = require('react-dom');
const thunk = require('redux-thunk').default;
const { createStore, combineReducers, applyMiddleware } = require('redux');
const { Provider } = require('react-redux');
const { Router, Route, browserHistory, IndexRoute } = require('react-router');
const { syncHistoryWithStore, routerReducer } = require('react-router-redux');
/* eslint-disable */

/* App 对应总容器 */
/* Page 前缀，对应一个个页面，即不同的路由 */
const App = require('/containers/app');
const PageHome = require('/containers/page-home');
const PageCatalogue = require('/containers/page-catalogue');
const PageUser = require('/containers/page-user');
const PageActivate = require('/containers/page-activate');
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
const rootDom = document.getElementById('root');

const router = (
    <Router history = { history }>
        <Route
            path = "/"
            component = { App }
        >
            <IndexRoute component = { PageHome }/>
            <Route
                path = '/catalogue'
                component = { PageCatalogue }
            />
            <Route
                path = '/user/:uuid'
                component = { PageUser }
            />
            <Route
                path = '/util/activate/:uuid'
                component = { PageActivate }
            />
        </Route>
    </Router>
);

const render = () => {
    ReactDOM.render((
        <Provider store = { store }>
            { router }
        </Provider>
    ), rootDom);
};

render();
