'use strict';

const React = require('react');

class FilterContentTimeline extends React.Component {
    render() {
        const filterContent = this.props.filter || {};
        const filterCount = filterContent.count || [];
        const filterRows = filterContent.rows || [];

        return (
            <div className="filter-content">
                <dl className="filter-list timeline">
                    <dt className="filter-list-title">Timeline</dt>
                    {
                        filterRows.map((filterItem, index) => {
                            var key = `timelineFilterItem_${index}`;
                            var detailUrl = `/catalogue/timeline/${filterItem.yearTag}`;
                            var filterItemVal = filterItem.yearTag;
                            var filterItemCount = `(${filterCount[index].count})`;

                            return (
                                <dd
                                    className="filter-list-item"
                                    key={ key }
                                >
                                    <a
                                        className="item-link"
                                        href={ detailUrl }
                                    >
                                        <span className="timeline-val">
                                            { filterItemVal }
                                        </span>
                                        <span className="timeline-count">
                                            { filterItemCount }
                                        </span>
                                    </a>
                                </dd>
                            );
                        })
                    }
                </dl>
            </div>
        );
    }
}

module.exports = FilterContentTimeline;
