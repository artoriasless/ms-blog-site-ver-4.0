'use strict';

const React = require('react');

class UploadModalHeader extends React.Component {
    render() {
        return (
            <div className="modal-header">
                <h5 className="modal-title">
                    Upload File(s)/Image(s)
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

module.exports = UploadModalHeader;