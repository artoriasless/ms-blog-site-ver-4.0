'use strict';
/* eslint-disable */
const React = require('react');
const NavbarRightCatalogue = require('./navbar-right-catalogue');
const NavbarRightUser = require('./navbar-right-user');
const NavbarRightLogout = require('./navbar-right-logout');
/* eslint-disable */

class NavbarRight extends React.Component {
    render() {
        const userInfo = this.props.userInfo;

        return (
            <nav className="navbar-right navbar navbar-expand-sm">
                <a
                    className="navbar-toggler btn"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <NavbarRightCatalogue/>
                        <NavbarRightUser userInfo = { userInfo }/>
                        <NavbarRightLogout userInfo = { userInfo }/>
                    </ul>
                </div>
            </nav>
        );
    }
}

module.exports = NavbarRight;
