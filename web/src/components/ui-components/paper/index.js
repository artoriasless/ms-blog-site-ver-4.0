'use strict';
/* global $ */
/* eslint-disable */
require('/plugins/img-viewer/js/index');

const React = require('react');

const PaperReply = require('/components/paper-reply');

const mdConvert = require('/lib/common-markdown');
/* eslint-disable */

class Paper extends React.Component {
    componentWillMount() {
        const paperId = this.props.paperId;
        const getPaper = this.props.getPaper;

        getPaper({
            paperId,
        });

        window.onresize = function() {
            const currentViewWidth = document.body.offsetWidth;

            if (currentViewWidth >= 767) {
                $('.filter-container').css('display', 'block');
            } else {
                $('.page-section-body').removeClass('filter-expand');
                $('.filter-container').css('display', 'none');
            }
        };
    }

    componentDidUpdate() {
        $('.paper-body img').each(function() {
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
        $('.paper-body img.default').magnify({
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
        const paper = this.props.paper;
        const userInfo = this.props.userInfo || {};

        if (paper && paper.title && paper.gmtCreate && paper.tag && paper.content) {
            const paperTitle = paper.title;
            const dateVal = paper.gmtCreate.slice(0, 10);
            const tagVal = `${paper.tag}${paper.subtag ? `，${paper.subtag}` : ''}`;
            const paperBody = mdConvert(paper.content);

            return (
                <div className="paper-container col-xs-12 col-md-8 col-lg-9">
                    <div className="paper-content">
                        <div className="paper-title">{ paperTitle }</div>
                        <div className="paper-subtitle">
                            <div className="subtitle-tags pull-right">
                                <i className="fa fa-tags"></i>
                                &nbsp;
                                <span className="tags-val">{ tagVal }</span>
                            </div>
                            <div className="subtitle-date pull-right">
                                <i className="fa fa-calendar"></i>
                                &nbsp;
                                <span className="date-val">{ dateVal }</span>
                            </div>
                        </div>
                        <hr/>
                        <div className="paper-body" dangerouslySetInnerHTML={{ __html: paperBody }}></div>
                        <hr/>
                        <PaperReply
                            paperId={ paper.id }
                            resetReplyForm={ this.props.resetReplyForm }
                            deleteReply={ this.props.deleteReply }
                            cache={ this.props.cache }
                        />
                    </div>
                    {
                        !userInfo.isOwner ? null : (
                            <a className="edit-paper-link" href={ `/admin/edit-paper/${paper.id}` }>
                                <i className="fa fa-edit"></i>
                            </a>
                        )
                    }
                </div>
            );
        } else {
            return null;
        }
    }
}

module.exports = Paper;
