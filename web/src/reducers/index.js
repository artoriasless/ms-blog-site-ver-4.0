'use strict';

const { actionTypes } = require('/actions');

const initUserInfoDefaultFunc = require('./init-user-info-default');
const updateRegisterFormFunc = require('./update-register-form');
const updateLoginFormFunc = require('./update-login-form');
const updateUserInfoFormFunc = require('./update-user-info-form');
const updatePwdFormFunc = require('./update-pwd-form');
const registerFunc = require('./register');
const activateAccountFunc = require('./activate-account');
const loginFunc = require('./login');
const logoutFunc = require('./logout');
const updateUserInfoFunc = require('./update-user-info');
const updatePwdFunc = require('./update-pwd');
const resetPwdFunc = require('./reset-pwd');
const getMessageFunc = require('./get-message');
const getFilterCountFunc = require('./get-filter-count');

const reducers = (state = {}, action = {}) => {
    switch (action.type) {
    case actionTypes.GET_USER_DEFAULT:
        return initUserInfoDefaultFunc(state, action);

    case actionTypes.UPDATE_REGISTER_FORM:
        return updateRegisterFormFunc(state, action);

    case actionTypes.UPDATE_LOGIN_FORM:
        return updateLoginFormFunc(state, action);

    case actionTypes.UPDATE_USER_INFO_FORM:
        return updateUserInfoFormFunc(state, action);

    case actionTypes.UPDATE_PWD_FORM:
        return updatePwdFormFunc(state, action);

    case actionTypes.REGISTER:
        return registerFunc(state, action);

    case actionTypes.ACTIVATE_ACCOUNT:
        return activateAccountFunc(state, action);

    case actionTypes.LOGIN:
        return loginFunc(state, action);

    case actionTypes.LOGOUT:
        return logoutFunc(state, action);

    case actionTypes.UPDATE_USER_INFO:
        return updateUserInfoFunc(state, action);

    case actionTypes.UPDATE_PWD:
        return updatePwdFunc(state, action);

    case actionTypes.RESET_PWD:
        return resetPwdFunc(state, action);

    case actionTypes.GET_MESSAGE:
        return getMessageFunc(state, action);

    case actionTypes.GET_FILTER_COUNT:
        return getFilterCountFunc(state, action);

    default:
        return state;
    }
};

module.exports = reducers;

/*

    ==========  define state  ==========

    {
        currentPage: 'home',
        filter: {
            latest: {
                count: 5,
                rows: [
                    ···
                ]
            },
            tag: {
                count: 5,
                rows: [
                    ···
                ]
            },
            timeline: {
                count: 5,
                rows: [
                    ···
                ]
            },
        },
        paper: {

        },
        userInfo: {
            ···
        },
        message: {
            ···
        },
        reply: {
            ···
        },
        cache: {
            isLogin: true | false,
            login: {
                ···
            },
            register: {
                ···
            },
            userInfo: {
                userName,
                gender,
            },
            pwd: {
                original,
                modify,
                confirm,
            }
        }
    }

*/
