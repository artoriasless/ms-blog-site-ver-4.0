'use strict';

const React = require('react');

class NavbarRightAdmin extends React.Component {
    render() {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarAdminDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Admin
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarAdminDropdown">
                    <a className="dropdown-item" href="/admin/add-paper">Add Paper</a>
                </div>
            </li>
        );
    }
}

module.exports = NavbarRightAdmin;
