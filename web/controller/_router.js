'use strict';
/* global __dirname */
const fs = require('fs');
const path = require('path');

const Router = require('koa-router');
const _router = new Router();

const api = require('./api');

const staticVersion = require('../src/package.json').version;

//  前端将使用 react ，网站采用 SPA 模式，固定模板页面
async function page(ctx) {
    const filePath = path.resolve(__dirname, '../template/index.html');
    const data = fs.readFileSync(filePath).toString();

    ctx.body = data.replace(/<staticVersion>/g, staticVersion);
}

_router.get('/', page);

//  用户相关的 api 接口
//  根据当前 session ，获取默认登录用户
_router.get('/api/user/default', api.user.getUserDefault);

module.exports = _router;
