'use strict';
/* global $ */
const React = require('react');

const mdConvert = require('/lib/common-markdown');

class Paper extends React.Component {
    componentWillMount() {
        const paperId = this.props.paperId;
        const getPaper = this.props.getPaper;

        getPaper({
            paperId,
        });
    }

    render() {
        const paper = this.props.paper;

        if (paper) {
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
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

module.exports = Paper;
