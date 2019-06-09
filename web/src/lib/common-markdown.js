'use strict';

var md = require('markdown-it')();

function markdown(markdownStr) {
    return md.render(markdownStr);
}

module.exports = markdown;