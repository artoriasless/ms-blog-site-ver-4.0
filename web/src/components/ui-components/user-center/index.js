'use strict';
/* eslint-disable */
const React = require('react');

const stanAlert = require('/lib/common-stan-alert');

const UserOverview = require('./user-overview');
const UserInfo = require('./user-info');
const UserAd = require('./user-ad');
const UserComment = require('./user-comment');
/* eslint-disable */
class UserCenter extends React.Component {
    constructor() {
        super();

        this.redirectHandler = this.redirectHandler.bind(this);
    }

    componentDidUpdate() {
        const isLogin = this.props.cache ? this.props.cache.isLogin : false;

        this.redirectHandler(isLogin);
    }

    redirectHandler(isLogin) {
        if (!isLogin) {
            //  退出登录了，重新跳转至首页
            stanAlert({
                type: 'success',
                content: 'please login,ready to home page...',
                textAlign: 'center',
                shownExpires: 1,
            });
            //  1s 后跳转到首页
            setTimeout(() => {
                location.href='/';
            }, 1000);
        }
    }

    render() {
        return (
            <div className="user-center row no-gutters">
                <UserOverview/>
                <UserInfo/>
                <UserAd/>
                <UserComment/>
            </div>
        );
    }
}

module.exports = UserCenter;
