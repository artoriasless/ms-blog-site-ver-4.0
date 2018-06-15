'use strict';
/* eslint-disable */
const React = require('react');

const Navbar = require('/components/common-navbar');
const LoginModal = require('/components/common-login-modal');

const UserCenter = require('/components/user-center');
/* eslint-disable */
class PageUser extends React.Component {
    render() {
        return (
            <div className="page-user">
                <Navbar/>
                <div className="page-section-body">
                    <UserCenter/>
                </div>
                <LoginModal/>
            </div>
        );
    }
}

module.exports = PageUser;
