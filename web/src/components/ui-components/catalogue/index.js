'use strict';
/* global $ */
/* eslint-disable */
const React = require('react');

const CatalogueList = require('./catalogue-list');
const CataloguePager = require('./catalogue-pager');

const getQueryParam = require('/lib/common-get-query-param');
/* eslint-disable */
class Catalogue extends React.Component {
    constructor() {
        super();

        this.pageJumpHandler = this.pageJumpHandler.bind(this);
    }

    componentWillMount() {
        const filterType = this.props.filterType;
        const filterParam = this.props.filterParam;
        const getCatalogue = this.props.getCatalogue;
        const page = (paramPage => {
            var _page = Number(paramPage);

            if (isNaN(_page) || _page < 1) {
                _page = 1;
            }

            return _page;
        })(getQueryParam('page'));

        getCatalogue({
            page,
            filterType,
            filterParam,
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

    pageJumpHandler(pageData) {
        const filterType = this.props.filterType;
        const filterParam = this.props.filterParam;
        const getCatalogue = this.props.getCatalogue;

        getCatalogue({
            page: pageData.page,
            filterType,
            filterParam,
        });
    }

    render() {
        const catalogue = this.props.catalogue || {};

        return (
            <div id="catalogue" className="catalogue-container col-xs-12 col-md-8 col-lg-9">
                <div className="catalogue-content">
                    <div className="catalogue-title">Catalogue</div>
                    <hr/>
                    <CatalogueList catalogue={ catalogue }/>
                    <CataloguePager catalogue={ catalogue }/>
                </div>
            </div>
        );
    }
}

module.exports = Catalogue;
