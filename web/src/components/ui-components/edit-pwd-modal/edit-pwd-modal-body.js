'use strict';

const React = require('react');

class EditPwdModalBody extends React.Component {
    render() {
        return (
            <div className="modal-body">
                <EditPwdForm/>
            </div>
        );
    }
}

class EditPwdForm extends React.Component {    //  eslint-disable-line
    render() {
        return (
            <form id="editPwdForm">
                修改密码
            </form>
        );
    }
}

module.exports = EditPwdModalBody;
