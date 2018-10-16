'use strict';

const updateReplyForm = formData => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'UPDATE_REPLY_FORM',
        payload: {
            current,
            cache: {
                reply: formData,
            },
        },
    });
};

module.exports = updateReplyForm;
