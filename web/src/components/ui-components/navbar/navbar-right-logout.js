'use strict';

const React = require('react');

class LogoutLink extends React.Component {
    render() {
        return (
            <li className="nav-item">
                <a
                    className="nav-link logout-link"
                    href="javascript:;"
                    onClick = { () => this.props.logout() }
                >
                    Logout
                </a>
            </li>
        );
    }
}

module.exports = LogoutLink;
