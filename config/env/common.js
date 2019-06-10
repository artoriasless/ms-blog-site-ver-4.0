'use stirct';
/* global process */
module.exports = {
    env: process.env.NODE_ENV || 'development',
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
    ossPublic: {
        assets: 'https://monkingstand.oss-cn-beijing.aliyuncs.com',
        user: 'https://monkingstand.oss-cn-beijing.aliyuncs.com/user',
        paper: 'https://monkingstand.oss-cn-beijing.aliyuncs.com/paper'
    }
};
