'use strict';

const initLoginModalAction = (data) => ({
    type: 'INIT_LOGIN_MODAL',
    payload: {
        current: '/',
        data,
    },
});

module.exports = initLoginModalAction;
