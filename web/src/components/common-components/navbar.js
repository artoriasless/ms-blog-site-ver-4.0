'use strict';
/* eslint-disable */
const React = require('react');
const NavbarLeft = require('./navbar-left');
const NavbarRight = require('./navbar-right');
/* eslint-disable */

class Navbar extends React.Component {
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
