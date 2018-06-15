'use strict';

const { connect } = require('react-redux');

const UI_userCenter = require('/components/ui-components/user-center');

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({   //  eslint-disable-line
});

const UserCenter = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_userCenter);

module.exports = UserCenter;
