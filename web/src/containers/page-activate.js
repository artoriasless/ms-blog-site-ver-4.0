'use strict';
/* eslint-disable */
const React = require('react');

const Navbar = require('/components/common-components/navbar');
const LoginModal = require('/components/common-components/login-modal');
const ActivateAccount = require('/components/activate-account');
/* eslint-disable */
class PageActivate extends React.Component {
    render() {
        return (
            <div className="page-activate">
                <Navbar/>
                <div className="page-section-body">
                    <ActivateAccount
                        uuid={ this.props.params.uuid }
                    />
                </div>
                <LoginModal/>
            </div>
        );
    }
}

module.exports = PageActivate;
