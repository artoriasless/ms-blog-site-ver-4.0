'use strict';

const React = require('react');

class UserComment extends React.Component {
    render() {
        return (
            <div className="col-xs-12 col-md-8 user-comment">
                用户发表过的评论
            </div>
        );
    }
}

module.exports = UserComment;
