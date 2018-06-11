'use strict';
/* global $ */
const React = require('react');

class NavbarRightUser extends React.Component {
    constructor() {
        super();

        this.showLoginModal = this.showLoginModal.bind(this);
    }

    showLoginModal() {
        $('.navbar-collapse').collapse('hide');
        $('#loginModal').modal();
    }

    render() {
        const userInfo = this.props.userInfo;
        const userName = userInfo.userName || 'Guest,please login...';
        const hrefLink = userInfo.userName ? `/user/${userInfo.uuid}` : 'javascript:;';
        const domClass = userInfo.userName ? 'nav-link user-center-link' : 'nav-link login-link';
        const actived = !userInfo.isEnabled;

        return (
            <li className="nav-item">
                <a
                    className = {domClass}
                    href = { hrefLink }
                    onClick = { () => this.showLoginModal() }
                >
                    { userName }
                    {
                        userInfo.id && userInfo.email && userInfo.password ? (
                            actived ? (
                                <span className="inactived-tips">&nbsp;(inactived)</span>
                            ) : null
                        ) : null
                    }
                </a>
            </li>
        );
    }
}

module.exports = NavbarRightUser;
