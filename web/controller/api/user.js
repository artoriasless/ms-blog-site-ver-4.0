'use strict';
/* global __dirname */
const fs = require('fs');
const path = require('path');

const uuid = require('uuid/v4');
const hash = require('object-hash');

const config = require('../../../config');
const service = require('../../../service');
const userService = service.user;
const utilService = service.util;

function sendActivateMail(uuid, email) {
    const activateLink = `${config.domain}/util/activate/${uuid}`;
    const emailTpl = fs.readFileSync(path.resolve(__dirname, '../../template/activate-email.tpl')).toString();
    const emailOpts = {
        to: email,
        subject: 'Activate Your MonkingStand Account',
        text: 'activate your monkingstand account to comment',
        html: emailTpl.replace(/<activateLink>/g, activateLink),
    };

    utilService.email(emailOpts);
}

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

            sendActivateMail(user.uuid, user.email);
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
    async sendActivateMail(ctx) {
        //  jsonData 由后端拿前端暂存的 session
        const data = ctx.session.user;
        var success = true;
        var message = 'activate email has been sent!';

        sendActivateMail(data.uuid, data.email);

        ctx.body = {
            success,
            message,
            data,
        };
    },
};
