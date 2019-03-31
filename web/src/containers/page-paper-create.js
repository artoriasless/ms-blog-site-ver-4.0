'use strict';
/* eslint-disable */
const React = require('react');
const { connect } = require('react-redux');

const Navbar = require('/components/common-navbar');
const LoginModal = require('/components/common-login-modal');
/* eslint-disable */
class UI_PagePaperCreate extends React.Component {
    render() {
        return (
            <div className="page-paper" key={ this.props.current }>
                <Navbar/>
                <div className="page-section-body">
                    新增文章页
                </div>
                <LoginModal/>
            </div>
        );
    }
}

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({});

const PagePaperCreate = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_PagePaperCreate);

module.exports = PagePaperCreate;
