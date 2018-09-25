'use strict';

const getMessage = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    newState.current = action.payload.current;
    newState.message = action.payload.message;

    return newState;
};

module.exports = getMessage;
