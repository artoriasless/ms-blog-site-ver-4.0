'use strict';

const uuid = require('uuid/v4');
const hash = require('object-hash');

const config = require('../../../config');
const service = require('../../../service');
const userService = service.user;

const util = require('./util');

module.exports = {
    async getUserDefault(ctx) {
        if (ctx.session.user === undefined || ctx.session.user.id === undefined) {
            ctx.session.user = {
                id: 0
            };
        }

        const loginUser = ctx.session.user;
        const user = await userService.findById(Number(loginUser.id)) || {};

        user.isOwner = Boolean(ctx.session.isOwner);
        ctx.session.user = user;
        ctx.body = {
            success: true,
            message: '',
            data: user,
        };
    },
    async logout(ctx) {
        ctx.session.user = {};
        ctx.session.isOwner = false;
        ctx.body = {
            success: true,
            message: 'logout success!',
            data: {},
        };
    },
    async login(ctx) {
        const jsonData = ctx.request.body;
        const query = {
            where: {
                email: jsonData.email,
            },
        };
        const users = await userService.findMany(query);
        var user = users[0] || {};
        var success = true;
        var message = 'login success!';
        var isOwner = false;

        if (!user.id && !user.email && !user.password) {
            success = false;
            message = 'login failed.please check that if the email is right!';
        } else {
            if (hash.sha1(jsonData.password) !== user.password) {
                user = {};
                success = false;
                message = 'login failed.please check that password is right!';
            }
            if (config.owners.indexOf(user.uuid) !== -1) {
                isOwner = true;
                user.isOwner = true;
            }
        }

        ctx.session.user = user;
        ctx.session.isOwner = isOwner;
        ctx.body = {
            success,
            message,
            data: user,
        };
    },
    async register(ctx) {
        const jsonData = ctx.request.body;
        const query = {
            where: {
                email: jsonData.email,
            },
        };
        const users = await userService.findMany(query);
        const userData = {
            uuid: uuid(),
            userName: `guest${Math.round(Math.random() * 100)}`,
            email: jsonData.email,
            password: hash.sha1(jsonData.password),
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
        const activatePageUrl = ctx.request.header.referer;
        const jsonData = ctx.request.body;
        const query = {
            where: {
                uuid: jsonData.uuid,
            },
        };
        const users = await userService.findMany(query);
        const userData = {
            isEnabled: 1,
        };
        const stamp = {
            url: (activatePageUrl.match(/\?stamp=(.+)$/) ? activatePageUrl.match(/\?stamp=(.+)$/)[1] : ''),
            calced: hash.sha1(jsonData.uuid),
        };
        var user;
        var success = true;
        var message = 'account has been activated!';

        if (users.length === 0 || stamp.url !== stamp.calced) {
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
        const jsonData = ctx.request.body;
        var user = ctx.session.user;
        var message = 'update success!';
        var success = true;

        jsonData.id = user.id;
        user = await userService.update(jsonData);

        ctx.session.user = user;
        ctx.body = {
            success,
            message,
            data: user,
        };
    },
    async updatePwd(ctx) {
        const jsonData = ctx.request.body;
        const originUser = ctx.session.user;
        var message = 'update success!';
        var success = true;
        var user = await userService.findById(originUser.id);

        if (user.password === hash.sha1(jsonData.original)) {
            user = await userService.update({
                id: user.id,
                password: hash.sha1(jsonData.modify),
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
        const jsonData = ctx.request.body;
        var query = {
            where: {
                email: jsonData.email || ctx.session.user.email,
            },
        };
        var message = 'new random pwd has been sent to your email!';
        var success = true;

        var users = await userService.findMany(query);

        if (users.length === 0) {
            message = 'the email hasn\'t been registered,please check the email is right!';
            success = false;
        } else {
            await userService.update({
                id: users[0].id,
                password: hash.sha1(String(newPwd)),
            });

            util.sendResetPwdMail(users[0].email, newPwd);
        }

        ctx.session.user = {};
        ctx.body = {
            success,
            message,
            data: {},
        };
    },
    async sendActivateMail(ctx) {
        //  jsonData 由后端拿前端暂存的 session
        const user = ctx.session.user;
        var success = true;
        var message = 'activate email has been sent!';

        util.sendActivateMail(user.uuid, user.email);

        ctx.body = {
            success,
            message,
            data: user,
        };
    },
};
