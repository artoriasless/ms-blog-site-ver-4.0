'use strict';

const getCatalogue = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    newState.current = action.payload.current;
    newState.catalogue = action.payload.catalogue;

    return newState;
};

module.exports = getCatalogue;