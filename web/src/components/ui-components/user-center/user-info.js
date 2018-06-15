'use strict';

const React = require('react');

class UserInfo extends React.Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-8 user-info">
                其他不可变的信息：注册邮箱、注册时间、注册 ip
            </div>
        );
    }
}

module.exports = UserInfo;
