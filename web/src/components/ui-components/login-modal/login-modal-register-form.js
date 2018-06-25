'use strict';

const React = require('react');
const reactDom = require('react-dom');

const submitValidate = require('./util-submit-validate');

class RegisterForm extends React.Component {
    constructor() {
        super();
        this.formChangeHandler = this.formChangeHandler.bind(this);
        this.enterLoginHandler = this.enterLoginHandler.bind(this);
    }

    formChangeHandler(evt) {    //  eslint-disable-line
        const updateRegisterForm = this.props.updateRegisterForm;
        const $email = reactDom.findDOMNode(this.refs.register_email);
        const $pwd = reactDom.findDOMNode(this.refs.register_password);
        const $pwdConfirm = reactDom.findDOMNode(this.refs.register_passwordConfirm);
        const formData = {
            email: $email.value.trim(),
            password: $pwd.value.trim(),
            passwordConfirm: $pwdConfirm.value.trim(),
        };
        $email.value = formData.email;
        $pwd.value = formData.password;
        $pwdConfirm.value = formData.passwordConfirm;

        updateRegisterForm(formData);
    }

    enterLoginHandler(evt) {
        const enterTag = evt.keyCode === 13;
        const register = this.props.register;
        const cache = this.props.cache || {};


        if (enterTag) {
            if (submitValidate('register', cache.register || {})) {
                register(cache.register);
            }
        }
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
                        onKeyDown={ event => this.enterLoginHandler(event) }
                    />
                </div>
            </form>
        );
    }
}

module.exports = RegisterForm;
