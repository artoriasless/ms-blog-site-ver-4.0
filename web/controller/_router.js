'use strict';
/* global __dirname */
const fs = require('fs');
const path = require('path');

const Router = require('koa-router');
const _router = new Router();

const config = require('../../config');
const staticVersion = (config.env === 'production') ? `.${require('../src/package.json').version}.` : '.';
const staticServer = (config.env === 'production') ? config.ossPublic.static : '';

//  前端将使用 react ，网站采用 SPA 模式，固定模板页面，设定路由列表
const routeList = [
    '/',
    '/catalogue',
    '/catalogue/:filterType/:filterParam',
    '/paper/:paperId',
    '/user/:uuid',
    '/util/activate/:uuid',
    '/admin/add-paper',
    '/admin/edit-paper/:paperId',
];

async function page(ctx, next) {
    const adminReg = /^\/admin/;
    const reqUrl = ctx.request.url;
    const filePath = path.resolve(__dirname, '../template/index.html');
    var data = fs.readFileSync(filePath).toString();

    if (adminReg.test(reqUrl)) {
        const user = ctx.session.user || {};
        const isOwner = ctx.session.isOwner;

        if (!isOwner || !user.uuid) {
            ctx.status = 404;
            ctx.message = 'Not Found';

            await next();
        } else {
            data = data.replace(/<staticServer>/g, staticServer);
            ctx.body = data.replace(/<staticVersion>/g, staticVersion);
        }
    } else {
        data = data.replace(/<staticServer>/g, staticServer);
        ctx.body = data.replace(/<staticVersion>/g, staticVersion);
    }
}

routeList.forEach(routeLink => {
    _router.get(routeLink, page);
});

//  通用的工具接口
const util = require('./util');
//  用户相关的 api 接口
const api = require('./api');

/**
 *  Util
 */
_router.post('/util/upload-file', util.uploadFile);

/**
 *  User
 */
//  根据当前 session ，获取默认登录用户
_router.get('/api/user/default', api.user.getUserDefault);
//  退出登录
_router.post('/api/user/logout', api.user.logout);
//  登录
_router.post('/api/user/login', api.user.login);
//  注册
_router.post('/api/user/register', api.user.register);
//  激活
_router.post('/api/user/activate', api.user.activate);
//  修改信息
_router.post('/api/user/update-info', api.user.updateInfo);
//  修改密码
_router.post('/api/user/update-pwd', api.user.updatePwd);
//  重置密码
_router.post('/api/user/reset-pwd', api.user.resetPwd);
//  发送激活邮件
_router.post('/api/user/send-activate-mail', api.user.sendActivateMail);

/**
 *  Message
 */
_router.get('/api/message/page', api.message.page);

/**
 *  Paper
 */
_router.get('/api/paper/filter-count', api.paper.filterCount);
_router.get('/api/paper/:paperId', api.paper.findOne);

/**
 *  Reply
 */
_router.get('/api/reply', api.reply.findMany);
_router.post('/api/reply/create', api.reply.create);
_router.post('/api/reply/:replyId/update', api.reply.update);
_router.post('/api/reply/:replyId/delete', api.reply.delete);

/**
 *  Catalogue
 */
_router.get('/api/catalogue/page', api.catalogue.page);

/**
 *  Admin
 */
_router.post('/api/admin/paper/add', api.admin.addPaper);
_router.post('/api/admin/paper/:paperId/update', api.admin.updatePaper);

module.exports = _router;
