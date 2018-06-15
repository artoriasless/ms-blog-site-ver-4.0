'use strict';
/* eslint-disable */
const React = require('react');

const Navbar = require('/components/common-navbar');
const LoginModal = require('/components/common-login-modal');
/* eslint-disable */
class PagePaper extends React.Component {
    render() {
        const paperId = this.props.params.paperId;

        return (
            <div className="page-paper">
                <Navbar/>
                <div className="page-section-body">
                    文章页:{paperId}
                </div>
                <LoginModal/>
            </div>
        );
    }
}

module.exports = PagePaper;
