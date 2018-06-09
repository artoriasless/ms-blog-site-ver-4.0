'use strict';

const updateRegisterForm = formData => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'UPDATE_REGISTER_FORM',
        payload: {
            current,
            cache: {
                register: formData,
            },
        },
    });
};

module.exports = updateRegisterForm;
