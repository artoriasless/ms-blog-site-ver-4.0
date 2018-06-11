'use strict';
/* global __dirname */
const path = require('path');

const config = require('../config');

const koaStatic = require('koa-static-cache');
const koaBody = require('koa-bodyparser');
const koaSession = require('koa-session');
const koaLogger = require('koa-logger');
const Koa = require('koa');
const app = new Koa();

const koaLoggerTransporter = require('./lib/koa-logger-transporter');

const router = require('./controller/_router');
const globalException = require('./middleware/global-exception');

const maxage = (config.env === 'development') ? 0 : 365 * 24 * 60 * 60;

app.keys = config.sessionKeys;

app.use(koaSession(config.session, app))
    .use(koaStatic(path.resolve(__dirname, './public'), {
        maxage,
    }))
    .use(koaBody())
    .use(koaLogger({transporter: koaLoggerTransporter}))
    .use(router.routes())
    .use(router.allowedMethods())
    .use(globalException);

app.listen(config.port);
