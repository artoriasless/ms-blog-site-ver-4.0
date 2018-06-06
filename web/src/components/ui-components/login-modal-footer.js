'use strict';
/* global $ */
const React = require('react');

class LoginModalFooter extends React.Component {
    constructor() {
        super();
        this.submitValidate = this.submitValidate.bind(this);
        this.submitSignInUp = this.submitSignInUp.bind(this);
    }

    submitValidate(type, formData) {
        if (!formData.email) {
            return false;
        } else if (!formData.password) {
            return false;
        }
        //  如果是注册，需要再校验确认的模态框
        if (type === 'register') {
            if (!formData.passwordConfirm) {
                return false;
            } else if (formData.password !== formData.passwordConfirm) {
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
            if (this.submitValidate('login', cache.login)) {
                login(cache.login);
            }
        } else if (submitType === 'register') {
            if (this.submitValidate('register', cache.register)) {
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
