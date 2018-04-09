'use stirct';
/* global process */
module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: 3001,
    sessionKeys: [
        'user'
    ],
    session: {
        key: 'koa:session',
        maxAge: 86400000,
        overwrite: true,
        httpOnly: true,
        signed: true,
        rolling: false,
        renew: false,
    },
};
