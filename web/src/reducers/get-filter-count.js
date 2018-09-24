'use strict';

const getFilterCount = (originalState, action) => {   //  eslint-disable-line
    const newState = JSON.parse(JSON.stringify(originalState));

    newState.filter = originalState.filter || {};
    newState.filter[action.payload.filterType] = action.payload.filterCount;

    return newState;
};

module.exports = getFilterCount;
