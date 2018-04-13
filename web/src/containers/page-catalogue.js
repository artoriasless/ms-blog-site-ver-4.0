'use strict';
/* eslint-disable */
const React = require('react');
const Navbar = require('../components/common-components/navbar');
const LoginModal = require('../components/common-components/login-modal');
/* eslint-disable */

class PageCatalogue extends React.Component {
    render() {
        return (
            <div className="page-catalogue">
                <Navbar/>
                <div
                    style={{
                        padding: '5px',
                        marginTop: 'calc(2.5rem + 1px)',
                    }}>
                    目录页
                </div>
                <LoginModal/>
            </div>
        );
    }
}

module.exports = PageCatalogue;
