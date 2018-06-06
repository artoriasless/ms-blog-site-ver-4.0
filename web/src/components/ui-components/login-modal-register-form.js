'use strict';

const React = require('react');
const reactDom = require('react-dom');

class RegisterForm extends React.Component {
    constructor() {
        super();
        this.formChangeHandler = this.formChangeHandler.bind(this);
    }

    formChangeHandler(evt) {    //  eslint-disable-line
        const updateRegisterForm = this.props.updateRegisterForm;
        const $email = reactDom.findDOMNode(this.refs.register_email);
        const $pwd = reactDom.findDOMNode(this.refs.register_password);
        const $pwdConfirm = reactDom.findDOMNode(this.refs.register_passwordConfirm);
        const formData = {
            email: $email.value,
            password: $pwd.value,
            passwordConfirm: $pwdConfirm.value,
        };

        updateRegisterForm(formData);
    }

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
                        ref="register_email"
                        onChange={ event => this.formChangeHandler(event) }
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
                        ref="register_password"
                        onChange={ event => this.formChangeHandler(event) }
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
                        ref="register_passwordConfirm"
                        onChange={ event => this.formChangeHandler(event) }
                    />
                </div>
            </form>
        );
    }
}

module.exports = RegisterForm;
