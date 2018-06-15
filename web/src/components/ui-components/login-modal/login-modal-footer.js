'use strict';
/* global $ */
const React = require('react');

const stanAlert = require('/lib/common-stan-alert');

class LoginModalFooter extends React.Component {
    constructor() {
        super();
        this.submitValidate = this.submitValidate.bind(this);
        this.submitSignInUp = this.submitSignInUp.bind(this);
    }

    submitValidate(type, formData) {
        const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        const pwdReg = /^\S{10,18}$/;
        const alertInfo = {
            title: 'Warning!',
            email: {
                null: 'please type the email address!',
                illegal: 'please type legal email address!',
            },
            password: {
                null: 'please type the password!',
                illegal: 'please type legal password!<br/>pwd length from 10 to 16.',
            },
            passwordConfirm: {
                null: 'please retype the password to check!',
                illegal: 'the password to confirm is inconsistent!'
            }
        };

        if (!formData.email) {
            stanAlert({
                title: alertInfo.title,
                content: alertInfo.email.null
            });

            return false;
        } else if (!emailReg.test(formData.email)) {
            stanAlert({
                title: alertInfo.title,
                content: alertInfo.email.illegal,
            });

            return false;
        } else if (!formData.password) {
            stanAlert({
                title: alertInfo.title,
                content: alertInfo.password.null,
            });

            return false;
        } else if (!pwdReg.test(formData.password)) {
            stanAlert({
                title: alertInfo.title,
                content: alertInfo.password.illegal,
            });

            return false;
        }
        //  如果是注册，需要再校验确认的模态框
        if (type === 'register') {
            if (!formData.passwordConfirm) {
                stanAlert({
                    title: alertInfo.title,
                    content: alertInfo.passwordConfirm.null,
                });

                return false;
            } else if (formData.password !== formData.passwordConfirm) {
                stanAlert({
                    title: alertInfo.title,
                    content: alertInfo.passwordConfirm.illegal,
                });

                return false;
            }
        }
        return true;
    }

    submitSignInUp(evt) {   //  eslint-disable-line
        const register = this.props.register;
        const login = this.props.login;
        const cache = this.props.cache || {};

        const activeTabPane = $('#loginModal .tab-pane.active').attr('id');
        var submitType = (activeTabPane === 'content_login') ? 'login' : 'register';

        if (submitType === 'login') {
            if (this.submitValidate('login', cache.login || {})) {
                login(cache.login);
            }
        } else if (submitType === 'register') {
            if (this.submitValidate('register', cache.register || {})) {
                register(cache.register);
            }
        }
    }

    render() {
        return (
            <div className="modal-footer">
                <a
                    className="btn btn-primary submit-btn"
                    onClick={ event => this.submitSignInUp(event) }
                >Submit</a>
            </div>
        );
    }
}

module.exports = LoginModalFooter;
