'use strict';

const { connect } = require('react-redux');

const ajaxAction = require('/lib/common-ajax-action');

const UI_paperReply = require('/components/ui-components/paper-reply');
const actions = require('/actions');

const getPaperReplyAction = actions.getPaperReplyAction;

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({   //  eslint-disable-line
    getPaperReply: jsonData => dispatch(ajaxGetPaperReply(jsonData)),
});

const PaperReply = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_paperReply);

function ajaxGetPaperReply(jsonData) {
    return (dispatch => {
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

        return ajaxAction(requestUrl, jsonData, successFunc, failFunc, options);
    });
}

module.exports = PaperReply;
