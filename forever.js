'use strict';
/* global process */
const os = require('os');

const forever = require('forever-monitor');

const env = process.env.NODE_ENV || 'development';
const config = require('./config');

let max = 1;        //  affect the number of child process
let silent = false; //  affect whether show the console result in child process
const args = [
    `NODE_ENV=${env}`
];

if (env !== 'development' && env !== 'testing') {
    max = os.cpus().length;
    silent = true;
}

const child = new(forever.Monitor)('./web/server.js', {
    max,
    args,
    silent,
});

child.on('start', () => {
    console.info(`app has started,address: ${config.domain}`);// eslint-disable-line
});

child.on('exit', () => {
    console.info(`app has exited after ${max} restart(s)`);// eslint-disable-line
});

child.start();