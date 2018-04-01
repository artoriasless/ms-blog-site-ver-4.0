'use strict';

const { actionTypes } = require('../actions');

const initHomeFunc = require('./init-home');

const reducers = (state = {}, action = {}) => {
    switch (action.type) {
    case actionTypes.INIT_HOME:
        return initHomeFunc(state, action);
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
        }，
    }

*/
