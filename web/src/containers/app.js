'use strict';
/* eslint-disable */
const React = require('react');
const { connect } = require('react-redux');

const actions = require('/actions');

const hideMainScrollerbar = require('/lib/common-hide-main-scrollerbar');
const initCompassIcon = require('/lib/common-init-compass-icon');
const initNavbarBG = require('/lib/common-init-navbar-bg');
const stanLoading = require('/lib/common-stan-loading');
/* eslint-disable */
class UI_App extends React.Component {
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

    componentDidUpdate() {
        const $body = document.querySelectorAll('body')[0];
        const domain = window.location.host;
        const originalUrl = $body.getAttribute('data-url');
        const currentUrl = window.location.href.split(domain)[1];

        if (originalUrl !== currentUrl) {
            $body.setAttribute('data-url', currentUrl);
            this.props.changeRoute();

            stanLoading();
            //  动画显示页面
            setTimeout(() => {
                stanLoading('hide');
                $('#root').removeClass('hidden').addClass('fade-in-animate');
            }, 500);
        }
    }

    render() {
        return (
            <div className="app">
                { this.props.children }
            </div>
        );
    }
}

const changeRouteAction = actions.changeRouteAction;

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({
    changeRoute: () => dispatch(changeRouteAction()),
});

const App = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_App);

module.exports = App;
