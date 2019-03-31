'use strict';
/* eslint-disable */
const React = require('react');
const { connect } = require('react-redux');

const Navbar = require('/components/common-navbar');
const LoginModal = require('/components/common-login-modal');
const PaperFilter = require('/components/common-paper-filter');
const Paper = require('/components/paper');
const ReplyModal = require('/components/reply-modal');

const PaperFilterToggler = require('/components/ui-components/paper-filter/paper-filter-toggler');
/* eslint-disable */
class UI_PagePaper extends React.Component {
    render() {
        const paperId = this.props.params.paperId;

        return (
            <div className="page-paper" key={ this.props.current }>
                <Navbar/>
                <div className="page-section-body row">
                    <PaperFilterToggler/>
                    <PaperFilter/>
                    <Paper paperId={ paperId }/>
                </div>
                <LoginModal/>
                <ReplyModal/>
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
