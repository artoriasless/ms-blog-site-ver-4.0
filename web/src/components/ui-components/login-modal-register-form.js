'use strict';

const React = require('react');

class RegisterForm extends React.Component {
    render() {
        return (
            <form id="registerForm">
                <div className="form-group">
                    <label
                        htmlFor="register_email"
                    >email</label>
                    <input
                        id="register_email"
                        className="form-control"
                        type="email"
                        placeholder="type your email"
                    />
                </div>
                <div className="form-group">
                    <label
                        htmlFor="register_password"
                    >password</label>
                    <input
                        id="register_password"
                        className="form-control"
                        type="password"
                        placeholder="type your password"
                    />
                </div>
                <div className="form-group">
                    <label
                        htmlFor="register_passwordConfirm"
                    >password</label>
                    <input
                        id="register_passwordConfirm"
                        className="form-control"
                        type="password"
                        placeholder="confirm your password"
                    />
                </div>
            </form>
        );
    }
}

module.exports = RegisterForm;
