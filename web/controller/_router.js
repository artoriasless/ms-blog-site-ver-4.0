'use strict';

const Router = require('koa-router');
const _router = new Router();

const home = require('./home');

_router.get('/', home);

module.exports = _router;
