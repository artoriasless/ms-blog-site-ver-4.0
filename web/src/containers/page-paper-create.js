'use strict';
/* eslint-disable */
const React = require('react');

const Navbar = require('/components/common-navbar');
const LoginModal = require('/components/common-login-modal');
/* eslint-disable */
class PagePaperCreate extends React.Component {
    render() {
        return (
            <div className="page-paper">
                <Navbar/>
                <div className="page-section-body">
                    新增文章页
                </div>
                <LoginModal/>
            </div>
        );
    }
}

module.exports = PagePaperCreate;
