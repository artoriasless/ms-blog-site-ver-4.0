'use strict';

const md = require('markdown').markdown;

function markdown(markdownStr) {
    return md.toHTML(markdownStr);
}

module.exports = markdown;
