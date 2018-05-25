'use strict';

const gulp = require('gulp');

const tasks = require('./tasks');

function _gulp(env, packmonConfig) {
    const taskName = tasks.init(env, packmonConfig);

    gulp.start(taskName);
}

module.exports = _gulp;
