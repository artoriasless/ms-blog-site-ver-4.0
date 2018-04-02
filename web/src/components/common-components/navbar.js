'use strict';
/* eslint-disable */
const React = require('react');
const NavbarLeft = require('./navbar-left');
/* eslint-disable */

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <NavbarLeft/>
            </div>
        );
    }
}

module.exports = Navbar;
