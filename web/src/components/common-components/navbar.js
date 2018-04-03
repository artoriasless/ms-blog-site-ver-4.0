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
                <NavbarLeft/>
                <NavbarRight/>
            </div>
        );
    }
}

module.exports = Navbar;
