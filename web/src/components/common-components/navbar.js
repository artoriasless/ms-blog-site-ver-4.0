'use strict';
/* global $ */
const { connect } = require('react-redux');

const UI_navbar = require('../ui-components/navbar');
const actions = require('../../actions');

const getUserDefaultAction = actions.getUserDefaultAction;

const mapState2Props = (state, props) => ({ //  eslint-disable-line
    current: state.appReducer.current,
    data: state.appReducer.data,
});

const mapDispatch2Props = (dispatch, props) => {    //  eslint-disable-line
    const ajaxInitUserInfo = () => (dispatch) => {
        const requestUrl = '/api/user/default';

        return (
            $.get(requestUrl, function(data) {
                dispatch(getUserDefaultAction(data));
            })
        );
    };

    return ({
        initUserInfo: () => dispatch(ajaxInitUserInfo()),
    });
};

const Navbar = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_navbar);

module.exports = Navbar;
