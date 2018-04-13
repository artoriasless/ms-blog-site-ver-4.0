'use strict';
/* eslint-disable */
const React = require('react');
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
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <NavbarRightCatalogue/>
                        <NavbarRightUser userInfo = { userInfo }/>
                        <NavbarRightLogout userInfo = { userInfo }/>
                    </ul>
                </div>
            </nav>
        );
    }
}

module.exports = NavbarRight;
