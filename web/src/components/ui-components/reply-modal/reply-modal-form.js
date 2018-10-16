'use strict';

const React = require('react');
const reactDom = require('react-dom');

class ReplyForm extends React.Component {
    constructor() {
        super();

        this.formChangeHandler = this.formChangeHandler.bind(this);
    }

    componentDidUpdate() {
        const cache = this.props.cache || {};
        const reply = cache.reply || {};
        const $replyInput = reactDom.findDOMNode(this.refs.content);

        $replyInput.value = reply.content || '';
    }

    formChangeHandler(evt) {    //  eslint-disable-line
        const updateReplyForm = this.props.updateReplyForm;
        const cache = this.props.cache || {};
        const formData = cache.reply || {};
        const $replyInput = reactDom.findDOMNode(this.refs.content);

        formData.content = $replyInput.value;

        updateReplyForm(formData);
    }

    render() {
        return (
            <form id="replyForm">
                <textarea
                    id="replyInput"
                    name="content"
                    ref="content"
                    placeholder="please type your comment here..."
                    onChange={ event => this.formChangeHandler(event) }
                ></textarea>
            </form>
        );
    }
}

module.exports = ReplyForm;
