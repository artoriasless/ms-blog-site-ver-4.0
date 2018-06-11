'use strict';
/* eslint-disable */
const React = require('react');

const Navbar = require('/components/common-components/navbar');
const LoginModal = require('/components/common-components/login-modal');
/* eslint-disable */
class PageUser extends React.Component {
    render() {
        return (
            <div className="page-user">
                <Navbar/>
                <div className="page-section-body">
                    个人中心
                </div>
                <LoginModal/>
            </div>
        );
    }
}

module.exports = PageUser;
