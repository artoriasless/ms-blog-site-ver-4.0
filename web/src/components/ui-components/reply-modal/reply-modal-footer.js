'use strict';

const React = require('react');

const submitValidate = require('./util-submit-validate');

class ReplyModalFooter extends React.Component {
    constructor() {
        super();

        this.submitReply = this.submitReply.bind(this);
    }

    submitReply(evt) {  // eslint-disable-line
        const addReply = this.props.addReply;
        const editReply = this.props.editReply;
        const cache = this.props.cache || {};
        const reply = cache.reply || {};
        const type = reply.replyType;

        if (submitValidate(type, reply)) {
            if (type === 'ADD') {
                addReply(reply);
            } else if (type === 'EDIT') {
                editReply(reply);
            }
        }
    }

    render() {
        return (
            <div className="modal-footer">
                <a
                    className="btn btn-primary submit-btn"
                    onClick={ event => this.submitReply(event) }
                >Submit</a>
            </div>
        );
    }
}

module.exports = ReplyModalFooter;
