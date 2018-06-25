'use strict';
/* eslint-disable */
const React = require('react');

const Header = require('./login-modal-header');
const Body = require('./login-modal-body');
const Footer = require('./login-modal-footer');
/* eslint-disable */
class LoginModal extends React.Component {
    render() {
        return (
            <div
                id="loginModal"
                className="modal fade"
                tabIndex="-1"
                role="dialog"
            >
                <div
                    className="modal-dialog"
                    role="document"
                >
                    <div className="modal-content">
                        <Header/>
                        <Body
                            updateRegisterForm={ this.props.updateRegisterForm }
                            updateLoginForm={ this.props.updateLoginForm }
                            login={ this.props.login }
                            register={ this.props.register }
                            cache={ this.props.cache }
                        />
                        <Footer
                            register={ this.props.register }
                            login={ this.props.login }
                            cache={ this.props.cache }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = LoginModal;
