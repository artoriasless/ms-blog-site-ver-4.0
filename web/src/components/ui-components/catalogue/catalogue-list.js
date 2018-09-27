'use strict';
/* eslint-disable */
const React = require('react');
/* eslint-disable */
class CatalogueList extends React.Component {
    render() {
        const catalogue = this.props.catalogue || {};
        const catalogueList = catalogue.rows || [];

        if (catalogueList.length === 0) {
            return (
                <div className="no-item-tips">
                    catalogue list is empty
                    <br/>
                    please check the url is right
                </div>
            );
        } else {
            return (
                <div className="catalogue-list">
                    {
                        catalogueList.map((item, idx) => {
                            const key = `catalogueItem_${idx}`;
                            const detailUrl = `/paper/${item.id}`;
                            const catalogueItemTitle = item.title;
                            const catalogueItemBrief = item.brief;
                            const dateVal = item.gmtCreate.slice(0, 10);
                            const tagVal = `${item.tag}${item.subtag ? `，${item.subtag}` : ''}`;

                            return (
                                <div
                                    key={ key }
                                    className="catalogue-item"
                                >
                                    <a
                                        title={ catalogueItemTitle }
                                        href={ detailUrl }
                                        className="catalogue-item-title"
                                    >
                                        { catalogueItemTitle }
                                    </a>
                                    <div className="catalogue-item-subtitle">
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
                                    <p className="catalogue-item-brief">
                                        { catalogueItemBrief }
                                    </p>
                                </div>
                            );
                        })
                    }
                </div>
            );
        }
    }
}

module.exports = CatalogueList;
