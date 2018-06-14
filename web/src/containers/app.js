'use strict';
/* eslint-disable */
const React = require('react');

const hideMainScrollerbar = require('/lib/common-hide-main-scrollerbar');
const initCompassIcon = require('/lib/common-init-compass-icon');
const initNavbarBG = require('/lib/common-init-navbar-bg');
const stanLoading = require('/lib/common-stan-loading');
/* eslint-disable */
class App extends React.Component {
    componentWillMount() {
        stanLoading();
    }

    componentDidMount() {
        hideMainScrollerbar();
        initCompassIcon();
        initNavbarBG();
        //  动画显示页面
        setTimeout(() => {
            stanLoading('hide');
            $('#root').removeClass('hidden').addClass('fade-in-animate');
        }, 500);
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
