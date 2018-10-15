'use strict';

const React = require('react');

class PaperReply extends React.Component {
    componentWillMount() {
        const paperId = this.props.paperId;
        const getPaperReply = this.props.getPaperReply;

        getPaperReply({
            paperId,
        });
    }

    render() {
        const paperId = this.props.paperId;
        const userInfo = this.props.userInfo || {};
        const reply = this.props.reply || {
            paperId,
            replyList: [],
        };
        const replyId2IdxMap = {};

        reply.replyList.map((replyItem, index) => {
            replyItem.editTag = (replyItem.userInfo.uuid === userInfo.uuid) && !replyItem.isDeleted;

            replyId2IdxMap[replyItem.id] = index;

            return replyItem;
        });

        if (reply.replyList.length === 0) {
            return (
                <dl className="reply-container">
                    <dt className="reply-title">Comments</dt>
                    <dd className="no-reply-tips">no comment now, be the first to reply</dd>
                </dl>
            );
        } else {
            return (
                <dl className="reply-container">
                    <dt className="reply-title">Comments</dt>
                    {
                        reply.replyList.map((replyItem, index) => {
                            const key = `replyItem_${index}`;
                            const avatarSrc = `https://monkingstand.oss-cn-beijing.aliyuncs.com/user/default.jpg?${Date.parse(new Date())}`;
                            const userName = replyItem.userInfo.userName;
                            const replyContent = replyItem.content;
                            const replyDate = replyItem.replyDate;
                            const replyToTag = replyItem.replyLevel !== 0;
                            const replyTo = replyItem.replyLevel === 0 ? '' : reply.replyList[replyId2IdxMap[replyItem.id]].userInfo.userName;

                            const ownerTag = replyItem.userInfo.uuid === userInfo.uuid && userInfo.uuid !== undefined;
                            const canDeleteTag = ownerTag && replyItem.isDeleted === 0;
                            const canEditTag = canDeleteTag;

                            return (
                                <dd
                                    className={ `reply-item reply-level-${replyItem.replyLevel}` }
                                    key={ key }
                                    data-id={ replyItem.id }
                                    data-level={ replyItem.replyLevel }
                                >
                                    <div className="user-info">
                                        <div className="user-avatar">
                                            <img className="avatar-img" src={ avatarSrc }/>
                                        </div>
                                        <div className="user-name">
                                            { userName }
                                            <i className={ replyToTag ? 'fa fa-share' : '' }></i>
                                            { replyTo }
                                        </div>
                                    </div>
                                    <div className="reply-content">{ replyContent }</div>
                                    <div className="reply-addition">
                                        <div className="reply-date pull-left">{ replyDate }</div>
                                        <div className="reply-operate-container pull-right">
                                            {
                                                !canDeleteTag ? null : (
                                                    <a className="reply-operate delete" href="javascript:;">
                                                        <i className="fa fa-times"></i>
                                                    </a>
                                                )
                                            }
                                            {
                                                !canEditTag ? null : (
                                                    <a className="reply-operate edit" href="javascript:;">
                                                        <i className="fa fa-edit"></i>
                                                    </a>
                                                )
                                            }
                                            <a className="reply-operate reply" href="javascript:;">
                                                <i className="fa fa-share"></i>
                                            </a>
                                        </div>
                                    </div>
                                </dd>
                            );
                        })
                    }
                </dl>
            );
        }


    }
}

module.exports = PaperReply;
