'use strict';

const { connect } = require('react-redux');

const UI_loginModal = require('../ui-components/login-modal');

const mapState2Props = (state, props) => ({ //  eslint-disable-line
    current: state.appReducer.current,
    data: state.appReducer.data,
});

const mapDispatch2Props = (dispatch, props) => {    //  eslint-disable-line
    return {};
};

const LoginModal = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_loginModal);

module.exports = LoginModal;
