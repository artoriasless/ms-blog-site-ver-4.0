'use strict';

const _ = require('lodash');

const login = (originalState, action) => {   //  eslint-disable-line
    const newState = _.merge(_.merge({}, originalState), action.payload);

    return newState;
};

module.exports = login;