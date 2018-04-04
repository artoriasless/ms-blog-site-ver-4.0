'use strict';
/* eslint-disable */
const React = require('react');
const NavbarLeft = require('./navbar-left');
const NavbarRight = require('./navbar-right');

const initNavbarBG = require('../../lib/common-init-navbar-bg');
/* eslint-disable */

class Navbar extends React.Component {
    componentDidMount() {
        initNavbarBG();
    }

    render() {
        return (
            <div className="page-section-header">
                <NavbarLeft/>
                <NavbarRight/>
            </div>
        );
    }
}

module.exports = Navbar;
