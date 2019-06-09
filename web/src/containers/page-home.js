'use strict';
/* eslint-disable */
const React = require('react');
const { connect } = require('react-redux');

const Navbar = require('/components/common-navbar');
const LoginModal = require('/components/common-login-modal');
/* eslint-disable */
class UI_PageHome extends React.Component {
    render() {
        return (
            <div className="page-home" key={ this.props.current }>
                <Navbar/>
                <div className="page-section-body">
                    <div className="main">
                        <h1 className="main-title">MonkingStand</h1>
                        <h3 className="sub-title">thanks for visiting my blog,hope to code less,do more</h3>
                        <h4 className="refer-info">valar morghulis,valar dohaeris</h4>
                        <div className="quick-link-container">
                            <div className="quick-link-content">
                                <a target="_blank" href="https://github.com/MonkingStand" className="quick-link">
                                    <span className="link-img github-link"></span>
                                    view on Github
                                </a>
                            </div>
                            <div className="quick-link-content">
                                <a href="/catalogue" className="quick-link">
                                    <span className="link-img blog-link"></span>
                                    view blog
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <LoginModal/>
            </div>
        );
    }
}

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({});

const PageHome = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_PageHome);

module.exports = PageHome;