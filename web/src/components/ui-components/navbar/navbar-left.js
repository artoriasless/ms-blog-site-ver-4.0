'use strict';

const React = require('react');

class NavbarLeft extends React.Component {
    render() {
        return (
            <div className="navbar-left logo-container">
                <a href="/" className="logo"></a>
            </div>
        );
    }
}

module.exports = NavbarLeft;
