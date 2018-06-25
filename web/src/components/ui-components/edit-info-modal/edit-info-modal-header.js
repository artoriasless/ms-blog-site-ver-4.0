'use strict';

const React = require('react');

class EditInfoModalHeader extends React.Component {
    render() {
        return (
            <div className="modal-header">
                <h5 className="modal-title">
                    Edit User Info
                </h5>
                <a
                    className="btn close"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <i
                        className="fa fa-times"
                        aria-hidden="true"
                    ></i>
                </a>
            </div>
        );
    }
}

module.exports = EditInfoModalHeader;
