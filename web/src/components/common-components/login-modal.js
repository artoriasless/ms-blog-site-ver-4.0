'use strict';

const { connect } = require('react-redux');

const ajaxAction = require('/lib/common-ajax-action');

const UI_loginModal = require('/components/ui-components/login-modal');
const actions = require('/actions');

const updateRegisterFormAction = actions.updateRegisterFormAction;
const updateLoginFormAction = actions.updateLoginFromAction;
const registerAction = actions.registerAction;
const loginAction = actions.loginAction;

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({   //  eslint-disable-line
    updateRegisterForm: formData => dispatch(updateRegisterFormAction(formData)),
    updateLoginForm: formData => dispatch(updateLoginFormAction(formData)),
    register: jsonData => dispatch(ajaxRegister(jsonData)),
    login: jsonData => dispatch(ajaxLogin(jsonData)),
});

const LoginModal = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_loginModal);

function ajaxRegister(jsonData) {
    return (dispatch => {
        const requestUrl = '/api/user/register';
        const successFunc = function(data) {
            console.info('register', data);
            dispatch(registerAction(data));
        };
        const failFunc = function(err) {
            console.info(err);
        };

        return ajaxAction(requestUrl, jsonData, successFunc, failFunc);
    });
}

function ajaxLogin(jsonData) {
    return (dispatch => {
        const requestUrl = '/api/user/login';
        const successFunc = function(data) {
            console.info('login', data);
            dispatch(loginAction(data));
        };
        const failFunc = function(err) {
            console.info(err);
        };

        return ajaxAction(requestUrl, jsonData, successFunc, failFunc);
    });
}

module.exports = LoginModal;
