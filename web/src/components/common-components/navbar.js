'use strict';
/* eslint-disable */
const React = require('react');
const NavbarLeft = require('./navbar-left');
const NavbarRight = require('./navbar-right');

const hideMainScrollerbar = require('../../lib/common-hide-main-scrollerbar');
const initCompassIcon = require('../../lib/common-init-compass-icon');
const initNavbarBG = require('../../lib/common-init-navbar-bg');
/* eslint-disable */

class Navbar extends React.Component {
    componentDidMount() {
        hideMainScrollerbar();
        initCompassIcon();
        initNavbarBG();
    }

    render() {
        return (
            <div className="page-section-header">
                <div className="page-section-header-container">
                    <NavbarLeft/>
                    <NavbarRight/>
                </div>
            </div>
        );
    }
}

module.exports = Navbar;
