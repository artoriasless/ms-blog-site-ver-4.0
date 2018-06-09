'use strict';

const register = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    newState.current = action.payload.current;
    newState.userInfo = action.payload.userInfo;

    return newState;
};

module.exports = register;
