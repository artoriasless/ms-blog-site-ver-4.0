'use strict';

const getFilterCount = (filterType, filterCount) => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'GET_FILTER_COUNT',
        payload: {
            current,
            filterType,
            filterCount,
        },
    });
};

module.exports = getFilterCount;
