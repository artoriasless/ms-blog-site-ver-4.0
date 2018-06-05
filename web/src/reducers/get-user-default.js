'use strict';

const deepCopy = require('/lib/common-deep-copy');

const getUserDefault = (originalState, action) => {   //  eslint-disable-line
    const newState = Object.assign ? Object.assign({}, action.payload) : deepCopy(action.payload);

    return newState;
};

module.exports = getUserDefault;
