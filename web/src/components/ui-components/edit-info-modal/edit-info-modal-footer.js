'use strict';

const React = require('react');

const submitValidate = require('./util-submit-validate');

class EditInfoModalFooter extends React.Component {
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(evt) { //  eslint-disable-line
        const jsonData = this.props.cache.userInfo;

        if (submitValidate(jsonData)) {
            this.props.updateUserInfo(jsonData);
        }
    }

    render() {
        return (
            <div className="modal-footer">
                <a
                    className="btn btn-primary submit-btn"
                    onClick={ event => this.clickHandler(event) }
                >Submit</a>
            </div>
        );
    }
}

module.exports = EditInfoModalFooter;
