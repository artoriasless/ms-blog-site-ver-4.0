'use strict';

const React = require('react');

class LoginModalFooter extends React.Component {
    render() {
        return (
            <div className="modal-footer">
                <a className="btn btn-primary submit-btn">Submit</a>
            </div>
        );
    }
}

module.exports = LoginModalFooter;
