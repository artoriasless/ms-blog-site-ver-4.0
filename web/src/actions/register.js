'use strict';

const register = userInfo => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'REGISTER',
        payload: {
            current,
            userInfo,
        },
    });
};

module.exports = register;
