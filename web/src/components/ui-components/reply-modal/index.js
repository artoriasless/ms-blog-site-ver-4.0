'use strict';
/* eslint-disable */
const React = require('react');

const Header = require('./reply-modal-header');
const Body = require('./reply-modal-body');
const Footer = require('./reply-modal-footer');
/* eslint-disable */
class ReplyModal extends React.Component {
    render() {
        return (
            <div
                id="replyModal"
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
                            updateReplyForm={ this.props.updateReplyForm }
                            cache={ this.props.cache }
                        />
                        <Footer
                            addReply={ this.props.addReply }
                            editReply={ this.props.editReply }
                            cache={ this.props.cache }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = ReplyModal;
