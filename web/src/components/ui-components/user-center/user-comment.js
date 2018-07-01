'use strict';
/* eslint-disable */
const React = require('react');

const ModulePager = require('/lib/module-pager');
/* eslint-disable */
class UserComment extends React.Component {
    componentWillMount() {
        this.props.getMessage({
            page: 1,
        });
    }

    render() {
        return (
            <div className="col-xs-12 col-md-8 user-comment">
                <div className="comment-title">My Messages</div>
                <CommentContent message={ this.props.message }/>
                <ModulePager
                    jumpHandler={ this.props.getMessage }
                    data={ this.props.message }
                />
            </div>
        );
    }
}

class CommentContent extends React.Component {
    render() {
        const msg = this.props.message || {};
        const msgCount = msg.count || 0;
        const msgArr = msg.rows || [];

        if (msgCount === 0) {
            return (
                <div className="comment-content empty">
                    message list is empty!
                </div>
            );
        } else {
            return (
                <div className="comment-content">
                    {
                        msgArr.map(msgItem => {
                            let msgItemClassArr = [
                                'message-item',
                            ];

                            if (!msgItem.isRead) {
                                msgItemClassArr.push('unread');
                            }
                            //  TODO，后续将区分消息类型
                            if (true) {
                                msgItemClassArr.push('paper-reply');
                            }

                            return (
                                <div
                                    key={ `message_item_${msgItem.id}` }
                                    className={ msgItemClassArr.join(' ') }
                                >
                                    <a
                                        href={ `/paper/${msgItem.paperId}` }
                                        target="_blank"
                                    >
                                        { msgItem.content }
                                    </a>
                                </div>
                            );
                        })
                    }
                </div>
            );
        }
    }
}

module.exports = UserComment;
