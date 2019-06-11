'use strict';

const updatePaperForm = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    newState.current = action.payload.current;
    newState.cache = originalState.cache || {};
    newState.cache.paper = action.payload.cache.paper;

    return newState;
};

module.exports = updatePaperForm;