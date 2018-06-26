'use strict';
/* global $ */
const { connect } = require('react-redux');

const ajaxAction = require('/lib/common-ajax-action');
const stanAlert = require('/lib/common-stan-alert');

const UI_editPwdModal = require('/components/ui-components/edit-pwd-modal');
const actions = require('/actions');

const updatePwdFormAction = actions.updatePwdFormAction;
const updatePwdAction = actions.updatePwdAction;

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({   //  eslint-disable-line
    updatePwdForm: formData => dispatch(updatePwdFormAction(formData)),
    updatePwd: jsonData => dispatch(ajaxUpdatePwd(jsonData)),
});

const EditPwdModal = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_editPwdModal);

function ajaxUpdatePwd(jsonData) {
    return (dispatch => {
        const requestUrl = '/api/user/update-pwd';
        const successFunc = function(result) {
            if (result.success) {
                stanAlert({
                    type: 'success',
                    content: result.message,
                    textAlign: 'center',
                    shownExpires: 0.75,
                });

                $('#editPwdModal').modal('hide');
                dispatch(updatePwdAction(result.data));
            } else {
                stanAlert({
                    title: 'Warning!',
                    content: result.message,
                });
            }
        };
        const failFunc = function(err) {
            stanAlert({
                title: 'Warning!',
                content: err.toString(),
            });
            console.info(err);  //  eslint-disable-line
        };

        return ajaxAction(requestUrl, jsonData, successFunc, failFunc);
    });
}

module.exports = EditPwdModal;
