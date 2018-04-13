'use strict';
/* eslint-disable */
const React = require('react');
const Navbar = require('../components/common-components/navbar');
const LoginModal = require('../components/common-components/login-modal');
/* eslint-disable */

class PageHome extends React.Component {
    render() {
        return (
            <div className="page-home">
                <Navbar/>
                <div className="page-section-body">
                    首页
                </div>
                <LoginModal/>
            </div>
        );
    }
}

module.exports = PageHome;
