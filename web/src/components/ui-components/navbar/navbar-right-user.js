'use strict';

const React = require('react');
const reactDom = require('react-dom');

const config = require('/config');

class NavbarRightUser extends React.Component {
    render() {
        const userInfo = this.props.userInfo;

        return (
            <li className="nav-item">
                {
                    userInfo.id && userInfo.email && userInfo.password ?
                        <UserLink userInfo={ userInfo }/> :
                        <LoginLink/>
                }
            </li>
        );
    }
}

class LoginLink extends React.Component {   //  eslint-disable-line
    constructor() {
        super();

        this.showLoginModal = this.showLoginModal.bind(this);
    }

    showLoginModal() {
        $('.navbar-collapse').collapse('hide');
        $('#loginModal').modal();
        document.querySelector('#registerForm').reset();
        document.querySelector('#loginForm').reset();
    }

    render() {
        return (
            <a
                className="nav-link login-link"
                href="javascript:;"
                onClick = { () => this.showLoginModal() }
            >Guest,please login...</a>
        );
    }
}

class UserLink extends React.Component {    //  eslint-disable-line
    constructor() {
        super();

        this.errHandler = this.errHandler.bind(this);
    }

    errHandler(evt) {   //  eslint-disable-line
        const $userAvatar = reactDom.findDOMNode(this.refs.userAvatar);
        const defaultAvatarLink = `${config.ossPublic.user}/default.jpg?${Date.parse(new Date())}`;

        $userAvatar.setAttribute('src', defaultAvatarLink);
    }

    render() {
        const userInfo = this.props.userInfo;
        const userName = userInfo.userName;
        const avatarLink = `${config.ossPublic.user}/${userInfo.uuid}.jpg?${Date.parse(new Date())}`; //  eslint-disable-line
        const userNameClass = !userInfo.isEnabled ? 'user-name inactivated' : 'user-name';

        return (
            <a
                className="nav-link user-center-link"
                href={ `/user/${userInfo.uuid}` }
            >
                <img
                    className="user-avatar"
                    src={ avatarLink }
                    onError={ event => this.errHandler(event) }
                    ref="userAvatar"
                />
                <span className={ userNameClass }>{ userName }</span>
            </a>
        );
    }
}

module.exports = NavbarRightUser;
