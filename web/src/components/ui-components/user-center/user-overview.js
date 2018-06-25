'use strict';
/* global $ */
const React = require('react');
const reactDom = require('react-dom');

const config = require('/config');

const resetInfoForm = require('../edit-info-modal/util-reset-info-form');

class UserOverview extends React.Component {
    render() {
        return (
            <div className="col-xs-12 col-md-4 user-overview">
                <div className="overview-container">
                    <AvatarContainer userInfo={ this.props.userInfo }/>
                    <InfoContainer
                        userInfo={ this.props.userInfo }
                        sendActivateMail={ this.props.sendActivateMail }
                    />
                </div>
                <OperateContainer
                    userInfo={ this.props.userInfo }
                    updateUserInfoForm={ this.props.updateUserInfoForm }
                />
            </div>
        );
    }
}

class AvatarContainer extends React.Component { //  eslint-disable-line
    constructor() {
        super();
        this.errHandler = this.errHandler.bind(this);
    }

    errHandler(evt) {   //  eslint-disable-line
        const $userAvatar = reactDom.findDOMNode(this.refs.userAvatar);
        const defaultAvatarLink = `${config.ossPublic.user}/default.jpg?${Date.parse(new Date())}`;

        $userAvatar.setAttribute('src', defaultAvatarLink);
    }

    componentDidUpdate() {
        const userInfo = this.props.userInfo || {};
        const $userAvatar = reactDom.findDOMNode(this.refs.userAvatar);
        const avatarLink = `${config.ossPublic.user}/${userInfo.uuid}.jpg?${Date.parse(new Date())}`;

        $userAvatar.setAttribute('src', avatarLink);
    }

    render() {
        const defaultAvatarLink = `${config.ossPublic.user}/default.jpg?${Date.parse(new Date())}`;

        return (
            <div className="avatar-container">
                <img
                    className="avatar-content"
                    src={ defaultAvatarLink }
                    onError={ event => this.errHandler(event) }
                    ref="userAvatar"
                />
            </div>
        );
    }
}

class InfoContainer extends React.Component {   //  eslint-disable-line
    render() {
        const genderMap = [
            'mars',
            'venus',
            'transgender',
        ];
        const userInfo = this.props.userInfo || {};
        const genderClass = `user-gender fa fa-${genderMap[userInfo.gender || 0]}`;

        return (
            <div className="info-container">
                <div className="user-name">
                    <i
                        className={ genderClass }
                    ></i>
                    { userInfo.userName }
                </div>
                <AccountActive
                    userInfo={ this.props.userInfo }
                    sendActivateMail={ this.props.sendActivateMail }
                />
            </div>
        );
    }
}

class AccountActive extends React.Component {   //  eslint-disable-line
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(evt) { //  eslint-disable-line
        const sendActivateMail = this.props.sendActivateMail;

        sendActivateMail();
    }

    render() {
        const userInfo = this.props.userInfo || {};

        if (userInfo.isEnabled) {
            return (
                <div className="account-activated">
                    <span
                        className="activated-tips activated"
                    >Activated</span>
                </div>
            );
        } else {
            return (
                <div className="account-activated">
                    <span
                        className="activated-tips inactivated"
                    >Inactivated</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                        className="send-activate-mail-link"
                        href="javascript:;"
                        onClick={ event => this.clickHandler(event) }
                    >send activate email</a>
                </div>
            );
        }
    }
}

class OperateContainer extends React.Component {    //  eslint-disable-line
    constructor() {
        super();
        this.editInfo = this.editInfo.bind(this);
        this.editPwd = this.editPwd.bind(this);
        this.resetPwd = this.resetPwd.bind(this);
    }

    editInfo(evt) { //  eslint-disable-line
        const userInfo = this.props.userInfo || {};

        resetInfoForm(userInfo);
        $('#editInfoModal').modal();
        this.props.updateUserInfoForm({
            userName: userInfo.userName,
            gender: userInfo.gender,
        });
    }

    editPwd(evt) {  //  eslint-disable-line
        $('#editPwdModal').modal();
    }

    resetPwd(evt) { //  eslint-disable-line
        console.info('reset pwd');
    }

    render() {
        return (
            <div className="operate-container">
                <a
                    className="operate-link"
                    onClick={ event => this.editInfo(event) }
                >Edit Info</a>
                &nbsp;|&nbsp;
                <a
                    className="operate-link"
                    onClick={ event => this.editPwd(event) }
                >Edit Pwd</a>
                &nbsp;|&nbsp;
                <a
                    className="operate-link"
                    onClick={ event => this.resetPwd(event) }
                >Reset Pwd</a>
            </div>
        );
    }
}

module.exports = UserOverview;
