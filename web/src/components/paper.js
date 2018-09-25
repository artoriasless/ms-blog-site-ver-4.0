'use strict';

const { connect } = require('react-redux');

const ajaxAction = require('/lib/common-ajax-action');

const UI_paper = require('/components/ui-components/paper');
const actions = require('/actions');

const getPaperAction = actions.getPaperAction;

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({   //  eslint-disable-line
    getPaper: jsonData => dispatch(ajaxGetPaper(jsonData)),
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

module.exports = Paper;
