'use strict';

const updatePwdForm = formData => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'UPDATE_PWD_FORM',
        payload: {
            current,
            cache: {
                pwd: formData,
            },
        },
    });
};

module.exports = updatePwdForm;
