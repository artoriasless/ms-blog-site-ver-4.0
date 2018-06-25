'use strict';

const updateUserInfo = userInfo => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'UPDATE_USER_INFO',
        payload: {
            current,
            userInfo,
        },
    });
};

module.exports = updateUserInfo;
