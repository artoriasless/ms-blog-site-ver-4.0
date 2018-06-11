'use strict';
/* global $ */
const { connect } = require('react-redux');

const ajaxAction = require('/lib/common-ajax-action');
const stanAlert = require('/lib/common-stan-alert');
const stanLoading = require('/lib/common-stan-loading');

const UI_activateAccount = require('/components/ui-components/activate-account');
const actions = require('/actions');

const activateAccountAction = actions.activateAccountAction;

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({   //  eslint-disable-line
    activateAccount: jsonData => dispatch(ajaxActivateAccount(jsonData)),
});

const ActivateAccount = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_activateAccount);

function ajaxActivateAccount(jsonData) {
    return (dispatch => {
        const requestUrl = '/api/user/activate';
        const successFunc = function(result) {
            stanLoading('hide');
            if (result.success) {
                stanAlert({
                    type: 'success',
                    content: result.message,
                    textAlign: 'center',
                    shownExpires: 1,
                });

                dispatch(activateAccountAction(result.data));
            } else {
                stanAlert({
                    title: 'Warning!',
                    content: result.message,
                });
            }
            //  1s 后提示跳转到首页的信息
            setTimeout(() => {
                //  信息提示
                stanAlert({
                    type: 'success',
                    content: 'ready to home page...',
                    textAlign: 'center',
                    shownExpires: 1,
                });
                //  1s 后跳转到首页
                setTimeout(() => {
                    location.href='/';
                }, 1000);
            }, 1500);
        };
        const failFunc = function(err) {
            stanLoading('hide');
            setTimeout(() => {
                stanAlert({
                    title: 'Warning!',
                    content: err.toString(),
                });
                console.info(err);  //  eslint-disable-line
            }, 1000);
        };

        return ajaxAction(requestUrl, jsonData, successFunc, failFunc);
    });
}

module.exports = ActivateAccount;
