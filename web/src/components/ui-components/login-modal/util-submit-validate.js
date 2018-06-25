'use strict';

const stanAlert = require('/lib/common-stan-alert');

function submitValidate(type, formData) {
    const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    const pwdReg = /^\S{10,18}$/;
    const alertInfo = {
        title: 'Warning!',
        email: {
            null: 'please type the email address!',
            illegal: 'please type legal email address!',
        },
        password: {
            null: 'please type the password!',
            illegal: 'please type legal password!<br/>pwd length from 10 to 16.',
        },
        passwordConfirm: {
            null: 'please retype the password to check!',
            illegal: 'the password to confirm is inconsistent!'
        }
    };

    if (!formData.email) {
        stanAlert({
            title: alertInfo.title,
            content: alertInfo.email.null
        });

        return false;
    } else if (!emailReg.test(formData.email)) {
        stanAlert({
            title: alertInfo.title,
            content: alertInfo.email.illegal,
        });

        return false;
    } else if (!formData.password) {
        stanAlert({
            title: alertInfo.title,
            content: alertInfo.password.null,
        });

        return false;
    } else if (!pwdReg.test(formData.password)) {
        stanAlert({
            title: alertInfo.title,
            content: alertInfo.password.illegal,
        });

        return false;
    }
    //  如果是注册，需要再校验确认的模态框
    if (type === 'register') {
        if (!formData.passwordConfirm) {
            stanAlert({
                title: alertInfo.title,
                content: alertInfo.passwordConfirm.null,
            });

            return false;
        } else if (formData.password !== formData.passwordConfirm) {
            stanAlert({
                title: alertInfo.title,
                content: alertInfo.passwordConfirm.illegal,
            });

            return false;
        }
    }
    return true;
}

module.exports = submitValidate;
