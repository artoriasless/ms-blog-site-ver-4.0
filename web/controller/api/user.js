'use strict';

const uuid = require('uuid/v4');
const hash = require('object-hash');

const service = require('../../../service');
const userService = service.user;

const util = require('./util');

module.exports = {
    async getUserDefault(ctx) {
        if (ctx.session.user === undefined) ctx.session.user = {id: 0};
        if (ctx.session.user.id === undefined) ctx.session.user = {id: 0};

        const loginUser = ctx.session.user;
        const user = await userService.findById(Number(loginUser.id)) || {};

        ctx.session.user = user;
        ctx.body = {
            success: true,
            message: '',
            data: user,
        };
    },
    async logout(ctx) {
        ctx.session.user = {};
        ctx.body = {
            success: true,
            message: 'logout success!',
            data: {},
        };
    },
    async login(ctx) {
        const data = ctx.request.body;
        const query = {
            where: {
                email: data.email,
            },
        };
        const users = await userService.findMany(query);
        var user = users[0] || {};
        var success = true;
        var message = 'login success!';

        if (!user.id && !user.email && !user.password) {
            success = false;
            message = 'login failed.please check that if the email is right!';
        } else {
            if (hash.sha1(data.password) !== user.password) {
                user = {};
                success = false;
                message = 'login failed.please check that password is right!';
            }
        }

        ctx.session.user = user;
        ctx.body = {
            success,
            message,
            data: user,
        };
    },
    async register(ctx) {
        const data = ctx.request.body;
        const query = {
            where: {
                email: data.email,
            },
        };
        const users = await userService.findMany(query);
        const userData = {
            uuid: uuid(),
            userName: `guest${Math.round(Math.random() * 100)}`,
            email: data.email,
            password: hash.sha1(data.password),
            gender: 0,
            isEnabled: 0,
            registerIp: ctx.request.ip.match(/\d+\.\d+\.\d+\.\d+/)[0],
        };
        var user = {};
        var success = true;
        var message = 'rigister success';

        if (users.length > 0) {
            success = false;
            message = 'the email that submited has been registered!';
        } else {
            user = await userService.create(userData);

            util.sendActivateMail(user.uuid, user.email);
        }

        ctx.session.user = user;
        ctx.body = {
            success,
            message,
            data: user,
        };
    },
    async activate(ctx) {
        const data = ctx.request.body;
        const query = {
            where: {
                uuid: data.uuid,
            },
        };
        const users = await userService.findMany(query);
        const userData = {
            isEnabled: 1,
        };
        var user;
        var success = true;
        var message = 'account has been activated!';

        if (users.length === 0) {
            success = false;
            message = 'please check the url link is right!';
        } else {
            user = users[0];
            ctx.session.user = user;

            if (user.isEnabled) {
                message = 'the account has been actived,don\'t activate repeatedly!';
            } else {
                userData.id = user.id;
                user = await userService.update(userData);
            }
        }

        ctx.body = {
            success,
            message,
            data: user,
        };
    },
    async updateInfo(ctx) {
        const data = ctx.request.body;
        var user = ctx.session.user;
        var message = 'update success!';
        var success = true;

        data.id = user.id;
        user = await userService.update(data);

        ctx.session.user = user;
        ctx.body = {
            success,
            message,
            data: user,
        };
    },
    async updatePwd(ctx) {
        const data = ctx.request.body;
        const originUser = ctx.session.user;
        var message = 'update success!';
        var success = true;
        var user = await userService.findById(originUser.id);

        if (user.password === hash.sha1(data.original)) {
            user = await userService.update({
                id: user.id,
                password: hash.sha1(data.modify),
            });
        } else {
            message = 'the original password you typed is wrong!';
            success = false;
        }

        ctx.session.user = user;
        ctx.body = {
            success,
            message,
            data: user,
        };
    },
    async resetPwd(ctx) {
        const newPwd = Date.parse(new Date());
        const user = ctx.session.user;
        var message = 'new random pwd has been sent to your email!';
        var success = true;

        await userService.update({
            id: user.id,
            password: hash.sha1(String(newPwd)),
        });

        util.sendResetPwdMail(user.email, newPwd);
        ctx.session.user = {};
        ctx.body = {
            success,
            message,
            data: {},
        };
    },
    async sendActivateMail(ctx) {
        //  jsonData 由后端拿前端暂存的 session
        const data = ctx.session.user;
        var success = true;
        var message = 'activate email has been sent!';

        util.sendActivateMail(data.uuid, data.email);

        ctx.body = {
            success,
            message,
            data,
        };
    },
};
