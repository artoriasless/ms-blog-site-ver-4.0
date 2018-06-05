'use strict';

const React = require('react');

class LoginForm extends React.Component {
    render() {
        return (
            <form id="loginForm">
                <div className="form-group">
                    <label
                        for="login_email"
                    >email</label>
                    <input
                        id="login_email"
                        className="form-control"
                        type="email"
                        placeholder="type your email"
                    />
                </div>
                <div className="form-group">
                    <label
                        for="login_password"
                    >password</label>
                    <input
                        id="login_password"
                        className="form-control"
                        type="password"
                        placeholder="type your password"
                    />
                </div>
            </form>
        );
    }
}

module.exports = LoginForm;
