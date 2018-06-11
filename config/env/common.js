'use stirct';
/* global process */
module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: 3001,
    sessionKeys: [
        'user'
    ],
    session: {
        key: 'koa-monkingstand-session',
        maxAge: 86400000,
        overwrite: true,
        httpOnly: true,
        signed: true,
        rolling: false,
        renew: false,
    },
    email: {
        _____: 'https://myaccount.google.com/lesssecureapps',   //  enable login to gmail
        service: 'gmail',
        auth: {
            user: 'monkingstand@gmail.com',
            pass: 'monkingstand1111+2222=3333',
        }
    },
};
