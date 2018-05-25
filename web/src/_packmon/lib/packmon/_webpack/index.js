'use strict';

const moment = require('moment');
const webpack = require('webpack');

const logger = require('../../util/logger');
const color = require('../../util/data-color');

function _webpack(env, packmonOptions) {
    const config = {
        entry: require('./webpack-process-entry')(env, packmonOptions),
        output: require('./webpack-process-output')(env, packmonOptions),
        module: require('./webpack-process-module')(env, packmonOptions),
        plugins: require('./webpack-process-plugins')(env, packmonOptions),
        resolve: require('./webpack-process-resolve')(env, packmonOptions),
        mode: env,
    };

    if (env === 'development') {
        config.devtool = false;
    } else {
        config.devtool = 'source-map';
    }

    webpack(config, (err, stats) => {
        if (err) {
            logger(color.title, '----- BUNDLE *.js ERROR -----');
            logger(color.error, err);
            logger(color.title, '-----------------');
        } else {
            const errors = stats.compilation.errors;
            if (Object.keys(errors).length > 0) {
                logger(color.title, '----- BUNDLE *.js ERROR -----');

                errors.forEach(error => {
                    error = error.toString();

                    const errorArr = error.split(':');
                    const getIndent = indentVal => {
                        let indentSpace = '';

                        for (let i = 0; i < indentVal; i++) {
                            indentSpace += '  ';
                        }

                        return indentSpace;
                    };

                    errorArr.forEach((lineInfo, lineIndex) => {
                        const indent = getIndent(lineIndex);

                        logger(color.error, `${indent}${lineInfo}`);
                    });
                });
            }

            const startDate = moment(stats.startTime).format('YYYY-MM-DD HH:mm:ss');
            const endDate = moment(stats.endTime).format('YYYY-MM-DD HH:mm:ss');
            const compileTime = (stats.endTime - stats.startTime) / 1000;

            logger(color.title, '----- BUNDLE *.js -----');
            logger(color.text, ` start time: ${startDate}`);
            logger(color.text, `   end time: ${endDate}`);
            logger(color.text, `bundle time: ${compileTime} s`);
        }

        logger(color.title, '----- FINISH BUNDLE *.js -----', color.reset, '\n');
    });
}

module.exports = _webpack;
