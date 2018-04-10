'use strict';
/* eslint-disable */
const React = require('react');
const Navbar = require('../components/common-components/navbar');
const LoginModal = require('../components/common-components/login-modal');

const hideMainScrollerbar = require('../lib/common-hide-main-scrollerbar');
const initCompassIcon = require('../lib/common-init-compass-icon');
const initNavbarBG = require('../lib/common-init-navbar-bg');
/* eslint-disable */

class PageHome extends React.Component {
    componentDidMount() {
        hideMainScrollerbar();
        initCompassIcon();
        initNavbarBG();
    }

    render() {
        return (
            <div className="page-home">
                <Navbar/>
                <div
                    style={{
                        padding: '5px',
                        marginTop: 'calc(2.5rem + 1px)',
                    }}>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn<br/>
                </div>

                <LoginModal/>
            </div>
        );
    }
}

module.exports = PageHome;
