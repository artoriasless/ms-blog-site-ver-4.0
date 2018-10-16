'use strict';

const stanAlert = require('/lib/common-stan-alert');

function submitValidate(type, formData) {
    const alertInfo = {
        title: 'Warning!',
        content: {
            null: 'please type the comment!',
        },
    };

    if (!formData.content) {
        stanAlert({
            title: alertInfo.title,
            content: alertInfo.content.null,
        });

        return false;
    }

    return true;
}

module.exports = submitValidate;
