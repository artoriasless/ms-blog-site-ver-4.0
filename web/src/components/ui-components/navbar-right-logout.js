'use strict';
const React = require('react');

class LogoutLink extends React.Component {
    constructor() {
        super();

        this.logout = this.logout.bind(this);
    }

    logout() {
        //  TO DELETE
        console.info('logout'); //  eslint-disable-line
    }

    render() {
        const userInfo = this.props.userInfo;

        if (userInfo.userName) {
            //  用户信息里存在用户名，表明当前用户已登录
            return (
                <li className="nav-item">
                    <a
                        className="nav-link logout-link"
                        href="javascript:;"
                        onClick = { () => this.logout() }
                    >
                        Logout
                    </a>
                </li>
            );
        } else {
            return null;
        }
    }
}

module.exports = LogoutLink;
