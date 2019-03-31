'use strict';
/* eslint-disable */
const React = require('react');
const { connect } = require('react-redux');

const Navbar = require('/components/common-navbar');
const LoginModal = require('/components/common-login-modal');

const ActivateAccount = require('/components/activate-account');
/* eslint-disable */
class UI_PageActivate extends React.Component {
    render() {
        return (
            <div className="page-activate" key={ this.props.current }>
                <Navbar/>
                <div className="page-section-body">
                    <ActivateAccount
                        uuid={ this.props.params.uuid }
                    />
                </div>
                <LoginModal/>
            </div>
        );
    }
}

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({});

const PageActivate = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_PageActivate);

module.exports = PageActivate;
