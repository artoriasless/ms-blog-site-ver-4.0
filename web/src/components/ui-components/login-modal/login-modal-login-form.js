'use strict';

const React = require('react');
const reactDom = require('react-dom');

const resetPwdValidate = require('./util-reset-pwd-validate');
const submitValidate = require('./util-submit-validate');

class LoginForm extends React.Component {
    constructor() {
        super();
        this.resetPwdHandler = this.resetPwdHandler.bind(this);
        this.formChangeHandler = this.formChangeHandler.bind(this);
        this.enterLoginHandler = this.enterLoginHandler.bind(this);
    }

    resetPwdHandler(evt) {  //  eslint-disable-line
        const email = reactDom.findDOMNode(this.refs.login_email).value.trim();

        if (resetPwdValidate(email)) {
            this.props.resetPwd({
                email,
            });
        }
    }

    formChangeHandler(evt) {    //  eslint-disable-line
        const updateLoginForm = this.props.updateLoginForm;
        const $email = reactDom.findDOMNode(this.refs.login_email);
        const $pwd = reactDom.findDOMNode(this.refs.login_password);
        const formData = {
            email: $email.value.trim(),
            password: $pwd.value.trim(),
        };
        $email.value = formData.email;
        $pwd.value = formData.password;

        updateLoginForm(formData);
    }

    enterLoginHandler(evt) {
        const enterTag = evt.keyCode === 13;
        const login = this.props.login;
        const cache = this.props.cache || {};

        if (enterTag) {
            if (submitValidate('login', cache.login || {})) {
                login(cache.login);
            }
        }
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
                    <div>
                        <label
                            htmlFor="login_password"
                        >password</label>
                        <a
                            className="reset-pwd-link"
                            href="javascript:;"
                            onClick={ event => this.resetPwdHandler(event) }
                        >forget pwd?</a>
                    </div>
                    <input
                        id="login_password"
                        className="form-control"
                        type="password"
                        placeholder="type your password"
                        ref="login_password"
                        onChange={ event => this.formChangeHandler(event) }
                        onKeyDown={ event => this.enterLoginHandler(event) }
                    />
                </div>
            </form>
        );
    }
}

module.exports = LoginForm;
