'use strict';
/* eslint-disable */
const React = require('react');
const { connect } = require('react-redux');

const Navbar = require('/components/common-navbar');
const LoginModal = require('/components/common-login-modal');

const PaperEdit = require('/components/paper-edit');
/* eslint-disable */
class UI_PagePaper extends React.Component {
    render() {
        const paperId = this.props.params.paperId || '';
        const pageType = paperId ? 'EDIT' : 'ADD';

        return (
            <div
                className="page-edit-paper"
                key={ this.props.current }
            >
                <Navbar/>
                <PaperEdit
                    paperId={ paperId }
                    pageType={ pageType }
                />
                <LoginModal/>
            </div>
        );
    }
}

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({});

const PagePaper = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_PagePaper);

module.exports = PagePaper;