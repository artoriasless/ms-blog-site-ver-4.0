'use strict';
/* eslint-disable */
const React = require('react');

const hideMainScrollerbar = require('../lib/common-hide-main-scrollerbar');
const initCompassIcon = require('../lib/common-init-compass-icon');
const initNavbarBG = require('../lib/common-init-navbar-bg');
/* eslint-disable */

class App extends React.Component {
    componentDidMount() {
        hideMainScrollerbar();
        initCompassIcon();
        initNavbarBG();
    }

    render() {
        return (
            <div className="app">
                { this.props.children }
            </div>
        );
    }
}

module.exports = App;
