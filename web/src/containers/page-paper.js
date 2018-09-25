'use strict';
/* eslint-disable */
const React = require('react');

const Navbar = require('/components/common-navbar');
const LoginModal = require('/components/common-login-modal');
const PaperFilter = require('/components/common-paper-filter');
const Paper = require('/components/paper');

const PaperFilterToggler = require('/components/ui-components/paper-filter/paper-filter-toggler');
/* eslint-disable */
class PagePaper extends React.Component {
    render() {
        const paperId = this.props.params.paperId;

        return (
            <div className="page-paper">
                <Navbar/>
                <div className="page-section-body row">
                    <PaperFilterToggler/>
                    <PaperFilter/>
                    <Paper paperId={ paperId }/>
                </div>
                <LoginModal/>
            </div>
        );
    }
}

module.exports = PagePaper;
