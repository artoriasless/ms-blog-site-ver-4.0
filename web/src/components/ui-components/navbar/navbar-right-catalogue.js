'use strict';

const React = require('react');

class NavbarRightCatalogue extends React.Component {
    render() {
        return (
            <li className="nav-item">
                <a className="nav-link" href="/catalogue">Catalogue</a>
            </li>
        );
    }
}

module.exports = NavbarRightCatalogue;
