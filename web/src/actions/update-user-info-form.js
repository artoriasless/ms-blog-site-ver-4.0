'use strict';

const updateUserInfoForm = formData => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'UPDATE_USER_INFO_FORM',
        payload: {
            current,
            cache: {
                userInfo: formData,
            },
        },
    });
};

module.exports = updateUserInfoForm;
