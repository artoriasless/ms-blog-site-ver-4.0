'use strict';

const { connect } = require('react-redux');

const UI_editPwdModal = require('/components/ui-components/edit-pwd-modal');

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({   //  eslint-disable-line
});

const EditPwdModal = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_editPwdModal);

module.exports = EditPwdModal;
