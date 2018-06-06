'use strict';

const React = require('react');
const reactDom = require('react-dom');

class LoginForm extends React.Component {
    constructor() {
        super();
        this.formChangeHandler = this.formChangeHandler.bind(this);
    }

    formChangeHandler(evt) {    //  eslint-disable-line
        const updateLoginForm = this.props.updateLoginForm;
        const $email = reactDom.findDOMNode(this.refs.login_email);
        const $pwd = reactDom.findDOMNode(this.refs.login_password);
        const formData = {
            email: $email.value,
            password: $pwd.value,
        };

        updateLoginForm(formData);
    }

    render() {
        return (
            <form id="loginForm">
                <div className="form-group">
                    <label
                        htmlFor="login_email"
                    >email</label>
                    <input
                        id="login_email"
                        className="form-control"
                        type="email"
                        placeholder="type your email"
                        ref="login_email"
                        onChange={ event => this.formChangeHandler(event) }
                    />
                </div>
                <div className="form-group">
                    <label
                        htmlFor="login_password"
                    >password</label>
                    <input
                        id="login_password"
                        className="form-control"
                        type="password"
                        placeholder="type your password"
                        ref="login_password"
                        onChange={ event => this.formChangeHandler(event) }
                    />
                </div>
            </form>
        );
    }
}

module.exports = LoginForm;
