'use strict';
/* eslint-disable */
const React = require('react');
const { connect } = require('react-redux');

const Navbar = require('/components/common-navbar');
const LoginModal = require('/components/common-login-modal');

const EditInfoModal = require('/components/edit-info-modal');
const EditPwdModal = require('/components/edit-pwd-modal');
const UserCenter = require('/components/user-center');
/* eslint-disable */
class UI_PageUser extends React.Component {
    render() {
        return (
            <div className="page-user" key={ this.props.current }>
                <Navbar/>
                <div className="page-section-body">
                    <UserCenter/>
                </div>
                <LoginModal/>
                <EditInfoModal/>
                <EditPwdModal/>
            </div>
        );
    }
}

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({});

const PageUser = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_PageUser);

module.exports = PageUser;