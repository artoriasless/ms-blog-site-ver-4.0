'use strict';
/* eslint-disable */
const React = require('react');

const Navbar = require('/components/common-navbar');
const LoginModal = require('/components/common-login-modal');

const EditInfoModal = require('/components/edit-info-modal');
const EditPwdModal = require('/components/edit-pwd-modal');
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
                <EditInfoModal/>
                <EditPwdModal/>
            </div>
        );
    }
}

module.exports = PageUser;
