'use strict';
/* global $ */
/* eslint-disable */
const React = require('react');

const Navbar = require('/components/common-navbar');
const LoginModal = require('/components/common-login-modal');
const PaperFilter = require('/components/common-paper-filter');
const Catalogue = require('/components/common-catalogue');

const PaperFilterToggler = require('/components/ui-components/paper-filter/paper-filter-toggler');
/* eslint-disable */
class PageCatalogue extends React.Component {
    render() {
        const filterArr = [
            'timeline', 'tag',
        ];
        var filterType = this.props.params.filterType;
        var filterParam = this.props.params.filterParam || '';

        filterType = (filterArr.indexOf(filterType) === -1) ? 'ALL' : filterType.toUpperCase();

        return (
            <div className="page-catalogue">
                <Navbar/>
                <div className="page-section-body row">
                    <PaperFilterToggler/>
                    <PaperFilter/>
                    <Catalogue
                        filterType={ filterType }
                        filterParam={ filterParam }
                    />
                </div>
                <LoginModal/>
            </div>
        );
    }
}

module.exports = PageCatalogue;
