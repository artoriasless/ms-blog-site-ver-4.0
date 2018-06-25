'use strict';
/* global $ */
const { connect } = require('react-redux');

const ajaxAction = require('/lib/common-ajax-action');
const stanAlert = require('/lib/common-stan-alert');

const UI_editInfoModal = require('/components/ui-components/edit-info-modal');
const actions = require('/actions');

const updateUserInfoFormAction = actions.updateUserInfoFormAction;
const updateUserInfoAction = actions.updateUserInfoAction;

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({   //  eslint-disable-line
    updateUserInfoForm: formData => dispatch(updateUserInfoFormAction(formData)),
    updateUserInfo: jsonData => dispatch(ajaxUpdateUserInfo(jsonData)),
});

const EditInfoModal = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_editInfoModal);

function ajaxUpdateUserInfo(jsonData) {
    return (dispatch => {
        const requestUrl = '/api/user/update';
        const successFunc = function(result) {
            if (result.success) {
                stanAlert({
                    type: 'success',
                    content: result.message,
                    textAlign: 'center',
                    shownExpires: 0.75,
                });

                $('#editInfoModal').modal('hide');
                dispatch(updateUserInfoAction(result.data));
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

module.exports = EditInfoModal;
