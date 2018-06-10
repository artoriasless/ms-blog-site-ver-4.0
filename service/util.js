'use strict';

const nodemailer = require('nodemailer');

const config = require('../config');

module.exports = {
    await: {},
    email(options) {
        const transporter = nodemailer.createTransport(config.email);
        const mailOpts = {
            from: 'MonkingStand@gmail.com',
            to: options.to,
            subject: options.subject,
            text: options.text,
            html: options.html,
        };

        transporter.sendMail(mailOpts); //  cancel error handler,think send success as default
    },
};
