'use strict';
/* eslint-disable */
const React = require('react');

const Header = require('./edit-info-modal-header');
const Body = require('./edit-info-modal-body');
const Footer = require('./edit-info-modal-footer');
/* eslint-disable */
class EditInfoModal extends React.Component {
    render() {
        return (
            <div
                id="editInfoModal"
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
                        <Body
                            userInfo={ this.props.userInfo }
                            updateUserInfoForm={ this.props.updateUserInfoForm }
                        />
                        <Footer
                            cache={ this.props.cache }
                            updateUserInfo={ this.props.updateUserInfo }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = EditInfoModal;
