'use strict';
/* global __dirname */
const fs = require('fs');
const path = require('path');

const Router = require('koa-router');
const _router = new Router();

const config = require('../../config');
const staticVersion = (config.env === 'production') ? `.${require('../src/package.json').version}.` : '.';

//  前端将使用 react ，网站采用 SPA 模式，固定模板页面，设定路由列表
const routeList = [
    '/',
    '/catalogue',
    '/catalogue/:filterType/:filterParam',
    '/paper/:paperId',
    '/paper/create',
    '/user/:uuid',
    '/util/activate/:uuid',
];

async function page(ctx) {
    const filePath = path.resolve(__dirname, '../template/index.html');
    const data = fs.readFileSync(filePath).toString();

    ctx.body = data.replace(/<staticVersion>/g, staticVersion);
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

/**
 *  Catalogue
 */
_router.get('/api/catalogue/page', api.catalogue.page);

module.exports = _router;
