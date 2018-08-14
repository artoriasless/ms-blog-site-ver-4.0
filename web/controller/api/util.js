'use strict';
/* global __dirname */
const fs = require('fs');
const path = require('path');
const hash = require('object-hash');

const config = require('../../../config');
const service = require('../../../service');
const utilService = service.util;

module.exports = {
    sendActivateMail(uuid, email) {
        const hashVal = hash.sha1(uuid);
        const activateLink = `${config.domain}/util/activate/${uuid}?stamp=${hashVal}`;
        const emailTpl = fs.readFileSync(path.resolve(__dirname, '../../template/activate-email.tpl')).toString();
        const emailOpts = {
            to: email,
            subject: 'Activate Your MonkingStand Account',
            text: 'activate your monkingstand account to comment',
            html: emailTpl.replace(/<activateLink>/g, activateLink),
        };

        utilService.email(emailOpts);
    },
    sendResetPwdMail(email, newRandomPwd) {
        const homeLink = config.domain;
        const emailTpl = fs.readFileSync(path.resolve(__dirname, '../../template/reset-pwd-email.tpl')).toString();
        const emailOpts = {
            to: email,
            subject: 'Reset Password',
            text: 'get your new random password',
            html: emailTpl.replace(/<homeLink>/g, homeLink).replace(/<newRandomPwd>/g, newRandomPwd),
        };

        utilService.email(emailOpts);
    },
};
