'use strict';

const React = require('react');

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

        console.info(paper);

        return (
            <div className="paper-container col-xs-12 col-md-8 col-lg-9">
                <div className="paper-content">
                    文章详情页
                </div>
            </div>
        );
    }
}

module.exports = Paper;
