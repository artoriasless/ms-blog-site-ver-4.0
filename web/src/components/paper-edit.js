'use strict';

const { connect } = require('react-redux');

const ajaxAction = require('/lib/common-ajax-action');
const stanAlert = require('/lib/common-stan-alert');

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
    ajaxAddPaper,
    ajaxUpdatePaper,
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

function ajaxAddPaper(jsonData) {
    const requestUrl = '/api/admin/paper/add';
    const successFunc = function(result) {
        if (result.success) {
            stanAlert({
                type: 'success',
                content: result.message,
                textAlign: 'center',
                shownExpires: 0.75,
            });

            setTimeout(function() {
                window.location.href = `/paper/${result.data.id}`;
            }, 2000);
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
    const options = {
        type: 'post',
    };

    ajaxAction(requestUrl, jsonData, successFunc, failFunc, options);
}

function ajaxUpdatePaper(jsonData) {
    const requestUrl = `/api/admin/paper/${jsonData.id}/update`;
    const successFunc = function(result) {
        if (result.success) {
            stanAlert({
                type: 'success',
                content: result.message,
                textAlign: 'center',
                shownExpires: 0.75,
            });

            setTimeout(function() {
                window.location.href = `/paper/${result.data.id}`;
            }, 1250);
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
    const options = {
        type: 'post',
    };

    ajaxAction(requestUrl, jsonData, successFunc, failFunc, options);
}

module.exports = PaperEdit;