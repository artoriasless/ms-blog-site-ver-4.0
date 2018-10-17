'use strict';

const { connect } = require('react-redux');

const ajaxAction = require('/lib/common-ajax-action');
const stanAlert = require('/lib/common-stan-alert');

const UI_paper = require('/components/ui-components/paper');
const actions = require('/actions');

const getPaperAction = actions.getPaperAction;
const resetReplyFormAction = actions.resetReplyFormAction;
const submitReplyAction = actions.submitReplyAction;
const getPaperReplyAction = actions.getPaperReplyAction;

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({   //  eslint-disable-line
    getPaper: jsonData => dispatch(ajaxGetPaper(jsonData)),
    resetReplyForm: formData => dispatch(resetReplyFormAction(formData)),
    deleteReply: jsonData => dispatch(ajaxDeleteReply(jsonData)),
});

const Paper = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_paper);

function ajaxGetPaper(jsonData) {
    return (dispatch => {
        const requestUrl = `/api/paper/${jsonData.paperId}`;
        const successFunc = function(result) {
            dispatch(getPaperAction(result.data));
        };
        const failFunc = function(err) {
            console.info(err);  //  eslint-disable-line
        };
        const options = {
            type: 'get',
        };

        return ajaxAction(requestUrl, jsonData, successFunc, failFunc, options);
    });
}

function ajaxDeleteReply(jsonData) {
    return (dispatch => {
        const requestUrl = `/api/reply/${jsonData.id}/delete`;
        const successFunc = function(result) {
            if (result.success) {
                dispatch(submitReplyAction());

                stanAlert({
                    type: 'success',
                    content: result.message,
                    textAlign: 'center',
                    shownExpires: 0.75,
                });

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

module.exports = Paper;
