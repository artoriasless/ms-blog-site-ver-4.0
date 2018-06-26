'use strict';

const stanAlert = require('/lib/common-stan-alert');

function submitValidate(formData) {
    const alertInfo = {
        title: 'Warning!',
        userName: {
            null: 'please type your user name!',
            illegal: 'the user name can\'t exceed 15 characters in length!',
        },
    };

    if (!formData.userName) {
        stanAlert({
            title: alertInfo.title,
            content: alertInfo.userName.null,
        });

        return false;
    } else if (formData.userName.length > 15) {
        stanAlert({
            title: alertInfo.title,
            content: alertInfo.userName.illegal,
        });

        return false;
    }

    return true;
}

module.exports = submitValidate;
