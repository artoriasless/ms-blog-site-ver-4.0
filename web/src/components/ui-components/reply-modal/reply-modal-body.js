'use strict';
/* eslint-disable */
const React = require('react');

const ReplyForm = require('./reply-modal-form');
/* eslint-disable */
class ReplyModalBody extends React.Component {
    render() {
        return (
            <div className="modal-body">
                <ReplyForm
                    updateReplyForm={ this.props.updateReplyForm }
                    cache={ this.props.cache }
                />
            </div>
        );
    }
}

module.exports = ReplyModalBody;
