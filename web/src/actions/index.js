'use strict';

const actionTypes = require('./action-types');

const changeRouteAction = require('./change-route');

const initUserInfoDefaultAction = require('./init-user-info-default');
const updateRegisterFormAction = require('./update-register-form');
const updateLoginFromAction = require('./update-login-form');
const updateUserInfoFormAction = require('./update-user-info-form');
const updatePwdFormAction = require('./update-pwd-form');
const registerAction = require('./register');
const activateAccountAction = require('./activate-account');
const loginAction = require('./login');
const logoutAction = require('./logout');
const updateUserInfoAction = require('./update-user-info');
const updatePwdAction = require('./update-pwd');
const resetPwdAction = require('./reset-pwd');
const getMessageAction = require('./get-message');
const getFilterCountAction = require('./get-filter-count');
const getCatalogueAction = require('./get-catalogue');
const getPaperAction = require('./get-paper');
const getPaperReplyAction = require('./get-paper-reply');
const resetReplyFormAction = require('./reset-reply-form');
const updateReplyFormAction = require('./update-reply-form');
const submitReplyAction = require('./submit-reply');

const actions = {
    actionTypes,

    changeRouteAction,

    initUserInfoDefaultAction,
    updateRegisterFormAction,
    updateLoginFromAction,
    updateUserInfoFormAction,
    updatePwdFormAction,
    registerAction,
    activateAccountAction,
    loginAction,
    logoutAction,
    updateUserInfoAction,
    updatePwdAction,
    resetPwdAction,
    getMessageAction,
    getFilterCountAction,
    getCatalogueAction,
    getPaperAction,
    getPaperReplyAction,
    resetReplyFormAction,
    updateReplyFormAction,
    submitReplyAction,
};

module.exports = actions;
