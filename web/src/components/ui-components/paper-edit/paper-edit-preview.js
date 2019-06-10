'use strict';
/* global $ */
/* eslint-disable */
require('/plugins/img-viewer/js/index');

const React = require('react');

const mdConvert = require('/lib/common-markdown');
/* eslint-disable */

class PaperEditPreview extends React.Component {
    render() {
        return (
            <div className="preview-container col-xs-12 col-md-6">
                <div className="preview-content">
                    文章内容预览区域
                </div>
            </div>
        );
    }
}

module.exports = PaperEditPreview;