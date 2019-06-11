'use strict';

const { connect } = require('react-redux');

const ajaxAction = require('/lib/common-ajax-action');

const UI_paperEdit = require('/components/ui-components/paper-edit');
const actions = require('/actions');

const getPaperAction = actions.getPaperAction;
const toggleEditPreviewAction = actions.toggleEditPreviewAction;
const updatePaperFormAction = actions.updatePaperFormAction;

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({   //  eslint-disable-line
    getPaper: jsonData => dispatch(ajaxGetPaper(jsonData)),
    toggleEditPreview: operateType => dispatch(toggleEditPreviewAction(operateType)),
    updatePaperForm: formData => dispatch(updatePaperFormAction(formData)),
});

const PaperEdit = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_paperEdit);

function ajaxGetPaper(jsonData) {
    return (dispatch => {
        const requestUrl = `/api/paper/${jsonData.paperId}`;
        const successFunc = function(result) {
            dispatch(getPaperAction(result.data));
            dispatch(updatePaperFormAction(result.data));
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

module.exports = PaperEdit;