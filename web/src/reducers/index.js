'use strict';

const { actionTypes } = require('../actions');

const initUserInfoDefaultFunc = require('./init-user-info-default');
const updateRegisterFormFunc = require('./update-register-form');
const updateLoginFormFunc = require('./update-login-form');
const registerFunc = require('./register');
const loginFunc = require('./login');
const logoutFunc = require('./logout');

const reducers = (state = {}, action = {}) => {
    switch (action.type) {
    case actionTypes.GET_USER_DEFAULT:
        return initUserInfoDefaultFunc(state, action);

    case actionTypes.UPDATE_REGISTER_FORM:
        return updateRegisterFormFunc(state, action);

    case actionTypes.UPDATE_LOGIN_FORM:
        return updateLoginFormFunc(state, action);

    case actionTypes.REGISTER:
        return registerFunc(state, action);

    case actionTypes.LOGIN:
        return loginFunc(state, action);

    case actionTypes.LOGOUT:
        return logoutFunc(state, action);

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
            ···
        },
        paper: {

        },
        userInfo: {
            ···
        },
        reply: {
            ···
        },
        cache: {
            ···
        }
    }

*/
