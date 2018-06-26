'use strict';

const React = require('react');
const reactDom = require('react-dom');

class EditPwdModalBody extends React.Component {
    render() {
        return (
            <div className="modal-body">
                <EditPwdForm updatePwdForm={ this.props.updatePwdForm }/>
            </div>
        );
    }
}

class EditPwdForm extends React.Component {    //  eslint-disable-line
    constructor() {
        super();
        this.formChangeHandler = this.formChangeHandler.bind(this);
    }

    formChangeHandler(evt) {    //  eslint-disable-line
        const original = reactDom.findDOMNode(this.refs.editPwd_original).value.trim();
        const modify = reactDom.findDOMNode(this.refs.editPwd_new).value.trim();
        const confirm = reactDom.findDOMNode(this.refs.editPwd_confirm).value.trim();

        this.props.updatePwdForm({
            original,
            modify,
            confirm,
        });
    }

    render() {
        return (
            <form id="editPwdForm">
                <div className="form-group">
                    <label
                        htmlFor="editPwd_original"
                    >original password</label>
                    <input
                        id="editPwd_original"
                        className="form-control"
                        type="password"
                        placeholder="type your original pwd"
                        ref="editPwd_original"
                        onChange={ event => this.formChangeHandler(event) }
                    />
                </div>
                <div className="form-group">
                    <label
                        htmlFor="editPwd_new"
                    >original password</label>
                    <input
                        id="editPwd_new"
                        className="form-control"
                        type="password"
                        placeholder="type your new pwd"
                        ref="editPwd_new"
                        onChange={ event => this.formChangeHandler(event) }
                    />
                </div>
                <div className="form-group">
                    <label
                        htmlFor="editPwd_confirm"
                    >original password</label>
                    <input
                        id="editPwd_confirm"
                        className="form-control"
                        type="password"
                        placeholder="confirm your new pwd"
                        ref="editPwd_confirm"
                        onChange={ event => this.formChangeHandler(event) }
                    />
                </div>
            </form>
        );
    }
}

module.exports = EditPwdModalBody;
