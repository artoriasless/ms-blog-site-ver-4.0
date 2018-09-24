'use strict';
/* eslint-disable */
const React = require('react');

const ResponsiveToggler = require('./responsive-toggler');
const FilterContentLatest = require('./filter-content-latest');
const FilterContentTag = require('./filter-content-tag');
const FilterContentTimeline = require('./filter-content-timeline');
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
        const filter = this.props.filter || {};

        return (
            <div className="filter-container col-xs-12 col-md-4 col-lg-3">
                <ResponsiveToggler/>
                <FilterContentLatest filter={ filter.latest }/>
                <FilterContentTag filter={ filter.tag }/>
                <FilterContentTimeline filter={ filter.timeline }/>
            </div>
        );
    }
}

module.exports = PaperFilter;
