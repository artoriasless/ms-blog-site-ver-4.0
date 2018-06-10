'use strict';

const uuid = require('uuid/v4');
const hash = require('object-hash');

const service = require('../../../service');
const userService = service.user;

module.exports = {
    async getUserDefault(ctx) {
        const loginUser = ctx.session.user || {};
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
            gender: 1,
            isEnabled: 0,
            registerIp: ctx.request.ip.match(/\d+\.\d+\.\d+\.\d+/)[0],
        };
        var user = {};
        var success = true;
        var message = 'rigister success!';

        if (users.length > 0) {
            success = false;
            message = 'the email that submited has been registered!';
        } else {
            user = await userService.create(userData);
        }

        ctx.session.user = user;
        ctx.body = {
            success,
            message,
            data: user,
        };
    }
};
