'use strict';

const React = require('react');

class FilterContentTag extends React.Component {
    render() {
        const filterContent = this.props.filter || {};
        const filterCount = filterContent.count || [];
        const filterRows = filterContent.rows || [];

        return (
            <div className="filter-content">
                <dl className="filter-list tag">
                    <dt className="filter-list-title">Tags</dt>
                    {
                        filterRows.map((filterItem, index) => {
                            var key = `tagsFilterItem_${index}`;
                            var detailUrl = `/catalogue/tag/${filterItem.tag}`;
                            var filterItemVal = filterItem.tag;
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
                                        <span className="tag-val">
                                            { filterItemVal }
                                        </span>
                                        <span className="tag-count">
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

module.exports = FilterContentTag;
