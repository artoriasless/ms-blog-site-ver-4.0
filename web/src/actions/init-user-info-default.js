'use strict';

const initUserInfoDefault = userInfo => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'GET_USER_DEFAULT',
        payload: {
            current,
            userInfo,
        },
    });
};

module.exports = initUserInfoDefault;
