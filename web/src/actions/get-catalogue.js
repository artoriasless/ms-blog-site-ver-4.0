'use strict';

const getCatalogue = catalogue => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'GET_CATALOGUE',
        payload: {
            current,
            catalogue,
        },
    });
};

module.exports = getCatalogue;
