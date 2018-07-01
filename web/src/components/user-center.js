'use strict';

const { connect } = require('react-redux');

const ajaxAction = require('/lib/common-ajax-action');
const stanAlert = require('/lib/common-stan-alert');

const UI_userCenter = require('/components/ui-components/user-center');
const actions = require('/actions');

const updateUserInfoFormAction = actions.updateUserInfoFormAction;
const resetPwdAction = actions.resetPwdAction;
const getMessageAction = actions.getMessageAction;

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({   //  eslint-disable-line
    updateUserInfoForm: formData => dispatch(updateUserInfoFormAction(formData)),
    sendActivateMail: () => sendActivateMail(),
    resetPwd: () => dispatch(ajaxResetPwd()),
    getMessage: jsonData => dispatch(ajaxGetMessage(jsonData)),
});

const UserCenter = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_userCenter);

function sendActivateMail() {
    //  发送账号激活邮件不会改变 state ，故该操作没有对应 action ，也无需调用 dispatch
    const requestUrl = '/api/user/send-activate-mail';
    const successFunc = function(result) {
        if (result.success) {
            stanAlert({
                type: 'success',
                content: result.message,
                textAlign: 'center',
                shownExpires: 0.75,
            });
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

    ajaxAction(requestUrl, {}, successFunc, failFunc);
}

function ajaxResetPwd() {
    return (dispatch => {
        const requestUrl = '/api/user/reset-pwd';
        const successFunc = function(result) {
            if (result.success) {
                stanAlert({
                    type: 'success',
                    content: result.message,
                    textAlign: 'center',
                    shownExpires: 0.75,
                });

                dispatch(resetPwdAction(result.data));
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

        return ajaxAction(requestUrl, {}, successFunc, failFunc);
    });
}

function ajaxGetMessage(jsonData) {
    return (dispatch => {
        const requestUrl = '/api/message/page';
        const successFunc = function(result) {
            if (result.success) {
                dispatch(getMessageAction(result.data));
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
        const options = {
            type: 'get',
        };

        return ajaxAction(requestUrl, jsonData, successFunc, failFunc, options);
    });
}

module.exports = UserCenter;
