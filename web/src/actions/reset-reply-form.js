'use strict';

const resetReplyForm = formData => {
    const url = document.URL;
    const reg = /^[^/]+\/\/[^/]+/;
    const current = url.replace(reg, '');

    return ({
        type: 'RESET_REPLY_FORM',
        payload: {
            current,
            cache: {
                reply: formData,
            },
        },
    });
};

module.exports = resetReplyForm;
