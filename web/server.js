'use strict';
/* global __dirname */
const path = require('path');

const config = require('../config');

const koaStatic = require('koa-static');
const koaBody = require('koa-bodyparser');
const Koa = require('koa');
const app = new Koa();

const router = require('./controller/_router');
const globalException = require('./middleware/global-exception');

app.use(koaStatic(path.resolve(__dirname, './public')))
    .use(koaBody())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(globalException);

app.listen(config.port);
