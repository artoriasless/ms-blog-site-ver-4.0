'use strict';
/* global process */
const fs = require('fs');

const env = process.env.NODE_ENV || 'development';
const rootPath = process.cwd();
const pkg = JSON.parse(fs.readFileSync(`${rootPath}/package.json`).toString());
const packmon = require('./packmon');
const getOpts = require('./util/get-packmon-opts');

function build() {
    const opts = getOpts(pkg);

    packmon.startBundle();
    packmon.build(env, opts);
}

module.exports = build;
