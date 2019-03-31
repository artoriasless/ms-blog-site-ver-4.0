'use strict';
/* global $ */
/* eslint-disable */
const React = require('react');
const { connect } = require('react-redux');

const Navbar = require('/components/common-navbar');
const LoginModal = require('/components/common-login-modal');
const PaperFilter = require('/components/common-paper-filter');
const Catalogue = require('/components/common-catalogue');

const PaperFilterToggler = require('/components/ui-components/paper-filter/paper-filter-toggler');
/* eslint-disable */
class UI_PageCatalogue extends React.Component {
    render() {
        const filterArr = [
            'timeline', 'tag',
        ];
        var filterType = this.props.params.filterType;
        var filterParam = this.props.params.filterParam || '';

        filterType = (filterArr.indexOf(filterType) === -1) ? 'ALL' : filterType.toUpperCase();

        return (
            <div className="page-catalogue" key={ this.props.current }>
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

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({});

const PageCatalogue = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_PageCatalogue);

module.exports = PageCatalogue;
