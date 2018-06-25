'use strict';
/* this config is required for nodemailer */
module.exports = {
    _____: 'https://myaccount.google.com/lesssecureapps',   //  enable login to gmail,must enable
    service: 'gmail',   //  or other email service provider
    auth: {
        user: '<email-address>',
        pass: '<email-password>',
    }
};
