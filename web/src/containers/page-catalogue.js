'use strict';
/* eslint-disable */
const React = require('react');

const Navbar = require('/components/common-navbar');
const LoginModal = require('/components/common-login-modal');
const PaperFilter = require('/components/common-paper-filter');
const Catalogue = require('/components/common-catalogue');
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

class PaperFilterToggler extends React.Component {
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(evt) { //  eslint-disable-line
        console.info('toggle');
    }

    render() {
        return (
            <a
                id="paperFilterToggler"
                className="paper-filter-toggler"
                href="javascript:;"
                onClick={ event => this.clickHandler(event) }
            >
                <i className="fa fa-angle-right"></i>
            </a>
        );
    }
}

module.exports = PageCatalogue;
