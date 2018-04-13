'use strict';
/* global __dirname */
const fs = require('fs');
const path = require('path');

const Router = require('koa-router');
const _router = new Router();

const staticVersion = require('../src/package.json').version;

//  前端将使用 react ，网站采用 SPA 模式，固定模板页面，设定路由列表
const routeList = [
    '/',
    '/catalogue'
];

async function page(ctx) {
    const filePath = path.resolve(__dirname, '../template/index.html');
    const data = fs.readFileSync(filePath).toString();

    ctx.body = data.replace(/<staticVersion>/g, staticVersion);
}

routeList.forEach(routeLink => {
    _router.get(routeLink, page);
});

//  用户相关的 api 接口
const api = require('./api');

//  根据当前 session ，获取默认登录用户
_router.get('/api/user/default', api.user.getUserDefault);

module.exports = _router;
