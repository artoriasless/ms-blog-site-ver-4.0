'use strict';

const _ = require('lodash');

const updateLoginForm = (originalState, action) => {   //  eslint-disable-line
    const newState = _.merge(_.merge({}, originalState), action.payload);

    return newState;
};

module.exports = updateLoginForm;
