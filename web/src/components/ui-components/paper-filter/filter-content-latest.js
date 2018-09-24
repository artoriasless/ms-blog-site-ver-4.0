'use strict';

const React = require('react');

class FilterContentLatest extends React.Component {
    render() {
        const filterContent = this.props.filter || {};
        const filterRows = filterContent.rows || [];

        return (
            <div className="filter-content">
                <dl className="filter-list latest">
                    <dt className="filter-list-title">Latest</dt>
                    {
                        filterRows.map((filterItem, index) => {
                            var key = `latestFilterItem_${index}`;
                            var no = `${index + 1}.`;
                            var detailUrl = `/paper/${filterItem.id}`;
                            var filterItemVal = filterItem.title;

                            return (
                                <dd
                                    className="filter-list-item"
                                    key={ key }
                                >
                                    <a
                                        title={filterItemVal}
                                        className="item-link"
                                        href={ detailUrl }
                                    >
                                        { no }{ filterItemVal }
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

module.exports = FilterContentLatest;
