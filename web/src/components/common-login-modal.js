'use strict';
/* global $ */
const { connect } = require('react-redux');

const ajaxAction = require('/lib/common-ajax-action');
const stanAlert = require('/lib/common-stan-alert');

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
        const successFunc = function(result) {
            if (result.success) {
                stanAlert({
                    type: 'success',
                    content: `${result.message}<br/>login your email to activate account`,
                    textAlign: 'center',
                    shownExpires: 0.75,
                });

                $('#loginModal').modal('hide');
                dispatch(registerAction(result.data));
            } else {
                stanAlert({
                    title: 'Warning!',
                    content: result.message,
                });
            }
        };
        const failFunc = function(err) {
            stanAlert({
                title: 'Warning!',
                content: err.toString(),
            });
            console.info(err);  //  eslint-disable-line
        };

        return ajaxAction(requestUrl, jsonData, successFunc, failFunc);
    });
}

function ajaxLogin(jsonData) {
    return (dispatch => {
        const requestUrl = '/api/user/login';
        const successFunc = function(result) {
            if (result.success) {
                stanAlert({
                    type: 'success',
                    content: result.message,
                    textAlign: 'center',
                    shownExpires: 0.75,
                });

                $('#loginModal').modal('hide');
                dispatch(loginAction(result.data));
            } else {
                stanAlert({
                    title: 'Warning!',
                    content: result.message,
                });
            }
        };
        const failFunc = function(err) {
            stanAlert({
                title: 'Warning!',
                content: err.toString(),
            });
            console.info(err);  //  eslint-disable-line
        };

        return ajaxAction(requestUrl, jsonData, successFunc, failFunc);
    });
}

module.exports = LoginModal;
