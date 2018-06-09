'use strict';

const logout = userInfo => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'LOGOUT',
        payload: {
            current,
            userInfo,
        },
    });
};

module.exports = logout;
