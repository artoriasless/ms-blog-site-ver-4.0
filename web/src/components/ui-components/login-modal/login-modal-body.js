'use strict';
/* eslint-disable */
const React = require('react');

const LoginForm = require('./login-modal-login-form');
const RegisterForm = require('./login-modal-register-form');

require('/plugins/switch-button/js/index.js');
/* eslint-disable */
class LoginModalBody extends React.Component {
    render() {
        return (
            <div className="modal-body">
                <SwitchButton/>
                <ul id="sign_in_up_tab" className="nav">
                    <li className="active">
                        <a
                            id="loginTabLink"
                            href="#content_login"
                            data-toggle="tab"
                        ></a>
                    </li>
                    <li>
                        <a
                            id="registerTabLink"
                            href="#content_register"
                            data-toggle="tab"
                        ></a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div
                        id="content_login"
                        className = "tab-pane fade show active"
                        role="tabpanel"
                    >
                        <LoginForm
                            updateLoginForm={ this.props.updateLoginForm }
                            login={ this.props.login }
                            resetPwd={ this.props.resetPwd }
                            cache={ this.props.cache }
                        />
                    </div>
                    <div
                        id="content_register"
                        className = "tab-pane fade"
                        role="tabpanel"
                    >
                        <RegisterForm
                            updateRegisterForm={ this.props.updateRegisterForm }
                            register={ this.props.register }
                            cache={ this.props.cache }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

class SwitchButton extends React.Component {
    componentDidMount() {
        $('#switchBtn')
            .bootstrapToggle({
                on      : "Login",
                onstyle : "default",
                off     : "Register",
                offstyle: "default",
            })
            .change(function() {
                var checked = $(this).prop('checked');
                var tabLink = checked ? 'loginTabLink' : 'registerTabLink';

                $(`#sign_in_up_tab #${tabLink}`).tab('show');
            });
    }

    render() {
        return (
            <div id="switch_In_Up_container">
                <input
                    id="switchBtn"
                    checked="true"
                    readOnly="false"
                    type="checkbox"
                />
            </div>
        );
    }
}

module.exports = LoginModalBody;
