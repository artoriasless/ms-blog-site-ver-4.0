'use strict';
/* global process */
const packmonBuild = require('./lib/build');
const packmonWatcher = require('./lib/watcher');

const env = process.env.NODE_ENV || 'development';

packmonBuild();

if (env === 'development') {
    packmonWatcher();
}
