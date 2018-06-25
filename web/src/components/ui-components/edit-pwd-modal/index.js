'use strict';
/* eslint-disable */
const React = require('react');

const Header = require('./edit-pwd-modal-header');
const Body = require('./edit-pwd-modal-body');
const Footer = require('./edit-pwd-modal-footer');
/* eslint-disable */
class EditPwdModal extends React.Component {
    render() {
        return (
            <div
                id="editPwdModal"
                className="common-modal modal fade"
                tabIndex="-1"
                role="dialog"
            >
                <div
                    className="modal-dialog"
                    role="document"
                >
                    <div className="modal-content">
                        <Header/>
                        <Body/>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = EditPwdModal;
