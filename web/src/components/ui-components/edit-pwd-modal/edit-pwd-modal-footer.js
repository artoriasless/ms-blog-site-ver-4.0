'use strict';

const React = require('react');

const submitValidate = require('./util-submit-validate');

class EditPwdModalFooter extends React.Component {
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(evt) { //  eslint-disable-line
        const cache = this.props.cache || {};

        if (submitValidate(cache.pwd || {})) {
            this.props.updatePwd(cache.pwd);
        }
    }

    render() {
        return (
            <div className="modal-footer">
                <a
                    onClick={ event => this.clickHandler(event) }
                    className="btn btn-primary submit-btn"
                >Submit</a>
            </div>
        );
    }
}

module.exports = EditPwdModalFooter;
