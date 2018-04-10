'use strict';

const React = require('react');

class LoginModal extends React.Component {
    render() {
        return (
            <div
                id="loginModal"
                className="modal fade"
                tabIndex="-1"
                role="dialog"
            >
                <div
                    className="modal-dialog"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Sign in or Sign up
                            </h5>
                            <a
                                className="btn close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </div>
                        <div className="modal-body">
                            登录/注册模态框
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = LoginModal;
