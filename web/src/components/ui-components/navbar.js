'use strict';
/* eslint-disable */
const React = require('react');
const NavbarLeft = require('./navbar-left');
const NavbarRight = require('./navbar-right');
/* eslint-disable */

class Navbar extends React.Component {
    componentWillMount() {
        const initUserInfo = this.props.initUserInfo;

        initUserInfo();
    }

    render() {
        const userInfo = this.props.userInfo || {};

        return (
            <div className="page-section-header">
                <div className="page-section-header-container">
                    <NavbarLeft/>
                    <NavbarRight
                        userInfo={ userInfo }
                        logout={ this.props.logout }
                    />
                </div>
            </div>
        );
    }
}

module.exports = Navbar;
