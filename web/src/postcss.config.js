'use strict';

module.exports = {
    plugins: [
        require('postcss-conditionals')(),
        require('postcss-simple-vars')(),
        require('postcss-each')(),
        require('postcss-for')(),
        require('postcss-mixins')(),
        require('postcss-import')(),
        require('postcss-nested')(),
        require('postcss-atroot')(),
        require('postcss-cssnext')({
            features: {
                rem: false
            }
        }),
        require('postcss-extend')()
    ]
};
