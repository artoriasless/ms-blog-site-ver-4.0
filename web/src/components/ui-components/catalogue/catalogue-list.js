'use strict';
/* eslint-disable */
const React = require('react');
/* eslint-disable */
class CatalogueItem extends React.Component {
    render() {
        const userInfo = this.props.userInfo;
        const catalogue = this.props.catalogue;
        const detailUrl = `/paper/${catalogue.id}`;
        const catalogueItemTitle = catalogue.title;
        const catalogueItemBrief = catalogue.brief;
        const dateVal = catalogue.gmtCreate.slice(0, 10);
        const tagVal = `${catalogue.tag}${catalogue.subtag ? `，${catalogue.subtag}` : ''}`;

        return (
            <div className="catalogue-item">
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
                {
                    !userInfo.isOwner ? null : (
                        <a className="edit-paper-link" href={ `/admin/edit-paper/${catalogue.id}` }>
                            <i className="fa fa-edit"></i>
                        </a>
                    )
                }
            </div>
        );
    }
}

class CatalogueList extends React.Component {
    render() {
        const userInfo = this.props.userInfo || {};
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
                        catalogueList.map(item => {
                            const key = `catalogueItem_${item.id}`;

                            return (
                                <CatalogueItem
                                    catalogue={ item }
                                    userInfo={ userInfo }
                                    key={ key }
                                />
                            );
                        })
                    }
                </div>
            );
        }
    }
}

module.exports = CatalogueList;
