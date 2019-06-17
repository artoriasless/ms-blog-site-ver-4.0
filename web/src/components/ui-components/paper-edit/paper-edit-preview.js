'use strict';
/* global $ */
/* eslint-disable */
require('/plugins/img-viewer/js/index');

const React = require('react');

const mdConvert = require('/lib/common-markdown');
/* eslint-disable */

class PaperEditPreview extends React.Component {
    componentDidUpdate() {
        $('.preview-paper img').each(function() {
            const typeReg = /\?type=/;
            const imgSrc = $(this).prop('src');
            const imgAlt = $(this).prop('alt');

            $(this).attr({
                'data-src': imgSrc,
                'data-caption': imgAlt,
            });

            if (!typeReg.test(imgSrc)) {
                $(this).addClass('default');
            } else {
                $(this).addClass(imgSrc.split(typeReg)[1] || '');
            }
        });
        $('.preview-paper img.default').magnify({
            title: true,
            headToolbar: [
                'close'
            ],
            footToolbar: [
                'zoomIn',
                'zoomOut',
                'actualSize',
                'rotateRight'
            ],
            initMaximized: true,
            zIndex: 999999,
        });
    }

    render() {
        const paper = this.props.cache.paper || {};
        const paperBody = mdConvert(paper.content || '');

        return (
            <div className="preview-container col-xs-12 col-md-6">
                <div className="preview-content">
                    <div className="preview-paper" dangerouslySetInnerHTML={{ __html: paperBody }}></div>
                </div>
            </div>
        );
    }
}

module.exports = PaperEditPreview;