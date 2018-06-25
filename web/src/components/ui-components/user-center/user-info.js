'use strict';

const React = require('react');

class UserInfo extends React.Component {
    render() {
        const userInfo = this.props.userInfo || {};

        return (
            <div className="col-xs-12 col-md-8 user-info">
                <div className="user-info-item">
                    <div className="user-info-title">Register Mail</div>
                    <div className="user-info-content">{ userInfo.email }</div>
                </div>
                <div className="user-info-item">
                    <div className="user-info-title">Register Date</div>
                    <div className="user-info-content">{ userInfo.gmtCreate }</div>
                </div>
                <div className="user-info-item">
                    <div className="user-info-title">Register Ip</div>
                    <div className="user-info-content">{ userInfo.registerIp }</div>
                </div>
            </div>
        );
    }
}

module.exports = UserInfo;
