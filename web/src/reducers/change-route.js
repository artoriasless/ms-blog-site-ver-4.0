'use strict';

const changeRoute = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    newState.current = action.payload.current;

    return newState;
};

module.exports = changeRoute;
