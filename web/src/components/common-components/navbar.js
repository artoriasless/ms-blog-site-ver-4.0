'use strict';
/* global $ */
const { connect } = require('react-redux');

const ajaxAction = require('/lib/common-ajax-action');

const UI_navbar = require('../ui-components/navbar');
const actions = require('../../actions');

const initUserInfoDefaultAction = actions.initUserInfoDefaultAction;

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => {    //  eslint-disable-line
    const ajaxInitUserInfoDefault = () => dispatch => {
        const requestUrl = '/api/user/default';
        const successFunc = function(data) {
            console.info('default', data);
            dispatch(initUserInfoDefaultAction(data));
        };
        const failFunc = function(err) {
            console.info(err);
        };
        const opts = {
            type: 'get',
        };

        return ajaxAction(requestUrl, {}, successFunc, failFunc, opts);
    };

    return ({
        initUserInfo: () => dispatch(ajaxInitUserInfoDefault()),
    });
};

const Navbar = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_navbar);

module.exports = Navbar;
