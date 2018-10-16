'use strict';
/* global $ */
const { connect } = require('react-redux');

const ajaxAction = require('/lib/common-ajax-action');
const stanAlert = require('/lib/common-stan-alert');

const UI_replyModal = require('/components/ui-components/reply-modal');
const actions = require('/actions');

const updateReplyFormAction = actions.updateReplyFormAction;
const submitReplyAction = actions.submitReplyAction;
const getPaperReplyAction = actions.getPaperReplyAction;

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({   //  eslint-disable-line
    updateReplyForm: formData => dispatch(updateReplyFormAction(formData)),
    addReply: jsonData => dispatch(ajaxAddReply(jsonData)),
    editReply: jsonData => dispatch(ajaxEditReply(jsonData)),
});

const ReplyModal = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_replyModal);

function ajaxAddReply(jsonData) {
    return (dispatch => {
        const requestUrl = '/api/reply/create';
        const successFunc = function(result) {
            if (result.success) {
                $('#replyModal').modal('hide');
                dispatch(submitReplyAction());

                // 评论添加成功后，更新评论列表
                updatePaperReply({
                    paperId: jsonData.paperId
                }, dispatch);
            } else {
                stanAlert({
                    title: 'Warning!',
                    content: result.message,
                });
            }
        };
        const failFunc = function(err) {
            console.info(err);  //  eslint-disable-line
        };

        return ajaxAction(requestUrl, jsonData, successFunc, failFunc);
    });
}

function ajaxEditReply(jsonData) {
    return (dispatch => {
        const requestUrl = `/api/reply/${jsonData.id}/update`;
        const successFunc = function(result) {
            if (result.success) {
                $('#replyModal').modal('hide');
                dispatch(submitReplyAction());

                // 评论添加成功后，更新评论列表
                updatePaperReply({
                    paperId: jsonData.paperId
                }, dispatch);
            } else {
                stanAlert({
                    title: 'Warning!',
                    content: result.message,
                });
            }
        };
        const failFunc = function(err) {
            console.info(err);  //  eslint-disable-line
        };

        return ajaxAction(requestUrl, jsonData, successFunc, failFunc);
    });
}

function updatePaperReply(jsonData, dispatch) {
    const requestUrl = '/api/reply';
    const successFunc = function(result) {
        if (result.success) {
            dispatch(getPaperReplyAction({
                paperId: jsonData.paperId,
                replyList: result.data,
            }));
        }
    };
    const failFunc = function(err) {
        console.info(err);  //  eslint-disable-line
    };
    const options = {
        type: 'get',
    };

    ajaxAction(requestUrl, jsonData, successFunc, failFunc, options);
}

module.exports = ReplyModal;
