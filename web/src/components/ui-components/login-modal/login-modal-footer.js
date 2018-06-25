'use strict';
/* global $ */
const React = require('react');

const submitValidate = require('./util-submit-validate');

class LoginModalFooter extends React.Component {
    constructor() {
        super();
        this.submitSignInUp = this.submitSignInUp.bind(this);
    }

    submitSignInUp(evt) {   //  eslint-disable-line
        const register = this.props.register;
        const login = this.props.login;
        const cache = this.props.cache || {};

        const activeTabPane = $('#loginModal .tab-pane.active').attr('id');
        var submitType = (activeTabPane === 'content_login') ? 'login' : 'register';

        if (submitType === 'login') {
            if (submitValidate('login', cache.login || {})) {
                login(cache.login);
            }
        } else if (submitType === 'register') {
            if (submitValidate('register', cache.register || {})) {
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
