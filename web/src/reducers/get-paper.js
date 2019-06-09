'use strict';

const getPaper = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    newState.current = action.payload.current;
    newState.paper = action.payload.paper;

    return newState;
};

module.exports = getPaper;