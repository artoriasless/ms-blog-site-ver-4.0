'use strict';
/* eslint-disable */
const React = require('react');

const Navbar = require('/components/common-components/navbar');
const LoginModal = require('/components/common-components/login-modal');
/* eslint-disable */
class PageActivate extends React.Component {
    render() {
        return (
            <div className="page-activate">
                <Navbar/>
                <div className="page-section-body">
                    激活账号
                </div>
                <LoginModal/>
            </div>
        );
    }
}

module.exports = PageActivate;
