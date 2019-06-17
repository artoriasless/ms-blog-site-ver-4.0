'use strict';

const { connect } = require('react-redux');

const ajaxAction = require('/lib/common-ajax-action');
const stanAlert = require('/lib/common-stan-alert');

const UI_uploadModal = require('/components/ui-components/upload-modal');

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({   //  eslint-disable-line
    uploadFile: jsonData => ajaxUploadFile(jsonData),
});

const EditInfoModal = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_uploadModal);

function ajaxUploadFile(jsonData) {
    const requestUrl = '/api/user/update-info';
    const successFunc = function(result) {
        if (result.success) {
            stanAlert({
                type: 'success',
                content: result.message,
                textAlign: 'center',
                shownExpires: 0.75,
            });
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

    ajaxAction(requestUrl, jsonData, successFunc, failFunc);
}

module.exports = EditInfoModal;
