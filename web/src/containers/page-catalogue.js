'use strict';
/* eslint-disable */
const React = require('react');

const Navbar = require('/components/common-navbar');
const LoginModal = require('/components/common-login-modal');
/* eslint-disable */
class PageCatalogue extends React.Component {
    render() {
        const filterArr = [
            'latest', 'timeline', 'tag',
        ];
        var filterType = this.props.params.filterType;
        var filterParam = this.props.params.filterParam || '';

        filterType = (filterArr.indexOf(filterType) === -1) ? 'ALL' : filterType.toUpperCase();

        return (
            <div className="page-catalogue">
                <Navbar/>
                <div className="page-section-body">
                    目录页:{filterType},{filterParam}
                </div>
                <LoginModal/>
            </div>
        );
    }
}

module.exports = PageCatalogue;
