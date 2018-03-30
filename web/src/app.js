'use strict';

const React = require('react');                                                 //  eslint-disable-line
const ReactDOM = require('react-dom');

const appDom = document.getElementById('app');

const render = () => {
    ReactDOM.render((
        <div className="row no-gutters">
            <div className="col-4 offset-4">
                <span className="test">abc</span>
            </div>
        </div>
    ), appDom);
};

render();
