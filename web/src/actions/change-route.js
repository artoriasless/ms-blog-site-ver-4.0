'use strict';

const changeRoute = () => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'CHANGE_ROUTE',
        payload: {
            current,
        },
    });
};

module.exports = changeRoute;
