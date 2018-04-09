'use strict';

const initHomeAction = (data) => ({
    type: 'INIT_HOME',
    payload: {
        current: '/',
        data,
    },
});

module.exports = initHomeAction;
