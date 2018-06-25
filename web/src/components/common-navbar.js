'use strict';

const { connect } = require('react-redux');

const ajaxAction = require('/lib/common-ajax-action');
const stanAlert = require('/lib/common-stan-alert');

const UI_navbar = require('/components/ui-components/navbar');
const actions = require('/actions');

const initUserInfoDefaultAction = actions.initUserInfoDefaultAction;
const logoutAction = actions.logoutAction;

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({   //  eslint-disable-line
    initUserInfo: () => dispatch(ajaxInitUserInfoDefault()),
    logout: () => dispatch(ajaxLogout()),
});

const Navbar = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_navbar);

function ajaxInitUserInfoDefault() {
    return (dispatch => {
        const requestUrl = '/api/user/default';
        const successFunc = function(result) {
            dispatch(initUserInfoDefaultAction(result.data));
        };
        const failFunc = function(err) {
            console.info(err);  //  eslint-disable-line
        };
        const opts = {
            type: 'get',
        };

        return ajaxAction(requestUrl, {}, successFunc, failFunc, opts);
    });
}

function ajaxLogout() {
    return (dispatch => {
        const requestUrl = '/api/user/logout';
        const successFunc = function(result) {
            stanAlert({
                type: 'success',
                content: result.message,
                textAlign: 'center',
                shownExpires: 0.75,
            });
            dispatch(logoutAction(result.data));
        };
        const failFunc = function(err) {
            stanAlert({
                type: 'danger',
                title: 'Error!',
                content: err.toString(),
            });
            console.info(err);  //  eslint-disable-line
        };

        return ajaxAction(requestUrl, {}, successFunc, failFunc);
    });
}

module.exports = Navbar;
