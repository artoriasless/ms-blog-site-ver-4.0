'use strict';

const webpack = require('webpack');

const config = require('./webpack.config');

webpack(config, (err) => {
    if (err) {
        console.info('----- ERROR -----');  //  eslint-disable-line
        console.info(err);  //  eslint-disable-line
        console.info('-----------------');  //  eslint-disable-line
    }

    return true;
});
