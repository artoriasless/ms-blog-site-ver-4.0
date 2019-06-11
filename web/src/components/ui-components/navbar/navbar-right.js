'use strict';
/* eslint-disable */
const React = require('react');

const NavbarRightAdmin = require('./navbar-right-admin');
const NavbarRightCatalogue = require('./navbar-right-catalogue');
const NavbarRightUser = require('./navbar-right-user');
const NavbarRightLogout = require('./navbar-right-logout');
/* eslint-disable */
class NavbarRight extends React.Component {
    componentDidMount() {
        /* 组件初始化时，添加事件托管，点击非 navbar-collapse 的位置隐藏 navbar 下拉菜单 */
        $(document).on('click', '*', function() {
            if ($(this).closest('.navbar-collapse').length === 0) {
                $('.navbar-collapse').collapse('hide');
            }
        });
    }

    render() {
        const userInfo = this.props.userInfo;

        return (
            <nav className="navbar-right navbar navbar-expand-sm">
                <a
                    className="navbar-toggler btn"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </a>
                <div
                    id="navbarNavDropdown"
                    className="collapse navbar-collapse"
                >
                    <ul className="navbar-nav">
                        { (userInfo.isOwner && userInfo.uuid) ? <NavbarRightAdmin/> : null }
                        <NavbarRightCatalogue/>
                        <NavbarRightUser userInfo={ userInfo }/>
                        {
                            userInfo.id && userInfo.email && userInfo.password ? (
                                <NavbarRightLogout
                                    userInfo={ userInfo }
                                    logout={ this.props.logout }
                                />
                            ) : null
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}

module.exports = NavbarRight;
