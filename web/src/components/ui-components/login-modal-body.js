'use strict';

const React = require('react');
/* eslint-disable */
const LoginForm = require('./login-modal-login-form');
const RegisterForm = require('./login-modal-register-form');
/* eslint-disable */

class LoginModalBody extends React.Component {
    render() {
        return (
            <div className="modal-body">
                <ul
                    id="signIn_signUp_tab"
                    className="nav nav-tabs nav-justified"
                    role="tablist"
                >
                    <li className="nav-item">
                        <a
                            id="nav_signIn"
                            className = "nav-link active"
                            data-toggle="tab"
                            href="#content_signIn"
                            role="tab"
                            aria-controls="content_signIn"
                            aria-selected="true"
                        >
                            Sign In
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            id="nav_signUp"
                            className = "nav-link"
                            data-toggle="tab"
                            href="#content_signUp"
                            role="tab"
                            aria-controls="content_signUp"
                            aria-selected="true"
                        >
                            Sign Up
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div
                        id="content_signIn"
                        className = "tab-pane fade show active"
                        role="tabpanel"
                        aria-labelledby="content_signIn-tab"
                    >
                        <LoginForm/>
                    </div>
                    <div
                        id="content_signUp"
                        className = "tab-pane fade"
                        role="tabpanel"
                        aria-labelledby="content_signUp-tab"
                    >
                        <RegisterForm/>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = LoginModalBody;
