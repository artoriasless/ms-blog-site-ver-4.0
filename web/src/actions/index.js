'use strict';

const actionTypes = require('./action-types');

const initUserInfoDefaultAction = require('./init-user-info-default');
const updateRegisterFormAction = require('./update-register-form');
const updateLoginFromAction = require('./update-login-form');
const updateUserInfoFormAction = require('./update-user-info-form');
const registerAction = require('./register');
const activateAccountAction = require('./activate-account');
const loginAction = require('./login');
const logoutAction = require('./logout');
const updateUserInfoAction = require('./update-user-info');

const actions = {
    actionTypes,

    initUserInfoDefaultAction,
    updateRegisterFormAction,
    updateLoginFromAction,
    updateUserInfoFormAction,
    registerAction,
    activateAccountAction,
    loginAction,
    logoutAction,
    updateUserInfoAction,
};

module.exports = actions;
