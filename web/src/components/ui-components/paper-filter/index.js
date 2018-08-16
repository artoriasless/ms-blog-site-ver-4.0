'use strict';
/* eslint-disable */
const React = require('react');
/* eslint-disable */
class PaperFilter extends React.Component {
    componentWillMount() {
        const getTagFilter = this.props.getTagFilter;
        const getTimelineFilter = this.props.getTimelineFilter;
        const getLatestFilter = this.props.getLatestFilter;

        getTagFilter({ filterType: 'tag' });
        getTimelineFilter({ filterType: 'timeline' });
        getLatestFilter({ filterType: 'latest' });
    }

    render() {
        const userInfo = this.props.userInfo || {};

        return null;
    }
}

module.exports = PaperFilter;
